/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    
    戦闘シーン

  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
phina.define("Battle_scene",
  {
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        コンストラクタ

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    superClass: "DisplayScene",
    init: function (quest, option)
    {
      this.superInit(option);

      //thisが別のものを指す時に使えるように
      var self = this;

      //背景色
      this.backgroundColor = Black;

      let temp = {
        "name": "戦闘チュートリアル",
        "enemies": [
          [
            {
              "species": "スライム",
              "sex": "male",
              "level": 1,
              "actions": [
                "体当たり",
                "不穏な空気"
              ],
              "parameter": {
                "HP": 0,
                "DEX": 0,
                "physical_ATK": 0,
                "physical_DEF": 0,
                "magical_ATK": 0,
                "magical_DEF": 0
              }
            }
          ]
        ]
      };
      console.log(temp);

      //this.quest = quest;
      this.quest = temp;
      this.now_fase = 0;
      this.SetNowEnemies = function (enemies)
      {
        let result = new Array();

        for (let enemy of enemies)
        {
          let action_list = new Array();
          for (let action of enemy.actions)
          {
            action_list.push(
              Actions_List.find(element => element.name == action.name)
            );
          }
          console.log(action_list);
          result.push(Spirit(
            Species_List.find(species => species.name == enemy.name),
            enemy.sex,
            enemy.level, 0,
            action_list,
            null,
            new Parameter(
              enemy.parameter.HP,
              enemy.parameter.DEX,
              enemy.parameter.physical_ATK,
              enemy.parameter.physical_DEF,
              enemy.parameter.magical_ATK,
              enemy.parameter.magical_DEF
            ),
            new StatusPoint(0, 0, 0)
          ));
        }

        return result;
      }
      this.now_enemies = this.SetNowEnemies(this.quest.enemies[this.now_fase]);

      console.log(this.now_enemies);



      /*-----=-----=-----=-----=-----=-----
          描画グループ設定
        -----=-----=-----=-----=-----=-----*/
      // this.クレジット = DisplayElement().addChildTo(this);
      this.戦闘情報 = DisplayElement().addChildTo(this);
      this.敵味方情報 = DisplayElement().addChildTo(this);
      this.コマンドライン = DisplayElement().addChildTo(this);
      /*-----=-----=-----=-----=-----=-----*/
    },
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/



    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---
      
        毎フレーム処理

      ---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
    update: function (app)
    {
      always(app);
    }
    /*---=---=---=---=---=---=---=---=---=---=---=---=---=---=---=---*/
  }
);
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

