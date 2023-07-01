/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    スピリットクラス
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.define("Spirit",
  {
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
        コンストラクタ
      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    init: function (species, sex, level, exp, actions, equip, parameter, status_point)
    {
      this.species = species; //Species型
      this.sex = sex;
      this.level = level;
      this.exp = exp;
      this.actions = actions; //長さ4配列
      this.equip = equip; //Equip型 nullなら装備無し
      this.parameter = parameter; //Paramter型
      this.status_point = status_point; //StatusPoint型

      this.finally_parameter = function () //最終ステータス
      {
        let HP = this.species.parameter.HP + this.parameter.HP;
        let DEX = this.species.parameter.DEX + this.parameter.DEX;
        let physical_ATK = this.species.parameter.physical_ATK + this.parameter.physical_ATK;
        let physical_DEF = this.species.parameter.physical_DEF + this.parameter.physical_DEF;
        let magical_ATK = this.species.parameter.magical_ATK + this.parameter.magical_ATK;
        let magical_DEF = this.species.parameter.magical_DEF + this.parameter.magical_DEF;

        let params = Parameter(HP, DEX, physical_ATK, physical_DEF, magical_ATK, magical_DEF);

        return params;
      }

      this.now_parameter; //戦闘中現在ステータス
      this.reset_now_parameter = function () //現在ステータスリセット
      {
        this.now_parameter = this.finally_paramter();
      };
      this.now_parameter = this.finally_parameter();
    }
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
  });
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

