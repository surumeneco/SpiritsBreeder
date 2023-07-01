/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    データ読み込み関数
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
const loading = function (path, converting_function)
{
  load_JSON(path, converting_function);
}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/



const load_species = function (data)
{
  for (let element of data)
  {
    Species_List.push(new Species(
      element.name,
      element.text,
      element.attributes,
      element.weakness,
      element.actions,
      element.parameter,
      element.dropitems
    ));
  }
}

const load_actions = function (data)
{
  for (let element of data)
  {
    let effects_data = new Array();
    for (let effect of element.effects)
    {
      effects_data.push(new Effect(
        effect.value,
        effect.type,
        effect.target_for,
        effect.target_num,
        effect.is_random
      ));
    }
    Actions_List.push(new Action(
      element.name,
      element.text,
      element.type,
      effects_data
    ))
  }
}



/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-
    JSONファイル読み込み関数
  -=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/
const load_JSON = function (path, callback)
{
  let requestURL = path;
  let request = new XMLHttpRequest();

  request.onreadystatechange = function ()
  {
    if (request.readyState == 4 && request.status == 200)
    {
      console.log("json file was loaded successfully");
    }
  };

  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();

  request.onload = function ()
  {
    let data = request.response;
    data = JSON.parse(JSON.stringify(data));
    console.log("end loading json file");
    callback(data);
  }
}
/*-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-*/

