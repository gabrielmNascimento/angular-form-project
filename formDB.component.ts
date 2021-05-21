import { Component, OnInit } from '@angular/core';

import { AttackService } from '../servicesDragonBall/attack.service';
import { ItemService } from '../servicesDragonBall/item.service';
import { RaceService } from '../servicesDragonBall/race.service';
import { RivalService } from '../servicesDragonBall/rival.service';
import { SkillService } from '../servicesDragonBall/skill1.service';

@Component({
    selector: 'formDB',
    templateUrl: './formDB.component.html',
    styleUrls: ['./formDB.component.css']
})

export class formDB implements OnInit {

    //The jsons.files with the options in the form
    public raceOptions = [] as any;
    public skillOptions1 = [] as any;
    public skillOptions2 = [] as any;
    public attackOptions = [] as any;
    public attackOptions2 = [] as any;
    public attackOptions3 = [] as any;
    public itemOptions = [] as any;
    public rivalOptions = [] as any;

    //The error messages variables
    public errorMsgRace: any;
    public errorMsgSkill: any;
    public errorMsgAttack: any;
    public errorMsgItem: any;
    public errorMsgRival : any;

    //The constructor with the services
    constructor(private _raceService: RaceService, private _skillService1: SkillService,
                private _attackService: AttackService, private _attackService2: AttackService , 
                private _attackService3: AttackService, private _skillService2: SkillService,
                private _itemService: ItemService, private _rivalService: RivalService){}

    //OnInit to get the data of the races and the error messages
    ngOnInit(){
        this._raceService.getRaces()
            .subscribe(data => this.raceOptions = data,
                        error => this.errorMsgRace = error);
        this._skillService1.getSkills()
            .subscribe(data => this.skillOptions1 = data,
                        error => this.errorMsgSkill = error);
        this._skillService2.getSkills()
            .subscribe(data => this.skillOptions2 = data,
                        error => this.errorMsgSkill = error);
        this._attackService.getAttacks()
            .subscribe(data => this.attackOptions = data,
                        error => this.errorMsgAttack = error);
        this._attackService2.getAttacks()
            .subscribe(data => this.attackOptions2 = data,
                        error => this.errorMsgAttack = error);  
        this._attackService3.getAttacks()
            .subscribe(data => this.attackOptions3 = data,
                        error => this.errorMsgAttack = error);      
        this._itemService.getItems()
            .subscribe(data => this.itemOptions = data,
                        error => this.errorMsgItem = error);
        this._rivalService.getRivals()
            .subscribe(data => this.rivalOptions = data,
                        error => this.errorMsgRival = error);
    }

    //The name input methods and variables
    public nameSelected!: string;
    public nameWarning = false;

    noWhiteSpaceName(){
        if(this.nameSelected != undefined)
        {
            this.nameSelected.trim()
            if(this.nameSelected.trim() == ""){
                this.nameWarning = true;
            }
            else
            {
                this.nameWarning = false;
            }
        }
        else
        {
            this.nameWarning = true;
        }
    }

    //The age input methods and variables
    public ageSelected!: number;
    public ageWarning = false;

    validAge(){
        if(isNaN(this.ageSelected) || this.ageSelected.toString().trim() == "")
        {
            this.ageWarning = true;
        }
        else
        {
            this.ageWarning = false;
        }
    }

    //The race and gender interaction
    public raceSelected!: String;
    public raceWarning = false;
    public genderSelected!: String;
    public isDisabled = false;
    public displayWarningGender = false;
    public genderWarning = false;


    toggleGender(event: Event){
        if(this.raceSelected == "Namekuseijin" || this.raceSelected == "Frieza Race")
        {
            this.isDisabled = true;
            this.displayWarningGender = true;
        }
        else
        {
            this.isDisabled = false;
            this.displayWarningGender = false;
        }
    }

    checkRace(){
        if(this.raceSelected == undefined || this.raceSelected == " "){
            this.raceWarning = true;
        }
        else{
            this.raceWarning = false;
        }
    }

    checkGender(){
        if(this.genderSelected == undefined && this.displayWarningGender === false)
        {
            this.genderWarning = true;
        }
        else
        {
            this.genderWarning = false;
        }
    }

