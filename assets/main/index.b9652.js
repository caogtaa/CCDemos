window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AvatarAssembler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "45279iUvaxDYLwEzo4OPRTm", "AvatarAssembler");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GTAutoFitSpriteAssembler2D_1 = require("../../../../Shader/GTAutoFitSpriteAssembler2D");
    var gfx = cc.gfx;
    var vfmtCustom = new gfx.VertexFormat([ {
      name: gfx.ATTR_POSITION,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: gfx.ATTR_UV0,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: "a_p",
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: "a_q",
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    } ]);
    var AvatarAssembler = function(_super) {
      __extends(AvatarAssembler, _super);
      function AvatarAssembler() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.floatsPerVert = 8;
        return _this;
      }
      AvatarAssembler.prototype.initData = function() {
        var data = this._renderData;
        data.createFlexData(0, this.verticesCount, this.indicesCount, this.getVfmt());
        var indices = data.iDatas[0];
        var count = indices.length / 6;
        for (var i = 0, idx = 0; i < count; i++) {
          var vertextID = 4 * i;
          indices[idx++] = vertextID;
          indices[idx++] = vertextID + 1;
          indices[idx++] = vertextID + 2;
          indices[idx++] = vertextID + 1;
          indices[idx++] = vertextID + 3;
          indices[idx++] = vertextID + 2;
        }
      };
      AvatarAssembler.prototype.getVfmt = function() {
        return vfmtCustom;
      };
      AvatarAssembler.prototype.getBuffer = function() {
        return cc.renderer._handle.getBuffer("mesh", this.getVfmt());
      };
      AvatarAssembler.prototype.updateColor = function(comp, color) {};
      AvatarAssembler.prototype.updateUVs = function(sprite) {
        _super.prototype.updateUVs.call(this, sprite);
        var uv = this._uv;
        var isRotated = sprite._spriteFrame.isRotated();
        var l = uv[0], r = uv[2], b = uv[1], t = uv[5];
        if (isRotated) {
          l = uv[1];
          r = uv[3];
          b = uv[0];
          t = uv[4];
        }
        var px = 1 / (r - l), qx = -l * px;
        var py = 1 / (b - t), qy = -t * py;
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < 4; i++) {
          var dstOffset = floatsPerVert * i + uvOffset;
          if (isRotated) {
            verts[dstOffset + 2] = py;
            verts[dstOffset + 3] = px;
            verts[dstOffset + 4] = qy;
            verts[dstOffset + 5] = qx;
          } else {
            verts[dstOffset + 2] = px;
            verts[dstOffset + 3] = py;
            verts[dstOffset + 4] = qx;
            verts[dstOffset + 5] = qy;
          }
        }
      };
      return AvatarAssembler;
    }(GTAutoFitSpriteAssembler2D_1.default);
    exports.default = AvatarAssembler;
    cc._RF.pop();
  }, {
    "../../../../Shader/GTAutoFitSpriteAssembler2D": "GTAutoFitSpriteAssembler2D"
  } ],
  AvatarSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b1649Wc9Q1OSLLcuayZnPTw", "AvatarSprite");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AvatarAssembler_1 = require("./AvatarAssembler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AvatarSprite = function(_super) {
      __extends(AvatarSprite, _super);
      function AvatarSprite() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      AvatarSprite.prototype._resetAssembler = function() {
        this.setVertsDirty();
        var assembler = this._assembler = new AvatarAssembler_1.default();
        assembler.init(this);
      };
      AvatarSprite = __decorate([ ccclass ], AvatarSprite);
      return AvatarSprite;
    }(cc.Sprite);
    exports.default = AvatarSprite;
    cc._RF.pop();
  }, {
    "./AvatarAssembler": "AvatarAssembler"
  } ],
  EqualScalingAssembler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e54e38Lmk1LtatjNGNMggDD", "EqualScalingAssembler");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GTSimpleSpriteAssembler2D_1 = require("../../../../Shader/GTSimpleSpriteAssembler2D");
    var EqualScalingAssembler = function(_super) {
      __extends(EqualScalingAssembler, _super);
      function EqualScalingAssembler() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._uv = [];
        return _this;
      }
      EqualScalingAssembler.prototype.updateUVs = function(sprite) {
        var rect = sprite._spriteFrame.getRect();
        var node = sprite.node;
        if (!rect.width || !rect.height || !node.width || !node.height) {
          _super.prototype.updateUVs.call(this, sprite);
          return;
        }
        Object.assign(this._uv, sprite._spriteFrame.uv);
        var uv = this._uv;
        var wscale = rect.width / node.width;
        var hscale = rect.height / node.height;
        var ratio = 1;
        if (wscale > hscale) {
          ratio = hscale / wscale;
          var ro = sprite._spriteFrame.isRotated() ? 1 : 0;
          var l = uv[0 + ro], r = uv[2 + ro];
          var c = .5 * (l + r);
          var half = .5 * (r - l) * ratio;
          uv[0 + ro] = uv[4 + ro] = c - half;
          uv[2 + ro] = uv[6 + ro] = c + half;
        } else {
          ratio = wscale / hscale;
          var ro = sprite._spriteFrame.isRotated() ? -1 : 0;
          var b = uv[1 + ro], t = uv[5 + ro];
          var c = .5 * (b + t);
          var half = .5 * (b - t) * ratio;
          uv[1 + ro] = uv[3 + ro] = c + half;
          uv[5 + ro] = uv[7 + ro] = c - half;
        }
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < 4; i++) {
          var srcOffset = 2 * i;
          var dstOffset = floatsPerVert * i + uvOffset;
          verts[dstOffset] = uv[srcOffset];
          verts[dstOffset + 1] = uv[srcOffset + 1];
        }
      };
      return EqualScalingAssembler;
    }(GTSimpleSpriteAssembler2D_1.default);
    exports.default = EqualScalingAssembler;
    cc._RF.pop();
  }, {
    "../../../../Shader/GTSimpleSpriteAssembler2D": "GTSimpleSpriteAssembler2D"
  } ],
  EqualScalingSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8b22518JLpEu6AXif9T1DNt", "EqualScalingSprite");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EqualScalingAssembler_1 = require("./EqualScalingAssembler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var EqualScalingSprite = function(_super) {
      __extends(EqualScalingSprite, _super);
      function EqualScalingSprite() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      EqualScalingSprite.prototype._resetAssembler = function() {
        this.setVertsDirty();
        var assembler = this._assembler = new EqualScalingAssembler_1.default();
        assembler.init(this);
      };
      EqualScalingSprite = __decorate([ ccclass ], EqualScalingSprite);
      return EqualScalingSprite;
    }(cc.Sprite);
    exports.default = EqualScalingSprite;
    cc._RF.pop();
  }, {
    "./EqualScalingAssembler": "EqualScalingAssembler"
  } ],
  GTAssembler2D: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec2e84JLsNF8Z3zxl9otwbJ", "GTAssembler2D");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GTAssembler2D = function(_super) {
      __extends(GTAssembler2D, _super);
      function GTAssembler2D() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.verticesCount = 4;
        _this.indicesCount = 6;
        _this.floatsPerVert = 5;
        _this.uvOffset = 2;
        _this.colorOffset = 4;
        _this._renderData = null;
        _this._local = null;
        return _this;
      }
      GTAssembler2D.prototype.init = function(comp) {
        _super.prototype.init.call(this, comp);
        this._renderData = new cc.RenderData();
        this._renderData.init(this);
        this.initLocal();
        this.initData();
      };
      Object.defineProperty(GTAssembler2D.prototype, "verticesFloats", {
        get: function() {
          return this.verticesCount * this.floatsPerVert;
        },
        enumerable: false,
        configurable: true
      });
      GTAssembler2D.prototype.initData = function() {
        var data = this._renderData;
        data.createQuadData(0, this.verticesFloats, this.indicesCount);
      };
      GTAssembler2D.prototype.initLocal = function() {
        this._local = [];
        this._local.length = 4;
      };
      GTAssembler2D.prototype.updateColor = function(comp, color) {
        var uintVerts = this._renderData.uintVDatas[0];
        if (!uintVerts) return;
        color = null != color ? color : comp.node.color._val;
        var floatsPerVert = this.floatsPerVert;
        var colorOffset = this.colorOffset;
        for (var i = colorOffset, l = uintVerts.length; i < l; i += floatsPerVert) uintVerts[i] = color;
      };
      GTAssembler2D.prototype.getBuffer = function() {
        return cc.renderer._handle._meshBuffer;
      };
      GTAssembler2D.prototype.updateWorldVerts = function(comp) {
        false;
        this.updateWorldVertsWebGL(comp);
      };
      GTAssembler2D.prototype.updateWorldVertsWebGL = function(comp) {
        var local = this._local;
        var verts = this._renderData.vDatas[0];
        var matrix = comp.node._worldMatrix;
        var matrixm = matrix.m, a = matrixm[0], b = matrixm[1], c = matrixm[4], d = matrixm[5], tx = matrixm[12], ty = matrixm[13];
        var vl = local[0], vr = local[2], vb = local[1], vt = local[3];
        var justTranslate = 1 === a && 0 === b && 0 === c && 1 === d;
        var index = 0;
        var floatsPerVert = this.floatsPerVert;
        if (justTranslate) {
          verts[index] = vl + tx;
          verts[index + 1] = vb + ty;
          index += floatsPerVert;
          verts[index] = vr + tx;
          verts[index + 1] = vb + ty;
          index += floatsPerVert;
          verts[index] = vl + tx;
          verts[index + 1] = vt + ty;
          index += floatsPerVert;
          verts[index] = vr + tx;
          verts[index + 1] = vt + ty;
        } else {
          var al = a * vl, ar = a * vr, bl = b * vl, br = b * vr, cb = c * vb, ct = c * vt, db = d * vb, dt = d * vt;
          verts[index] = al + cb + tx;
          verts[index + 1] = bl + db + ty;
          index += floatsPerVert;
          verts[index] = ar + cb + tx;
          verts[index + 1] = br + db + ty;
          index += floatsPerVert;
          verts[index] = al + ct + tx;
          verts[index + 1] = bl + dt + ty;
          index += floatsPerVert;
          verts[index] = ar + ct + tx;
          verts[index + 1] = br + dt + ty;
        }
      };
      GTAssembler2D.prototype.updateWorldVertsNative = function(comp) {
        var local = this._local;
        var verts = this._renderData.vDatas[0];
        var floatsPerVert = this.floatsPerVert;
        var vl = local[0], vr = local[2], vb = local[1], vt = local[3];
        var index = 0;
        verts[index] = vl;
        verts[index + 1] = vb;
        index += floatsPerVert;
        verts[index] = vr;
        verts[index + 1] = vb;
        index += floatsPerVert;
        verts[index] = vl;
        verts[index + 1] = vt;
        index += floatsPerVert;
        verts[index] = vr;
        verts[index + 1] = vt;
      };
      GTAssembler2D.prototype.fillBuffers = function(comp, renderer) {
        renderer.worldMatDirty && this.updateWorldVerts(comp);
        var renderData = this._renderData;
        var vData = renderData.vDatas[0];
        var iData = renderData.iDatas[0];
        var buffer = this.getBuffer();
        var offsetInfo = buffer.request(this.verticesCount, this.indicesCount);
        var vertexOffset = offsetInfo.byteOffset >> 2, vbuf = buffer._vData;
        vData.length + vertexOffset > vbuf.length ? vbuf.set(vData.subarray(0, vbuf.length - vertexOffset), vertexOffset) : vbuf.set(vData, vertexOffset);
        var ibuf = buffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset;
        for (var i = 0, l = iData.length; i < l; i++) ibuf[indiceOffset++] = vertexId + iData[i];
      };
      GTAssembler2D.prototype.packToDynamicAtlas = function(comp, frame) {
        false;
        if (!frame._original && cc.dynamicAtlasManager && frame._texture.packable) {
          var packedFrame = cc.dynamicAtlasManager.insertSpriteFrame(frame);
          packedFrame && frame._setDynamicAtlasFrame(packedFrame);
        }
        var material = comp._materials[0];
        if (!material) return;
        if (material.getProperty("texture") !== frame._texture) {
          comp._vertsDirty = true;
          comp._updateMaterial();
        }
      };
      GTAssembler2D.prototype.updateUVs = function(comp) {
        var uv = [ 0, 0, 1, 0, 0, 1, 1, 1 ];
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < 4; i++) {
          var srcOffset = 2 * i;
          var dstOffset = floatsPerVert * i + uvOffset;
          verts[dstOffset] = uv[srcOffset];
          verts[dstOffset + 1] = uv[srcOffset + 1];
        }
      };
      GTAssembler2D.prototype.updateVerts = function(comp) {
        var node = comp.node, cw = node.width, ch = node.height, appx = node.anchorX * cw, appy = node.anchorY * ch, l, b, r, t;
        l = -appx;
        b = -appy;
        r = cw - appx;
        t = ch - appy;
        var local = this._local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        this.updateWorldVerts(comp);
      };
      GTAssembler2D.prototype.updateRenderData = function(comp) {
        if (comp._vertsDirty) {
          this.updateUVs(comp);
          this.updateVerts(comp);
          comp._vertsDirty = false;
        }
      };
      return GTAssembler2D;
    }(cc.Assembler);
    exports.default = GTAssembler2D;
    cc._RF.pop();
  }, {} ],
  GTAutoFitSpriteAssembler2D: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "df6cf6PM09M+rsn47qcGazx", "GTAutoFitSpriteAssembler2D");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GTSimpleSpriteAssembler2D_1 = require("./GTSimpleSpriteAssembler2D");
    var GTAutoFitSpriteAssembler2D = function(_super) {
      __extends(GTAutoFitSpriteAssembler2D, _super);
      function GTAutoFitSpriteAssembler2D() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._uv = [];
        return _this;
      }
      GTAutoFitSpriteAssembler2D.prototype.updateUVs = function(sprite) {
        var rect = sprite._spriteFrame.getRect();
        var node = sprite.node;
        if (!rect.width || !rect.height || !node.width || !node.height) {
          _super.prototype.updateUVs.call(this, sprite);
          return;
        }
        Object.assign(this._uv, sprite._spriteFrame.uv);
        var uv = this._uv;
        var wscale = rect.width / node.width;
        var hscale = rect.height / node.height;
        var ratio = 1;
        var isRotated = sprite._spriteFrame.isRotated();
        var l = uv[0], r = uv[2], b = uv[1], t = uv[5];
        if (isRotated) {
          l = uv[1];
          r = uv[3];
          b = uv[0];
          t = uv[4];
        }
        if (wscale > hscale) {
          ratio = hscale / wscale;
          var ro = isRotated ? 1 : 0;
          var c = .5 * (l + r);
          var half = .5 * (r - l) * ratio;
          l = uv[0 + ro] = uv[4 + ro] = c - half;
          r = uv[2 + ro] = uv[6 + ro] = c + half;
        } else {
          ratio = wscale / hscale;
          var ro = isRotated ? -1 : 0;
          var c = .5 * (b + t);
          var half = .5 * (b - t) * ratio;
          b = uv[1 + ro] = uv[3 + ro] = c + half;
          t = uv[5 + ro] = uv[7 + ro] = c - half;
        }
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < 4; i++) {
          var srcOffset = 2 * i;
          var dstOffset = floatsPerVert * i + uvOffset;
          verts[dstOffset] = uv[srcOffset];
          verts[dstOffset + 1] = uv[srcOffset + 1];
        }
      };
      return GTAutoFitSpriteAssembler2D;
    }(GTSimpleSpriteAssembler2D_1.default);
    exports.default = GTAutoFitSpriteAssembler2D;
    cc._RF.pop();
  }, {
    "./GTSimpleSpriteAssembler2D": "GTSimpleSpriteAssembler2D"
  } ],
  GTSimpleSpriteAssembler2D: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3cf56xQ2eRKRpc+4MgUs5BS", "GTSimpleSpriteAssembler2D");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GTAssembler2D_1 = require("./GTAssembler2D");
    var GTSimpleSpriteAssembler2D = function(_super) {
      __extends(GTSimpleSpriteAssembler2D, _super);
      function GTSimpleSpriteAssembler2D() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GTSimpleSpriteAssembler2D.prototype.updateRenderData = function(sprite) {
        this.packToDynamicAtlas(sprite, sprite._spriteFrame);
        _super.prototype.updateRenderData.call(this, sprite);
      };
      GTSimpleSpriteAssembler2D.prototype.updateUVs = function(sprite) {
        var uv = sprite._spriteFrame.uv;
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        for (var i = 0; i < 4; i++) {
          var srcOffset = 2 * i;
          var dstOffset = floatsPerVert * i + uvOffset;
          verts[dstOffset] = uv[srcOffset];
          verts[dstOffset + 1] = uv[srcOffset + 1];
        }
      };
      GTSimpleSpriteAssembler2D.prototype.updateVerts = function(sprite) {
        var node = sprite.node, cw = node.width, ch = node.height, appx = node.anchorX * cw, appy = node.anchorY * ch, l, b, r, t;
        if (sprite.trim) {
          l = -appx;
          b = -appy;
          r = cw - appx;
          t = ch - appy;
        } else {
          var frame = sprite.spriteFrame, ow = frame._originalSize.width, oh = frame._originalSize.height, rw = frame._rect.width, rh = frame._rect.height, offset = frame._offset, scaleX = cw / ow, scaleY = ch / oh;
          var trimLeft = offset.x + (ow - rw) / 2;
          var trimRight = offset.x - (ow - rw) / 2;
          var trimBottom = offset.y + (oh - rh) / 2;
          var trimTop = offset.y - (oh - rh) / 2;
          l = trimLeft * scaleX - appx;
          b = trimBottom * scaleY - appy;
          r = cw + trimRight * scaleX - appx;
          t = ch + trimTop * scaleY - appy;
        }
        var local = this._local;
        local[0] = l;
        local[1] = b;
        local[2] = r;
        local[3] = t;
        this.updateWorldVerts(sprite);
      };
      return GTSimpleSpriteAssembler2D;
    }(GTAssembler2D_1.default);
    exports.default = GTSimpleSpriteAssembler2D;
    cc._RF.pop();
  }, {
    "./GTAssembler2D": "GTAssembler2D"
  } ],
  LayeredBatchingAssembler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "9b7db/QlVpNR6BkHD3PCH0u", "LayeredBatchingAssembler");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GTSimpleSpriteAssembler2D_1 = require("../../Shader/GTSimpleSpriteAssembler2D");
    var RENDER_MASK = cc.RenderFlow.FLAG_RENDER | cc.RenderFlow.FLAG_POST_RENDER;
    var PROP_DIRTY_MASK = cc.RenderFlow.FLAG_OPACITY | cc.RenderFlow.FLAG_WORLD_TRANSFORM;
    var BATCH_OPTIMIZE_SWITCH = true;
    var LayeredBatchingAssembler = function(_super) {
      __extends(LayeredBatchingAssembler, _super);
      function LayeredBatchingAssembler() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LayeredBatchingAssembler.prototype.fillBuffers = function(comp, renderer) {
        _super.prototype.fillBuffers.call(this, comp, renderer);
        false, false;
        if (!BATCH_OPTIMIZE_SWITCH) return;
        var layer = [];
        this._layers = [ layer ];
        var worldTransformFlag = renderer.worldMatDirty ? cc.RenderFlow.FLAG_WORLD_TRANSFORM : 0;
        var worldOpacityFlag = renderer.parentOpacityDirty ? cc.RenderFlow.FLAG_OPACITY_COLOR : 0;
        var dirtyFlag = worldTransformFlag | worldOpacityFlag;
        comp.node["__gtDirtyFlag"] = dirtyFlag;
        var queue = [];
        queue.push(comp.node);
        var depth = 0;
        var end = 1;
        var iter = 0;
        var gtRenderFlag;
        while (iter < queue.length) {
          var node = queue[iter++];
          dirtyFlag = node["__gtDirtyFlag"];
          for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var c = _a[_i];
            if (!c._activeInHierarchy || 0 === c._opacity) continue;
            gtRenderFlag = c._renderFlag & RENDER_MASK;
            if (gtRenderFlag > 0) {
              c["__gtRenderFlag"] = gtRenderFlag;
              c._renderFlag &= ~gtRenderFlag;
              layer.push(c);
            }
            c["__gtDirtyFlag"] = dirtyFlag | c._renderFlag & PROP_DIRTY_MASK;
            queue.push(c);
          }
          if (iter == end) {
            ++depth;
            end = queue.length;
            layer = [];
            this._layers.push(layer);
          }
        }
      };
      LayeredBatchingAssembler.prototype.postFillBuffers = function(comp, renderer) {
        var originWorldMatDirty = renderer.worldMatDirty;
        if (!BATCH_OPTIMIZE_SWITCH || !this._layers) return;
        BATCH_OPTIMIZE_SWITCH = false;
        var gtRenderFlag;
        var gtDirtyFlag;
        for (var _i = 0, _a = this._layers; _i < _a.length; _i++) {
          var layer = _a[_i];
          if (0 == layer.length) continue;
          for (var _b = 0, layer_1 = layer; _b < layer_1.length; _b++) {
            var c = layer_1[_b];
            gtRenderFlag = c["__gtRenderFlag"];
            gtDirtyFlag = c["__gtDirtyFlag"];
            renderer.worldMatDirty = gtDirtyFlag > 0 ? 1 : 0;
            c._renderFlag |= gtRenderFlag;
            cc.RenderFlow.flows[gtRenderFlag]._func(c);
          }
        }
        this._layers = null;
        BATCH_OPTIMIZE_SWITCH = true;
        renderer.worldMatDirty = originWorldMatDirty;
      };
      return LayeredBatchingAssembler;
    }(GTSimpleSpriteAssembler2D_1.default);
    exports.default = LayeredBatchingAssembler;
    cc._RF.pop();
  }, {
    "../../Shader/GTSimpleSpriteAssembler2D": "GTSimpleSpriteAssembler2D"
  } ],
  LayeredBatchingRootRenderer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7e264FDcplMY5rNb2sCjRtf", "LayeredBatchingRootRenderer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var LayeredBatchingAssembler_1 = require("./LayeredBatchingAssembler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LayeredBatchingRootRenderer = function(_super) {
      __extends(LayeredBatchingRootRenderer, _super);
      function LayeredBatchingRootRenderer() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LayeredBatchingRootRenderer.prototype.onEnable = function() {
        _super.prototype.onEnable.call(this);
        true, true;
        this.node._renderFlag |= cc.RenderFlow.FLAG_POST_RENDER;
      };
      LayeredBatchingRootRenderer.prototype._resetAssembler = function() {
        this.setVertsDirty();
        var assembler = this._assembler = new LayeredBatchingAssembler_1.default();
        assembler.init(this);
      };
      LayeredBatchingRootRenderer = __decorate([ ccclass ], LayeredBatchingRootRenderer);
      return LayeredBatchingRootRenderer;
    }(cc.Sprite);
    exports.default = LayeredBatchingRootRenderer;
    cc._RF.pop();
  }, {
    "./LayeredBatchingAssembler": "LayeredBatchingAssembler"
  } ],
  MetaBallsAssembler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8beeORb6JL3b0pL3OhMdkI", "MetaBallsAssembler");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var gfx = cc.gfx;
    var vfmtPosCenterWeb = new gfx.VertexFormat([ {
      name: gfx.ATTR_POSITION,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: "a_center",
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    } ]);
    var vfmtPosCenterNative = new gfx.VertexFormat([ {
      name: gfx.ATTR_POSITION,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: "a_corner",
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: "a_center",
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    } ]);
    var MetaBallsAssembler = function(_super) {
      __extends(MetaBallsAssembler, _super);
      function MetaBallsAssembler() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.verticesCount = 0;
        _this.indicesCount = 0;
        _this.floatsPerVert = 4;
        _this._renderData = null;
        _this._prevVerticesCount = 0;
        return _this;
      }
      MetaBallsAssembler.prototype.init = function(comp) {
        _super.prototype.init.call(this, comp);
        this._renderData = new cc.RenderData();
        this._renderData.init(this);
      };
      MetaBallsAssembler.prototype.updateColor = function(comp, color) {};
      MetaBallsAssembler.prototype.updateUVs = function(comp) {};
      MetaBallsAssembler.prototype.updateVerts = function(comp) {
        true;
        return;
        var particles;
        var PTM_RATIO;
        var posBuff;
        var r;
        var particleCount;
        var verts;
        var xoffset;
        var yoffset;
        var vertexOffset;
        var i;
        var x;
        var y;
      };
      MetaBallsAssembler.prototype.updateRenderData = function(comp) {
        var _a;
        true;
        return;
        var particleCount;
        var data;
        var indices;
        var count;
        var i, idx;
        var vertextID;
      };
      MetaBallsAssembler.prototype.getVfmt = function() {
        false;
        return vfmtPosCenterWeb;
      };
      MetaBallsAssembler.prototype.getBuffer = function() {
        return cc.renderer._handle.getBuffer("mesh", this.getVfmt());
      };
      MetaBallsAssembler.prototype.fillBuffers = function(comp, renderer) {
        false;
        var particles = this.particles;
        var particleCount = null === particles || void 0 === particles ? void 0 : particles.GetParticleCount();
        if (!particleCount) return;
        var verticesCount = 4 * particleCount;
        var indicesCount = 6 * particleCount;
        var PTM_RATIO = cc.PhysicsManager.PTM_RATIO;
        var posBuff = particles.GetPositionBuffer();
        var r = particles.GetRadius() * PTM_RATIO * 3;
        var buffer = this.getBuffer();
        var offsetInfo = buffer.request(verticesCount, indicesCount);
        var vertexOffset = offsetInfo.byteOffset >> 2, vbuf = buffer._vData;
        for (var i = 0; i < particleCount; ++i) {
          var x = posBuff[i].x * PTM_RATIO;
          var y = posBuff[i].y * PTM_RATIO;
          vbuf[vertexOffset++] = x - r;
          vbuf[vertexOffset++] = y + r;
          vbuf[vertexOffset++] = x;
          vbuf[vertexOffset++] = y;
          vbuf[vertexOffset++] = x + r;
          vbuf[vertexOffset++] = y + r;
          vbuf[vertexOffset++] = x;
          vbuf[vertexOffset++] = y;
          vbuf[vertexOffset++] = x - r;
          vbuf[vertexOffset++] = y - r;
          vbuf[vertexOffset++] = x;
          vbuf[vertexOffset++] = y;
          vbuf[vertexOffset++] = x + r;
          vbuf[vertexOffset++] = y - r;
          vbuf[vertexOffset++] = x;
          vbuf[vertexOffset++] = y;
        }
        var ibuf = buffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset;
        for (var i = 0; i < particleCount; ++i) {
          ibuf[indiceOffset++] = vertexId;
          ibuf[indiceOffset++] = vertexId + 1;
          ibuf[indiceOffset++] = vertexId + 2;
          ibuf[indiceOffset++] = vertexId + 1;
          ibuf[indiceOffset++] = vertexId + 3;
          ibuf[indiceOffset++] = vertexId + 2;
          vertexId += 4;
        }
      };
      return MetaBallsAssembler;
    }(cc.Assembler);
    exports.default = MetaBallsAssembler;
    cc._RF.pop();
  }, {} ],
  MetaBallsRenderer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "db62dHiyKNNZJwjNHybzvIL", "MetaBallsRenderer");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MetaBallsAssembler_1 = require("./MetaBallsAssembler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MetaBallsRenderer = function(_super) {
      __extends(MetaBallsRenderer, _super);
      function MetaBallsRenderer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.materialWeb = null;
        _this.materialNative = null;
        return _this;
      }
      MetaBallsRenderer.prototype.onLoad = function() {
        false;
        this.materialWeb && this.setMaterial(0, this.materialWeb);
      };
      MetaBallsRenderer.prototype.SetParticles = function(particles) {
        this._assembler.particles = particles;
        var material = this.getMaterial(0);
        if (particles && material) {
          var PTM_RATIO = cc.PhysicsManager.PTM_RATIO;
          false;
          material.setProperty("offset", [ 0, 0 ]);
          material.setProperty("radius", particles.GetRadius() * PTM_RATIO / this.node.width);
          material.setProperty("yratio", this.node.height / this.node.width);
          material.setProperty("reverseRes", [ 1 / this.node.width, 1 / this.node.height ]);
        }
        this.setVertsDirty();
      };
      MetaBallsRenderer.prototype._resetAssembler = function() {
        this.setVertsDirty();
        var assembler = this._assembler = new MetaBallsAssembler_1.default();
        assembler.init(this);
      };
      MetaBallsRenderer.prototype.update = function() {
        this.setVertsDirty();
      };
      __decorate([ property(cc.Material) ], MetaBallsRenderer.prototype, "materialWeb", void 0);
      __decorate([ property(cc.Material) ], MetaBallsRenderer.prototype, "materialNative", void 0);
      MetaBallsRenderer = __decorate([ ccclass ], MetaBallsRenderer);
      return MetaBallsRenderer;
    }(cc.Sprite);
    exports.default = MetaBallsRenderer;
    cc._RF.pop();
  }, {
    "./MetaBallsAssembler": "MetaBallsAssembler"
  } ],
  MovingBGAssembler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e1c35wY/WtDI4NVp88fW7Kq", "MovingBGAssembler");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GTSimpleSpriteAssembler2D_1 = require("../../../../Shader/GTSimpleSpriteAssembler2D");
    var gfx = cc.gfx;
    var vfmtCustom = new gfx.VertexFormat([ {
      name: gfx.ATTR_POSITION,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: gfx.ATTR_UV0,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: gfx.ATTR_UV1,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: "a_p",
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: "a_q",
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    } ]);
    var VEC2_ZERO = cc.Vec2.ZERO;
    var MovingBGAssembler = function(_super) {
      __extends(MovingBGAssembler, _super);
      function MovingBGAssembler() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.verticesCount = 4;
        _this.indicesCount = 6;
        _this.uvOffset = 2;
        _this.uv1Offset = 4;
        _this.uv2Offset = 6;
        _this.uv3Offset = 8;
        _this.floatsPerVert = 10;
        _this.moveSpeed = VEC2_ZERO;
        return _this;
      }
      MovingBGAssembler.prototype.initData = function() {
        var data = this._renderData;
        data.createFlexData(0, this.verticesCount, this.indicesCount, this.getVfmt());
        var indices = data.iDatas[0];
        var count = indices.length / 6;
        for (var i = 0, idx = 0; i < count; i++) {
          var vertextID = 4 * i;
          indices[idx++] = vertextID;
          indices[idx++] = vertextID + 1;
          indices[idx++] = vertextID + 2;
          indices[idx++] = vertextID + 1;
          indices[idx++] = vertextID + 3;
          indices[idx++] = vertextID + 2;
        }
      };
      MovingBGAssembler.prototype.getVfmt = function() {
        return vfmtCustom;
      };
      MovingBGAssembler.prototype.getBuffer = function() {
        return cc.renderer._handle.getBuffer("mesh", this.getVfmt());
      };
      MovingBGAssembler.prototype.updateColor = function(sprite, color) {};
      MovingBGAssembler.prototype.updateUVs = function(sprite) {
        _super.prototype.updateUVs.call(this, sprite);
        var uv = sprite._spriteFrame.uv;
        var uvOffset = this.uvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        var dstOffset;
        var l = uv[0], r = uv[2], t = uv[5], b = uv[1];
        var px = 1 / (r - l), qx = -l * px;
        var py = 1 / (b - t), qy = -t * py;
        var sx = this.moveSpeed.x;
        var sy = this.moveSpeed.y;
        for (var i = 0; i < 4; ++i) {
          dstOffset = floatsPerVert * i + uvOffset;
          verts[dstOffset + 2] = sx;
          verts[dstOffset + 3] = sy;
          verts[dstOffset + 4] = px;
          verts[dstOffset + 5] = py;
          verts[dstOffset + 6] = qx;
          verts[dstOffset + 7] = qy;
        }
      };
      return MovingBGAssembler;
    }(GTSimpleSpriteAssembler2D_1.default);
    exports.default = MovingBGAssembler;
    cc._RF.pop();
  }, {
    "../../../../Shader/GTSimpleSpriteAssembler2D": "GTSimpleSpriteAssembler2D"
  } ],
  MovingBGSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d6bb3Z+1ARGDapKZIvBpCUs", "MovingBGSprite");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MovingBGAssembler_1 = require("./MovingBGAssembler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MovingBGSprite = function(_super) {
      __extends(MovingBGSprite, _super);
      function MovingBGSprite() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._moveSpeed = cc.Vec2.ZERO;
        return _this;
      }
      Object.defineProperty(MovingBGSprite.prototype, "moveSpeed", {
        get: function() {
          return this._moveSpeed;
        },
        set: function(value) {
          this._moveSpeed = value;
          this.FlushProperties();
        },
        enumerable: false,
        configurable: true
      });
      MovingBGSprite.prototype.FlushProperties = function() {
        var assembler = this._assembler;
        if (!assembler) return;
        assembler.moveSpeed = this._moveSpeed;
        this.setVertsDirty();
      };
      MovingBGSprite.prototype.onEnable = function() {
        _super.prototype.onEnable.call(this);
      };
      MovingBGSprite.prototype._resetAssembler = function() {
        this.setVertsDirty();
        var assembler = this._assembler = new MovingBGAssembler_1.default();
        this.FlushProperties();
        assembler.init(this);
        this._updateColor();
      };
      __decorate([ property(cc.Vec2) ], MovingBGSprite.prototype, "moveSpeed", null);
      __decorate([ property(cc.Vec2) ], MovingBGSprite.prototype, "_moveSpeed", void 0);
      MovingBGSprite = __decorate([ ccclass ], MovingBGSprite);
      return MovingBGSprite;
    }(cc.Sprite);
    exports.default = MovingBGSprite;
    cc._RF.pop();
  }, {
    "./MovingBGAssembler": "MovingBGAssembler"
  } ],
  NavigatorButton: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "58a22OqN5RI3plga6Z+CurZ", "NavigatorButton");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var NavigatorButton = function(_super) {
      __extends(NavigatorButton, _super);
      function NavigatorButton() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.sceneName = "SceneWelcome";
        return _this;
      }
      NavigatorButton.prototype.onLoad = function() {
        var sceneName = this.sceneName;
        this.node.on(cc.Node.EventType.TOUCH_END, function() {
          cc.director.loadScene(sceneName);
        });
      };
      __decorate([ property(cc.String) ], NavigatorButton.prototype, "sceneName", void 0);
      NavigatorButton = __decorate([ ccclass ], NavigatorButton);
      return NavigatorButton;
    }(cc.Component);
    exports.default = NavigatorButton;
    cc._RF.pop();
  }, {} ],
  SDF: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e2f95PbDZFV6QUVq6SCXs6", "SDF");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.SDF = void 0;
    var INF = 1e10;
    var SDF = function() {
      function SDF() {}
      SDF.prototype.RenderToMemory = function(root, others, target, extend) {
        void 0 === extend && (extend = 0);
        var node = new cc.Node();
        node.parent = root;
        node.x = (.5 - root.anchorX) * root.width;
        node.y = (.5 - root.anchorY) * root.height;
        var camera = node.addComponent(cc.Camera);
        camera.backgroundColor = new cc.Color(255, 255, 255, 0);
        camera.clearFlags = cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL | cc.Camera.ClearFlags.COLOR;
        camera.cullingMask = 4294967295;
        var success = false;
        try {
          var scaleX = 1;
          var scaleY = 1;
          var gl = cc.game._renderContext;
          var targetWidth = Math.floor(root.width * scaleX + 2 * extend);
          var targetHeight = Math.floor(root.height * scaleY + 2 * extend);
          var texture = target["__gt_texture"];
          if (!texture || texture.width != targetWidth || texture.height != target.height) {
            texture = target["__gt_texture"] = new cc.RenderTexture();
            texture.initWithSize(targetWidth, targetHeight, gl.STENCIL_INDEX8);
            texture.packable = false;
          }
          camera.alignWithScreen = false;
          camera.orthoSize = targetHeight / 2;
          camera.targetTexture = texture;
          camera.render(root);
          if (others) for (var _i = 0, others_1 = others; _i < others_1.length; _i++) {
            var o = others_1[_i];
            camera.render(o);
          }
          var screenShot = target;
          screenShot.active = true;
          screenShot.opacity = 255;
          screenShot.width = targetWidth;
          screenShot.height = targetHeight;
          screenShot.angle = root.angle;
          screenShot.scaleX = 1 / scaleX;
          screenShot.scaleY = -1 / scaleY;
          var sprite = screenShot.getComponent(cc.Sprite);
          sprite || (sprite = screenShot.addComponent(cc.Sprite));
          if (!sprite.spriteFrame) {
            sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
            sprite.spriteFrame = new cc.SpriteFrame(texture);
          }
          success = true;
        } finally {
          camera.targetTexture = null;
          node.removeFromParent();
          success || (target.active = false);
        }
        return target["__gt_texture"];
      };
      SDF.prototype.RenderSDF = function(texture, radius, cutoff) {
        var imgData = texture.readPixels();
        var width = texture.width;
        var height = texture.height;
        void 0 === cutoff && (cutoff = 0);
        radius = radius || this.radius || 18;
        var area = width * height;
        var longSide = Math.max(width, height);
        this.gridOuter = new Float64Array(area);
        this.gridInner = new Float64Array(area);
        this.f = new Float64Array(longSide);
        this.d = new Float64Array(longSide);
        this.z = new Float64Array(longSide + 1);
        this.v = new Int16Array(longSide);
        var alphaChannel = new Uint8ClampedArray(area);
        for (var i = 0; i < area; i++) {
          var a = imgData[4 * i + 3] / 255;
          this.gridOuter[i] = 1 === a ? 0 : 0 === a ? INF : Math.pow(Math.max(0, .5 - a), 2);
          this.gridInner[i] = 1 === a ? INF : 0 === a ? 0 : Math.pow(Math.max(0, a - .5), 2);
        }
        this.EDT(this.gridOuter, width, height, this.f, this.d, this.v, this.z);
        this.EDT(this.gridInner, width, height, this.f, this.d, this.v, this.z);
        for (i = 0; i < area; i++) {
          var d = this.gridOuter[i] - this.gridInner[i];
          alphaChannel[i] = Math.max(0, Math.min(255, Math.round(255 - 255 * (d / radius + cutoff))));
          imgData[4 * i + 3] = alphaChannel[i];
        }
        var resultTexture = new cc.RenderTexture();
        resultTexture.initWithData(imgData, cc.Texture2D.PixelFormat.RGBA8888, width, height);
        return {
          texture: resultTexture,
          alpha: alphaChannel
        };
      };
      SDF.prototype.EDT = function(data, width, height, f, d, v, z) {
        for (var x = 0; x < width; x++) {
          for (var y = 0; y < height; y++) f[y] = data[y * width + x];
          this.EDT1D(f, d, v, z, height);
          for (y = 0; y < height; y++) data[y * width + x] = d[y];
        }
        for (y = 0; y < height; y++) {
          for (x = 0; x < width; x++) f[x] = data[y * width + x];
          this.EDT1D(f, d, v, z, width);
          for (x = 0; x < width; x++) data[y * width + x] = Math.sqrt(d[x]);
        }
      };
      SDF.prototype.EDT1D = function(f, d, v, z, n) {
        v[0] = 0;
        z[0] = -INF;
        z[1] = +INF;
        for (var q = 1, k = 0; q < n; q++) {
          var s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
          while (s <= z[k]) {
            k--;
            s = (f[q] + q * q - (f[v[k]] + v[k] * v[k])) / (2 * q - 2 * v[k]);
          }
          k++;
          v[k] = q;
          z[k] = s;
          z[k + 1] = +INF;
        }
        for (q = 0, k = 0; q < n; q++) {
          while (z[k + 1] < q) k++;
          d[q] = (q - v[k]) * (q - v[k]) + f[v[k]];
        }
      };
      return SDF;
    }();
    exports.SDF = SDF;
    cc._RF.pop();
  }, {} ],
  SceneLayeredBatchingScrollView: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a8e90q5ybRNipx0efwIGCPq", "SceneLayeredBatchingScrollView");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneLayeredBatchingScrollView = function(_super) {
      __extends(SceneLayeredBatchingScrollView, _super);
      function SceneLayeredBatchingScrollView() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.item = null;
        _this.content = null;
        return _this;
      }
      SceneLayeredBatchingScrollView.prototype.onLoad = function() {
        for (var i = 0; i < 100; ++i) {
          var newItem = cc.instantiate(this.item);
          newItem.parent = this.content;
        }
      };
      __decorate([ property(cc.Node) ], SceneLayeredBatchingScrollView.prototype, "item", void 0);
      __decorate([ property(cc.Node) ], SceneLayeredBatchingScrollView.prototype, "content", void 0);
      SceneLayeredBatchingScrollView = __decorate([ ccclass ], SceneLayeredBatchingScrollView);
      return SceneLayeredBatchingScrollView;
    }(cc.Component);
    exports.default = SceneLayeredBatchingScrollView;
    cc._RF.pop();
  }, {} ],
  SceneMetaBalls: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d511arYq1Fy75gm6m2P7X0", "SceneMetaBalls");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var MetaBallsRenderer_1 = require("./Shader/MetaBalls/MetaBallsRenderer");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneMetaBalls = function(_super) {
      __extends(SceneMetaBalls, _super);
      function SceneMetaBalls() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.waterRendererCamera = null;
        _this.waterRenderer = null;
        _this.waterRendererPass2 = null;
        _this.metaBallsRenderer = null;
        _this.particleBox = null;
        _this._world = null;
        _this._particles = null;
        _this._particleGroup = null;
        return _this;
      }
      SceneMetaBalls.prototype.onLoad = function() {
        true;
        this.SetupWorld();
        var texture = new cc.RenderTexture();
        var size = this.waterRendererPass2.node.getContentSize();
        texture.initWithSize(size.width, size.height);
        var spriteFrame = new cc.SpriteFrame();
        spriteFrame.setTexture(texture);
        this.waterRendererCamera.targetTexture = texture;
        this.waterRendererPass2.spriteFrame = spriteFrame;
      };
      SceneMetaBalls.prototype.SetupWorld = function() {
        var physicsManager = cc.director.getPhysicsManager();
        physicsManager.enabled = true;
        var world = this._world = physicsManager._world;
        var psd = new b2.ParticleSystemDef();
        psd.radius = .35;
        psd.viscousStrength = 0;
        this._particles = world.CreateParticleSystem(psd);
      };
      SceneMetaBalls.prototype.CreateParticlesGroup = function() {
        var PTM_RATIO = cc.PhysicsManager.PTM_RATIO;
        var boxSize = this.particleBox.getContentSize();
        var boxPos = this.particleBox.getPosition();
        var size = cc.winSize;
        var box = new b2.PolygonShape();
        box.SetAsBox(boxSize.width / 2 / PTM_RATIO, boxSize.height / 2 / PTM_RATIO);
        var particleGroupDef = new b2.ParticleGroupDef();
        particleGroupDef.shape = box;
        particleGroupDef.flags = b2.waterParticle;
        particleGroupDef.position.Set((boxPos.x + size.width / 2) / PTM_RATIO, (boxPos.y + size.height / 2) / PTM_RATIO);
        this._particleGroup = this._particles.CreateParticleGroup(particleGroupDef);
        this.metaBallsRenderer.SetParticles(this._particles);
        var vertsCount = this._particles.GetParticleCount();
        console.log(vertsCount);
      };
      SceneMetaBalls.prototype.GenerateWater = function() {
        this.ResetParticleGroup();
        var that = this;
        cc.director.getScheduler().schedule(function() {
          that.CreateParticlesGroup();
        }, this.node, 0, 0, 0, false);
      };
      SceneMetaBalls.prototype.ResetParticleGroup = function() {
        if (null != this._particleGroup) {
          this._particleGroup.DestroyParticles(false);
          this._particles.DestroyParticleGroup(this._particleGroup);
          this._particleGroup = null;
        }
      };
      __decorate([ property(cc.Camera) ], SceneMetaBalls.prototype, "waterRendererCamera", void 0);
      __decorate([ property(cc.Node) ], SceneMetaBalls.prototype, "waterRenderer", void 0);
      __decorate([ property(cc.Sprite) ], SceneMetaBalls.prototype, "waterRendererPass2", void 0);
      __decorate([ property(MetaBallsRenderer_1.default) ], SceneMetaBalls.prototype, "metaBallsRenderer", void 0);
      __decorate([ property(cc.Node) ], SceneMetaBalls.prototype, "particleBox", void 0);
      SceneMetaBalls = __decorate([ ccclass ], SceneMetaBalls);
      return SceneMetaBalls;
    }(cc.Component);
    exports.default = SceneMetaBalls;
    var enableLowLevelOptimize = true;
    enableLowLevelOptimize && cc.game.once(cc.game.EVENT_ENGINE_INITED, function() {
      b2.ParticleSystem.prototype.FindContacts_Reference = function(contacts) {
        if (!this.m_flagsBuffer.data) throw new Error();
        if (!this.m_positionBuffer.data) throw new Error();
        var pos_data = this.m_positionBuffer.data;
        var squaredDiameter = this.m_squaredDiameter;
        var inverseDiameter = this.m_inverseDiameter;
        var beginProxy = 0;
        var endProxy = this.m_proxyBuffer.count;
        this.m_contactBuffer.count = 0;
        var proxyData = this.m_proxyBuffer.data;
        var computeRelativeTag = b2.ParticleSystem.computeRelativeTag;
        var dataA;
        var tagA = 0;
        var indexA = 0;
        var rightTag = 0;
        var dataB;
        var pos_data = this.m_positionBuffer.data;
        var flagBufferData = this.m_flagsBuffer.data;
        var flagBufferDataA;
        var indexB = 0;
        var pos_dataA;
        var pos_dataB;
        var ax = 0, ay = 0, bx = 0, by = 0, dx = 0, dy = 0;
        var distBtParticlesSq = 0;
        var bottomLeftTag = 0;
        var bottomRightTag = 0;
        var isFin = isFinite;
        for (var a = beginProxy, c = beginProxy; a < endProxy; ++a) {
          dataA = proxyData[a];
          tagA = dataA.tag;
          indexA = dataA.index;
          pos_dataA = pos_data[indexA];
          flagBufferDataA = flagBufferData[indexA];
          rightTag = computeRelativeTag(tagA, 1, 0);
          for (var b = a + 1; b < endProxy; ++b) {
            dataB = proxyData[b];
            if (rightTag < dataB.tag) break;
            indexB = dataB.index;
            pos_dataB = pos_data[indexB];
            bx = pos_dataB.x;
            by = pos_dataB.y;
            ax = pos_dataA.x;
            ay = pos_dataA.y;
            dx = bx - ax;
            dy = by - ay;
            distBtParticlesSq = dx * dx + dy * dy;
            if (distBtParticlesSq < squaredDiameter) {
              var invD = 1 / Math.sqrt(distBtParticlesSq);
              isFin(invD) || (invD = 198177537e11);
              var contact = this.m_contactBuffer.data[this.m_contactBuffer.Append()];
              contact.indexA = indexA;
              contact.indexB = indexB;
              contact.flags = flagBufferDataA | flagBufferData[indexB];
              contact.weight = 1 - distBtParticlesSq * invD * inverseDiameter;
              contact.normal.x = invD * dx;
              contact.normal.y = invD * dy;
            }
          }
          bottomLeftTag = computeRelativeTag(tagA, -1, 1);
          for (;c < endProxy; ++c) if (bottomLeftTag <= proxyData[c].tag) break;
          bottomRightTag = computeRelativeTag(tagA, 1, 1);
          for (var b = c; b < endProxy; ++b) {
            dataB = proxyData[b];
            if (bottomRightTag < dataB.tag) break;
            indexB = dataB.index;
            pos_dataB = pos_data[indexB];
            bx = pos_dataB.x;
            by = pos_dataB.y;
            ax = pos_dataA.x;
            ay = pos_dataA.y;
            dx = bx - ax;
            dy = by - ay;
            distBtParticlesSq = dx * dx + dy * dy;
            if (distBtParticlesSq < squaredDiameter) {
              var invD = 1 / Math.sqrt(distBtParticlesSq);
              isFin(invD) || (invD = 198177537e11);
              var contact = this.m_contactBuffer.data[this.m_contactBuffer.Append()];
              contact.indexA = indexA;
              contact.indexB = indexB;
              contact.flags = flagBufferDataA | flagBufferData[indexB];
              contact.weight = 1 - distBtParticlesSq * invD * inverseDiameter;
              contact.normal.x = invD * dx;
              contact.normal.y = invD * dy;
            }
          }
        }
      };
    });
    cc._RF.pop();
  }, {
    "./Shader/MetaBalls/MetaBallsRenderer": "MetaBallsRenderer"
  } ],
  SceneParticlesBatching: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3a49bFsWhtOtpWG6esCYAJR", "SceneParticlesBatching");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneParticlesBatching = function(_super) {
      __extends(SceneParticlesBatching, _super);
      function SceneParticlesBatching() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._originFillBuffersFn = null;
        return _this;
      }
      SceneParticlesBatching.prototype.onLoad = function() {};
      SceneParticlesBatching.prototype.Batching = function() {
        if (this._originFillBuffersFn) return;
        var particleAssembler = cc.ParticleSystem.__assembler__;
        this._originFillBuffersFn = particleAssembler.prototype.fillBuffers;
        particleAssembler.prototype.fillBuffers = function(comp, renderer) {
          if (!this._ia) return;
          var simulator = comp._simulator;
          var particleCount = simulator.particles.length;
          if (0 === particleCount) return;
          var PositionType = cc.ParticleSystem.PositionType;
          comp.positionType === PositionType.RELATIVE ? renderer.node = comp.node.parent : renderer.node = comp.node;
          var ownBuffer = this.getBuffer();
          var commitBuffer = cc.renderer._handle._meshBuffer;
          var offsetInfo = commitBuffer.request(4 * particleCount, 6 * particleCount);
          var vertexOffset = offsetInfo.byteOffset >> 2, vbuf = commitBuffer._vData;
          var vData = ownBuffer._vData, iData = ownBuffer._iData;
          var vLen = 4 * particleCount * 5;
          vLen + vertexOffset > vbuf.length ? vbuf.set(vData.subarray(0, vbuf.length - vertexOffset), vertexOffset) : vbuf.set(vData.subarray(0, vLen), vertexOffset);
          var ibuf = commitBuffer._iData, indiceOffset = offsetInfo.indiceOffset, vertexId = offsetInfo.vertexOffset;
          var iLen = 6 * particleCount;
          for (var i = 0; i < iLen; i++) ibuf[indiceOffset++] = vertexId + iData[i];
        };
      };
      SceneParticlesBatching.prototype.Recover = function() {
        if (!this._originFillBuffersFn) return;
        cc.ParticleSystem.__assembler__.prototype.fillBuffers = this._originFillBuffersFn;
        this._originFillBuffersFn = null;
      };
      SceneParticlesBatching.prototype.onDisable = function() {
        this.Recover();
      };
      SceneParticlesBatching = __decorate([ ccclass ], SceneParticlesBatching);
      return SceneParticlesBatching;
    }(cc.Component);
    exports.default = SceneParticlesBatching;
    cc._RF.pop();
  }, {} ],
  SceneSDF: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c0baeCexs1O36cWxtIx48zu", "SceneSDF");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.TestSDF = void 0;
    var SDF_1 = require("./SDF");
    var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu, property = _a.property;
    var TestSDF = function(_super) {
      __extends(TestSDF, _super);
      function TestSDF() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.renderNode = null;
        _this.objNode = null;
        _this.btnSwitchImage = null;
        _this.btnSwitchEffect = null;
        _this.images = [];
        _this.materials = [];
        _this._imageIndex = 0;
        _this._effectIndex = 0;
        return _this;
      }
      TestSDF.prototype.onLoad = function() {
        var _a, _b;
        null === (_a = this.btnSwitchImage) || void 0 === _a ? void 0 : _a.on("click", this.NextImage, this);
        null === (_b = this.btnSwitchEffect) || void 0 === _b ? void 0 : _b.on("click", this.NextEffect, this);
      };
      TestSDF.prototype.start = function() {
        this._sdf = new SDF_1.SDF();
        this._imageIndex = -1;
        this.NextImage();
      };
      TestSDF.prototype.NextImage = function() {
        var index = this._imageIndex = (this._imageIndex + 1) % this.images.length;
        var sf = this.images[index];
        var sz = sf.getOriginalSize();
        this.objNode.getComponent(cc.Sprite).spriteFrame = sf;
        this.renderNode.width = this.objNode.width = sz.width;
        this.renderNode.height = this.objNode.height = sz.height;
        var sdfRadius = Math.max(60, sz.height / 3);
        var cutoff = .5;
        var texture = this._sdf.RenderToMemory(this.objNode, null, this.renderNode, sdfRadius * (1 - cutoff));
        var result = this._sdf.RenderSDF(texture, sdfRadius, cutoff);
        var sprite = this.renderNode.getComponent(cc.Sprite);
        sprite.spriteFrame = new cc.SpriteFrame(result.texture);
        this.FlushMatProperties(sprite, sdfRadius, cc.size(texture.width, texture.height));
      };
      TestSDF.prototype.FlushMatProperties = function(sprite, sdfRadius, sz) {
        if (2 !== this._effectIndex) return;
        var mat = sprite.getMaterial(0);
        mat.setProperty("yRatio", sz.height / sz.width);
        mat.setProperty("sdfRatio", 2 * sdfRadius / sz.width);
        mat.setProperty("outlineHalfWidth", 3 / sdfRadius);
      };
      TestSDF.prototype.NextEffect = function() {
        var index = this._effectIndex = (this._effectIndex + 1) % this.materials.length;
        var mat = this.materials[index];
        var sprite = this.renderNode.getComponent(cc.Sprite);
        sprite.setMaterial(0, mat);
        var sf = sprite.spriteFrame;
        var sz = sf.getOriginalSize();
        var sdfRadius = Math.max(60, sz.height / 3);
        this.FlushMatProperties(sprite, sdfRadius, sz);
      };
      TestSDF.prototype.OnTimeChanged = function(e) {
        var progress = e.progress;
        var sprite = this.renderNode.getComponent(cc.Sprite);
        var mat = sprite.getMaterial(0);
        mat.setProperty("time", 3.141592653589793 * progress * 2);
      };
      __decorate([ property(cc.Node) ], TestSDF.prototype, "renderNode", void 0);
      __decorate([ property(cc.Node) ], TestSDF.prototype, "objNode", void 0);
      __decorate([ property(cc.Node) ], TestSDF.prototype, "btnSwitchImage", void 0);
      __decorate([ property(cc.Node) ], TestSDF.prototype, "btnSwitchEffect", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], TestSDF.prototype, "images", void 0);
      __decorate([ property([ cc.Material ]) ], TestSDF.prototype, "materials", void 0);
      TestSDF = __decorate([ ccclass ], TestSDF);
      return TestSDF;
    }(cc.Component);
    exports.TestSDF = TestSDF;
    cc._RF.pop();
  }, {
    "./SDF": "SDF"
  } ],
  SceneSpriteMaskedAvatars: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e358arsN59DbZ0N3kUBhrCb", "SceneSpriteMaskedAvatars");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SpriteMaskedAvatarSprite_1 = require("./Shader/SpriteMaskedAvatar/SpriteMaskedAvatarSprite");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneSpriteMaskedAvatars = function(_super) {
      __extends(SceneSpriteMaskedAvatars, _super);
      function SceneSpriteMaskedAvatars() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.board = null;
        _this._enableMask = true;
        return _this;
      }
      SceneSpriteMaskedAvatars.prototype.onLoad = function() {};
      SceneSpriteMaskedAvatars.prototype.onToggleMask = function() {
        var enable = this._enableMask = !this._enableMask;
        for (var _i = 0, _a = this.board.children; _i < _a.length; _i++) {
          var c = _a[_i];
          var comp = c.getComponent(SpriteMaskedAvatarSprite_1.default);
          comp.enableMask = enable;
        }
      };
      __decorate([ property(cc.Node) ], SceneSpriteMaskedAvatars.prototype, "board", void 0);
      SceneSpriteMaskedAvatars = __decorate([ ccclass ], SceneSpriteMaskedAvatars);
      return SceneSpriteMaskedAvatars;
    }(cc.Component);
    exports.default = SceneSpriteMaskedAvatars;
    cc._RF.pop();
  }, {
    "./Shader/SpriteMaskedAvatar/SpriteMaskedAvatarSprite": "SpriteMaskedAvatarSprite"
  } ],
  SceneTestGraphics: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "7ec6envootE0LqAVSRT/P5s", "SceneTestGraphics");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneTestGraphics = function(_super) {
      __extends(SceneTestGraphics, _super);
      function SceneTestGraphics() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.graphics = null;
        return _this;
      }
      SceneTestGraphics.prototype.onLoad = function() {
        var ctx = this.graphics;
        ctx.clear();
        ctx.strokeColor = cc.Color.BLACK;
        ctx.fillColor = cc.Color.RED;
        ctx.lineWidth = 5;
        ctx.moveTo(0, 0);
        ctx.lineTo(100, 100);
        ctx.stroke();
        ctx.rect(20, 20, 80, 100);
        ctx.fill();
      };
      __decorate([ property(cc.Graphics) ], SceneTestGraphics.prototype, "graphics", void 0);
      SceneTestGraphics = __decorate([ ccclass ], SceneTestGraphics);
      return SceneTestGraphics;
    }(cc.Component);
    exports.default = SceneTestGraphics;
    cc._RF.pop();
  }, {} ],
  SceneTest: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4d102k6wppNGIkjlgi8Oycw", "SceneTest");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneTest = function(_super) {
      __extends(SceneTest, _super);
      function SceneTest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SceneTest.prototype.onLoad = function() {};
      SceneTest = __decorate([ ccclass ], SceneTest);
      return SceneTest;
    }(cc.Component);
    exports.default = SceneTest;
    cc._RF.pop();
  }, {} ],
  SceneWelcome: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8efa3lyFNdPHJ6ND0fspcQz", "SceneWelcome");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneTest = function(_super) {
      __extends(SceneTest, _super);
      function SceneTest() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SceneTest.prototype.onLoad = function() {};
      SceneTest.prototype.onBtnClick = function(e) {
        var name = e.currentTarget.name;
        cc.director.loadScene(name);
      };
      SceneTest = __decorate([ ccclass ], SceneTest);
      return SceneTest;
    }(cc.Component);
    exports.default = SceneTest;
    cc._RF.pop();
  }, {} ],
  SimpleDraggable: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "89871MxfkBJjJh0o236XNDC", "SimpleDraggable");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SimpleDraggable = function(_super) {
      __extends(SimpleDraggable, _super);
      function SimpleDraggable() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._touchOffset = cc.Vec2.ZERO;
        _this._isDragging = false;
        _this._moveCallback = null;
        return _this;
      }
      SimpleDraggable.prototype.onLoad = function() {
        this.node.on(cc.Node.EventType.TOUCH_START, this.OnTouchStart.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.OnTouchMove.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_END, this.OnTouchEnd.bind(this));
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnTouchEnd.bind(this));
      };
      SimpleDraggable.prototype.Setup = function(moveCallback) {
        this._moveCallback = moveCallback;
      };
      SimpleDraggable.prototype.OnTouchStart = function(e) {
        var touchWorldPos = e.getLocation();
        var nodeWorldPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
        this._touchOffset = nodeWorldPos.sub(touchWorldPos);
        this._isDragging = true;
        this._moveCallback && this._moveCallback(this.node.position);
      };
      SimpleDraggable.prototype.OnTouchMove = function(e) {
        if (!this._isDragging) return;
        var touchWorldPos = e.getLocation();
        this.TraceTouchPos(touchWorldPos);
        this._moveCallback && this._moveCallback(this.node.position);
      };
      SimpleDraggable.prototype.OnTouchEnd = function(e) {
        if (!this._isDragging) return;
        this._isDragging = false;
      };
      SimpleDraggable.prototype.TraceTouchPos = function(worldPos) {
        var nodeWorldPos = worldPos.add(this._touchOffset);
        var localPos = this.node.parent.convertToNodeSpaceAR(nodeWorldPos);
        this.node.position = localPos;
      };
      SimpleDraggable = __decorate([ ccclass ], SimpleDraggable);
      return SimpleDraggable;
    }(cc.Component);
    exports.default = SimpleDraggable;
    cc._RF.pop();
  }, {} ],
  SpriteMaskedAvatarAssembler: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "da46czoLEBHc711TNBTITkZ", "SpriteMaskedAvatarAssembler");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GTAutoFitSpriteAssembler2D_1 = require("../../../../Shader/GTAutoFitSpriteAssembler2D");
    var gfx = cc.gfx;
    var vfmtPosUvUv = new gfx.VertexFormat([ {
      name: gfx.ATTR_POSITION,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: gfx.ATTR_UV0,
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    }, {
      name: "a_mask_uv",
      type: gfx.ATTR_TYPE_FLOAT32,
      num: 2
    } ]);
    var SpriteMaskedAvatarAssembler = function(_super) {
      __extends(SpriteMaskedAvatarAssembler, _super);
      function SpriteMaskedAvatarAssembler() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.maskUvOffset = 4;
        _this.floatsPerVert = 6;
        return _this;
      }
      SpriteMaskedAvatarAssembler.prototype.initData = function() {
        var data = this._renderData;
        data.createFlexData(0, this.verticesCount, this.indicesCount, this.getVfmt());
        var indices = data.iDatas[0];
        var count = indices.length / 6;
        for (var i = 0, idx = 0; i < count; i++) {
          var vertextID = 4 * i;
          indices[idx++] = vertextID;
          indices[idx++] = vertextID + 1;
          indices[idx++] = vertextID + 2;
          indices[idx++] = vertextID + 1;
          indices[idx++] = vertextID + 3;
          indices[idx++] = vertextID + 2;
        }
      };
      SpriteMaskedAvatarAssembler.prototype.getVfmt = function() {
        return vfmtPosUvUv;
      };
      SpriteMaskedAvatarAssembler.prototype.getBuffer = function() {
        return cc.renderer._handle.getBuffer("mesh", this.getVfmt());
      };
      SpriteMaskedAvatarAssembler.prototype.updateColor = function(comp, color) {};
      SpriteMaskedAvatarAssembler.prototype.updateUVs = function(sprite) {
        _super.prototype.updateUVs.call(this, sprite);
        var maskUvOffset = this.maskUvOffset;
        var floatsPerVert = this.floatsPerVert;
        var verts = this._renderData.vDatas[0];
        var maskUv = sprite._mask.uv;
        for (var i = 0; i < 4; i++) {
          var srcOffset = 2 * i;
          var dstOffset = floatsPerVert * i + maskUvOffset;
          verts[dstOffset] = maskUv[srcOffset];
          verts[dstOffset + 1] = maskUv[srcOffset + 1];
        }
      };
      return SpriteMaskedAvatarAssembler;
    }(GTAutoFitSpriteAssembler2D_1.default);
    exports.default = SpriteMaskedAvatarAssembler;
    cc._RF.pop();
  }, {
    "../../../../Shader/GTAutoFitSpriteAssembler2D": "GTAutoFitSpriteAssembler2D"
  } ],
  SpriteMaskedAvatarSprite: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4c9d8O+Ld1Ofby5UG1PB2fH", "SpriteMaskedAvatarSprite");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) b.hasOwnProperty(p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var SpriteMaskedAvatarAssembler_1 = require("./SpriteMaskedAvatarAssembler");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SpriteMaskedAvatarSprite = function(_super) {
      __extends(SpriteMaskedAvatarSprite, _super);
      function SpriteMaskedAvatarSprite() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._mask = null;
        _this._enableMask = true;
        return _this;
      }
      Object.defineProperty(SpriteMaskedAvatarSprite.prototype, "mask", {
        get: function() {
          return this._mask;
        },
        set: function(value) {
          this._mask = value;
          this.setVertsDirty();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(SpriteMaskedAvatarSprite.prototype, "enableMask", {
        get: function() {
          return this._enableMask;
        },
        set: function(value) {
          this._enableMask = value;
          var mat = this.getMaterial(0);
          mat && mat.setProperty("enableMask", value ? 1 : 0);
        },
        enumerable: false,
        configurable: true
      });
      SpriteMaskedAvatarSprite.prototype._resetAssembler = function() {
        this.setVertsDirty();
        var assembler = this._assembler = new SpriteMaskedAvatarAssembler_1.default();
        assembler.init(this);
        var mask = this._mask;
        var mat = this.getMaterial(0);
        if (mat && mask) {
          mat.setProperty("mask", mask.getTexture());
          mat.setProperty("enableMask", this._enableMask ? 1 : 0);
        }
      };
      SpriteMaskedAvatarSprite.prototype._validateRender = function() {
        _super.prototype._validateRender.call(this);
        var mask = this._mask;
        if (mask && mask.textureLoaded()) return;
        this.disableRender();
      };
      __decorate([ property(cc.SpriteFrame) ], SpriteMaskedAvatarSprite.prototype, "mask", null);
      __decorate([ property(cc.SpriteFrame) ], SpriteMaskedAvatarSprite.prototype, "_mask", void 0);
      __decorate([ property(cc.Boolean) ], SpriteMaskedAvatarSprite.prototype, "enableMask", null);
      __decorate([ property(cc.Boolean) ], SpriteMaskedAvatarSprite.prototype, "_enableMask", void 0);
      SpriteMaskedAvatarSprite = __decorate([ ccclass ], SpriteMaskedAvatarSprite);
      return SpriteMaskedAvatarSprite;
    }(cc.Sprite);
    exports.default = SpriteMaskedAvatarSprite;
    cc._RF.pop();
  }, {
    "./SpriteMaskedAvatarAssembler": "SpriteMaskedAvatarAssembler"
  } ]
}, {}, [ "SceneTestGraphics", "SceneSpriteMaskedAvatars", "AvatarAssembler", "AvatarSprite", "EqualScalingAssembler", "EqualScalingSprite", "SpriteMaskedAvatarAssembler", "SpriteMaskedAvatarSprite", "MovingBGAssembler", "MovingBGSprite", "LayeredBatchingAssembler", "LayeredBatchingRootRenderer", "SceneLayeredBatchingScrollView", "SceneMetaBalls", "MetaBallsAssembler", "MetaBallsRenderer", "SceneParticlesBatching", "SDF", "SceneSDF", "NavigatorButton", "SimpleDraggable", "SceneTest", "SceneWelcome", "GTAssembler2D", "GTAutoFitSpriteAssembler2D", "GTSimpleSpriteAssembler2D" ]);