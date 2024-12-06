import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {PageHeaderComponent} from '../../basic-input/page-header/page-header.component';
import {PageFooterComponent} from '../../basic-input/page-footer/page-footer.component';
import axios from 'axios';
import {StatusBoxComponent} from '../../basic-input/status-box/status-box.component';
import {ButtonComponent} from '../../basic-input/button/button.component';


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
  public ip = "whale.de.freemcserver.net:40989 - (offline data)"
  public status_label = "Неизвестно"

  private intervalId: any
  delay = 5000


  async fetchServerData() {
    try {
      const response = await axios.get(`http://localhost:3000/api/server/`);
      //const response = await axios.get(`https://serverds-website-api.onrender.com/api/server/`);
      const serverData = response.data;
      console.log('Server Data:', serverData);


      this.subdomain = serverData.server.subdomains[0].fqdn
      this.ip = serverData.server.node.dns_name + ":" + serverData.server.port
      this.status_label = serverData.server.status.label

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


  ngOnInit() {
    //this.intervalId = setInterval(() => this.fetchServerData(), 10000);
    this.fetchServerData()
  }
  ngOnDestroy() {
    if (this.intervalId) {
      //clearInterval(this.intervalId);
    }
  }

  protected readonly window = window;
}



const apiToken = '7b18cebd6amsh182380e572b9869p19046ejsn752502899000';
const serverId = '680613';
const FMCSToken = "SCOPED eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJGcmVlTWNTZXJ2ZXIubmV0Iiwic2NvcGUiOiJVU0VSIiwic2NvcGVSZXN0cmljdGlvbiI6bnVsbCwidXNlcl9pZCI6OTg1ODM4LCJiYXNlX2tleSI6IjhkZTJlZGY3YzYyZTUzZjY1NGNmOGExOGE0ZDAwNjNjIiwiaXNzdWVkX2F0IjoiMjAyNC0xMS0yMyAxNToxOTowMCIsImlzc3VlZF90byI6IjE4LjE4NC4yMTQuMzMifQ.PX43VY5hxVLSzDGH4PiRhgqwFXFERPCIEwZ9vjXp-Jw";