    //The race and skills interaction
    public skillSelected1!: String;
    public skillSelected2!: String;
    public disabledSkill1!: any;
    public disabledSkill2!: any;

    public ableSaiyan1(event: Event){
        if(this.raceSelected == "Saiyan"){
            this.skillOptions1.push("Super Saiyan")
            this.skillOptions1.push("Oozaru")
        }
        else
        {
            for(var i = 0; i < this.skillOptions1.length; i++)
            {
                if(this.skillOptions1[i] == "Super Saiyan")
                {
                    this.skillOptions1.splice(i, 1);
                }
                if(this.skillOptions1[i] == "Oozaru")
                {
                    this.skillOptions1.splice(i, 1);
                }
            }
            if(this.disabledSkill1 == "Super Saiyan" || this.disabledSkill1 == "Oozaru")
            {
                this.disabledSkill1 = undefined;
            }
        }
    }

    public ableFrieza1(event: Event){
        if(this.raceSelected == "Frieza Race"){
            this.skillOptions1.push("Golden Frieza")
        }
        else
        {
            for(var i = 0; i < this.skillOptions1.length; i++)
            {
                if(this.skillOptions1[i] == "Golden Frieza")
                {
                    this.skillOptions1.splice(i, 1);
                }
            }
            if(this.disabledSkill1 == "Golden Frieza")
            {
                this.disabledSkill1 = undefined;
            }
        }
    }

    public ableSaiyan2(event: Event){
        if(this.raceSelected == "Saiyan"){
            this.skillOptions2.push("Super Saiyan")
            this.skillOptions2.push("Oozaru")
        }
        else
        {
            for(var i = 0; i < this.skillOptions2.length; i++)
            {
                if(this.skillOptions2[i] == "Super Saiyan")
                {
                    this.skillOptions2.splice(i, 1);
                }
                if(this.skillOptions2[i] == "Oozaru")
                {
                    this.skillOptions2.splice(i, 1);
                }
            }
            if(this.disabledSkill2 == "Super Saiyan" || this.disabledSkill2 == "Oozaru")
            {
                this.disabledSkill2 = undefined;
            }
        }
    }

    public ableFrieza2(event: Event){
        if(this.raceSelected == "Frieza Race"){
            this.skillOptions2.push("Golden Frieza")
        }
        else
        {
            for(var i = 0; i < this.skillOptions2.length; i++)
            {
                if(this.skillOptions2[i] == "Golden Frieza")
                {
                    this.skillOptions2.splice(i, 1);
                }
            }
            if(this.disabledSkill2 == "Golden Frieza")
            {
                this.disabledSkill2 = undefined;
            }
        }
    }

    //Skils Variables and Checks
    public skillWarning1 = false;
    public skillWarning2 = false;
    public warningSameSkill1 = false;
    public warningSameSkill2 = false;

    notSameSkill1(){
        if(this.skillSelected1 != " " && this.skillSelected1 == this.skillSelected2)
        {
            this.warningSameSkill1 = true;
            this.skillSelected1 = " ";
        }
        else if(this.skillSelected1 == " ")
        {
            if(this.disabledSkill2 != undefined)
            {
                this.skillOptions2.push(this.disabledSkill2)
            }
            this.disabledSkill2 = undefined
        }
        else
        {
            this.warningSameSkill1 = false;
            if(this.disabledSkill2 != undefined && this.disabledSkill2 != " ")
            {
                this.skillOptions2.push(this.disabledSkill2)
            }
            this.disableSkill1();
        }
    }

    disableSkill1(){
        this.disabledSkill2 = this.skillSelected1

        for(var i = 0; i < this.skillOptions2.length; i++)
        {
            if(this.skillOptions2[i] == this.skillSelected1)
            {
                this.skillOptions2.splice(i, 1);
            }
        }
        
    }

