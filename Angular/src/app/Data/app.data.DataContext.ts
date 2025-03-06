import { Injectable } from "@angular/core";
import { Phone } from "../Model/app.model.phone";
import { User } from "../Model/app.model.user";
import axios from 'axios';
import { PhoneInfo } from "../Model/app.model.phoneinfo";


@Injectable()
export class DataContext{

    private BaseUrl:string="http://localhost:5101/";

    async GetAllPhonesPromise(): Promise<Phone[]>
    {
        let responce=await axios.get(this.BaseUrl+"phone/getall");
        return responce.data;
        
    }

    async GetPhonePromise(id:number):Promise<Phone>
    {
        let responce = await axios.get(this.BaseUrl+ "phone/get/"+ id.toString());
        return responce.data;
    }

    async GetPhoneInfoPromise(infoId:number): Promise<PhoneInfo>
    {
        let responce = await axios.get(this.BaseUrl+"phoneinfo/get/"+infoId.toString());
        return responce.data;
    }

    async GetUser(login:string,password:string): Promise<User|undefined>
    {
        let user:User|undefined=undefined;
        await axios.get(this.BaseUrl+"user/get/"+login + "/"+password).then(
            (value) =>
            {
                if (value!=undefined)
                user=value.data;
            }
        )
        .
        catch(
            (error)=>
            {
                
            user=undefined;
            }
        )
        return user;
    }

    async AddUser(userlogin:string,userpassword:string):Promise<boolean>
    {
        let user:User=new User();
        user.login=userlogin;
        user.password=userpassword;
        let result=true;
        try{
        await axios.post(this.BaseUrl+"user/add",{
            login:userlogin,
            password:userpassword
           
        }).then(
            (responce)=>
            {
                console.log(responce);
            }
        ).catch(
            (value)=>
            {
                console.log(value);
                result=false;
            }
        );
    }
    catch(error)
    {
        result=false;
    }

        return result;

    }


}


