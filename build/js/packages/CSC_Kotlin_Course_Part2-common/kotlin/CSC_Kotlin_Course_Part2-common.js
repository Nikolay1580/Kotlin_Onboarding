(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'CSC_Kotlin_Course_Part2-common'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'CSC_Kotlin_Course_Part2-common'.");
    }
    root['CSC_Kotlin_Course_Part2-common'] = factory(typeof this['CSC_Kotlin_Course_Part2-common'] === 'undefined' ? {} : this['CSC_Kotlin_Course_Part2-common'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var getKClassFromExpression = kotlin_kotlin.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.g;
  var contentEquals = kotlin_kotlin.$_$.b;
  var contentHashCode = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.f;
  var classMeta = kotlin_kotlin.$_$.d;
  var getStringHashCode = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  //endregion
  function JsCard(id, words) {
    this.c2_1 = id;
    this.d2_1 = words;
  }
  JsCard.prototype.e2 = function () {
    return this.c2_1;
  };
  JsCard.prototype.f2 = function () {
    return this.d2_1;
  };
  JsCard.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (other == null ? true : !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (other instanceof JsCard)
      other;
    else
      THROW_CCE();
    if (!(this.c2_1 === other.c2_1))
      return false;
    if (!contentEquals(this.d2_1, other.d2_1))
      return false;
    return true;
  };
  JsCard.prototype.hashCode = function () {
    var result = this.c2_1;
    result = imul(31, result) + contentHashCode(this.d2_1) | 0;
    return result;
  };
  JsCard.prototype.component1 = function () {
    return this.c2_1;
  };
  JsCard.prototype.component2 = function () {
    return this.d2_1;
  };
  JsCard.prototype.copy = function (id, words) {
    return this.g2(id === void 1 ? this.c2_1 : id, words === void 1 ? this.d2_1 : words);
  };
  JsCard.prototype.g2 = function (id, words) {
    return new JsCard(id, words);
  };
  JsCard.prototype.h2 = function (id, words, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.c2_1;
    if (!(($mask0 & 2) === 0))
      words = this.d2_1;
    return this.g2(id, words);
  };
  JsCard.prototype.toString = function () {
    return 'JsCard(id=' + this.c2_1 + ', words=' + toString(this.d2_1) + ')';
  };
  JsCard.$metadata$ = classMeta('JsCard');
  Object.defineProperty(JsCard.prototype, 'id', {
    configurable: true,
    get: JsCard.prototype.e2
  });
  Object.defineProperty(JsCard.prototype, 'words', {
    configurable: true,
    get: JsCard.prototype.f2
  });
  function JsTeam_init_$Init$(id, points, name, $mask0, $marker, $this) {
    if (!(($mask0 & 2) === 0))
      points = 0;
    JsTeam.call($this, id, points, name);
    return $this;
  }
  function JsTeam_init_$Create$(id, points, name, $mask0, $marker) {
    return JsTeam_init_$Init$(id, points, name, $mask0, $marker, Object.create(JsTeam.prototype));
  }
  function JsTeam(id, points, name) {
    var points_0 = points === void 1 ? 0 : points;
    this.i2_1 = id;
    this.j2_1 = points_0;
    this.k2_1 = name;
  }
  JsTeam.prototype.e2 = function () {
    return this.i2_1;
  };
  JsTeam.prototype.l2 = function (_set____db54di) {
    this.j2_1 = _set____db54di;
  };
  JsTeam.prototype.m2 = function () {
    return this.j2_1;
  };
  JsTeam.prototype.n2 = function () {
    return this.k2_1;
  };
  JsTeam.prototype.component1 = function () {
    return this.i2_1;
  };
  JsTeam.prototype.component2 = function () {
    return this.j2_1;
  };
  JsTeam.prototype.component3 = function () {
    return this.k2_1;
  };
  JsTeam.prototype.copy = function (id, points, name) {
    return this.o2(id === void 1 ? this.i2_1 : id, points === void 1 ? this.j2_1 : points, name === void 1 ? this.k2_1 : name);
  };
  JsTeam.prototype.o2 = function (id, points, name) {
    return new JsTeam(id, points, name);
  };
  JsTeam.prototype.p2 = function (id, points, name, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.i2_1;
    if (!(($mask0 & 2) === 0))
      points = this.j2_1;
    if (!(($mask0 & 4) === 0))
      name = this.k2_1;
    return this.o2(id, points, name);
  };
  JsTeam.prototype.toString = function () {
    return 'JsTeam(id=' + this.i2_1 + ', points=' + this.j2_1 + ', name=' + this.k2_1 + ')';
  };
  JsTeam.prototype.hashCode = function () {
    var result = this.i2_1;
    result = imul(result, 31) + this.j2_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.k2_1) | 0;
    return result;
  };
  JsTeam.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JsTeam))
      return false;
    var tmp0_other_with_cast = other instanceof JsTeam ? other : THROW_CCE();
    if (!(this.i2_1 === tmp0_other_with_cast.i2_1))
      return false;
    if (!(this.j2_1 === tmp0_other_with_cast.j2_1))
      return false;
    if (!(this.k2_1 === tmp0_other_with_cast.k2_1))
      return false;
    return true;
  };
  JsTeam.$metadata$ = classMeta('JsTeam');
  Object.defineProperty(JsTeam.prototype, 'id', {
    configurable: true,
    get: JsTeam.prototype.e2
  });
  Object.defineProperty(JsTeam.prototype, 'points', {
    configurable: true,
    get: JsTeam.prototype.m2,
    set: JsTeam.prototype.l2
  });
  Object.defineProperty(JsTeam.prototype, 'name', {
    configurable: true,
    get: JsTeam.prototype.n2
  });
  function JsCardTrainerModel(front, back) {
    this.q2_1 = front;
    this.r2_1 = back;
  }
  JsCardTrainerModel.prototype.s2 = function () {
    return this.q2_1;
  };
  JsCardTrainerModel.prototype.t2 = function () {
    return this.r2_1;
  };
  JsCardTrainerModel.prototype.component1 = function () {
    return this.q2_1;
  };
  JsCardTrainerModel.prototype.component2 = function () {
    return this.r2_1;
  };
  JsCardTrainerModel.prototype.copy = function (front, back) {
    return this.u2(front === void 1 ? this.q2_1 : front, back === void 1 ? this.r2_1 : back);
  };
  JsCardTrainerModel.prototype.u2 = function (front, back) {
    return new JsCardTrainerModel(front, back);
  };
  JsCardTrainerModel.prototype.v2 = function (front, back, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      front = this.q2_1;
    if (!(($mask0 & 2) === 0))
      back = this.r2_1;
    return this.u2(front, back);
  };
  JsCardTrainerModel.prototype.toString = function () {
    return 'JsCardTrainerModel(front=' + this.q2_1 + ', back=' + this.r2_1 + ')';
  };
  JsCardTrainerModel.prototype.hashCode = function () {
    var result = getStringHashCode(this.q2_1);
    result = imul(result, 31) + getStringHashCode(this.r2_1) | 0;
    return result;
  };
  JsCardTrainerModel.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JsCardTrainerModel))
      return false;
    var tmp0_other_with_cast = other instanceof JsCardTrainerModel ? other : THROW_CCE();
    if (!(this.q2_1 === tmp0_other_with_cast.q2_1))
      return false;
    if (!(this.r2_1 === tmp0_other_with_cast.r2_1))
      return false;
    return true;
  };
  JsCardTrainerModel.$metadata$ = classMeta('JsCardTrainerModel');
  Object.defineProperty(JsCardTrainerModel.prototype, 'front', {
    configurable: true,
    get: JsCardTrainerModel.prototype.s2
  });
  Object.defineProperty(JsCardTrainerModel.prototype, 'back', {
    configurable: true,
    get: JsCardTrainerModel.prototype.t2
  });
  function JsCodeNamesCard(id, word) {
    this.w2_1 = id;
    this.x2_1 = word;
  }
  JsCodeNamesCard.prototype.e2 = function () {
    return this.w2_1;
  };
  JsCodeNamesCard.prototype.y2 = function () {
    return this.x2_1;
  };
  JsCodeNamesCard.prototype.component1 = function () {
    return this.w2_1;
  };
  JsCodeNamesCard.prototype.component2 = function () {
    return this.x2_1;
  };
  JsCodeNamesCard.prototype.copy = function (id, word) {
    return this.z2(id === void 1 ? this.w2_1 : id, word === void 1 ? this.x2_1 : word);
  };
  JsCodeNamesCard.prototype.z2 = function (id, word) {
    return new JsCodeNamesCard(id, word);
  };
  JsCodeNamesCard.prototype.a3 = function (id, word, $mask0, $handler) {
    if (!(($mask0 & 1) === 0))
      id = this.w2_1;
    if (!(($mask0 & 2) === 0))
      word = this.x2_1;
    return this.z2(id, word);
  };
  JsCodeNamesCard.prototype.toString = function () {
    return 'JsCodeNamesCard(id=' + this.w2_1 + ', word=' + this.x2_1 + ')';
  };
  JsCodeNamesCard.prototype.hashCode = function () {
    var result = this.w2_1;
    result = imul(result, 31) + getStringHashCode(this.x2_1) | 0;
    return result;
  };
  JsCodeNamesCard.prototype.equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof JsCodeNamesCard))
      return false;
    var tmp0_other_with_cast = other instanceof JsCodeNamesCard ? other : THROW_CCE();
    if (!(this.w2_1 === tmp0_other_with_cast.w2_1))
      return false;
    if (!(this.x2_1 === tmp0_other_with_cast.x2_1))
      return false;
    return true;
  };
  JsCodeNamesCard.$metadata$ = classMeta('JsCodeNamesCard');
  Object.defineProperty(JsCodeNamesCard.prototype, 'id', {
    configurable: true,
    get: JsCodeNamesCard.prototype.e2
  });
  Object.defineProperty(JsCodeNamesCard.prototype, 'word', {
    configurable: true,
    get: JsCodeNamesCard.prototype.y2
  });
  //region block: exports
  function $jsExportAll$(_) {
    var $alias = _.alias || (_.alias = {});
    $alias.JsCard = JsCard;
    var $alias = _.alias || (_.alias = {});
    $alias.JsTeam = JsTeam;
    var $card = _.card || (_.card = {});
    var $card$trainer = $card.trainer || ($card.trainer = {});
    $card$trainer.JsCardTrainerModel = JsCardTrainerModel;
    var $codenames = _.codenames || (_.codenames = {});
    $codenames.JsCodeNamesCard = JsCodeNamesCard;
  }
  $jsExportAll$(_);
  //endregion
  return _;
}));

//# sourceMappingURL=CSC_Kotlin_Course_Part2-common.js.map