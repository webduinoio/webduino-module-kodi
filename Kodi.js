+(function (window, Connection) {

  'use strict';

  var Playlist = {
    AUDIO: 0,
    VIDEO: 1,
    PICTURE: 2
  };

  function Kodi(endpoint) {
    this._conn = createConnection(endpoint);
    this._conn.connect();
  }

  Kodi.prototype = Object.create(null, {

    constructor: {
      value: Kodi
    },

    connection: {
      get: function () {
        return this._conn;
      }
    }

  });

  Kodi.prototype.getActivePlayers = function () {
    return call(this._conn, 'Player.getActivePlayers');
  };

  Kodi.prototype.getCurrentPlayedItem = function () {
    var conn = this._conn;

    return this.getActivePlayers().then(function (result) {
      if (result && result.length) {
        return call(conn, 'Player.GetItem', { playerid: result[0].playerid }).then(function (result) {
          return result ? result.item.label : '';
        });
      }

      return '';
    });
  };

  Kodi.prototype.addItems = function (playlistId, path) {
    return call(this._conn, 'Playlist.Add', [playlistId,
      (path.constructor === Array ?
        path.map(function (p) { return { file: p } }) :
        { file: path })
    ]);
  };

  Kodi.prototype.clearItems = function (playlistId) {
    return call(this._conn, 'Playlist.Clear', [playlistId]);
  };

  Kodi.prototype.open = function (playlistId) {
    return call(this._conn, 'Player.Open', {
      item: {
        playlistid: playlistId,
        position: 0
      },
      options: {}
    });
  };

  Kodi.prototype.stop = function (playlistId) {
    return call(this._conn, 'Player.Stop', [playlistId]);
  };

  Kodi.prototype.pause = function (playlistId) {
    return call(this._conn, 'Player.PlayPause', [playlistId, 'toggle']);
  };

  Kodi.prototype.next = function (playlistId) {
    return call(this._conn, 'Player.GoTo', [playlistId, 'next']);
  };

  Kodi.prototype.previous = function (playlistId) {
    return call(this._conn, 'Player.GoTo', [playlistId, 'previous']);
  };

  function createConnection(endpoint) {
    var conn;

    if (endpoint.startsWith('http')) {
      conn = new Connection(pseudoId(), endpoint, null, Kodi.PATH);
    } else {
      conn = new Connection(pseudoId(), null, endpoint, Kodi.PATH);
    }

    conn.connect();
    return conn;
  }

  function call(conn, method, params) {
    return new Promise(function (resolve) {
      conn.call(method, params, function (result) {
        resolve(result);
      });
    });
  }

  function pseudoId() {
    var text = "",
      possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }

  Kodi.PATH = '/jsonrpc';
  Kodi.Playlist = Playlist;

  window.Kodi = Kodi;

}(window, window.Connection));