import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Injectable()
export class BaseService {
    constructor(private httpclient: HttpClient) { }

    public post(url, obj, cancel$: Observable<any> = of()): Observable<any> {
        return this.httpclient.post(url, obj).pipe(takeUntil(cancel$));
    }

    public get(url, id = null): Observable<any> {
        if (id != null && id != undefined && id != "") url = url + "/" + id;
        return this.httpclient.get<any>(url)
    }

    public put(url, obj = null) {
        return this.httpclient.put<any>(url, obj)
    }

    public delete(url, id = null) {
        let paramId = '';
        if (id) {
            paramId = `/${id}`;
        }
        return this.httpclient.delete<any>(`${url}${paramId}`)
    }
}