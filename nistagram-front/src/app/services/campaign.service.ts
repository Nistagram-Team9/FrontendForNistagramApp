import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  private readonly baseUrl = "http://localhost:8882/campaigns";


  constructor(private http: HttpClient) { }

  createCampaign(files: File[], websites: string[], isShortTerm: string, startDate: string, endDate: string, howManyTimesADay: number, sex: string, ageGroup: string
    ) : Observable<any>{

    const data : FormData  = new FormData()
    data.append("files", files[0]);
    data.append("websites", websites[0]);
    data.append("isShortTerm", isShortTerm);
    data.append("startDate", startDate);
    data.append("endDate", endDate);
    data.append("howManyTimesADay", String(howManyTimesADay));
    data.append("sex", sex)
    data.append("ageGroup", ageGroup)
    return this.http.post<any>(`${this.baseUrl}`, data);
  }

  getMyCampaigns() : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}`);
  }

  getCampaignsForMe() : Observable<any>{
    return this.http.get<any>(`${this.baseUrl}` + "/forMe");
  }

  deleteCampaign(campaignId: number) : Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}` + "/"+campaignId);
  }
}

