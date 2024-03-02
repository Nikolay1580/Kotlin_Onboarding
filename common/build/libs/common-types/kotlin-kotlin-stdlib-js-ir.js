//region block: polyfills
if (typeof ArrayBuffer.isView === 'undefined') {
  ArrayBuffer.isView = function (a) {
    return a != null && a.__proto__ != null && a.__proto__.__proto__ === Int8Array.prototype.__proto__;
  };
}
if (typeof Math.imul === 'undefined') {
  Math.imul = function imul(a, b) {
    return (a & 4.29490176E9) * (b & 65535) + (a & 65535) * (b | 0) | 0;
  };
}
//endregion
(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports'], factory);
  else if (typeof exports === 'object')
    factory(module.exports);
  else
    root['kotlin-kotlin-stdlib-js-ir'] = factory(typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined' ? {} : this['kotlin-kotlin-stdlib-js-ir']);
}(this, function (_) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var isView = ArrayBuffer.isView;
  //endregion
  //region block: pre-declaration
  PrimitiveKClassImpl.prototype = Object.create(KClassImpl.prototype);
  PrimitiveKClassImpl.prototype.constructor = PrimitiveKClassImpl;
  NothingKClassImpl.prototype = Object.create(KClassImpl.prototype);
  NothingKClassImpl.prototype.constructor = NothingKClassImpl;
  SimpleKClassImpl.prototype = Object.create(KClassImpl.prototype);
  SimpleKClassImpl.prototype.constructor = SimpleKClassImpl;
  Long.prototype = Object.create(Number_0.prototype);
  Long.prototype.constructor = Long;
  Exception.prototype = Object.create(Error.prototype);
  Exception.prototype.constructor = Exception;
  RuntimeException.prototype = Object.create(Exception.prototype);
  RuntimeException.prototype.constructor = RuntimeException;
  UnsupportedOperationException.prototype = Object.create(RuntimeException.prototype);
  UnsupportedOperationException.prototype.constructor = UnsupportedOperationException;
  ClassCastException.prototype = Object.create(RuntimeException.prototype);
  ClassCastException.prototype.constructor = ClassCastException;
  //endregion
  function contract(builder) {
  }
  function KClassifier() {
  }
  KClassifier.$metadata$ = interfaceMeta('KClassifier');
  function run(block) {
    {
    }
    return block();
  }
  function let_0(_this__u8e3s4, block) {
    {
    }
    return block(_this__u8e3s4);
  }
  function run_0(_this__u8e3s4, block) {
    {
    }
    return block(_this__u8e3s4);
  }
  function apply(_this__u8e3s4, block) {
    {
    }
    block(_this__u8e3s4);
    return _this__u8e3s4;
  }
  function Comparable() {
  }
  Comparable.$metadata$ = interfaceMeta('Comparable');
  function Number_0() {
  }
  Number_0.$metadata$ = classMeta('Number');
  function Unit() {
    Unit_instance = this;
  }
  Unit.prototype.toString = function () {
    return 'kotlin.Unit';
  };
  Unit.$metadata$ = objectMeta('Unit');
  var Unit_instance;
  function Unit_getInstance() {
    if (Unit_instance == null)
      new Unit();
    return Unit_instance;
  }
  function asDynamic(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function unsafeCastDynamic(_this__u8e3s4) {
    return _this__u8e3s4;
  }
  function unsafeCast(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    return tmp$ret$0;
  }
  function KClass() {
  }
  KClass.$metadata$ = interfaceMeta('KClass', [KClassifier]);
  function KClassImpl(jClass) {
    this.a_1 = jClass;
  }
  KClassImpl.prototype.b = function () {
    return this.a_1;
  };
  KClassImpl.prototype.equals = function (other) {
    var tmp;
    if (other instanceof KClassImpl) {
      tmp = equals(this.b(), other.b());
    } else {
      tmp = false;
    }
    return tmp;
  };
  KClassImpl.prototype.hashCode = function () {
    var tmp0_safe_receiver = this.c();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : getStringHashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  KClassImpl.prototype.toString = function () {
    return 'class ' + this.c();
  };
  KClassImpl.$metadata$ = classMeta('KClassImpl', [KClass]);
  function PrimitiveKClassImpl(jClass, givenSimpleName, isInstanceFunction) {
    KClassImpl.call(this, jClass);
    this.e_1 = givenSimpleName;
    this.f_1 = isInstanceFunction;
  }
  PrimitiveKClassImpl.prototype.equals = function (other) {
    if (!(other instanceof PrimitiveKClassImpl))
      return false;
    return KClassImpl.prototype.equals.call(this, other) ? this.e_1 === other.e_1 : false;
  };
  PrimitiveKClassImpl.prototype.c = function () {
    return this.e_1;
  };
  PrimitiveKClassImpl.$metadata$ = classMeta('PrimitiveKClassImpl', undefined, undefined, undefined, undefined, KClassImpl.prototype);
  function NothingKClassImpl() {
    NothingKClassImpl_instance = this;
    KClassImpl.call(this, Object);
    this.h_1 = 'Nothing';
  }
  NothingKClassImpl.prototype.c = function () {
    return this.h_1;
  };
  NothingKClassImpl.prototype.b = function () {
    throw UnsupportedOperationException_init_$Create$("There's no native JS class for Nothing type");
  };
  NothingKClassImpl.prototype.equals = function (other) {
    return other === this;
  };
  NothingKClassImpl.prototype.hashCode = function () {
    return 0;
  };
  NothingKClassImpl.$metadata$ = objectMeta('NothingKClassImpl', undefined, undefined, undefined, undefined, KClassImpl.prototype);
  var NothingKClassImpl_instance;
  function NothingKClassImpl_getInstance() {
    if (NothingKClassImpl_instance == null)
      new NothingKClassImpl();
    return NothingKClassImpl_instance;
  }
  function ErrorKClass() {
  }
  ErrorKClass.prototype.equals = function (other) {
    return other === this;
  };
  ErrorKClass.prototype.hashCode = function () {
    return 0;
  };
  ErrorKClass.$metadata$ = classMeta('ErrorKClass', [KClass]);
  function SimpleKClassImpl(jClass) {
    KClassImpl.call(this, jClass);
    var tmp = this;
    var tmp$ret$1;
    {
      var tmp$ret$0;
      {
        tmp$ret$0 = jClass;
      }
      var tmp0_safe_receiver = tmp$ret$0.$metadata$;
      var tmp0_unsafeCast = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.simpleName;
      tmp$ret$1 = tmp0_unsafeCast;
    }
    tmp.j_1 = tmp$ret$1;
  }
  SimpleKClassImpl.prototype.c = function () {
    return this.j_1;
  };
  SimpleKClassImpl.$metadata$ = classMeta('SimpleKClassImpl', undefined, undefined, undefined, undefined, KClassImpl.prototype);
  function get_functionClasses() {
    init_properties_primitives_kt_rm1w5q();
    return functionClasses;
  }
  var functionClasses;
  function PrimitiveClasses$anyClass$lambda() {
    return function (it) {
      return isObject(it);
    };
  }
  function PrimitiveClasses$numberClass$lambda() {
    return function (it) {
      return isNumber(it);
    };
  }
  function PrimitiveClasses$booleanClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'boolean' : false;
    };
  }
  function PrimitiveClasses$byteClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$shortClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$intClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$floatClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$doubleClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'number' : false;
    };
  }
  function PrimitiveClasses$arrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isArray(it) : false;
    };
  }
  function PrimitiveClasses$stringClass$lambda() {
    return function (it) {
      return !(it == null) ? typeof it === 'string' : false;
    };
  }
  function PrimitiveClasses$throwableClass$lambda() {
    return function (it) {
      return it instanceof Error;
    };
  }
  function PrimitiveClasses$booleanArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isBooleanArray(it) : false;
    };
  }
  function PrimitiveClasses$charArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isCharArray(it) : false;
    };
  }
  function PrimitiveClasses$byteArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isByteArray(it) : false;
    };
  }
  function PrimitiveClasses$shortArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isShortArray(it) : false;
    };
  }
  function PrimitiveClasses$intArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isIntArray(it) : false;
    };
  }
  function PrimitiveClasses$longArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isLongArray(it) : false;
    };
  }
  function PrimitiveClasses$floatArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isFloatArray(it) : false;
    };
  }
  function PrimitiveClasses$doubleArrayClass$lambda() {
    return function (it) {
      return !(it == null) ? isDoubleArray(it) : false;
    };
  }
  function PrimitiveClasses$functionClass$lambda($arity) {
    return function (it) {
      var tmp;
      if (typeof it === 'function') {
        var tmp$ret$0;
        {
          tmp$ret$0 = it;
        }
        tmp = tmp$ret$0.length === $arity;
      } else {
        tmp = false;
      }
      return tmp;
    };
  }
  function PrimitiveClasses() {
    PrimitiveClasses_instance = this;
    var tmp = this;
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = Object;
      tmp$ret$0 = tmp0_unsafeCast;
    }
    var tmp_0 = tmp$ret$0;
    tmp.k_1 = new PrimitiveKClassImpl(tmp_0, 'Any', PrimitiveClasses$anyClass$lambda());
    var tmp_1 = this;
    var tmp$ret$1;
    {
      var tmp0_unsafeCast_0 = Number;
      tmp$ret$1 = tmp0_unsafeCast_0;
    }
    var tmp_2 = tmp$ret$1;
    tmp_1.l_1 = new PrimitiveKClassImpl(tmp_2, 'Number', PrimitiveClasses$numberClass$lambda());
    this.m_1 = NothingKClassImpl_getInstance();
    var tmp_3 = this;
    var tmp$ret$2;
    {
      var tmp0_unsafeCast_1 = Boolean;
      tmp$ret$2 = tmp0_unsafeCast_1;
    }
    var tmp_4 = tmp$ret$2;
    tmp_3.n_1 = new PrimitiveKClassImpl(tmp_4, 'Boolean', PrimitiveClasses$booleanClass$lambda());
    var tmp_5 = this;
    var tmp$ret$3;
    {
      var tmp0_unsafeCast_2 = Number;
      tmp$ret$3 = tmp0_unsafeCast_2;
    }
    var tmp_6 = tmp$ret$3;
    tmp_5.o_1 = new PrimitiveKClassImpl(tmp_6, 'Byte', PrimitiveClasses$byteClass$lambda());
    var tmp_7 = this;
    var tmp$ret$4;
    {
      var tmp0_unsafeCast_3 = Number;
      tmp$ret$4 = tmp0_unsafeCast_3;
    }
    var tmp_8 = tmp$ret$4;
    tmp_7.p_1 = new PrimitiveKClassImpl(tmp_8, 'Short', PrimitiveClasses$shortClass$lambda());
    var tmp_9 = this;
    var tmp$ret$5;
    {
      var tmp0_unsafeCast_4 = Number;
      tmp$ret$5 = tmp0_unsafeCast_4;
    }
    var tmp_10 = tmp$ret$5;
    tmp_9.q_1 = new PrimitiveKClassImpl(tmp_10, 'Int', PrimitiveClasses$intClass$lambda());
    var tmp_11 = this;
    var tmp$ret$6;
    {
      var tmp0_unsafeCast_5 = Number;
      tmp$ret$6 = tmp0_unsafeCast_5;
    }
    var tmp_12 = tmp$ret$6;
    tmp_11.r_1 = new PrimitiveKClassImpl(tmp_12, 'Float', PrimitiveClasses$floatClass$lambda());
    var tmp_13 = this;
    var tmp$ret$7;
    {
      var tmp0_unsafeCast_6 = Number;
      tmp$ret$7 = tmp0_unsafeCast_6;
    }
    var tmp_14 = tmp$ret$7;
    tmp_13.s_1 = new PrimitiveKClassImpl(tmp_14, 'Double', PrimitiveClasses$doubleClass$lambda());
    var tmp_15 = this;
    var tmp$ret$8;
    {
      var tmp0_unsafeCast_7 = Array;
      tmp$ret$8 = tmp0_unsafeCast_7;
    }
    var tmp_16 = tmp$ret$8;
    tmp_15.t_1 = new PrimitiveKClassImpl(tmp_16, 'Array', PrimitiveClasses$arrayClass$lambda());
    var tmp_17 = this;
    var tmp$ret$9;
    {
      var tmp0_unsafeCast_8 = String;
      tmp$ret$9 = tmp0_unsafeCast_8;
    }
    var tmp_18 = tmp$ret$9;
    tmp_17.u_1 = new PrimitiveKClassImpl(tmp_18, 'String', PrimitiveClasses$stringClass$lambda());
    var tmp_19 = this;
    var tmp$ret$10;
    {
      var tmp0_unsafeCast_9 = Error;
      tmp$ret$10 = tmp0_unsafeCast_9;
    }
    var tmp_20 = tmp$ret$10;
    tmp_19.v_1 = new PrimitiveKClassImpl(tmp_20, 'Throwable', PrimitiveClasses$throwableClass$lambda());
    var tmp_21 = this;
    var tmp$ret$11;
    {
      var tmp0_unsafeCast_10 = Array;
      tmp$ret$11 = tmp0_unsafeCast_10;
    }
    var tmp_22 = tmp$ret$11;
    tmp_21.w_1 = new PrimitiveKClassImpl(tmp_22, 'BooleanArray', PrimitiveClasses$booleanArrayClass$lambda());
    var tmp_23 = this;
    var tmp$ret$12;
    {
      var tmp0_unsafeCast_11 = Uint16Array;
      tmp$ret$12 = tmp0_unsafeCast_11;
    }
    var tmp_24 = tmp$ret$12;
    tmp_23.x_1 = new PrimitiveKClassImpl(tmp_24, 'CharArray', PrimitiveClasses$charArrayClass$lambda());
    var tmp_25 = this;
    var tmp$ret$13;
    {
      var tmp0_unsafeCast_12 = Int8Array;
      tmp$ret$13 = tmp0_unsafeCast_12;
    }
    var tmp_26 = tmp$ret$13;
    tmp_25.y_1 = new PrimitiveKClassImpl(tmp_26, 'ByteArray', PrimitiveClasses$byteArrayClass$lambda());
    var tmp_27 = this;
    var tmp$ret$14;
    {
      var tmp0_unsafeCast_13 = Int16Array;
      tmp$ret$14 = tmp0_unsafeCast_13;
    }
    var tmp_28 = tmp$ret$14;
    tmp_27.z_1 = new PrimitiveKClassImpl(tmp_28, 'ShortArray', PrimitiveClasses$shortArrayClass$lambda());
    var tmp_29 = this;
    var tmp$ret$15;
    {
      var tmp0_unsafeCast_14 = Int32Array;
      tmp$ret$15 = tmp0_unsafeCast_14;
    }
    var tmp_30 = tmp$ret$15;
    tmp_29.a1_1 = new PrimitiveKClassImpl(tmp_30, 'IntArray', PrimitiveClasses$intArrayClass$lambda());
    var tmp_31 = this;
    var tmp$ret$16;
    {
      var tmp0_unsafeCast_15 = Array;
      tmp$ret$16 = tmp0_unsafeCast_15;
    }
    var tmp_32 = tmp$ret$16;
    tmp_31.b1_1 = new PrimitiveKClassImpl(tmp_32, 'LongArray', PrimitiveClasses$longArrayClass$lambda());
    var tmp_33 = this;
    var tmp$ret$17;
    {
      var tmp0_unsafeCast_16 = Float32Array;
      tmp$ret$17 = tmp0_unsafeCast_16;
    }
    var tmp_34 = tmp$ret$17;
    tmp_33.c1_1 = new PrimitiveKClassImpl(tmp_34, 'FloatArray', PrimitiveClasses$floatArrayClass$lambda());
    var tmp_35 = this;
    var tmp$ret$18;
    {
      var tmp0_unsafeCast_17 = Float64Array;
      tmp$ret$18 = tmp0_unsafeCast_17;
    }
    var tmp_36 = tmp$ret$18;
    tmp_35.d1_1 = new PrimitiveKClassImpl(tmp_36, 'DoubleArray', PrimitiveClasses$doubleArrayClass$lambda());
  }
  PrimitiveClasses.prototype.e1 = function () {
    return this.k_1;
  };
  PrimitiveClasses.prototype.f1 = function () {
    return this.l_1;
  };
  PrimitiveClasses.prototype.g1 = function () {
    return this.m_1;
  };
  PrimitiveClasses.prototype.h1 = function () {
    return this.n_1;
  };
  PrimitiveClasses.prototype.i1 = function () {
    return this.o_1;
  };
  PrimitiveClasses.prototype.j1 = function () {
    return this.p_1;
  };
  PrimitiveClasses.prototype.k1 = function () {
    return this.q_1;
  };
  PrimitiveClasses.prototype.l1 = function () {
    return this.r_1;
  };
  PrimitiveClasses.prototype.m1 = function () {
    return this.s_1;
  };
  PrimitiveClasses.prototype.n1 = function () {
    return this.t_1;
  };
  PrimitiveClasses.prototype.o1 = function () {
    return this.u_1;
  };
  PrimitiveClasses.prototype.p1 = function () {
    return this.v_1;
  };
  PrimitiveClasses.prototype.q1 = function () {
    return this.w_1;
  };
  PrimitiveClasses.prototype.r1 = function () {
    return this.x_1;
  };
  PrimitiveClasses.prototype.s1 = function () {
    return this.y_1;
  };
  PrimitiveClasses.prototype.t1 = function () {
    return this.z_1;
  };
  PrimitiveClasses.prototype.u1 = function () {
    return this.a1_1;
  };
  PrimitiveClasses.prototype.v1 = function () {
    return this.b1_1;
  };
  PrimitiveClasses.prototype.w1 = function () {
    return this.c1_1;
  };
  PrimitiveClasses.prototype.x1 = function () {
    return this.d1_1;
  };
  PrimitiveClasses.prototype.functionClass = function (arity) {
    var tmp0_elvis_lhs = get_functionClasses()[arity];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp$ret$3;
      {
        {
        }
        var tmp$ret$2;
        {
          var tmp$ret$0;
          {
            var tmp0_unsafeCast = Function;
            tmp$ret$0 = tmp0_unsafeCast;
          }
          var tmp_0 = tmp$ret$0;
          var tmp_1 = 'Function' + arity;
          var result = new PrimitiveKClassImpl(tmp_0, tmp_1, PrimitiveClasses$functionClass$lambda(arity));
          var tmp$ret$1;
          {
            var tmp1_asDynamic = get_functionClasses();
            tmp$ret$1 = tmp1_asDynamic;
          }
          tmp$ret$1[arity] = result;
          tmp$ret$2 = result;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      tmp = tmp$ret$3;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  PrimitiveClasses.$metadata$ = objectMeta('PrimitiveClasses');
  Object.defineProperty(PrimitiveClasses.prototype, 'anyClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.e1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'numberClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.f1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'nothingClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.g1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'booleanClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.h1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'byteClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.i1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'shortClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.j1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'intClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.k1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'floatClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.l1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'doubleClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.m1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'arrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.n1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'stringClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.o1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'throwableClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.p1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'booleanArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.q1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'charArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.r1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'byteArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.s1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'shortArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.t1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'intArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.u1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'longArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.v1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'floatArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.w1
  });
  Object.defineProperty(PrimitiveClasses.prototype, 'doubleArrayClass', {
    configurable: true,
    get: PrimitiveClasses.prototype.x1
  });
  var PrimitiveClasses_instance;
  function PrimitiveClasses_getInstance() {
    if (PrimitiveClasses_instance == null)
      new PrimitiveClasses();
    return PrimitiveClasses_instance;
  }
  var properties_initialized_primitives_kt_jle18u;
  function init_properties_primitives_kt_rm1w5q() {
    if (properties_initialized_primitives_kt_jle18u) {
    } else {
      properties_initialized_primitives_kt_jle18u = true;
      var tmp$ret$0;
      {
        tmp$ret$0 = fillArrayVal(Array(0), null);
      }
      functionClasses = tmp$ret$0;
    }
  }
  function getKClass(jClass) {
    var tmp;
    if (Array.isArray(jClass)) {
      var tmp$ret$1;
      {
        var tmp$ret$0;
        {
          tmp$ret$0 = jClass;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = getKClassM(tmp$ret$1);
    } else {
      var tmp$ret$3;
      {
        var tmp$ret$2;
        {
          tmp$ret$2 = jClass;
        }
        tmp$ret$3 = tmp$ret$2;
      }
      tmp = getKClass1(tmp$ret$3);
    }
    return tmp;
  }
  function getKClassM(jClasses) {
    var tmp0_subject = jClasses.length;
    var tmp;
    switch (tmp0_subject) {
      case 1:
        tmp = getKClass1(jClasses[0]);
        break;
      case 0:
        var tmp$ret$1;
        {
          var tmp0_unsafeCast = NothingKClassImpl_getInstance();
          var tmp$ret$0;
          {
            tmp$ret$0 = tmp0_unsafeCast;
          }
          tmp$ret$1 = tmp$ret$0;
        }

        tmp = tmp$ret$1;
        break;
      default:
        var tmp$ret$3;
        {
          var tmp1_unsafeCast = new ErrorKClass();
          var tmp$ret$2;
          {
            tmp$ret$2 = tmp1_unsafeCast;
          }
          tmp$ret$3 = tmp$ret$2;
        }

        tmp = tmp$ret$3;
        break;
    }
    return tmp;
  }
  function getKClass1(jClass) {
    if (jClass === String) {
      var tmp$ret$1;
      {
        var tmp0_unsafeCast = PrimitiveClasses_getInstance().u_1;
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_unsafeCast;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      return tmp$ret$1;
    }
    var tmp$ret$2;
    {
      tmp$ret$2 = jClass;
    }
    var metadata = tmp$ret$2.$metadata$;
    var tmp;
    if (metadata != null) {
      var tmp_0;
      if (metadata.$kClass$ == null) {
        var kClass = new SimpleKClassImpl(jClass);
        metadata.$kClass$ = kClass;
        tmp_0 = kClass;
      } else {
        tmp_0 = metadata.$kClass$;
      }
      tmp = tmp_0;
    } else {
      tmp = new SimpleKClassImpl(jClass);
    }
    return tmp;
  }
  function getKClassFromExpression(e) {
    var tmp$ret$3;
    {
      var tmp0_subject = typeof e;
      var tmp;
      switch (tmp0_subject) {
        case 'string':
          tmp = PrimitiveClasses_getInstance().u_1;
          break;
        case 'number':
          var tmp_0;
          var tmp$ret$0;
          {
            var tmp0_asDynamic = jsBitwiseOr(e, 0);
            tmp$ret$0 = tmp0_asDynamic;
          }

          if (tmp$ret$0 === e) {
            tmp_0 = PrimitiveClasses_getInstance().q_1;
          } else {
            tmp_0 = PrimitiveClasses_getInstance().s_1;
          }

          tmp = tmp_0;
          break;
        case 'boolean':
          tmp = PrimitiveClasses_getInstance().n_1;
          break;
        case 'function':
          var tmp_1 = PrimitiveClasses_getInstance();
          var tmp$ret$1;
          {
            tmp$ret$1 = e;
          }

          tmp = tmp_1.functionClass(tmp$ret$1.length);
          break;
        default:
          var tmp_2;
          if (isBooleanArray(e)) {
            tmp_2 = PrimitiveClasses_getInstance().w_1;
          } else {
            if (isCharArray(e)) {
              tmp_2 = PrimitiveClasses_getInstance().x_1;
            } else {
              if (isByteArray(e)) {
                tmp_2 = PrimitiveClasses_getInstance().y_1;
              } else {
                if (isShortArray(e)) {
                  tmp_2 = PrimitiveClasses_getInstance().z_1;
                } else {
                  if (isIntArray(e)) {
                    tmp_2 = PrimitiveClasses_getInstance().a1_1;
                  } else {
                    if (isLongArray(e)) {
                      tmp_2 = PrimitiveClasses_getInstance().b1_1;
                    } else {
                      if (isFloatArray(e)) {
                        tmp_2 = PrimitiveClasses_getInstance().c1_1;
                      } else {
                        if (isDoubleArray(e)) {
                          tmp_2 = PrimitiveClasses_getInstance().d1_1;
                        } else {
                          if (isInterface(e, KClass)) {
                            tmp_2 = getKClass(KClass);
                          } else {
                            if (isArray(e)) {
                              tmp_2 = PrimitiveClasses_getInstance().t_1;
                            } else {
                              var constructor = Object.getPrototypeOf(e).constructor;
                              var tmp_3;
                              if (constructor === Object) {
                                tmp_3 = PrimitiveClasses_getInstance().k_1;
                              } else if (constructor === Error) {
                                tmp_3 = PrimitiveClasses_getInstance().v_1;
                              } else {
                                var jsClass = constructor;
                                tmp_3 = getKClass1(jsClass);
                              }
                              tmp_2 = tmp_3;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }

          tmp = tmp_2;
          break;
      }
      var tmp1_unsafeCast = tmp;
      var tmp$ret$2;
      {
        tmp$ret$2 = tmp1_unsafeCast;
      }
      tmp$ret$3 = tmp$ret$2;
    }
    return tmp$ret$3;
  }
  function fillArrayVal(array, initValue) {
    var inductionVariable = 0;
    var last = array.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        array[i] = initValue;
      }
       while (!(i === last));
    return array;
  }
  function get_buf() {
    init_properties_bitUtils_kt_cxtw9i();
    return buf;
  }
  var buf;
  function get_bufFloat64() {
    init_properties_bitUtils_kt_cxtw9i();
    return bufFloat64;
  }
  var bufFloat64;
  var bufFloat32;
  function get_bufInt32() {
    init_properties_bitUtils_kt_cxtw9i();
    return bufInt32;
  }
  var bufInt32;
  function get_lowIndex() {
    init_properties_bitUtils_kt_cxtw9i();
    return lowIndex;
  }
  var lowIndex;
  function get_highIndex() {
    init_properties_bitUtils_kt_cxtw9i();
    return highIndex;
  }
  var highIndex;
  function getNumberHashCode(obj) {
    init_properties_bitUtils_kt_cxtw9i();
    var tmp$ret$1;
    {
      var tmp0_unsafeCast = jsBitwiseOr(obj, 0);
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_unsafeCast;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    if (tmp$ret$1 === obj) {
      return numberToInt(obj);
    }
    get_bufFloat64()[0] = obj;
    return imul(get_bufInt32()[get_highIndex()], 31) + get_bufInt32()[get_lowIndex()] | 0;
  }
  var properties_initialized_bitUtils_kt_i2bo3e;
  function init_properties_bitUtils_kt_cxtw9i() {
    if (properties_initialized_bitUtils_kt_i2bo3e) {
    } else {
      properties_initialized_bitUtils_kt_i2bo3e = true;
      buf = new ArrayBuffer(8);
      var tmp$ret$1;
      {
        var tmp0_unsafeCast = new Float64Array(get_buf());
        var tmp$ret$0;
        {
          tmp$ret$0 = tmp0_unsafeCast;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      bufFloat64 = tmp$ret$1;
      var tmp$ret$1_0;
      {
        var tmp0_unsafeCast_0 = new Float32Array(get_buf());
        var tmp$ret$0_0;
        {
          tmp$ret$0_0 = tmp0_unsafeCast_0;
        }
        tmp$ret$1_0 = tmp$ret$0_0;
      }
      bufFloat32 = tmp$ret$1_0;
      var tmp$ret$1_1;
      {
        var tmp0_unsafeCast_1 = new Int32Array(get_buf());
        var tmp$ret$0_1;
        {
          tmp$ret$0_1 = tmp0_unsafeCast_1;
        }
        tmp$ret$1_1 = tmp$ret$0_1;
      }
      bufInt32 = tmp$ret$1_1;
      var tmp$ret$1_2;
      {
        {
        }
        var tmp$ret$0_2;
        {
          get_bufFloat64()[0] = -1.0;
          tmp$ret$0_2 = !(get_bufInt32()[0] === 0) ? 1 : 0;
        }
        tmp$ret$1_2 = tmp$ret$0_2;
      }
      lowIndex = tmp$ret$1_2;
      highIndex = 1 - get_lowIndex() | 0;
    }
  }
  function contentEqualsInternal(_this__u8e3s4, other) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var a = tmp$ret$0;
    var tmp$ret$1;
    {
      tmp$ret$1 = other;
    }
    var b = tmp$ret$1;
    if (a === b)
      return true;
    if (((a == null ? true : b == null) ? true : !isArrayish(b)) ? true : a.length != b.length)
      return false;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(a[i], b[i])) {
          return false;
        }
      }
       while (inductionVariable < last);
    return true;
  }
  function contentHashCodeInternal(_this__u8e3s4) {
    var tmp$ret$0;
    {
      tmp$ret$0 = _this__u8e3s4;
    }
    var a = tmp$ret$0;
    if (a == null)
      return 0;
    var result = 1;
    var inductionVariable = 0;
    var last = a.length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = imul(result, 31) + hashCode(a[i]) | 0;
      }
       while (inductionVariable < last);
    return result;
  }
  function getObjectHashCode(obj) {
    if (!jsIn('kotlinHashCodeValue$', obj)) {
      var hash = jsBitwiseOr(Math.random() * 4.294967296E9, 0);
      var descriptor = new Object();
      descriptor.value = hash;
      descriptor.enumerable = false;
      Object.defineProperty(obj, 'kotlinHashCodeValue$', descriptor);
    }
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = obj['kotlinHashCodeValue$'];
      tmp$ret$0 = tmp0_unsafeCast;
    }
    return tmp$ret$0;
  }
  function equals(obj1, obj2) {
    if (obj1 == null) {
      return obj2 == null;
    }
    if (obj2 == null) {
      return false;
    }
    if (typeof obj1 === 'object' ? typeof obj1.equals === 'function' : false) {
      return obj1.equals(obj2);
    }
    if (obj1 !== obj1) {
      return obj2 !== obj2;
    }
    if (typeof obj1 === 'number' ? typeof obj2 === 'number' : false) {
      var tmp;
      if (obj1 === obj2) {
        var tmp_0;
        if (obj1 !== 0) {
          tmp_0 = true;
        } else {
          var tmp$ret$0;
          {
            tmp$ret$0 = 1;
          }
          var tmp_1 = tmp$ret$0 / obj1;
          var tmp$ret$1;
          {
            tmp$ret$1 = 1;
          }
          tmp_0 = tmp_1 === tmp$ret$1 / obj2;
        }
        tmp = tmp_0;
      } else {
        tmp = false;
      }
      return tmp;
    }
    return obj1 === obj2;
  }
  function hashCode(obj) {
    if (obj == null)
      return 0;
    var tmp0_subject = typeof obj;
    var tmp;
    switch (tmp0_subject) {
      case 'object':
        tmp = 'function' === typeof obj.hashCode ? obj.hashCode() : getObjectHashCode(obj);
        break;
      case 'function':
        tmp = getObjectHashCode(obj);
        break;
      case 'number':
        tmp = getNumberHashCode(obj);
        break;
      case 'boolean':
        var tmp_0;
        var tmp$ret$0;
        {
          tmp$ret$0 = obj;
        }

        if (tmp$ret$0) {
          tmp_0 = 1;
        } else {
          tmp_0 = 0;
        }

        tmp = tmp_0;
        break;
      default:
        tmp = getStringHashCode(String(obj));
        break;
    }
    return tmp;
  }
  function getStringHashCode(str) {
    var hash = 0;
    var length = str.length;
    var inductionVariable = 0;
    var last = length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp$ret$0;
        {
          tmp$ret$0 = str;
        }
        var code = tmp$ret$0.charCodeAt(i);
        hash = imul(hash, 31) + code | 0;
      }
       while (!(i === last));
    return hash;
  }
  function toString(o) {
    var tmp;
    if (o == null) {
      tmp = 'null';
    } else if (isArrayish(o)) {
      tmp = '[...]';
    } else {
      var tmp$ret$0;
      {
        var tmp0_unsafeCast = o.toString();
        tmp$ret$0 = tmp0_unsafeCast;
      }
      tmp = tmp$ret$0;
    }
    return tmp;
  }
  function captureStack(instance, constructorFunction) {
    if (Error.captureStackTrace != null) {
      Error.captureStackTrace(instance, constructorFunction);
    } else {
      var tmp$ret$0;
      {
        tmp$ret$0 = instance;
      }
      tmp$ret$0.stack = (new Error()).stack;
    }
  }
  function extendThrowable(this_, message, cause) {
    Error.call(this_);
    setPropertiesToThrowableInstance(this_, message, cause);
  }
  function setPropertiesToThrowableInstance(this_, message, cause) {
    if (!hasOwnPrototypeProperty(this_, 'message')) {
      var tmp;
      if (message == null) {
        var tmp_0;
        if (!(message === null)) {
          var tmp0_safe_receiver = cause;
          var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString();
          tmp_0 = tmp1_elvis_lhs == null ? undefined : tmp1_elvis_lhs;
        } else {
          tmp_0 = undefined;
        }
        tmp = tmp_0;
      } else {
        tmp = message;
      }
      this_.message = tmp;
    }
    if (!hasOwnPrototypeProperty(this_, 'cause')) {
      this_.cause = cause;
    }
    this_.name = Object.getPrototypeOf(this_).constructor.name;
  }
  function hasOwnPrototypeProperty(o, name) {
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = Object.getPrototypeOf(o).hasOwnProperty(name);
      tmp$ret$0 = tmp0_unsafeCast;
    }
    return tmp$ret$0;
  }
  function THROW_CCE() {
    throw ClassCastException_init_$Create$();
  }
  function Long() {
  }
  Long.prototype.z1 = function () {
    return this.y1_1;
  };
  Long.$metadata$ = classMeta('Long', [Comparable], undefined, undefined, undefined, Number_0.prototype);
  function numberToInt(a) {
    var tmp;
    if (a instanceof Long) {
      tmp = a.z1();
    } else {
      tmp = doubleToInt(a);
    }
    return tmp;
  }
  function doubleToInt(a) {
    return a > 2.147483647E9 ? 2147483647 : a < -2.147483648E9 ? -2147483648 : jsBitwiseOr(a, 0);
  }
  var interfacesCounter;
  function classMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return createMetadata('class', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype);
  }
  function createMetadata(kind, name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return {kind: kind, simpleName: name, interfaceId: kind === 'interface' ? -1 : undefined, interfaces: interfaces || [], associatedObjectKey: associatedObjectKey, associatedObjects: associatedObjects, suspendArity: suspendArity, fastPrototype: fastPrototype, $kClass$: undefined, interfacesCache: {isComplete: fastPrototype === undefined && (interfaces === undefined || interfaces.length === 0), implementInterfaceMemo: {}}};
  }
  function isArrayish(o) {
    return isJsArray(o) ? true : isView(o);
  }
  function isJsArray(obj) {
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = Array.isArray(obj);
      tmp$ret$0 = tmp0_unsafeCast;
    }
    return tmp$ret$0;
  }
  function isInterface(obj, iface) {
    var tmp0_elvis_lhs = obj.constructor;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var ctor = tmp;
    return isInterfaceImpl(ctor, iface);
  }
  function isInterfaceImpl(ctor, iface) {
    if (ctor === iface) {
      return true;
    }
    var metadata = ctor.$metadata$;
    if (!(metadata == null) ? metadata.interfacesCache == null : false) {
      metadata.interfacesCache = generateInterfaceCache();
    }
    var tmp0_safe_receiver = metadata;
    var interfacesCache = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interfacesCache;
    var tmp;
    if (!(interfacesCache == null)) {
      if (!interfacesCache.isComplete) {
        completeInterfaceCache(ctor);
      }
      var tmp1_safe_receiver = iface.$metadata$;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.interfaceId;
      var tmp_0;
      if (tmp2_elvis_lhs == null) {
        return false;
      } else {
        tmp_0 = tmp2_elvis_lhs;
      }
      var interfaceId = tmp_0;
      tmp = !!interfacesCache.implementInterfaceMemo[interfaceId];
    } else {
      var tmp3_safe_receiver = fastGetPrototype(ctor);
      var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.constructor;
      var tmp_1;
      if (tmp4_elvis_lhs == null) {
        return false;
      } else {
        tmp_1 = tmp4_elvis_lhs;
      }
      var constructor = tmp_1;
      tmp = isInterfaceImpl(constructor, iface);
    }
    return tmp;
  }
  function generateInterfaceCache() {
    return {isComplete: false, implementInterfaceMemo: {}};
  }
  function completeInterfaceCache(ctor) {
    var metadata = ctor.$metadata$;
    if (!(metadata == null) ? metadata.interfacesCache == null : false) {
      metadata.interfacesCache = generateInterfaceCache();
    }
    var tmp0_safe_receiver = metadata;
    var interfacesCache = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.interfacesCache;
    if (!(interfacesCache == null)) {
      if (interfacesCache.isComplete === true) {
        return interfacesCache;
      }
      var indexedObject = metadata.interfaces;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var i = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        extendCacheWithSingle(interfacesCache, i);
        extendCacheWith(interfacesCache, completeInterfaceCache(i));
      }
    }
    var tmp2_safe_receiver = fastGetPrototype(ctor);
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.constructor;
    var tmp;
    if (tmp3_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      {
        {
        }
        tmp$ret$0 = completeInterfaceCache(tmp3_safe_receiver);
      }
      tmp = tmp$ret$0;
    }
    var parentInterfacesCache = tmp;
    var tmp4_safe_receiver = interfacesCache;
    var tmp_0;
    if (tmp4_safe_receiver == null) {
      tmp_0 = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        {
          extendCacheWith(tmp4_safe_receiver, parentInterfacesCache);
          tmp4_safe_receiver.isComplete = true;
        }
        tmp$ret$1 = tmp4_safe_receiver;
      }
      tmp_0 = tmp$ret$1;
    }
    var tmp5_elvis_lhs = tmp_0;
    return tmp5_elvis_lhs == null ? parentInterfacesCache : tmp5_elvis_lhs;
  }
  function fastGetPrototype(ctor) {
    var tmp0_safe_receiver = ctor.$metadata$;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$1;
      {
        {
        }
        var tmp$ret$0;
        {
          if (tmp0_safe_receiver.fastPrototype == null) {
            tmp0_safe_receiver.fastPrototype = getPrototype(ctor);
          }
          tmp$ret$0 = tmp0_safe_receiver.fastPrototype;
        }
        tmp$ret$1 = tmp$ret$0;
      }
      tmp = tmp$ret$1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? getPrototype(ctor) : tmp1_elvis_lhs;
  }
  function extendCacheWithSingle(_this__u8e3s4, intr) {
    _this__u8e3s4.implementInterfaceMemo[getOrDefineInterfaceId(intr)] = true;
  }
  function extendCacheWith(_this__u8e3s4, cache) {
    var tmp0_safe_receiver = cache;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.implementInterfaceMemo;
    var tmp;
    if (tmp1_elvis_lhs == null) {
      return Unit_getInstance();
    } else {
      tmp = tmp1_elvis_lhs;
    }
    var anotherInterfaceMemo = tmp;
    Object.assign(_this__u8e3s4.implementInterfaceMemo, anotherInterfaceMemo);
  }
  function getPrototype(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.prototype;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$2;
      {
        {
        }
        var tmp$ret$1;
        {
          var tmp$ret$0;
          {
            var tmp0_unsafeCast = Object.getPrototypeOf(tmp0_safe_receiver);
            tmp$ret$0 = tmp0_unsafeCast;
          }
          tmp$ret$1 = tmp$ret$0;
        }
        tmp$ret$2 = tmp$ret$1;
      }
      tmp = tmp$ret$2;
    }
    return tmp;
  }
  function getOrDefineInterfaceId(_this__u8e3s4) {
    var tmp$ret$1;
    {
      var tmp0_unsafeCast = _this__u8e3s4.$metadata$;
      var tmp$ret$0;
      {
        tmp$ret$0 = tmp0_unsafeCast;
      }
      tmp$ret$1 = tmp$ret$0;
    }
    var metadata = tmp$ret$1;
    var tmp0_elvis_lhs = metadata.interfaceId;
    var interfaceId = tmp0_elvis_lhs == null ? -1 : tmp0_elvis_lhs;
    var tmp;
    if (!equals(interfaceId, -1)) {
      tmp = interfaceId;
    } else {
      var tmp1 = interfacesCounter;
      interfacesCounter = tmp1 + 1 | 0;
      var result = tmp1;
      metadata.interfaceId = result;
      tmp = result;
    }
    return tmp;
  }
  function isArray(obj) {
    var tmp;
    if (isJsArray(obj)) {
      var tmp$ret$0;
      {
        tmp$ret$0 = obj;
      }
      tmp = !tmp$ret$0.$type$;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function isObject(obj) {
    var objTypeOf = typeof obj;
    var tmp0_subject = objTypeOf;
    switch (tmp0_subject) {
      case 'string':
        return true;
      case 'number':
        return true;
      case 'boolean':
        return true;
      case 'function':
        return true;
      default:
        return jsInstanceOf(obj, Object);
    }
  }
  function isNumber(a) {
    var tmp;
    if (typeof a === 'number') {
      tmp = true;
    } else {
      tmp = a instanceof Long;
    }
    return tmp;
  }
  function isBooleanArray(a) {
    return isJsArray(a) ? a.$type$ === 'BooleanArray' : false;
  }
  function isByteArray(a) {
    return jsInstanceOf(a, Int8Array);
  }
  function isShortArray(a) {
    return jsInstanceOf(a, Int16Array);
  }
  function isCharArray(a) {
    return jsInstanceOf(a, Uint16Array) ? a.$type$ === 'CharArray' : false;
  }
  function isIntArray(a) {
    return jsInstanceOf(a, Int32Array);
  }
  function isFloatArray(a) {
    return jsInstanceOf(a, Float32Array);
  }
  function isLongArray(a) {
    return isJsArray(a) ? a.$type$ === 'LongArray' : false;
  }
  function isDoubleArray(a) {
    return jsInstanceOf(a, Float64Array);
  }
  function interfaceMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity) {
    return createMetadata('interface', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, undefined);
  }
  function objectMeta(name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype) {
    return createMetadata('object', name, interfaces, associatedObjectKey, associatedObjects, suspendArity, fastPrototype);
  }
  function contentEquals(_this__u8e3s4, other) {
    return contentEqualsInternal(_this__u8e3s4, other);
  }
  function contentHashCode(_this__u8e3s4) {
    return contentHashCodeInternal(_this__u8e3s4);
  }
  function Exception_init_$Init$($this) {
    extendThrowable($this, void 1, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception_init_$Init$_0(message, $this) {
    extendThrowable($this, message, void 1);
    Exception.call($this);
    return $this;
  }
  function Exception() {
    captureStack(this, Exception);
  }
  Exception.$metadata$ = classMeta('Exception', undefined, undefined, undefined, undefined, Error.prototype);
  function RuntimeException_init_$Init$($this) {
    Exception_init_$Init$($this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException_init_$Init$_0(message, $this) {
    Exception_init_$Init$_0(message, $this);
    RuntimeException.call($this);
    return $this;
  }
  function RuntimeException() {
    captureStack(this, RuntimeException);
  }
  RuntimeException.$metadata$ = classMeta('RuntimeException', undefined, undefined, undefined, undefined, Exception.prototype);
  function UnsupportedOperationException_init_$Init$(message, $this) {
    RuntimeException_init_$Init$_0(message, $this);
    UnsupportedOperationException.call($this);
    return $this;
  }
  function UnsupportedOperationException_init_$Create$(message) {
    var tmp = UnsupportedOperationException_init_$Init$(message, Object.create(UnsupportedOperationException.prototype));
    captureStack(tmp, UnsupportedOperationException_init_$Create$);
    return tmp;
  }
  function UnsupportedOperationException() {
    captureStack(this, UnsupportedOperationException);
  }
  UnsupportedOperationException.$metadata$ = classMeta('UnsupportedOperationException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function ClassCastException_init_$Init$($this) {
    RuntimeException_init_$Init$($this);
    ClassCastException.call($this);
    return $this;
  }
  function ClassCastException_init_$Create$() {
    var tmp = ClassCastException_init_$Init$(Object.create(ClassCastException.prototype));
    captureStack(tmp, ClassCastException_init_$Create$);
    return tmp;
  }
  function ClassCastException() {
    captureStack(this, ClassCastException);
  }
  ClassCastException.$metadata$ = classMeta('ClassCastException', undefined, undefined, undefined, undefined, RuntimeException.prototype);
  function jsIn(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = lhs_hack in rhs_hack;
      tmp$ret$0 = tmp0_unsafeCast;
    }
    return tmp$ret$0;
  }
  function jsBitwiseOr(lhs_hack, rhs_hack) {
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = lhs_hack | rhs_hack;
      tmp$ret$0 = tmp0_unsafeCast;
    }
    return tmp$ret$0;
  }
  function jsTypeOf(value_hack) {
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = typeof value_hack;
      tmp$ret$0 = tmp0_unsafeCast;
    }
    return tmp$ret$0;
  }
  function jsInstanceOf(obj_hack, jsClass_hack) {
    var tmp$ret$0;
    {
      var tmp0_unsafeCast = obj_hack instanceof jsClass_hack;
      tmp$ret$0 = tmp0_unsafeCast;
    }
    return tmp$ret$0;
  }
  //region block: init
  interfacesCounter = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = getKClassFromExpression;
  _.$_$.b = contentEquals;
  _.$_$.c = contentHashCode;
  _.$_$.d = classMeta;
  _.$_$.e = getStringHashCode;
  _.$_$.f = toString;
  _.$_$.g = THROW_CCE;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-kotlin-stdlib-js-ir.js.map