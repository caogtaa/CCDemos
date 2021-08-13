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
  CAParser: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "54b83KY5shP84aPwL97wCnR", "CAParser");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.CAParser = exports.CAInfo = void 0;
    var CAInfo = function() {
      function CAInfo() {
        this.tokens = [];
      }
      return CAInfo;
    }();
    exports.CAInfo = CAInfo;
    var CAParser = function() {
      function CAParser() {}
      CAParser.Parse = function(data) {
        var num = 0;
        var tokens = [];
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
          var c = data_1[_i];
          if ("!" === c) break;
          if ("0" <= c && c <= "9") {
            num *= 10;
            num += parseInt(c);
          } else {
            tokens.push({
              count: Math.max(1, num),
              type: c
            });
            num = 0;
          }
        }
        var w = 0;
        var h = 0;
        num = 0;
        for (var _a = 0, tokens_1 = tokens; _a < tokens_1.length; _a++) {
          var t = tokens_1[_a];
          if ("$" === t.type) {
            h += t.count;
            w = Math.max(w, num);
            num = 0;
          } else num += t.count;
        }
        var result = new CAInfo();
        result.tokens = tokens;
        result.width = w;
        result.height = h;
        return result;
      };
      CAParser.Merge = function(rInfo, gInfo, bInfo, aInfo, targetWidth, targetHeight, out) {
        var compOffset = [ 0 ];
        gInfo || compOffset.push(1);
        bInfo || compOffset.push(2);
        aInfo || compOffset.push(3);
        var imgData = new Uint8Array(targetHeight * targetWidth * 4);
        this.Fill(rInfo, compOffset, imgData, targetWidth, targetHeight);
        gInfo && this.Fill(gInfo, [ 1 ], imgData, targetWidth, targetHeight);
        bInfo && this.Fill(bInfo, [ 2 ], imgData, targetWidth, targetHeight);
        aInfo && this.Fill(aInfo, [ 3 ], imgData, targetWidth, targetHeight);
        var texture = out || new cc.RenderTexture();
        texture.initWithData(imgData, cc.Texture2D.PixelFormat.RGBA8888, targetWidth, targetHeight);
        texture.packable = false;
        texture.setWrapMode(cc.Texture2D.WrapMode.REPEAT, cc.Texture2D.WrapMode.REPEAT);
        texture.setFilters(cc.Texture2D.Filter.NEAREST, cc.Texture2D.Filter.NEAREST);
        return texture;
      };
      CAParser.Fill = function(info, compOffset, imgData, targetWidth, targetHeight) {
        var sx = Math.floor((targetWidth - info.width) / 2);
        var sy = Math.floor((targetHeight - info.height) / 2);
        var x = sx;
        var y = sy;
        for (var _i = 0, _a = info.tokens; _i < _a.length; _i++) {
          var t = _a[_i];
          if ("$" === t.type) {
            y += t.count;
            x = sx;
          } else if ("b" === t.type) x += t.count; else if ("o" === t.type) {
            var ex = Math.min(x + t.count, targetWidth);
            while (x < ex) {
              if (0 <= y && y < targetHeight && 0 <= x && x < targetWidth) {
                var p = 4 * ((targetHeight - 1 - y) * targetWidth + x);
                for (var _b = 0, compOffset_1 = compOffset; _b < compOffset_1.length; _b++) {
                  var offset = compOffset_1[_b];
                  imgData[p + offset] = 255;
                }
              }
              ++x;
            }
          }
        }
      };
      return CAParser;
    }();
    exports.CAParser = CAParser;
    cc._RF.pop();
  }, {} ],
  EDTAA3: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "131190LCMNFYoFg4bWAbhgT", "EDTAA3");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EDTAA3 = void 0;
    var EDTAA3 = function() {
      function EDTAA3() {
        this._useDualChannel = false;
      }
      EDTAA3.prototype.RenderSDF = function(texture, maxDist) {
        void 0 === maxDist && (maxDist = 8);
        this._useDualChannel = maxDist > 8;
        var imgData = texture.readPixels();
        var width = texture.width;
        var height = texture.height;
        var alpha = this.GenerateSDF(imgData, width, height, maxDist);
        var resultTexture = new cc.RenderTexture();
        this._useDualChannel && resultTexture.setFilters(cc.Texture2D.Filter.NEAREST, cc.Texture2D.Filter.NEAREST);
        resultTexture.initWithData(alpha, cc.Texture2D.PixelFormat.RGBA8888, width, height);
        resultTexture.packable = false;
        return {
          texture: resultTexture,
          alpha: alpha
        };
      };
      EDTAA3.prototype.GenerateSDF = function(imgorigin, mrows, ncols, maxDist) {
        void 0 === maxDist && (maxDist = 8);
        var coef = 1 / 255;
        var img = new Float64Array(mrows * ncols);
        for (var i = 0, n = mrows * ncols; i < n; ++i) img[i] = imgorigin[4 * i + 3] * coef;
        var outside = this.edtaa_main(img, mrows, ncols);
        for (var i = 0, n = mrows * ncols; i < n; ++i) img[i] = 1 - img[i];
        var inside = this.edtaa_main(img, mrows, ncols);
        var sdf = new Uint8ClampedArray(mrows * ncols * 4);
        var dist;
        var base;
        if (this._useDualChannel) for (var i = 0, n = mrows * ncols; i < n; ++i) {
          dist = inside[i] - outside[i];
          dist = Math.round(32768 + 256 * dist);
          dist < 0 && (dist = 0);
          dist > 65535 && (dist = 65535);
          base = 4 * i;
          sdf[base + 3] = Math.floor(dist / 256);
          sdf[base] = dist % 256;
        } else for (var i = 0, n = mrows * ncols; i < n; ++i) {
          dist = inside[i] - outside[i];
          base = 4 * i;
          sdf[base + 3] = 128 + 16 * dist;
        }
        return sdf;
      };
      EDTAA3.prototype.edtaa_main = function(img, mrows, ncols) {
        var Dout = new Float64Array(mrows * ncols);
        var xdist = new Int16Array(mrows * ncols);
        var ydist = new Int16Array(mrows * ncols);
        var gx = new Float64Array(mrows * ncols);
        var gy = new Float64Array(mrows * ncols);
        this.computegradient(img, mrows, ncols, gx, gy);
        this.edtaa3(img, gx, gy, mrows, ncols, xdist, ydist, Dout);
        for (var i = 0, n = mrows * ncols; i < n; ++i) Dout[i] < 0 && (Dout[i] = 0);
        return Dout;
      };
      EDTAA3.prototype.computegradient = function(img, w, h, gx, gy) {
        var i, j, k, p, q;
        var glength;
        var SQRT2 = 1.4142136;
        for (i = 1; i < h - 1; i++) for (j = 1; j < w - 1; j++) {
          k = i * w + j;
          if (img[k] > 0 && img[k] < 1) {
            gx[k] = -img[k - w - 1] - SQRT2 * img[k - 1] - img[k + w - 1] + img[k - w + 1] + SQRT2 * img[k + 1] + img[k + w + 1];
            gy[k] = -img[k - w - 1] - SQRT2 * img[k - w] - img[k - w + 1] + img[k + w - 1] + SQRT2 * img[k + w] + img[k + w + 1];
            glength = gx[k] * gx[k] + gy[k] * gy[k];
            if (glength > 0) {
              glength = Math.sqrt(glength);
              gx[k] = gx[k] / glength;
              gy[k] = gy[k] / glength;
            }
          }
        }
      };
      EDTAA3.prototype.edgedf = function(gx, gy, a) {
        var df, glength, temp, a1;
        if (0 == gx || 0 == gy) df = .5 - a; else {
          glength = Math.sqrt(gx * gx + gy * gy);
          if (glength > 0) {
            gx /= glength;
            gy /= glength;
          }
          gx = Math.abs(gx);
          gy = Math.abs(gy);
          if (gx < gy) {
            temp = gx;
            gx = gy;
            gy = temp;
          }
          a1 = .5 * gy / gx;
          df = a < a1 ? .5 * (gx + gy) - Math.sqrt(2 * gx * gy * a) : a < 1 - a1 ? (.5 - a) * gx : -.5 * (gx + gy) + Math.sqrt(2 * gx * gy * (1 - a));
        }
        return df;
      };
      EDTAA3.prototype.distaa3 = function(img, gximg, gyimg, w, c, xc, yc, xi, yi) {
        var di, df, dx, dy, gx, gy, a;
        var closest;
        closest = c - xc - yc * w;
        a = img[closest];
        gx = gximg[closest];
        gy = gyimg[closest];
        a > 1 && (a = 1);
        a < 0 && (a = 0);
        if (0 == a) return 1e6;
        dx = xi;
        dy = yi;
        di = Math.sqrt(dx * dx + dy * dy);
        df = 0 == di ? this.edgedf(gx, gy, a) : this.edgedf(dx, dy, a);
        return di + df;
      };
      EDTAA3.prototype.edtaa3 = function(img, gx, gy, w, h, distx, disty, dist) {
        var x, y, i, c;
        var offset_u, offset_ur, offset_r, offset_rd, offset_d, offset_dl, offset_l, offset_lu;
        var olddist, newdist;
        var cdistx, cdisty, newdistx, newdisty;
        var changed;
        var epsilon = .001;
        offset_u = -w;
        offset_ur = 1 - w;
        offset_r = 1;
        offset_rd = w + 1;
        offset_d = w;
        offset_dl = w - 1;
        offset_l = -1;
        offset_lu = -w - 1;
        for (i = 0; i < w * h; i++) {
          distx[i] = 0;
          disty[i] = 0;
          img[i] <= 0 ? dist[i] = 1e6 : img[i] < 1 ? dist[i] = this.edgedf(gx[i], gy[i], img[i]) : dist[i] = 0;
        }
        do {
          changed = 0;
          for (y = 1; y < h; y++) {
            i = y * w;
            olddist = dist[i];
            if (olddist > 0) {
              c = i + offset_u;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx;
              newdisty = cdisty + 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_ur;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx - 1;
              newdisty = cdisty + 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                changed = 1;
              }
            }
            i++;
            for (x = 1; x < w - 1; x++, i++) {
              olddist = dist[i];
              if (olddist <= 0) continue;
              c = i + offset_l;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx + 1;
              newdisty = cdisty;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_lu;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx + 1;
              newdisty = cdisty + 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_u;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx;
              newdisty = cdisty + 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_ur;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx - 1;
              newdisty = cdisty + 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                changed = 1;
              }
            }
            olddist = dist[i];
            if (olddist > 0) {
              c = i + offset_l;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx + 1;
              newdisty = cdisty;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_lu;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx + 1;
              newdisty = cdisty + 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_u;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx;
              newdisty = cdisty + 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                changed = 1;
              }
            }
            i = y * w + w - 2;
            for (x = w - 2; x >= 0; x--, i--) {
              olddist = dist[i];
              if (olddist <= 0) continue;
              c = i + offset_r;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx - 1;
              newdisty = cdisty;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                changed = 1;
              }
            }
          }
          for (y = h - 2; y >= 0; y--) {
            i = y * w + w - 1;
            olddist = dist[i];
            if (olddist > 0) {
              c = i + offset_d;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx;
              newdisty = cdisty - 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_dl;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx + 1;
              newdisty = cdisty - 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                changed = 1;
              }
            }
            i--;
            for (x = w - 2; x > 0; x--, i--) {
              olddist = dist[i];
              if (olddist <= 0) continue;
              c = i + offset_r;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx - 1;
              newdisty = cdisty;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_rd;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx - 1;
              newdisty = cdisty - 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_d;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx;
              newdisty = cdisty - 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_dl;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx + 1;
              newdisty = cdisty - 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                changed = 1;
              }
            }
            olddist = dist[i];
            if (olddist > 0) {
              c = i + offset_r;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx - 1;
              newdisty = cdisty;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_rd;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx - 1;
              newdisty = cdisty - 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                olddist = newdist;
                changed = 1;
              }
              c = i + offset_d;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx;
              newdisty = cdisty - 1;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                changed = 1;
              }
            }
            i = y * w + 1;
            for (x = 1; x < w; x++, i++) {
              olddist = dist[i];
              if (olddist <= 0) continue;
              c = i + offset_l;
              cdistx = distx[c];
              cdisty = disty[c];
              newdistx = cdistx + 1;
              newdisty = cdisty;
              newdist = this.distaa3(img, gx, gy, w, c, cdistx, cdisty, newdistx, newdisty);
              if (newdist < olddist - epsilon) {
                distx[i] = newdistx;
                disty[i] = newdisty;
                dist[i] = newdist;
                changed = 1;
              }
            }
          }
        } while (changed);
      };
      return EDTAA3;
    }();
    exports.EDTAA3 = EDTAA3;
    cc._RF.pop();
  }, {} ],
  EDT: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1e2f95PbDZFV6QUVq6SCXs6", "EDT");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.EDT = void 0;
    var INF = 1e10;
    var EDT = function() {
      function EDT() {}
      EDT.prototype.RenderSDFToData = function(imgData, width, height, maxDist) {
        void 0 === maxDist && (maxDist = 8);
        var cutoff = .5;
        var radius = maxDist ? 2 * maxDist : 16;
        var area = width * height;
        var longSide = Math.max(width, height);
        var gridOuter = this.gridOuter = new Float64Array(area);
        var gridInner = this.gridInner = new Float64Array(area);
        this.f = new Float64Array(longSide);
        this.d = new Float64Array(longSide);
        this.z = new Float64Array(longSide + 1);
        this.v = new Int16Array(longSide);
        var alphaChannel = new Uint8ClampedArray(area);
        gridOuter.fill(INF, 0, area);
        gridInner.fill(0, 0, area);
        for (var i = 0; i < area; i++) {
          var a = imgData[4 * i + 3] / 255;
          if (0 === a) continue;
          if (1 === a) {
            gridOuter[i] = 0;
            gridInner[i] = INF;
          } else {
            var d = .5 - a;
            gridOuter[i] = d > 0 ? d * d : 0;
            gridInner[i] = d < 0 ? d * d : 0;
          }
        }
        this.edt(gridOuter, width, height, this.f, this.d, this.v, this.z);
        this.edt(gridInner, width, height, this.f, this.d, this.v, this.z);
        for (i = 0; i < area; i++) {
          var d = Math.sqrt(gridOuter[i]) - Math.sqrt(gridInner[i]);
          alphaChannel[i] = Math.round(255 - 255 * (d / radius + cutoff));
          imgData[4 * i + 3] = alphaChannel[i];
        }
        return alphaChannel;
      };
      EDT.prototype.RenderSDF = function(texture, maxDist) {
        var imgData = texture.readPixels();
        var width = texture.width;
        var height = texture.height;
        var alphaChannel = this.RenderSDFToData(imgData, width, height, maxDist);
        var resultTexture = new cc.RenderTexture();
        resultTexture.initWithData(imgData, cc.Texture2D.PixelFormat.RGBA8888, width, height);
        return {
          texture: resultTexture,
          alpha: alphaChannel
        };
      };
      EDT.prototype.edt = function(data, width, height, f, d, v, z) {
        for (var x = 0; x < width; x++) this.edt1d(data, x, width, height, f, v, z);
        for (var y = 0; y < height; y++) this.edt1d(data, y * width, 1, width, f, v, z);
      };
      EDT.prototype.edt1d = function(grid, offset, stride, length, f, v, z) {
        v[0] = 0;
        z[0] = -INF;
        z[1] = INF;
        f[0] = grid[offset];
        for (var q = 1, k = 0, s = 0; q < length; q++) {
          f[q] = grid[offset + q * stride];
          var q2 = q * q;
          do {
            var r = v[k];
            s = (f[q] - f[r] + q2 - r * r) / (q - r) / 2;
          } while (s <= z[k] && --k > -1);
          k++;
          v[k] = q;
          z[k] = s;
          z[k + 1] = INF;
        }
        for (var q = 0, k = 0; q < length; q++) {
          while (z[k + 1] < q) k++;
          var r = v[k];
          var qr = q - r;
          grid[offset + q * stride] = f[r] + qr * qr;
        }
      };
      return EDT;
    }();
    exports.EDT = EDT;
    cc._RF.pop();
  }, {} ],
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
  FFTTextureGenerator2: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0482cd2IE5Mab/KY5yMKIb2", "FFTTextureGenerator2");
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
    var SceneVisualizeMusic_1 = require("./SceneVisualizeMusic");
    var fs, PNG;
    false;
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu, inspector = _a.inspector, executeInEditMode = _a.executeInEditMode, requireComponent = _a.requireComponent;
    var FFTTextureGenerator2 = function(_super) {
      __extends(FFTTextureGenerator2, _super);
      function FFTTextureGenerator2() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._clip = null;
        _this._analyser = null;
        _this._freqSize = 32;
        _this._fftTexture = null;
        _this._sampleBuff = null;
        _this._sourceNode = null;
        return _this;
      }
      FFTTextureGenerator2.prototype.HandleInspectorClick = function() {
        return;
        var scene;
        var clip;
      };
      FFTTextureGenerator2.prototype.WriteFrame = function(fftTexture, frame, buff) {
        var sampleLength = buff.length;
        var samplePerRow = 512 / sampleLength;
        var audio = this._clip._audio;
        var elapseInSec = audio.length / audio.sampleRate;
        var samples = Math.floor(60 * elapseInSec);
        var sx = frame * sampleLength;
        if (sx + sampleLength > fftTexture.length) {
          console.error("fftTexture overflow");
          return;
        }
        fftTexture.set(buff, sx);
      };
      FFTTextureGenerator2.prototype.ExtractFFTAndSave = function() {
        var audio = this._clip._audio;
        var offlineAudioCtx = new OfflineAudioContext(audio.numberOfChannels, audio.length, audio.sampleRate);
        var analyser = this._analyser = offlineAudioCtx.createAnalyser();
        analyser.fftSize = 2 * this._freqSize;
        var sourceNode = this._sourceNode = offlineAudioCtx.createBufferSource();
        sourceNode.buffer = audio;
        sourceNode.connect(analyser);
        analyser.connect(offlineAudioCtx.destination);
        var elapseInSec = audio.length / audio.sampleRate;
        var originSamples = Math.floor(60 * elapseInSec);
        var bytesPerSample = analyser.frequencyBinCount;
        var sampleBuff = this._sampleBuff = new Uint8Array(bytesPerSample);
        var samplePerRow = 512 / bytesPerSample;
        var samples = Math.ceil(originSamples / samplePerRow) * samplePerRow;
        var fftTexture = this._fftTexture = new Uint8Array(samples * bytesPerSample);
        console.log("texture width: 512, height: " + fftTexture.length / 512 + ", samples: " + samples + ", samplePerRow: " + samplePerRow);
        var _loop_1 = function(i) {
          offlineAudioCtx.suspend(i / 60).then(function() {
            analyser.getByteFrequencyData(sampleBuff);
            that.WriteFrame(fftTexture, i, sampleBuff);
          }).then(function() {
            offlineAudioCtx.resume();
          });
        };
        for (var i = 0; i < originSamples; ++i) _loop_1(i);
        var that = this;
        offlineAudioCtx.startRendering();
        offlineAudioCtx.oncomplete = function(ev) {
          sourceNode.stop();
          that.SaveFFTTexture(fftTexture, 512, fftTexture.length / 512);
          that.ReleaseAudioBuffer();
          console.log("finished without error");
        };
        sourceNode.start(0);
      };
      FFTTextureGenerator2.prototype.SaveFFTTexture = function(texture, width, height) {
        var img = new PNG({
          colorType: 0,
          inputColorType: 0,
          width: width,
          height: height
        });
        img.data = texture;
        img.pack().pipe(fs.createWriteStream("F:/workspace/CCBatchingTricks/aa.png"));
      };
      FFTTextureGenerator2.prototype.ReleaseAudioBuffer = function() {
        this._clip = null;
        this._analyser = null;
        this._fftTexture = null;
        this._sampleBuff = null;
        this._sourceNode = null;
      };
      FFTTextureGenerator2 = __decorate([ ccclass, executeInEditMode, menu("control-inspector/fft-texture-generator"), inspector("packages://control-inspector/fft-texture-generator.js") ], FFTTextureGenerator2);
      return FFTTextureGenerator2;
    }(cc.Component);
    exports.default = FFTTextureGenerator2;
    cc._RF.pop();
  }, {
    "./SceneVisualizeMusic": "SceneVisualizeMusic",
    fs: void 0
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
  GraphicsShowMesh: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5b484TB5PFDCJWl+CcDbbIt", "GraphicsShowMesh");
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
    var GraphicsShowMesh = function(_super) {
      __extends(GraphicsShowMesh, _super);
      function GraphicsShowMesh() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GraphicsShowMesh.prototype.onLoad = function() {
        this.InjectAssembler();
      };
      GraphicsShowMesh.prototype.start = function() {};
      GraphicsShowMesh.prototype.InjectAssembler = function() {
        var ctx = this;
        var assembler = ctx._assembler;
        var originFn = assembler._vset;
        var gfx = cc.gfx;
        var vfmtPosIndexSdf = new gfx.VertexFormat([ {
          name: gfx.ATTR_POSITION,
          type: gfx.ATTR_TYPE_FLOAT32,
          num: 2
        }, {
          name: "a_index",
          type: gfx.ATTR_TYPE_FLOAT32,
          num: 1
        }, {
          name: "a_dist",
          type: gfx.ATTR_TYPE_FLOAT32,
          num: 1
        } ]);
        vfmtPosIndexSdf.name = "vfmtPosIndexSdf";
        assembler.getVfmt = function() {
          return vfmtPosIndexSdf;
        };
        assembler._vset = function(x, y, distance) {
          void 0 === distance && (distance = 0);
          var buffer = assembler._buffer;
          var meshbuffer = buffer.meshbuffer;
          var dataOffset = buffer.vertexStart * assembler.getVfmtFloatCount();
          var vData = meshbuffer._vData;
          var uintVData = meshbuffer._uintVData;
          vData[dataOffset] = x;
          vData[dataOffset + 1] = y;
          vData[dataOffset + 2] = Math.floor(buffer.vertexStart);
          vData[dataOffset + 3] = distance;
          buffer.vertexStart++;
          meshbuffer._dirty = true;
        };
      };
      GraphicsShowMesh = __decorate([ ccclass ], GraphicsShowMesh);
      return GraphicsShowMesh;
    }(cc.Graphics);
    exports.default = GraphicsShowMesh;
    cc._RF.pop();
  }, {} ],
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
  MusicVisualizerH5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8ecb5qS6zJHRpXqyUByvOxY", "MusicVisualizerH5");
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
    var MusicVisualzierH5 = function(_super) {
      __extends(MusicVisualzierH5, _super);
      function MusicVisualzierH5() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._audioId = -1;
        _this._analyser = null;
        _this._freqSize = 32;
        _this._gainNode = null;
        _this._ac = null;
        _this._sampleBuff = null;
        _this._fftSampleTexture = null;
        return _this;
      }
      MusicVisualzierH5.prototype.onLoad = function() {};
      MusicVisualzierH5.prototype.onDestroy = function() {};
      MusicVisualzierH5.prototype.SyncAudio = function(audioId, fft, samplePerRow) {
        this._audioId = audioId;
        this.FlushMatProperties(this);
        this.StartAnalyse(audioId);
      };
      MusicVisualzierH5.prototype.FlushMatProperties = function(sprite) {};
      MusicVisualzierH5.prototype.StartAnalyse = function(audioId) {
        var audio = cc.audioEngine._id2audio[audioId];
        var element = null === audio || void 0 === audio ? void 0 : audio._element;
        var buffer = null === element || void 0 === element ? void 0 : element._buffer;
        var audioContext = null === element || void 0 === element ? void 0 : element._context;
        if (!buffer || !audioContext) return;
        var analyser = this._analyser = null === audioContext || void 0 === audioContext ? void 0 : audioContext.createAnalyser();
        if (!analyser) {
          console.warn("Platform not support audio analyse");
          return;
        }
        analyser.fftSize = 2 * this._freqSize;
        element._gainObj.connect(analyser);
        this._sampleBuff = new Uint8Array(analyser.frequencyBinCount);
        var gl = cc.game._renderContext;
        var texture = this._fftSampleTexture = new cc.RenderTexture();
        var width = analyser.frequencyBinCount;
        texture.initWithSize(width, 1, gl.STENCIL_INDEX8);
        texture.packable = false;
        texture.setFilters(cc.Texture2D.Filter.NEAREST, cc.Texture2D.Filter.NEAREST);
        texture.initWithData(this._sampleBuff, cc.Texture2D.PixelFormat.I8, width, 1);
        this.spriteFrame = new cc.SpriteFrame(texture);
      };
      MusicVisualzierH5.prototype.update = function() {
        if (-1 === this._audioId) return;
        var analyser = this._analyser;
        if (!analyser || !this._sampleBuff) return;
        analyser.getByteFrequencyData(this._sampleBuff);
        var texture = this._fftSampleTexture;
        var opts = texture._getOpts();
        opts.image = this._sampleBuff;
        opts.format = cc.Texture2D.PixelFormat.I8;
        opts.genMipmaps = true;
        texture.update(opts);
      };
      MusicVisualzierH5 = __decorate([ ccclass ], MusicVisualzierH5);
      return MusicVisualzierH5;
    }(cc.Sprite);
    exports.default = MusicVisualzierH5;
    cc._RF.pop();
  }, {} ],
  MusicVisualizer: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d6a2fHfPhNJYwz2SdIkrY+", "MusicVisualizer");
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
    var MusicVisualizer = function(_super) {
      __extends(MusicVisualizer, _super);
      function MusicVisualizer() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this._audioId = -1;
        _this._samplePerRow = 16;
        return _this;
      }
      Object.defineProperty(MusicVisualizer.prototype, "fft", {
        get: function() {
          return this.spriteFrame;
        },
        set: function(value) {
          if (value) {
            var texture = value.getTexture();
            texture.setFilters(cc.Texture2D.Filter.NEAREST, cc.Texture2D.Filter.NEAREST);
            texture.packable = false;
          }
          this.spriteFrame = value;
        },
        enumerable: false,
        configurable: true
      });
      MusicVisualizer.prototype.onLoad = function() {};
      MusicVisualizer.prototype.onDestroy = function() {};
      MusicVisualizer.prototype.SyncAudio = function(audioId, fft, samplePerRow) {
        this._audioId = audioId;
        if (void 0 !== fft) {
          var texture = fft.getTexture();
          texture.setFilters(cc.Texture2D.Filter.NEAREST, cc.Texture2D.Filter.NEAREST);
          texture.packable = false;
          this.fft = fft;
        }
        void 0 !== samplePerRow && (this._samplePerRow = samplePerRow);
      };
      MusicVisualizer.prototype.UpdateFFTShader = function(sprite, frame) {
        var _a, _b;
        var textureHeight = (null === (_b = null === (_a = null === sprite || void 0 === sprite ? void 0 : sprite.spriteFrame) || void 0 === _a ? void 0 : _a.getTexture()) || void 0 === _b ? void 0 : _b.height) || 1;
        var samplePerRow = this._samplePerRow;
        var row = (Math.floor(frame / samplePerRow) + .5) / textureHeight;
        var startCol = frame % samplePerRow / samplePerRow;
        var endCol = (frame % samplePerRow + 1) / samplePerRow;
        var mat = sprite.getMaterial(0);
        if (mat) {
          mat.setProperty("row", row);
          mat.setProperty("startCol", startCol);
          mat.setProperty("endCol", endCol);
        }
      };
      MusicVisualizer.prototype.update = function() {
        if (-1 === this._audioId) return;
        var t = cc.audioEngine.getCurrentTime(this._audioId);
        var frame = Math.floor(60 * t);
        this.UpdateFFTShader(this, frame);
      };
      __decorate([ property({
        type: cc.SpriteFrame,
        displayName: "FFT\u7eb9\u7406"
      }) ], MusicVisualizer.prototype, "fft", null);
      MusicVisualizer = __decorate([ ccclass ], MusicVisualizer);
      return MusicVisualizer;
    }(cc.Sprite);
    exports.default = MusicVisualizer;
    cc._RF.pop();
  }, {} ],
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
  SceneCellularAutomata: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e934dHg3gdCcoXg1LOhhi2M", "SceneCellularAutomata");
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
    var CAParser_1 = require("./CAParser");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneCellularAutomata = function(_super) {
      __extends(SceneCellularAutomata, _super);
      function SceneCellularAutomata() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.btnRandom = null;
        _this.btnRun = null;
        _this.btnTest = null;
        _this.images = [];
        _this.imageDisplay = null;
        _this.lblFPS = null;
        _this._originFPS = 60;
        _this._paused = false;
        _this._srcIndex = 0;
        _this._viewCenter = cc.v2(0, 0);
        _this._viewScale = 1;
        _this._textureSize = cc.size(1024, 1024);
        _this._configs = [];
        return _this;
      }
      SceneCellularAutomata.prototype.onLoad = function() {
        var that = this;
        cc.resources.load("ca", cc.JsonAsset, function(err, data) {
          var json = null === data || void 0 === data ? void 0 : data.json;
          if (json) for (var key in json) that._configs.push({
            name: key,
            str: json[key]
          });
        });
      };
      SceneCellularAutomata.prototype.onEnable = function() {
        this._originFPS = cc.game.getFrameRate();
        this._originEnableMultiTouch = cc.macro.ENABLE_MULTI_TOUCH;
        this.SetFrameRate(20);
        cc.macro.ENABLE_MULTI_TOUCH = true;
      };
      SceneCellularAutomata.prototype.onDisable = function() {
        cc.game.setFrameRate(this._originFPS);
        cc.macro.ENABLE_MULTI_TOUCH = this._originEnableMultiTouch;
      };
      SceneCellularAutomata.prototype.SetFrameRate = function(fps) {
        cc.game.setFrameRate(fps);
        this.lblFPS.string = "" + fps;
      };
      SceneCellularAutomata.prototype.start = function() {
        var _this = this;
        var imageDisplay = this.imageDisplay;
        for (var _i = 0, _a = this.images; _i < _a.length; _i++) {
          var image = _a[_i];
          this.UpdateRenderTextureMatProperties(image);
        }
        this._viewCenter.x = this._textureSize.width / 2;
        this._viewCenter.y = this._textureSize.height / 2;
        this._viewScale = 4;
        this.UpdateDisplayMatProperties();
        imageDisplay.node.on(cc.Node.EventType.TOUCH_START, this.OnDisplayTouchStart, this);
        imageDisplay.node.on(cc.Node.EventType.TOUCH_MOVE, this.OnDisplayTouchMove, this);
        imageDisplay.node.on(cc.Node.EventType.TOUCH_END, this.OnDisplayTouchEnd, this);
        imageDisplay.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnDisplayTouchEnd, this);
        imageDisplay.node.on(cc.Node.EventType.MOUSE_WHEEL, this.OnDisplayMouseWheel, this);
        var that = this;
        this.btnRandom.node.on("click", function() {
          var configs = that._configs;
          if (!configs) return;
          var index = _this.RandomRangeInt(0, configs.length);
          var rInfo = CAParser_1.CAParser.Parse(configs[index].str);
          var texture = CAParser_1.CAParser.Merge(rInfo, null, null, null, that._textureSize.width, that._textureSize.height);
          that.SetCATexture(texture);
        });
        this.btnRun.node.on("click", function() {
          that._paused = !that._paused;
        });
        this.btnTest.node.on("click", function() {
          var configs = that._configs;
          if (!configs) return;
          var rInfo = CAParser_1.CAParser.Parse(configs[_this.RandomRangeInt(0, configs.length)].str);
          var gInfo = CAParser_1.CAParser.Parse(configs[_this.RandomRangeInt(0, configs.length)].str);
          var bInfo = CAParser_1.CAParser.Parse(configs[_this.RandomRangeInt(0, configs.length)].str);
          var texture = CAParser_1.CAParser.Merge(rInfo, gInfo, bInfo, null, that._textureSize.width, that._textureSize.height);
          that.SetCATexture(texture);
        });
      };
      SceneCellularAutomata.prototype.SetCATexture = function(texture) {
        this._srcIndex = 0;
        this.images[this._srcIndex].spriteFrame = new cc.SpriteFrame(texture);
      };
      SceneCellularAutomata.prototype.UpdateRenderTextureMatProperties = function(sprite) {
        var mat = sprite.getMaterial(0);
        if (!mat) return;
        var sf = sprite.spriteFrame;
        var dx, dy;
        if (sf) {
          var sz = sf.getOriginalSize();
          dx = 1 / sz.width;
          dy = 1 / sz.height;
        } else {
          dx = 1 / sprite.node.width;
          dy = 1 / sprite.node.height;
        }
        mat.setProperty("dx", dx);
        mat.setProperty("dy", dy);
      };
      SceneCellularAutomata.prototype.UpdateDisplayMatProperties = function() {
        var sprite = this.imageDisplay;
        var mat = sprite.getMaterial(0);
        if (!mat) return;
        var width = sprite.node.width;
        var height = sprite.node.height;
        var viewCenter = this._viewCenter;
        var viewScale = this._viewScale;
        var tw = this._textureSize.width;
        var th = this._textureSize.height;
        var left = viewCenter.x / tw - width / (2 * tw * viewScale);
        var right = viewCenter.x / tw + width / (2 * tw * viewScale);
        var bottom = viewCenter.y / th - height / (2 * th * viewScale);
        var top = viewCenter.y / th + height / (2 * th * viewScale);
        mat.setProperty("p", [ right - left, top - bottom ]);
        mat.setProperty("q", [ left, bottom ]);
      };
      SceneCellularAutomata.prototype.Tick = function() {
        if (this._paused) return;
        var order = this._srcIndex;
        var from = this.images[order];
        var to = this.images[1 - order];
        var imageDisplay = this.imageDisplay;
        from.enabled = true;
        this.RenderToMemory(from.node, [], to.node);
        from.enabled = false;
        imageDisplay.spriteFrame = to.spriteFrame;
        to.node.scaleY * imageDisplay.node.scaleY < 0 && (imageDisplay.node.scaleY *= -1);
        this._srcIndex = 1 - this._srcIndex;
      };
      SceneCellularAutomata.prototype.update = function(dt) {
        this.Tick();
      };
      SceneCellularAutomata.prototype.OnFPSSliderChanged = function(sender) {
        var fps = Math.floor(120 * sender.progress);
        fps = Math.max(fps, 2);
        fps = Math.min(fps, 120);
        this.SetFrameRate(fps);
      };
      SceneCellularAutomata.prototype.RenderToMemory = function(root, others, target, extend) {
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
            texture.setWrapMode(cc.Texture2D.WrapMode.REPEAT, cc.Texture2D.WrapMode.REPEAT);
            texture.setFilters(cc.Texture2D.Filter.NEAREST, cc.Texture2D.Filter.NEAREST);
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
          if (!sprite.spriteFrame || sprite.spriteFrame.getTexture() != texture) {
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
      SceneCellularAutomata.prototype.OnDisplayTouchStart = function(e) {};
      SceneCellularAutomata.prototype.OnDisplayTouchMove = function(e) {
        var touches = e.getTouches();
        if (1 === touches.length) {
          var touch = touches[0];
          var offset = touch.getDelta();
          offset.mulSelf(1 / this._viewScale);
          this._viewCenter.subSelf(offset);
          this.UpdateDisplayMatProperties();
        } else if (touches.length >= 2) {
          var t0 = touches[0];
          var t1 = touches[1];
          var p0 = t0.getLocation();
          var p1 = t1.getLocation();
          var newLength = p0.sub(p1).len();
          var oldLength = p0.sub(t0.getDelta()).sub(p1).add(t1.getDelta()).len();
          var scale = newLength / oldLength;
          this.DisplayScaleBy(scale);
        }
      };
      SceneCellularAutomata.prototype.OnDisplayTouchEnd = function(e) {};
      SceneCellularAutomata.prototype.OnDisplayMouseWheel = function(e) {
        var scrollY = e.getScrollY();
        if (!scrollY) return;
        scrollY > 0 ? this.DisplayScaleBy(1.1) : this.DisplayScaleBy(.9);
      };
      SceneCellularAutomata.prototype.DisplayScaleBy = function(scale) {
        this._viewScale = scale > 0 ? Math.min(this._viewScale * scale, 1e3) : Math.max(this._viewScale * scale, .001);
        this.UpdateDisplayMatProperties();
      };
      SceneCellularAutomata.prototype.RandomRange = function(min, max) {
        return Math.random() * (max - min) + min;
      };
      SceneCellularAutomata.prototype.RandomRangeInt = function(min, max) {
        return Math.floor(this.RandomRange(min, max));
      };
      __decorate([ property(cc.Button) ], SceneCellularAutomata.prototype, "btnRandom", void 0);
      __decorate([ property(cc.Button) ], SceneCellularAutomata.prototype, "btnRun", void 0);
      __decorate([ property(cc.Button) ], SceneCellularAutomata.prototype, "btnTest", void 0);
      __decorate([ property([ cc.Sprite ]) ], SceneCellularAutomata.prototype, "images", void 0);
      __decorate([ property(cc.Sprite) ], SceneCellularAutomata.prototype, "imageDisplay", void 0);
      __decorate([ property(cc.Label) ], SceneCellularAutomata.prototype, "lblFPS", void 0);
      SceneCellularAutomata = __decorate([ ccclass ], SceneCellularAutomata);
      return SceneCellularAutomata;
    }(cc.Component);
    exports.default = SceneCellularAutomata;
    cc._RF.pop();
  }, {
    "./CAParser": "CAParser"
  } ],
  SceneDrawingBoard: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2310cj/T4ZHua1DcDcsflm5", "SceneDrawingBoard");
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
    var RenderBuff = function() {
      function RenderBuff() {
        this.texture = null;
        this.spriteFrame = null;
        this.cameraNode = null;
        this.camera = null;
      }
      RenderBuff.CreateComputeBuff = function(width, height) {
        var result = new RenderBuff();
        var texture = result.texture = new cc.RenderTexture();
        texture.packable = false;
        texture.setFilters(cc.Texture2D.Filter.NEAREST, cc.Texture2D.Filter.NEAREST);
        texture.initWithSize(width, height);
        result.spriteFrame = new cc.SpriteFrame(texture);
        return result;
      };
      RenderBuff.CreateRederBuff = function(width, height) {
        var result = new RenderBuff();
        var texture = result.texture = new cc.RenderTexture();
        texture.packable = false;
        texture.initWithSize(width, height);
        result.spriteFrame = new cc.SpriteFrame(texture);
        return result;
      };
      RenderBuff.prototype.Clear = function() {
        var texture = this.texture;
        var opts = texture._getOpts();
        var size = texture.width * texture.height;
        opts.image = new Uint8Array(4 * size);
        texture.update(opts);
      };
      return RenderBuff;
    }();
    var SceneDrawingBoard = function(_super) {
      __extends(SceneDrawingBoard, _super);
      function SceneDrawingBoard() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.board = null;
        _this.pen = null;
        _this.singlePass = null;
        _this.matCapsule = null;
        _this.matBezier = null;
        _this.ctx = null;
        _this._autoRender = true;
        _this._renderBuffMap = new Map();
        _this._isDragging = false;
        _this._points = [];
        _this._debug = false;
        _this._lineWidth = .05;
        _this._colorIndex = 0;
        _this._colors = [ cc.Color.WHITE, cc.Color.RED, cc.Color.GREEN, cc.Color.BLUE, cc.Color.YELLOW, cc.Color.CYAN ];
        return _this;
      }
      SceneDrawingBoard.prototype.onLoad = function() {
        var renderBuff = RenderBuff.CreateRederBuff(this.board.width, this.board.height);
        var sprite = this.board.getComponent(cc.Sprite);
        sprite.sizeMode = cc.Sprite.SizeMode.CUSTOM;
        sprite.spriteFrame = renderBuff.spriteFrame;
        this._renderBuffMap.set(this.board, renderBuff);
        this.board.on(cc.Node.EventType.TOUCH_START, this.OnBoardTouchStart, this);
        this.board.on(cc.Node.EventType.TOUCH_MOVE, this.OnBoardTouchMove, this);
        this.board.on(cc.Node.EventType.TOUCH_END, this.OnBoardTouchEnd, this);
        this.board.on(cc.Node.EventType.TOUCH_CANCEL, this.OnBoardTouchEnd, this);
      };
      SceneDrawingBoard.prototype.start = function() {};
      SceneDrawingBoard.prototype.OnRender = function() {
        this.RenderToNode(this.pen, this.board);
      };
      SceneDrawingBoard.prototype.SetBlendEqToMax = function(mat) {
        if (this._debug) return;
        var gl = cc.game._renderContext;
        var gfx = cc.gfx;
        var ext = gl.getExtension("EXT_blend_minmax");
        null === mat || void 0 === mat ? void 0 : mat.setBlend(true, ext.MAX_EXT, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA, ext.MAX_EXT, gfx.BLEND_SRC_ALPHA, gfx.BLEND_ONE_MINUS_SRC_ALPHA, 4294967295, 0);
      };
      SceneDrawingBoard.prototype.update = function() {
        var points = this._points;
        if (points.length < 3) return;
        var A = points[0];
        var B = points[1];
        var C = points[2];
        var sprite = this.singlePass;
        var isValid = true;
        var useBezier = true;
        var halfBezier = true;
        Math.abs((B.x - A.x) * (C.y - A.y) - (B.y - A.y) * (C.x - A.x)) <= 1e-5 && (useBezier = false);
        !useBezier && A.equals(B) && (isValid = false);
        if (useBezier) {
          sprite.setMaterial(0, this.matBezier);
          var mat = sprite.getComponent(cc.Sprite).getMaterial(0);
          this.SetBlendEqToMax(mat);
          if (halfBezier) {
            var TB = A.sub(C);
            TB.mulSelf(.25).addSelf(B);
            C = B;
            B = TB;
          } else {
            B = B.mul(4);
            B.subSelf(A).subSelf(C).divSelf(2);
          }
          mat.setProperty("width", this._lineWidth);
          mat.setProperty("PA", [ A.x, A.y ]);
          mat.setProperty("PB", [ B.x, B.y ]);
          mat.setProperty("PC", [ C.x, C.y ]);
          if (this.ctx.node.active) {
            this.ctx.bezierCurveTo(A.x, A.y, B.x, B.y, C.x, C.y);
            this.ctx.stroke();
          }
        } else {
          sprite.setMaterial(0, this.matCapsule);
          var mat = sprite.getComponent(cc.Sprite).getMaterial(0);
          this.SetBlendEqToMax(mat);
          mat.setProperty("width", this._lineWidth);
          mat.setProperty("PP", [ A.x, A.y, B.x, B.y ]);
          if (this.ctx.node.active) {
            this.ctx.stroke();
            this.ctx.moveTo(B.x, B.y);
          }
        }
        this._debug && console.log(A + ", " + B + ", " + C + ", color=" + this._colorIndex + ", useBezier=" + useBezier);
        if (isValid) {
          sprite.enabled = true;
          this._debug && (sprite.node.color = this._colors[this._colorIndex]);
          this._colorIndex = (this._colorIndex + 1) % this._colors.length;
          this.RenderToNode(sprite.node, this.board);
          sprite.enabled = false;
        }
        this._points.shift();
        return;
      };
      SceneDrawingBoard.prototype.TouchPosToPassPos = function(pos) {
        var node = this.singlePass.node;
        node.convertToNodeSpaceAR(pos, pos);
        pos.x /= node.width;
        pos.y /= node.height;
        pos.mulSelf(2);
        pos.y *= node.height / node.width;
        return pos;
      };
      SceneDrawingBoard.prototype.OnBoardTouchStart = function(e) {
        this._isDragging = true;
        this._points.length = 0;
        this._points.push(this.TouchPosToPassPos(e.getLocation()));
        if (this.ctx.node.active) {
          var localPos = this.node.convertToNodeSpaceAR(e.getLocation());
          this.ctx.moveTo(localPos.x, localPos.y);
        }
      };
      SceneDrawingBoard.prototype.OnBoardTouchMove = function(e) {
        if (!this._isDragging) return;
        var cur = this.TouchPosToPassPos(e.getLocation());
        this._points.push(cur);
        this.ctx.node.active;
      };
      SceneDrawingBoard.prototype.OnBoardTouchEnd = function() {
        this._isDragging = false;
        this._points.length = 0;
        this._debug && console.log("---------------------------- end ------------------------");
      };
      SceneDrawingBoard.prototype.RenderToNode = function(root, target) {
        var renderBuff = this._renderBuffMap.get(target);
        if (!renderBuff) return null;
        if (!renderBuff.cameraNode || !renderBuff.camera) {
          var node = renderBuff.cameraNode = new cc.Node();
          node.parent = target;
          node.x = (.5 - target.anchorX) * target.width;
          node.y = (.5 - target.anchorY) * target.height;
          var camera_1 = renderBuff.camera = node.addComponent(cc.Camera);
          camera_1.backgroundColor = new cc.Color(255, 255, 255, 0);
          camera_1.cullingMask = 4294967295;
          var targetHeight = root.height;
          camera_1.alignWithScreen = true;
          camera_1.orthoSize = targetHeight / 2;
          camera_1.targetTexture = renderBuff.texture;
        }
        var success = false;
        var camera = renderBuff.camera;
        try {
          camera.enabled = true;
          camera.render(root);
          success = true;
        } finally {
          camera.enabled = false;
        }
        return renderBuff.texture;
      };
      SceneDrawingBoard._tmpV2 = cc.v2(0, 0);
      __decorate([ property(cc.Node) ], SceneDrawingBoard.prototype, "board", void 0);
      __decorate([ property(cc.Node) ], SceneDrawingBoard.prototype, "pen", void 0);
      __decorate([ property(cc.Sprite) ], SceneDrawingBoard.prototype, "singlePass", void 0);
      __decorate([ property(cc.Material) ], SceneDrawingBoard.prototype, "matCapsule", void 0);
      __decorate([ property(cc.Material) ], SceneDrawingBoard.prototype, "matBezier", void 0);
      __decorate([ property(cc.Graphics) ], SceneDrawingBoard.prototype, "ctx", void 0);
      SceneDrawingBoard = __decorate([ ccclass ], SceneDrawingBoard);
      return SceneDrawingBoard;
    }(cc.Component);
    exports.default = SceneDrawingBoard;
    cc._RF.pop();
  }, {} ],
  SceneGraphics: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0ad808M8ylGbooXMchyavso", "SceneGraphics");
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
    var SimpleDraggable_1 = require("../../Scripts/Misc/SimpleDraggable");
    var GraphicsShowMesh_1 = require("./GraphicsShowMesh");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SceneGraphics = function(_super) {
      __extends(SceneGraphics, _super);
      function SceneGraphics() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dragArea = null;
        _this.displayArea = null;
        _this.light = null;
        _this.ctx = null;
        _this.materials = [];
        _this._viewCenter = cc.v2(0, 0);
        _this._viewScale = 1;
        _this._graphIndex = 0;
        _this._effectIndex = 0;
        _this._curGraphicsCls = cc.Graphics;
        _this._specialGraphicsCls = new Map([ [ "GraphicsShowMesh", GraphicsShowMesh_1.default ] ]);
        return _this;
      }
      SceneGraphics.prototype.onLoad = function() {
        var dragArea = this.dragArea;
        dragArea.on(cc.Node.EventType.TOUCH_START, this.OnDisplayTouchStart, this);
        dragArea.on(cc.Node.EventType.TOUCH_MOVE, this.OnDisplayTouchMove, this);
        dragArea.on(cc.Node.EventType.TOUCH_END, this.OnDisplayTouchEnd, this);
        dragArea.on(cc.Node.EventType.TOUCH_CANCEL, this.OnDisplayTouchEnd, this);
        dragArea.on(cc.Node.EventType.MOUSE_WHEEL, this.OnDisplayMouseWheel, this);
        var that = this;
        this.light.getComponent(SimpleDraggable_1.default).Setup(function(pos) {
          var mat = that.ctx.getMaterial(0);
          void 0 !== mat.getProperty("lightPos", 0) && mat.setProperty("lightPos", [ pos.x, pos.y ]);
        });
      };
      SceneGraphics.prototype.start = function() {
        if (this.displayArea) {
          this._viewCenter.set(this.displayArea.position);
          this._viewScale = 1;
          this.UpdateDisplayMatProperties();
        }
        this.FlushEffect(this._effectIndex);
        this.FlushGraph(this._graphIndex);
      };
      SceneGraphics.prototype.update = function() {};
      SceneGraphics.prototype.NextGraph = function() {
        this._graphIndex = (this._graphIndex + 1) % 3;
        this.FlushGraph(this._graphIndex);
      };
      SceneGraphics.prototype.FlushGraph = function(index) {
        var ctx = this.ctx;
        ctx.clear();
        ctx.strokeColor = cc.Color.WHITE;
        ctx.fillColor = cc.Color.WHITE;
        ctx.lineWidth = 40;
        if (0 === index) {
          ctx.moveTo(-212, -139);
          ctx.bezierCurveTo(-213, 111, 38, 236, 246, 75);
          ctx.stroke();
        } else if (1 === index) {
          ctx.moveTo(-100, -100);
          ctx.lineTo(-100, 100);
          ctx.lineTo(100, 100);
          ctx.close();
          ctx.stroke();
        } else {
          var letterPath = new Map([ [ "C", [ cc.v2(.5, .7), cc.v2(-.7, .8), cc.v2(-.8, -.9), cc.v2(.3, -.7) ] ], [ "O", [ cc.v2(.1, .7), cc.v2(-.7, .6), cc.v2(-.7, -.8), cc.v2(-.1, -.7), cc.v2(.6, -.6), cc.v2(.8, .8) ] ], [ "S", [ cc.v2(.4, .7), cc.v2(-.5, .7), cc.v2(-.6, .1), cc.v2(0, 0), cc.v2(.6, 0), cc.v2(.5, -.8), cc.v2(-.4, -.7) ] ] ]);
          var word = "COCOS";
          var scale = 100;
          var offsetx = -300;
          for (var k = 0; k < word.length; ++k) {
            var letter = word[k];
            var path = letterPath.get(letter);
            for (var i = 0, n = path.length; i < n; ) {
              var p = path[i];
              if (0 === i) {
                ctx.moveTo(offsetx + p.x * scale, p.y * scale);
                ++i;
              } else {
                var p1 = path[i], p2 = path[(i + 1) % n], p3 = path[(i + 2) % n];
                i += 3;
                ctx.bezierCurveTo(offsetx + p1.x * scale, p1.y * scale, offsetx + p2.x * scale, p2.y * scale, offsetx + p3.x * scale, p3.y * scale);
              }
            }
            offsetx += 150;
          }
          ctx.stroke();
        }
        this.FlushMatProperties(ctx);
      };
      SceneGraphics.prototype.NextEffect = function() {
        var index = this._effectIndex = (this._effectIndex + 1) % this.materials.length;
        this.FlushEffect(index);
      };
      SceneGraphics.prototype.FlushEffect = function(index) {
        var mat = this.materials[index];
        var cls = this._specialGraphicsCls.get(mat.name);
        void 0 == cls && (cls = cc.Graphics);
        if (cls !== this._curGraphicsCls) {
          var ctxNode = this.ctx.node;
          ctxNode.removeComponent(this._curGraphicsCls);
          this.ctx = ctxNode.addComponent(cls);
          this.FlushGraph(this._graphIndex);
          this._curGraphicsCls = cls;
        }
        this.ctx.setMaterial(0, mat);
        this.FlushMatProperties(this.ctx);
      };
      SceneGraphics.prototype.FlushMatProperties = function(ctx) {
        var mat = ctx.getMaterial(0);
        void 0 !== mat.getProperty("lineWidth", 0) && mat.setProperty("lineWidth", ctx.lineWidth);
      };
      SceneGraphics.prototype.OnDisplayTouchStart = function(e) {};
      SceneGraphics.prototype.OnDisplayTouchMove = function(e) {
        var touches = e.getTouches();
        if (1 === touches.length) {
          var touch = touches[0];
          var offset = touch.getDelta();
          this._viewCenter.addSelf(offset);
          this.UpdateDisplayMatProperties();
        } else if (touches.length >= 2) {
          var t0 = touches[0];
          var t1 = touches[1];
          var p0 = t0.getLocation();
          var p1 = t1.getLocation();
          var newLength = p0.sub(p1).len();
          var oldLength = p0.sub(t0.getDelta()).sub(p1).add(t1.getDelta()).len();
          var scale = newLength / oldLength;
          this.DisplayScaleBy(scale);
        }
      };
      SceneGraphics.prototype.OnDisplayTouchEnd = function(e) {};
      SceneGraphics.prototype.OnDisplayMouseWheel = function(e) {
        var scrollY = e.getScrollY();
        if (!scrollY) return;
        scrollY > 0 ? this.DisplayScaleBy(1.1) : this.DisplayScaleBy(.9);
      };
      SceneGraphics.prototype.DisplayScaleBy = function(scale) {
        var preScale = this._viewScale;
        this._viewScale = scale > 1 ? Math.min(this._viewScale * scale, 1e3) : Math.max(this._viewScale * scale, .001);
        scale = this._viewScale / preScale;
        this._viewCenter.mulSelf(scale);
        this.UpdateDisplayMatProperties();
      };
      SceneGraphics.prototype.UpdateDisplayMatProperties = function() {
        var displayArea = this.displayArea;
        displayArea.position = this._viewCenter;
        displayArea.scale = this._viewScale;
        var mat = displayArea.getComponent(cc.RenderComponent).getMaterial(0);
        void 0 !== mat.getProperty("sz", 0) && mat.setProperty("sz", [ displayArea.width * this._viewScale, displayArea.height * this._viewScale ]);
      };
      __decorate([ property(cc.Node) ], SceneGraphics.prototype, "dragArea", void 0);
      __decorate([ property(cc.Node) ], SceneGraphics.prototype, "displayArea", void 0);
      __decorate([ property(cc.Node) ], SceneGraphics.prototype, "light", void 0);
      __decorate([ property(cc.Graphics) ], SceneGraphics.prototype, "ctx", void 0);
      __decorate([ property([ cc.Material ]) ], SceneGraphics.prototype, "materials", void 0);
      SceneGraphics = __decorate([ ccclass ], SceneGraphics);
      return SceneGraphics;
    }(cc.Component);
    exports.default = SceneGraphics;
    cc._RF.pop();
  }, {
    "../../Scripts/Misc/SimpleDraggable": "SimpleDraggable",
    "./GraphicsShowMesh": "GraphicsShowMesh"
  } ],
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
  SceneLoad: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2da66DFC9xCnqM41G/oRzxH", "SceneLoad");
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
    var SceneLoad = function(_super) {
      __extends(SceneLoad, _super);
      function SceneLoad() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      SceneLoad.prototype.onLoad = function() {};
      SceneLoad.prototype.start = function() {
        if (this.Redirect()) return;
        cc.director.loadScene("SceneWelcome");
      };
      SceneLoad.prototype.Redirect = function() {
        var search = window.location.search;
        if (search) {
          var param = new URLSearchParams(search);
          var sceneName = param.get("scene");
          return cc.director.loadScene(sceneName);
        }
        return false;
      };
      SceneLoad = __decorate([ ccclass ], SceneLoad);
      return SceneLoad;
    }(cc.Component);
    exports.default = SceneLoad;
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
  SceneSDFFont: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "b89ecLaFPNNoqJ42v5VuuA2", "SceneSDFFont");
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
    var SceneSDFFont = function(_super) {
      __extends(SceneSDFFont, _super);
      function SceneSDFFont() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.dragArea = null;
        _this.targetLabel = null;
        _this.displayArea = null;
        _this._viewCenter = cc.v2(0, 0);
        _this._viewScale = 1;
        return _this;
      }
      SceneSDFFont.prototype.onLoad = function() {
        var dragArea = this.dragArea;
        dragArea.on(cc.Node.EventType.TOUCH_START, this.OnDisplayTouchStart, this);
        dragArea.on(cc.Node.EventType.TOUCH_MOVE, this.OnDisplayTouchMove, this);
        dragArea.on(cc.Node.EventType.TOUCH_END, this.OnDisplayTouchEnd, this);
        dragArea.on(cc.Node.EventType.TOUCH_CANCEL, this.OnDisplayTouchEnd, this);
        dragArea.on(cc.Node.EventType.MOUSE_WHEEL, this.OnDisplayMouseWheel, this);
      };
      SceneSDFFont.prototype.start = function() {
        if (this.displayArea) {
          this._viewCenter.set(this.displayArea.position);
          this._viewScale = 1;
          this.UpdateDisplayMatProperties();
        }
        this.UpdateSDFNodeProperty(this.targetLabel.node);
        this.UpdateSDFNodeProperty(this.node.getChildByName("hintLabel"));
      };
      SceneSDFFont.prototype.update = function() {};
      SceneSDFFont.prototype.UpdateSDFNodeProperty = function(node) {
        var mat = node.getComponent(cc.RenderComponent).getMaterial(0);
        mat.setProperty("maxDist", 4);
        mat.define("SDF_HI_RES", false);
        mat.define("SDF_DUAL_CHANNEL", false);
      };
      SceneSDFFont.prototype.OnDisplayTouchStart = function(e) {};
      SceneSDFFont.prototype.OnDisplayTouchMove = function(e) {
        var touches = e.getTouches();
        if (1 === touches.length) {
          var touch = touches[0];
          var offset = touch.getDelta();
          this._viewCenter.addSelf(offset);
          this.UpdateDisplayMatProperties();
        } else if (touches.length >= 2) {
          var t0 = touches[0];
          var t1 = touches[1];
          var p0 = t0.getLocation();
          var p1 = t1.getLocation();
          var newLength = p0.sub(p1).len();
          var oldLength = p0.sub(t0.getDelta()).sub(p1).add(t1.getDelta()).len();
          var scale = newLength / oldLength;
          this.DisplayScaleBy(scale);
        }
      };
      SceneSDFFont.prototype.OnDisplayTouchEnd = function(e) {};
      SceneSDFFont.prototype.OnDisplayMouseWheel = function(e) {
        var scrollY = e.getScrollY();
        if (!scrollY) return;
        scrollY > 0 ? this.DisplayScaleBy(1.1) : this.DisplayScaleBy(.9);
      };
      SceneSDFFont.prototype.DisplayScaleBy = function(scale) {
        var preScale = this._viewScale;
        this._viewScale = scale > 1 ? Math.min(this._viewScale * scale, 1e3) : Math.max(this._viewScale * scale, .001);
        scale = this._viewScale / preScale;
        this._viewCenter.mulSelf(scale);
        this.UpdateDisplayMatProperties();
      };
      SceneSDFFont.prototype.UpdateDisplayMatProperties = function() {
        var displayArea = this.displayArea;
        displayArea.position = this._viewCenter;
        displayArea.scale = this._viewScale;
        var mat = displayArea.getComponent(cc.RenderComponent).getMaterial(0);
        void 0 !== mat.getProperty("sz", 0) && mat.setProperty("sz", [ displayArea.width * this._viewScale, displayArea.height * this._viewScale ]);
      };
      __decorate([ property(cc.Node) ], SceneSDFFont.prototype, "dragArea", void 0);
      __decorate([ property(cc.Label) ], SceneSDFFont.prototype, "targetLabel", void 0);
      __decorate([ property(cc.Node) ], SceneSDFFont.prototype, "displayArea", void 0);
      SceneSDFFont = __decorate([ ccclass ], SceneSDFFont);
      return SceneSDFFont;
    }(cc.Component);
    exports.default = SceneSDFFont;
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
    var EDTAA3_1 = require("./EDTAA3");
    var EDT_1 = require("./EDT");
    var _a = cc._decorator, ccclass = _a.ccclass, menu = _a.menu, property = _a.property;
    var TestSDF = function(_super) {
      __extends(TestSDF, _super);
      function TestSDF() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.renderNodes = [];
        _this.objNode = null;
        _this.btnSwitchImage = null;
        _this.btnSwitchEffect = null;
        _this.images = [];
        _this.materials = [];
        _this.lblHint = null;
        _this._hints = new Map([ [ "SpriteRaw", "\u539f\u59cbSDF\u7eb9\u7406" ], [ "SDFGradient", "\u8ddd\u79bb\u6620\u5c04\u5230\u7070\u5ea6" ], [ "SDFMorph", "\u5f62\u53d8" ], [ "SDFBloom", "\u9713\u8679\u706f" ], [ "SDFOutline0", "\u63cf\u8fb9" ], [ "SDFSelect", "\u6846\u9009\u52a8\u753b" ], [ "SDFOutline2", "\u5916\u53d1\u5149" ], [ "SDFRawTest", "" ], [ "SDFGlow", "\u5916\u53d1\u51492" ], [ "SDFSquiggle", "\u624b\u7ed8\u7ebf\u63cf" ], [ "SDFColorPallete", "\u989c\u8272\u6e10\u53d8" ], [ "SDFContour", "\u7b49\u9ad8\u7ebf" ], [ "SDFDropShadow", "\u6295\u5f71" ], [ "SDFFake3D", "\u4f2a3D" ] ]);
        _this._textureSize = cc.size(1024, 1024);
        _this._maxDist = 17;
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
        this._edt = new EDT_1.EDT();
        this._edtaa3 = new EDTAA3_1.EDTAA3();
        this._imageIndex = -1;
        this.NextImage();
        this.UpdateHint(0);
      };
      TestSDF.prototype.NextImage = function() {
        var index = this._imageIndex = (this._imageIndex + 1) % this.images.length;
        var sf = this.images[index];
        var sz = sf.getOriginalSize();
        this.objNode.getComponent(cc.Sprite).spriteFrame = sf;
        for (var i = 0; i < 2; ++i) {
          var renderNode = this.renderNodes[i];
          var maxDist = this._maxDist;
          renderNode.width = this.objNode.width = sz.width;
          renderNode.height = this.objNode.height = sz.height;
          var texture = this.RenderToMemory(this.objNode, null, renderNode, maxDist);
          var result = null;
          result = 0 === i ? this._edt.RenderSDF(texture, maxDist) : this._edtaa3.RenderSDF(texture, maxDist);
          var sprite = renderNode.getComponent(cc.Sprite);
          sprite.spriteFrame = new cc.SpriteFrame(result.texture);
          this.FlushMatProperties(sprite, maxDist, cc.size(texture.width, texture.height), 1 === i && maxDist > 8);
        }
      };
      TestSDF.prototype.FlushMatProperties = function(sprite, sdfRadius, sz, useDualChannel) {
        var mat = sprite.getMaterial(0);
        true;
        var tw = sprite.node.width;
        var th = sprite.node.height;
        mat.setProperty("texSize", [ tw, th ]);
        mat.setProperty("texStep", [ 1 / tw, 1 / th ]);
        mat.setProperty("maxDist", this._maxDist);
        mat.define("SDF_HI_RES", useDualChannel);
        mat.define("SDF_DUAL_CHANNEL", useDualChannel);
        void 0 !== mat.getProperty("originTexture") && mat.setProperty("originTexture", this.objNode.getComponent(cc.Sprite).spriteFrame.getTexture());
        if (2 !== this._effectIndex) return;
        mat.setProperty("yRatio", sz.height / sz.width);
        mat.setProperty("sdfRatio", 2 * sdfRadius / sz.width);
        mat.setProperty("outlineHalfWidth", 3 / sdfRadius);
      };
      TestSDF.prototype.NextEffect = function() {
        var index = this._effectIndex = (this._effectIndex + 1) % this.materials.length;
        this.UpdateHint(index);
        var mat = this.materials[index];
        for (var i = 0; i < 2; ++i) {
          var renderNode = this.renderNodes[i];
          var sprite = renderNode.getComponent(cc.Sprite);
          sprite.setMaterial(0, mat);
          var sf = sprite.spriteFrame;
          var sz = sf.getOriginalSize();
          var sdfRadius = Math.max(60, sz.height / 3);
          var maxDist = this._maxDist;
          this.FlushMatProperties(sprite, sdfRadius, sz, 1 === i && maxDist > 8);
        }
      };
      TestSDF.prototype.RenderToMemory = function(root, others, target, extend) {
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
      TestSDF.prototype.UpdateHint = function(materialIndex) {
        var mat = this.materials[materialIndex];
        var hint = this._hints.get(mat.name) || "";
        this.lblHint.string = hint ? "\u5f53\u524d\u6548\u679c:\n " + hint : "";
      };
      __decorate([ property([ cc.Node ]) ], TestSDF.prototype, "renderNodes", void 0);
      __decorate([ property(cc.Node) ], TestSDF.prototype, "objNode", void 0);
      __decorate([ property(cc.Node) ], TestSDF.prototype, "btnSwitchImage", void 0);
      __decorate([ property(cc.Node) ], TestSDF.prototype, "btnSwitchEffect", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], TestSDF.prototype, "images", void 0);
      __decorate([ property([ cc.Material ]) ], TestSDF.prototype, "materials", void 0);
      __decorate([ property(cc.Label) ], TestSDF.prototype, "lblHint", void 0);
      TestSDF = __decorate([ ccclass ], TestSDF);
      return TestSDF;
    }(cc.Component);
    exports.TestSDF = TestSDF;
    cc._RF.pop();
  }, {
    "./EDT": "EDT",
    "./EDTAA3": "EDTAA3"
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
  SceneVisualizeMusic: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66078LwZ6VOTp0Xu66oVwY9", "SceneVisualizeMusic");
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
    var RenderBuff = function() {
      function RenderBuff() {
        this.texture = null;
        this.spriteFrame = null;
        this.cameraNode = null;
        this.camera = null;
      }
      RenderBuff.CreateComputeBuff = function(width, height) {
        var result = new RenderBuff();
        var texture = result.texture = new cc.RenderTexture();
        texture.packable = false;
        texture.setFilters(cc.Texture2D.Filter.NEAREST, cc.Texture2D.Filter.NEAREST);
        texture.initWithSize(width, height);
        result.spriteFrame = new cc.SpriteFrame(texture);
        return result;
      };
      RenderBuff.prototype.Clear = function() {
        var texture = this.texture;
        var opts = texture._getOpts();
        var size = texture.width * texture.height;
        opts.image = new Uint8Array(4 * size);
        texture.update(opts);
      };
      return RenderBuff;
    }();
    var SceneVisualizeMusic = function(_super) {
      __extends(SceneVisualizeMusic, _super);
      function SceneVisualizeMusic() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.clips = [];
        _this.fftTextures = [];
        _this.visualizer = null;
        _this.visualizerH5 = null;
        _this.visualizerEx = null;
        _this.pass0Imgs = [];
        _this.materials = [];
        _this.pass0Materials = [];
        _this._audioIndex = -1;
        _this._matIndex = -1;
        _this._renderBuffMap = new Map();
        _this._nameToMat = new Map();
        _this._nameToPass0Mat = new Map();
        _this._matDep = new Map();
        _this._audioId = -1;
        _this._srcIndex = 0;
        return _this;
      }
      SceneVisualizeMusic.prototype.onLoad = function() {
        for (var _i = 0, _a = this.materials; _i < _a.length; _i++) {
          var m = _a[_i];
          this._nameToMat.set(m.name, m);
        }
        for (var _b = 0, _c = this.pass0Materials; _b < _c.length; _b++) {
          var m = _c[_b];
          this._nameToPass0Mat.set(m.name, m);
        }
        this._matDep.set("VMWaveFFT", "VMPolarExPass0").set("VMPolarWave", "VMPolarExPass0").set("VMPolarEx", "VMPolarExPass0").set("VMPolar", "VMClassicFFTExPass0").set("VMMeter", "VMClassicFFTExPass0").set("VMClassic", "VMClassicFFTExPass0").set("VMCircle", "VMClassicFFTExPass0");
        this.NextAudio();
        this.NextMat();
      };
      SceneVisualizeMusic.prototype.NextMat = function() {
        var _a;
        if (0 === this.materials.length) return;
        var index = this._matIndex = (this._matIndex + 1) % this.materials.length;
        var mat = this.materials[index];
        var matDep = this._nameToPass0Mat.get(this._matDep.get(mat.name));
        for (var _i = 0, _b = this.pass0Imgs; _i < _b.length; _i++) {
          var img = _b[_i];
          img.setMaterial(0, matDep);
          img.spriteFrame = this.fftTextures[this._audioIndex];
          var renderBuff = this._renderBuffMap.get(img.node);
          if (renderBuff) renderBuff.Clear(); else {
            renderBuff = RenderBuff.CreateComputeBuff(img.node.width, img.node.height);
            this._renderBuffMap.set(img.node, renderBuff);
          }
          null === (_a = img.getMaterial(0)) || void 0 === _a ? void 0 : _a.setProperty("tex2", renderBuff.texture);
        }
        this.visualizerEx.setMaterial(0, mat);
      };
      SceneVisualizeMusic.prototype.NextAudio = function() {
        if (0 === this.clips.length || this.fftTextures.length !== this.clips.length) return;
        var index = this._audioIndex = (this._audioIndex + 1) % this.clips.length;
        var audioId = this._audioId = cc.audioEngine.playMusic(this.clips[index], true);
        for (var _i = 0, _a = this.pass0Imgs; _i < _a.length; _i++) {
          var img = _a[_i];
          img.spriteFrame = this.fftTextures[index];
        }
      };
      SceneVisualizeMusic.prototype.UpdateFFTShader = function(sprite, frame) {
        var _a, _b;
        var textureHeight = (null === (_b = null === (_a = null === sprite || void 0 === sprite ? void 0 : sprite.spriteFrame) || void 0 === _a ? void 0 : _a.getTexture()) || void 0 === _b ? void 0 : _b.height) || 1;
        var samplePerRow = 16;
        var row = (Math.floor(frame / samplePerRow) + .5) / textureHeight;
        var startCol = frame % samplePerRow / samplePerRow;
        var endCol = (frame % samplePerRow + 1) / samplePerRow;
        var mat = sprite.getMaterial(0);
        if (mat) {
          mat.setProperty("row", row);
          mat.setProperty("startCol", startCol);
          mat.setProperty("endCol", endCol);
        }
      };
      SceneVisualizeMusic.prototype.Tick = function() {
        var _a;
        if (-1 === this._audioId) return;
        var t = cc.audioEngine.getCurrentTime(this._audioId);
        var frame = Math.floor(60 * t);
        var pass0Imgs = this.pass0Imgs;
        var order = this._srcIndex;
        var from = pass0Imgs[order];
        var to = pass0Imgs[1 - order];
        this.UpdateFFTShader(from, frame);
        from.enabled = true;
        this.RenderToNode(from.node, to.node);
        from.enabled = false;
        this.visualizerEx.spriteFrame = null === (_a = this._renderBuffMap.get(to.node)) || void 0 === _a ? void 0 : _a.spriteFrame;
        this._srcIndex = 1 - this._srcIndex;
      };
      SceneVisualizeMusic.prototype.onDestroy = function() {
        cc.audioEngine.stopMusic();
      };
      SceneVisualizeMusic.prototype.update = function() {
        this.Tick();
      };
      SceneVisualizeMusic.prototype.RenderToNode = function(root, target) {
        var renderBuff = this._renderBuffMap.get(target);
        if (!renderBuff) return null;
        if (!renderBuff.cameraNode || !renderBuff.camera) {
          var node = renderBuff.cameraNode = new cc.Node();
          node.parent = root;
          node.x = (.5 - root.anchorX) * root.width;
          node.y = (.5 - root.anchorY) * root.height;
          var camera_1 = renderBuff.camera = node.addComponent(cc.Camera);
          camera_1.backgroundColor = new cc.Color(255, 255, 255, 0);
          camera_1.clearFlags = cc.Camera.ClearFlags.DEPTH | cc.Camera.ClearFlags.STENCIL | cc.Camera.ClearFlags.COLOR;
          camera_1.cullingMask = 4294967295;
          var targetHeight = root.height;
          camera_1.alignWithScreen = false;
          camera_1.orthoSize = targetHeight / 2;
          camera_1.targetTexture = renderBuff.texture;
        }
        var success = false;
        var camera = renderBuff.camera;
        try {
          camera.enabled = true;
          camera.render(root);
          success = true;
        } finally {
          camera.enabled = false;
        }
        return renderBuff.texture;
      };
      __decorate([ property([ cc.AudioClip ]) ], SceneVisualizeMusic.prototype, "clips", void 0);
      __decorate([ property([ cc.SpriteFrame ]) ], SceneVisualizeMusic.prototype, "fftTextures", void 0);
      __decorate([ property(cc.Node) ], SceneVisualizeMusic.prototype, "visualizer", void 0);
      __decorate([ property(cc.Node) ], SceneVisualizeMusic.prototype, "visualizerH5", void 0);
      __decorate([ property(cc.Sprite) ], SceneVisualizeMusic.prototype, "visualizerEx", void 0);
      __decorate([ property([ cc.Sprite ]) ], SceneVisualizeMusic.prototype, "pass0Imgs", void 0);
      __decorate([ property([ cc.Material ]) ], SceneVisualizeMusic.prototype, "materials", void 0);
      __decorate([ property([ cc.Material ]) ], SceneVisualizeMusic.prototype, "pass0Materials", void 0);
      SceneVisualizeMusic = __decorate([ ccclass ], SceneVisualizeMusic);
      return SceneVisualizeMusic;
    }(cc.Component);
    exports.default = SceneVisualizeMusic;
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
}, {}, [ "SceneTestGraphics", "SceneSpriteMaskedAvatars", "AvatarAssembler", "AvatarSprite", "EqualScalingAssembler", "EqualScalingSprite", "SpriteMaskedAvatarAssembler", "SpriteMaskedAvatarSprite", "CAParser", "SceneCellularAutomata", "MovingBGAssembler", "MovingBGSprite", "SceneDrawingBoard", "GraphicsShowMesh", "SceneGraphics", "LayeredBatchingAssembler", "LayeredBatchingRootRenderer", "SceneLayeredBatchingScrollView", "SceneMetaBalls", "MetaBallsAssembler", "MetaBallsRenderer", "SceneParticlesBatching", "SceneSDFFont", "EDT", "EDTAA3", "SceneSDF", "FFTTextureGenerator2", "MusicVisualizer", "MusicVisualizerH5", "SceneVisualizeMusic", "NavigatorButton", "SimpleDraggable", "SceneLoad", "SceneTest", "SceneWelcome", "GTAssembler2D", "GTAutoFitSpriteAssembler2D", "GTSimpleSpriteAssembler2D" ]);