    notSameSkill2(){
        if(this.skillSelected2 != " " && this.skillSelected2 == this.skillSelected1)
        {
            this.warningSameSkill2 = true;
            this.skillSelected2 = " ";
        }
        else if(this.skillSelected2 == " ")
        {
            if(this.disabledSkill1 != undefined)
            {
                this.skillOptions1.push(this.disabledSkill1)
            }
            this.disabledSkill1 = undefined;
        }
        else
        {
            this.warningSameSkill2 = false;
            if(this.disabledSkill1 != undefined && this.disabledSkill1 != " ")
            {
                this.skillOptions1.push(this.disabledSkill1)
            }
            this.disableSkill2();
        }
    }

    disableSkill2(){
        this.disabledSkill1 = this.skillSelected2

            for(var i = 0; i < this.skillOptions1.length; i++)
            {
                if(this.skillOptions1[i] == this.skillSelected2)
                {
                    this.skillOptions1.splice(i, 1);
                }
            }
    }

    checkSkill1(){
        if(this.skillSelected1 == undefined || this.skillSelected1 == " ")
        {
            this.skillWarning1 = true;
        }
        else
        {
            this.skillWarning1 = false;
        }
    }

    checkSkill2(){
        if(this.skillSelected2 == undefined || this.skillSelected2 == " ")
        {
            this.skillWarning2 = true;
        }
        else
        {
            this.skillWarning2 = false;
        }
    }

    //Attacks Variables and Checks
    public attackSelected1!: String;
    public attackSelected2!: String;
    public attackSelected3!: String;
    public attackWarning1 = false;
    public attackWarning2 = false;
    public attackWarning3 = false;
    public warningSameAttack1 = false;
    public warningSameAttack2 = false;
    public warningSameAttack3 = false;
    public disabledAttack1!: any;
    public disabledAttack2!: any;
    public disabledAttack3!: any;
    public disabledAttack4!: any;
    public disabledAttack5!: any;
    public disabledAttack6!: any;

    checkAttack1(){
        if(this.attackSelected1 == undefined || this.attackSelected1 == " ")
        {
            this.attackWarning1 = true;
        }
        else
        {
            this.attackWarning1 = false;
        }
    }

    checkAttack2(){
        if(this.attackSelected2 == undefined || this.attackSelected2 == " ")
        {
            this.attackWarning2 = true;
        }
        else
        {
            this.attackWarning2 = false;
        }
    }

    checkAttack3(){
        if(this.attackSelected3 == undefined || this.attackSelected3 == " ")
        {
            this.attackWarning3 = true;
        }
        else
        {
            this.attackWarning3 = false;
        }
    }

    notSameAttack1(){
        if(this.attackSelected1 != " " && this.attackSelected1 == this.attackSelected2 || this.attackSelected1 == this.attackSelected3)
        {
            this.warningSameAttack1 = true;
            this.attackSelected1 = " ";
        }
        else if(this.attackSelected1 == " ")
        {
            if(this.disabledAttack3 != undefined)
            {
                this.attackOptions2.push(this.disabledAttack3)
            }
            if(this.disabledAttack5 != undefined)
            {
                this.attackOptions3.push(this.disabledAttack5)
            }
            this.disabledAttack3 = undefined;
            this.disabledAttack5 = undefined;
        }
        else
        {
            this.warningSameAttack1 = false;
            if(this.disabledAttack3 != undefined && this.disabledAttack3 != "")
            {
                this.attackOptions2.push(this.disabledAttack3)
            }
            if(this.disabledAttack5 != undefined && this.disabledAttack5 != "")
            {
                this.attackOptions3.push(this.disabledAttack5)
            }
            this.disableAttack1();
        }
    }

    disableAttack1(){
        this.disabledAttack3 = this.attackSelected1
        this.disabledAttack5 = this.attackSelected1

        for(var i = 0; i < this.attackOptions2.length; i++)
        {
            if(this.attackOptions2[i] == this.attackSelected1)
            {
                this.attackOptions2.splice(i, 1);
            }
        }

        for(var i = 0; i < this.attackOptions3.length; i++)
        {
            if(this.attackOptions3[i] == this.attackSelected1)
            {
                this.attackOptions3.splice(i, 1);
            }
        }
    }

