Blockly.JavaScript['kodi_new'] = function (block) {
  var text_endpoint = block.getFieldValue('endpoint');
  var code = 'new Kodi(\'' + text_endpoint + '\')';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['kodi_current_played_item'] = function (block) {
  var variable_player = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('player'), Blockly.Variables.NAME_TYPE);
  var code = 'await ' + variable_player + '.getCurrentPlayedItem()';
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

Blockly.JavaScript['kodi_playlist_add'] = function (block) {
  var variable_player = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('player'), Blockly.Variables.NAME_TYPE);
  var value_toadd = Blockly.JavaScript.valueToCode(block, 'toAdd', Blockly.JavaScript.ORDER_NONE);
  var dropdown_listid = block.getFieldValue('listId');
  value_toadd = JSON.parse(value_toadd.replace(/'/g, '"'));
  var code = 'await ' + variable_player + '.addItems(' + parseInt(dropdown_listid) + ', ' + JSON.stringify(value_toadd) + ');\n';
  return code;
};

Blockly.JavaScript['kodi_playlist_clear'] = function (block) {
  var variable_player = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('player'), Blockly.Variables.NAME_TYPE);
  var dropdown_listid = block.getFieldValue('listId');
  var code = 'await ' + variable_player + '.clearItems(' + parseInt(dropdown_listid) + ');\n';
  return code;
};

Blockly.JavaScript['kodi_action'] = function (block) {
  var variable_player = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('player'), Blockly.Variables.NAME_TYPE);
  var dropdown_playerid = block.getFieldValue('playerid');
  var dropdown_action = block.getFieldValue('action');
  var code = 'await ' + variable_player + '.' + dropdown_action + '(' + parseInt(dropdown_playerid) + ');\n';
  return code;
};