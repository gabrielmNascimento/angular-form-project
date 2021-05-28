import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormArray, FormGroup, FormControl } from "@angular/forms";

import { LeagueService } from "../servicesFootball/league.service";
import { ArgentinaLeagueService } from "../servicesFootball/leagues/argentina-league.service";
import { BrazilLeagueService } from "../servicesFootball/leagues/brazil-league.service";
import { ColombiaLeagueService } from "../servicesFootball/leagues/colombia-league.service";
import { EnglandLeagueService } from "../servicesFootball/leagues/england-league.service";
import { FranceLeagueService } from "../servicesFootball/leagues/france-league.service";
import { GermanyLeagueService } from "../servicesFootball/leagues/germany-league.service";
import { ItalyLeagueService } from "../servicesFootball/leagues/italy-league.service";
import { ParaguayLeagueService } from "../servicesFootball/leagues/paraguay-league.service";
import { RussiaLeagueService } from "../servicesFootball/leagues/russia-league.service";
import { SpainLeagueService } from "../servicesFootball/leagues/spain-league.service";
import { PositionService } from "../servicesFootball/position.service";

@Component({
    selector: 'form-football',
    templateUrl: './formFootball.component.html',
    styleUrls: ['./formFootball.component.css']
})

export class footballComponent implements OnInit{
    //Arrays
    public positions = [] as any;
    public heights = [] as any;
    public overalls = [] as any;
    public manyClubs = [] as any;
    public leagues = [] as any;
        // Teams Arrays
        public argentinaTeams = [] as any;
        public brazilTeams = [] as any;
        public colombiaTeams = [] as any;
        public englandTeams = [] as any;
        public franceTeams = [] as any;
        public germanyTeams = [] as any;
        public italyTeams = [] as any;
        public paraguayTeams = [] as any;
        public russiaTeams = [] as any;
        public spainTeams = [] as any;

    //Error Messages:
    public errorMsgPosition: any;
    public errorMsgLeague: any;
        //Error Messages Leagues:
        public errorMsgArgentina: any;
        public errorMsgBrazil: any;
        public errorMsgColombia: any;
        public errorMsgEngland: any;
        public errorMsgFrance: any;
        public errorMsgGermany: any;
        public errorMsgItaly: any;
        public errorMsgParaguay: any;
        public errorMsgRussia: any;
        public errorMsgSpain: any;

    /*//Getting Ng-Models from HTML:
    public statusSelected!: String;
    public positionSelected!: String;
    public footSelected!: String;
    public heightSelected!: Number;
    public manyClubsSelected!: Number;
        //Skills Selection:
        public speedSelected!: Number;
        public shootSelected!: Number;
        public passSelected!: Number;
        public forceSelected!: Number;
        public dribbleSelected!: Number;
        public ballControlSelected!: Number;
        public defenseSelected!: Number;
        //Leagues Selection:
        public spainSelected!: String;
        public englandSelected!: String;
        public brazilSelected!: String;
        public italySelected!: String;
        public franceSelected!: String;
        public colombiaSelected!: String;
        public argentinaSelected!: String;
        public germanySelected!: String;
        public paraguaySelected!: String;
        public russiaSelected!: String;*/

    //Forms:
    public playerForm: any;
    public activityForm: any;
    public retiredForm: any;

    //Boolean Answer Confirmation:
    public answerDisplay = false;

    startingHeights(){
        //this.heights[0] = "";
        for(let i = 1.50; i < 2.40; i+=0.01)
        {
            let newHeight = i;
            this.heights.push(newHeight.toFixed(2));
        }
    };

    startingOveralls(){
        for(let i = 1; i <= 100; i++)
        {
            let newOverall = i;
            this.overalls.push(newOverall);
        }
    };

    /*startingManyClubs(){
        for(let i = 1; i <= 10; i++)
        {
            let newClubs = i;
            this.manyClubs.push(newClubs);
        }
    }*/
    

    constructor(private _positionService: PositionService,
                private _leagueService: LeagueService,
                private _argentinaService: ArgentinaLeagueService,
                private _brazilService: BrazilLeagueService,
                private _colombiaService: ColombiaLeagueService,
                private _englandService: EnglandLeagueService,
                private _franceService: FranceLeagueService,
                private _germanyService: GermanyLeagueService,
                private _italyService: ItalyLeagueService,
                private _paraguayService: ParaguayLeagueService,
                private _russiaService: RussiaLeagueService,
                private _spainService: SpainLeagueService,
                private fb: FormBuilder){}
    
    ngOnInit(){
        this.startingHeights();
        this.startingOveralls();
        //this.startingManyClubs();

        this.playerForm = this.fb.group({
            status:[''],
            name:[''],
            age:[''],
            position:[''],
            foot:[''],
            height:[''],
            currentLeague:[''],
            club:[''],
            speed:[''],
            shoot:[''],
            pass:[''],
            force:[''],
            dribble:[''],
            ballControl:[''],
            defense:[''],
            oldClubs: this.fb.array([]),
            goals:[''],
            matches:[''],
            assists:['']
            
        })


        this._positionService.getPosition()
            .subscribe(data => this.positions = data,
                        error => this.errorMsgPosition = error);

        this._leagueService.getLeague()
            .subscribe(data => this.leagues = data,
                        error => this.errorMsgLeague = error);

        this._argentinaService.getArgentinaLeague()
            .subscribe(data => this.argentinaTeams = data,
                        error => this.errorMsgArgentina = error);

        this._brazilService.getBrazilLeague()
            .subscribe(data => this.brazilTeams = data,
                        error => this.errorMsgBrazil = error);

        this._colombiaService.getColombiaLeague()
            .subscribe(data => this.colombiaTeams = data,
                        error => this.errorMsgColombia = error);

        this._englandService.getEnglandLeague()
            .subscribe(data => this.englandTeams = data,
                        error => this.errorMsgEngland = error);

        this._franceService.getFranceLeague()
            .subscribe(data => this.franceTeams = data,
                        error => this.errorMsgFrance = error);

        this._germanyService.getGermanyLeague()
            .subscribe(data => this.germanyTeams = data,
                        error => this.errorMsgGermany = error);

        this._italyService.getItalyLeague()
            .subscribe(data => this.italyTeams = data,
                        error => this.errorMsgItaly = error);

        this._paraguayService.getParaguayLeague()
            .subscribe(data => this.paraguayTeams = data,
                        error => this.errorMsgParaguay = error);

        this._russiaService.getRussiaLeague()
            .subscribe(data => this.russiaTeams = data,
                        error => this.errorMsgRussia = error);

        this._spainService.getSpainLeague()
            .subscribe(data => this.spainTeams = data,
                        error => this.errorMsgSpain = error);
    }

    //GET METHODS:

    get status(){
        return this.playerForm.get('status').value;
    }

    get name(){
        return this.playerForm.get('name').value;
    }

    get age(){
        return this.playerForm.get('age').value
    }

    get position(){
        return this.playerForm.get('position').value
    }

    get foot(){
        return this.playerForm.get('foot').value
    }

    get height(){
        return this.playerForm.get('height').value
    }

    get currentLeague(){
        return this.playerForm.get('currentLeague').value
    }

    get club(){
        return this.playerForm.get('club').value
    }

    set club(newClub){
        this.playerForm.get('club').value = newClub
    }

    get oldClubs(){
        return this.playerForm.get('oldClubs') as FormArray;
    }


    addClub(){
        this.oldClubs.push(this.fb.control(''));
    }
}