import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {PageHeaderComponent} from '../../basic-input/page-header/page-header.component';
import {PageFooterComponent} from '../../basic-input/page-footer/page-footer.component';
import axios from 'axios';
import {StatusBoxComponent} from '../../basic-input/status-box/status-box.component';
import {ButtonComponent} from '../../basic-input/button/button.component';
import {format} from 'node:url';
import dayjs from 'dayjs';


@Component({
  selector: 'app-home',
  imports: [
    PageHeaderComponent,
    PageFooterComponent,
    StatusBoxComponent,
    ButtonComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})



export class HomeComponent {
  constructor(private renderer: Renderer2) {}

  ServerStatusStyle = "information";
  onlinePlayers = 0;
  maxOnlinePlayers = 0;

  public subdomain = "serverds.enderman.cloud - (offline data)"
  public ip = "guineapig.fi.freemcserver.net:32617 - (offline data)"
  public status_label = "Неизвестно"
  public expires_at_label = "Неизвестно"
  public expire_time_label = "Неизвестно"
  public running = false;

  public expires_at = new Date();
  public player_expires_at = new Date();

  private secondIntervalId: any;
  private dataRefetchIntervalId: any;
  delay = 1000;


  async fetchServerData() {
    try {
      //const response = await axios.get(`http://localhost:3000/api/server/`);
      const response = await axios.get(`https://serverds-website-api.onrender.com/api/server/`);
      const serverData = response.data;
      console.log('Server Data:', serverData);


      this.subdomain = serverData.server.subdomains[1].fqdn
      this.ip = serverData.server.node.dns_name + ":" + serverData.server.port
      this.expires_at_label = serverData.server.expires_at

      this.expires_at = new Date(serverData.server.expires_at.split(' ').join('T')+'Z')
      this.player_expires_at = new Date(serverData.server.player_expires_at.split(' ').join('T')+'Z')

      this.status_label = serverData.server.status.label

      this.running = serverData.server.running

      if (serverData.server.running) {
        this.onlinePlayers = serverData.server.online_players.online;
        this.maxOnlinePlayers = serverData.server.online_players.max;
      }

      this.ServerStatusStyle = 'warning';


      if (serverData.server.status.id == 1) {
        if (serverData.server.running) {
          this.status_label = "Запущен"

          this.ServerStatusStyle = 'success';
        } else {
          this.status_label = "Не запущен"

          this.ServerStatusStyle = 'critical';
        }
      }
      if (serverData.server.status.id == 2) {
        this.status_label = "Не продлен"

        this.ServerStatusStyle = 'warning';
      }




      this.delay = 5000
    } catch (error) {

      // @ts-ignore
      console.error('Error fetching server data:', error.message);

      // @ts-ignore
      if (error.response && error.response.status === 429) {
        console.log('Слишком много запросов. Увеличиваем задержку.');
        this.delay *= 2; // Удваиваем задержку при ошибке 429
      }
    }
  }

  OneSecInterval() {
    let dateNow = new Date();
    let diffTime;
    if (this.running) {
      diffTime = this.player_expires_at.getTime() - dateNow.getTime();
    } else {
      diffTime = this.expires_at.getTime() - dateNow.getTime();
    }



    const totalSeconds = Math.floor(diffTime / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);

    const remSeconds = totalSeconds % 60;
    const remMinutes = totalMinutes % 60;

    let h = totalHours;
    let m = remMinutes;
    let s = remSeconds;



    if (s<=0 && m<=0 && h<=0) {
      this.expire_time_label = "Истёк"
    } else {
      this.expire_time_label = h.toString().padStart(2, "0")+":"+m.toString().padStart(2, "0")+":"+s.toString().padStart(2, "0");
    }
  }

  ngOnInit() {
    this.fetchServerData();
    this.secondIntervalId = setInterval(() => this.OneSecInterval(), 1000);
    this.dataRefetchIntervalId = setInterval(() => this.fetchServerData(), 10000);
  }
  ngOnDestroy() {
    if (this.secondIntervalId) {
      clearInterval(this.secondIntervalId);
    }
    if (this.dataRefetchIntervalId) {
      clearInterval(this.dataRefetchIntervalId);
    }
  }

  protected readonly window = window;
}