    notSameAttack2(){
        if(this.attackSelected2 != " " && this.attackSelected2 == this.attackSelected1 || this.attackSelected2 == this.attackSelected3)
        {
            this.warningSameAttack2 = true;
            this.attackSelected2 = " ";
        }
        else if(this.attackSelected2 == " ")
        {
            if(this.disabledAttack1 != undefined)
            {
                this.attackOptions.push(this.disabledAttack1)
            }
            if(this.disabledAttack6 != undefined)
            {
                this.attackOptions3.push(this.disabledAttack6)
            }
            this.disabledAttack1 = undefined;
            this.disabledAttack6 = undefined;
        }
        else
        {
            this.warningSameAttack2 = false;
            if(this.disabledAttack1 != undefined && this.disabledAttack1 != "")
            {
                this.attackOptions.push(this.disabledAttack1)
            }
            if(this.disabledAttack6 != undefined && this.disabledAttack6 != "")
            {
                this.attackOptions3.push(this.disabledAttack6)
            }
            this.disableAttack2();
        }
    }

    disableAttack2(){
        this.disabledAttack1 = this.attackSelected2
        this.disabledAttack6 = this.attackSelected2

        for(var i = 0; i < this.attackOptions.length; i++)
        {
            if(this.attackOptions[i] == this.attackSelected2)
            {
                this.attackOptions.splice(i, 1);
            }
        }

        for(var i = 0; i < this.attackOptions3.length; i++)
        {
            if(this.attackOptions3[i] == this.attackSelected2)
            {
                this.attackOptions3.splice(i, 1);
            }
        }
    }

    notSameAttack3(){
        if(this.attackSelected3 != " " && this.attackSelected3 == this.attackSelected1 || this.attackSelected3 == this.attackSelected2)
        {
            this.warningSameAttack3 = true;
            this.attackSelected3 = " ";
        }
        else if(this.attackSelected3 == " ")
        {
            if(this.disabledAttack2 != undefined)
            {
                this.attackOptions.push(this.disabledAttack2)
            }
            if(this.disabledAttack4 != undefined)
            {
                this.attackOptions2.push(this.disabledAttack4)
            }

            this.disabledAttack2 = undefined;
            this.disabledAttack4 = undefined;
        }
        else
        {
            this.warningSameAttack3 = false;
            if(this.disabledAttack2 != undefined && this.disabledAttack2 != "")
            {
                this.attackOptions.push(this.disabledAttack2)
            }
            if(this.disabledAttack4 != undefined && this.disabledAttack4 != "")
            {
                this.attackOptions2.push(this.disabledAttack4)
            }
            this.disableAttack3();
        }
    }

    disableAttack3(){
        this.disabledAttack2 = this.attackSelected3
        this.disabledAttack4 = this.attackSelected3

        for(var i = 0; i < this.attackOptions.length; i++)
        {
            if(this.attackOptions[i] == this.attackSelected3)
            {
                this.attackOptions.splice(i, 1);
            }
        }

        for(var i = 0; i < this.attackOptions2.length; i++)
        {
            if(this.attackOptions2[i] == this.attackSelected3)
            {
                this.attackOptions2.splice(i, 1);
            }
        }
        
    }

    //Item Variable
    public itemSelected!: String;
    public itemWarning = false;
    checkItem(){
        if(this.itemSelected == undefined || this.itemSelected == " ")
        {
            this.itemWarning = true;
        }
        else
        {
            this.itemWarning = false;
        }
    }

    //Rival Variable
    public rivalSelected!: String;
    public rivalWarning = false;
    checkRival(){
        if(this.rivalSelected == undefined || this.rivalSelected == " ")
        {
            this.rivalWarning = true;
        }
        else
        {
            this.rivalWarning = false;
        }
    }

    //To show the informations about the character
    public charInfo = false;

    showContainer2(){
        if(!this.nameWarning && !this.ageWarning && !this.raceWarning && 
            !this.genderWarning && !this.skillWarning1 && !this.skillWarning2 &&
            !this.warningSameSkill1 && !this.warningSameSkill2 && !this.attackWarning1 &&
            !this.attackWarning2 && !this.attackWarning3 && !this.warningSameAttack1 &&
            !this.warningSameAttack2 && !this.warningSameAttack3 && !this.itemWarning &&
            !this.rivalWarning)
        {
            this.charInfo = true;
        }
    }

}