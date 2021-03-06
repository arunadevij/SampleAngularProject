export class Hero {

  private _id : number;
  public get id() : number {
    return this._id;
  }
  public set id(v : number) {
    this._id = v;
  }


  private _name : string;
  public get name() : string {
    return this._name;
  }
  public set name(v : string) {
    this._name = v;
  }

  constructor(hero?: any) {
    if(hero) {
      this.id = hero.id;
      this.name = hero.name;
    }
  }
}
