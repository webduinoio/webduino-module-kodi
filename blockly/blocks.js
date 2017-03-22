Blockly.Blocks['kodi_new'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(Blockly.Msg.KODI_SERVER_ADDR)
      .appendField(new Blockly.FieldTextInput("ws://[ip]:9090"), "endpoint");
    this.setOutput(true, null);
    this.setColour(230);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['kodi_current_played_item'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("kodi"), "player")
      .appendField(Blockly.Msg.KODI_CURRENT_PLAYED_ITEM);
    this.setOutput(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['kodi_playlist_add'] = {
  init: function () {
    this.appendValueInput("toAdd")
      .setCheck(["String", "Array"])
      .appendField(new Blockly.FieldVariable("kodi"), "player")
      .appendField(Blockly.Msg.KODI_ADD_ITEM_OR_LIST);
    this.appendDummyInput()
      .appendField(Blockly.Msg.KODI_TO_PLAYLIST)
      .appendField(new Blockly.FieldDropdown([["audio", "0"], ["video", "1"]]), "listId");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['kodi_playlist_clear'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("kodi"), "player")
      .appendField(Blockly.Msg.KODI_CLEAR_PLAYLIST)
      .appendField(new Blockly.FieldDropdown([["audio", "0"], ["video", "1"]]), "listId");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['kodi_action'] = {
  init: function () {
    this.appendDummyInput()
      .appendField(new Blockly.FieldVariable("kodi"), "player")
      .appendField(Blockly.Msg.KODI_PLAYLIST)
      .appendField(new Blockly.FieldDropdown([["audio", "0"], ["video", "1"]]), "playerid")
      .appendField(new Blockly.FieldDropdown([[Blockly.Msg.KODI_OPEN, "open"], [Blockly.Msg.KODI_STOP, "stop"], [Blockly.Msg.KODI_PAUSE, "pause"], [Blockly.Msg.KODI_NEXT, "next"], [Blockly.Msg.KODI_PREVIOUS, "previous"]]), "action");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};