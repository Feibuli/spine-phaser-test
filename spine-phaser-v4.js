"use strict";
var spine = (() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // spine-phaser-v4/src/index.ts
  var index_exports = {};
  __export(index_exports, {
    AABBRectangleBoundsProvider: () => AABBRectangleBoundsProvider,
    Alpha: () => Alpha,
    AlphaMixin: () => AlphaMixin,
    AlphaTimeline: () => AlphaTimeline,
    Animation: () => Animation,
    AnimationState: () => AnimationState,
    AnimationStateAdapter: () => AnimationStateAdapter,
    AnimationStateData: () => AnimationStateData,
    AssetCache: () => AssetCache,
    AssetManager: () => AssetManager,
    AssetManagerBase: () => AssetManagerBase,
    AtlasAttachmentLoader: () => AtlasAttachmentLoader,
    Attachment: () => Attachment,
    AttachmentTimeline: () => AttachmentTimeline,
    BinaryInput: () => BinaryInput,
    BlendMode: () => BlendMode,
    Bone: () => Bone,
    BoneData: () => BoneData,
    BoundingBoxAttachment: () => BoundingBoxAttachment,
    CURRENT: () => CURRENT,
    CameraController: () => CameraController,
    ClippingAttachment: () => ClippingAttachment,
    Color: () => Color,
    Color2Attribute: () => Color2Attribute,
    ColorAttribute: () => ColorAttribute,
    ComputedSize: () => ComputedSize,
    ComputedSizeMixin: () => ComputedSizeMixin,
    ConstraintData: () => ConstraintData,
    CurveTimeline: () => CurveTimeline,
    CurveTimeline1: () => CurveTimeline1,
    CurveTimeline2: () => CurveTimeline2,
    DebugUtils: () => DebugUtils,
    DeformTimeline: () => DeformTimeline,
    Depth: () => Depth,
    DepthMixin: () => DepthMixin,
    Downloader: () => Downloader,
    DrawOrderTimeline: () => DrawOrderTimeline,
    Event: () => Event,
    EventData: () => EventData,
    EventQueue: () => EventQueue,
    EventTimeline: () => EventTimeline,
    EventType: () => EventType,
    FIRST: () => FIRST,
    FakeTexture: () => FakeTexture,
    Flip: () => Flip,
    FlipMixin: () => FlipMixin,
    GLTexture: () => GLTexture,
    HOLD_FIRST: () => HOLD_FIRST,
    HOLD_MIX: () => HOLD_MIX,
    HOLD_SUBSEQUENT: () => HOLD_SUBSEQUENT,
    IkConstraint: () => IkConstraint,
    IkConstraintData: () => IkConstraintData,
    IkConstraintTimeline: () => IkConstraintTimeline,
    Inherit: () => Inherit,
    InheritTimeline: () => InheritTimeline,
    Input: () => Input,
    IntSet: () => IntSet,
    Interpolation: () => Interpolation,
    LoadingScreen: () => LoadingScreen,
    M00: () => M00,
    M01: () => M01,
    M02: () => M02,
    M03: () => M03,
    M10: () => M10,
    M11: () => M11,
    M12: () => M12,
    M13: () => M13,
    M20: () => M20,
    M21: () => M21,
    M22: () => M22,
    M23: () => M23,
    M30: () => M30,
    M31: () => M31,
    M32: () => M32,
    M33: () => M33,
    ManagedWebGLRenderingContext: () => ManagedWebGLRenderingContext,
    MathUtils: () => MathUtils,
    Matrix4: () => Matrix42,
    Mesh: () => Mesh,
    MeshAttachment: () => MeshAttachment,
    MixBlend: () => MixBlend,
    MixDirection: () => MixDirection,
    Origin: () => Origin,
    OriginMixin: () => OriginMixin,
    OrthoCamera: () => OrthoCamera,
    PathAttachment: () => PathAttachment,
    PathConstraint: () => PathConstraint,
    PathConstraintData: () => PathConstraintData,
    PathConstraintMixTimeline: () => PathConstraintMixTimeline,
    PathConstraintPositionTimeline: () => PathConstraintPositionTimeline,
    PathConstraintSpacingTimeline: () => PathConstraintSpacingTimeline,
    Physics: () => Physics,
    PhysicsConstraintDampingTimeline: () => PhysicsConstraintDampingTimeline,
    PhysicsConstraintGravityTimeline: () => PhysicsConstraintGravityTimeline,
    PhysicsConstraintInertiaTimeline: () => PhysicsConstraintInertiaTimeline,
    PhysicsConstraintMassTimeline: () => PhysicsConstraintMassTimeline,
    PhysicsConstraintMixTimeline: () => PhysicsConstraintMixTimeline,
    PhysicsConstraintResetTimeline: () => PhysicsConstraintResetTimeline,
    PhysicsConstraintStrengthTimeline: () => PhysicsConstraintStrengthTimeline,
    PhysicsConstraintTimeline: () => PhysicsConstraintTimeline,
    PhysicsConstraintWindTimeline: () => PhysicsConstraintWindTimeline,
    PointAttachment: () => PointAttachment,
    PolygonBatcher: () => PolygonBatcher,
    Pool: () => Pool,
    Position2Attribute: () => Position2Attribute,
    Position3Attribute: () => Position3Attribute,
    PositionMode: () => PositionMode,
    Pow: () => Pow,
    PowOut: () => PowOut,
    RGB2Timeline: () => RGB2Timeline,
    RGBA2Timeline: () => RGBA2Timeline,
    RGBATimeline: () => RGBATimeline,
    RGBTimeline: () => RGBTimeline,
    RegionAttachment: () => RegionAttachment,
    ResizeMode: () => ResizeMode,
    RotateMode: () => RotateMode,
    RotateTimeline: () => RotateTimeline,
    SETUP: () => SETUP,
    SUBSEQUENT: () => SUBSEQUENT,
    ScaleTimeline: () => ScaleTimeline,
    ScaleXTimeline: () => ScaleXTimeline,
    ScaleYTimeline: () => ScaleYTimeline,
    SceneRenderer: () => SceneRenderer,
    ScrollFactor: () => ScrollFactor,
    ScrollFactorMixin: () => ScrollFactorMixin,
    SequenceTimeline: () => SequenceTimeline,
    SetupPoseBoundsProvider: () => SetupPoseBoundsProvider,
    Shader: () => Shader,
    ShapeRenderer: () => ShapeRenderer,
    ShapeType: () => ShapeType,
    ShearTimeline: () => ShearTimeline,
    ShearXTimeline: () => ShearXTimeline,
    ShearYTimeline: () => ShearYTimeline,
    Skeleton: () => Skeleton,
    SkeletonBinary: () => SkeletonBinary,
    SkeletonBounds: () => SkeletonBounds,
    SkeletonClipping: () => SkeletonClipping,
    SkeletonData: () => SkeletonData,
    SkeletonDebugRenderer: () => SkeletonDebugRenderer,
    SkeletonJson: () => SkeletonJson,
    SkeletonRenderer: () => SkeletonRenderer,
    Skin: () => Skin,
    SkinEntry: () => SkinEntry,
    SkinsAndAnimationBoundsProvider: () => SkinsAndAnimationBoundsProvider,
    Slot: () => Slot,
    SlotData: () => SlotData,
    SpacingMode: () => SpacingMode,
    SpineCanvas: () => SpineCanvas,
    SpineGameObject: () => SpineGameObject,
    SpinePlugin: () => SpinePlugin,
    StringSet: () => StringSet,
    TexCoordAttribute: () => TexCoordAttribute,
    Texture: () => Texture,
    TextureAtlas: () => TextureAtlas,
    TextureAtlasPage: () => TextureAtlasPage,
    TextureAtlasRegion: () => TextureAtlasRegion,
    TextureFilter: () => TextureFilter,
    TextureRegion: () => TextureRegion,
    TextureWrap: () => TextureWrap,
    TimeKeeper: () => TimeKeeper,
    Timeline: () => Timeline,
    Touch: () => Touch,
    TrackEntry: () => TrackEntry,
    Transform: () => Transform,
    TransformConstraint: () => TransformConstraint,
    TransformConstraintData: () => TransformConstraintData,
    TransformConstraintTimeline: () => TransformConstraintTimeline,
    TransformMixin: () => TransformMixin,
    TranslateTimeline: () => TranslateTimeline,
    TranslateXTimeline: () => TranslateXTimeline,
    TranslateYTimeline: () => TranslateYTimeline,
    Triangulator: () => Triangulator,
    Utils: () => Utils,
    Vector2: () => Vector2,
    Vector3: () => Vector3,
    VertexAttachment: () => VertexAttachment,
    VertexAttribute: () => VertexAttribute,
    VertexAttributeType: () => VertexAttributeType,
    Visible: () => Visible,
    VisibleMixin: () => VisibleMixin,
    WindowedMean: () => WindowedMean,
    createMixin: () => createMixin
  });

  // spine-phaser-v4/src/require-shim.ts
  if (typeof window !== "undefined" && window.Phaser) {
    let prevRequire = window.require;
    window.require = (x) => {
      if (prevRequire) return prevRequire(x);
      else if (x === "Phaser") return window.Phaser;
    };
  }

  // spine-phaser-v4/src/SpinePlugin.ts
  var Phaser2 = __toESM(__require("Phaser"), 1);

  // spine-phaser-v4/src/keys.ts
  var SPINE_SKELETON_FILE_CACHE_KEY = "esotericsoftware.spine.skeletonFile.cache";
  var SPINE_ATLAS_CACHE_KEY = "esotericsoftware.spine.atlas.cache";
  var SPINE_SKELETON_DATA_FILE_TYPE = "spineSkeletonData";
  var SPINE_ATLAS_FILE_TYPE = "spineAtlasData";
  var SPINE_GAME_OBJECT_TYPE = "spine";

  // spine-core/src/Utils.ts
  var IntSet = class {
    array = new Array();
    add(value) {
      let contains = this.contains(value);
      this.array[value | 0] = value | 0;
      return !contains;
    }
    contains(value) {
      return this.array[value | 0] != void 0;
    }
    remove(value) {
      this.array[value | 0] = void 0;
    }
    clear() {
      this.array.length = 0;
    }
  };
  var StringSet = class {
    entries = {};
    size = 0;
    add(value) {
      let contains = this.entries[value];
      this.entries[value] = true;
      if (!contains) {
        this.size++;
        return true;
      }
      return false;
    }
    addAll(values) {
      let oldSize = this.size;
      for (var i = 0, n = values.length; i < n; i++)
        this.add(values[i]);
      return oldSize != this.size;
    }
    contains(value) {
      return this.entries[value];
    }
    clear() {
      this.entries = {};
      this.size = 0;
    }
  };
  var Color = class _Color {
    constructor(r = 0, g = 0, b = 0, a = 0) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
    }
    static WHITE = new _Color(1, 1, 1, 1);
    static RED = new _Color(1, 0, 0, 1);
    static GREEN = new _Color(0, 1, 0, 1);
    static BLUE = new _Color(0, 0, 1, 1);
    static MAGENTA = new _Color(1, 0, 1, 1);
    set(r, g, b, a) {
      this.r = r;
      this.g = g;
      this.b = b;
      this.a = a;
      return this.clamp();
    }
    setFromColor(c) {
      this.r = c.r;
      this.g = c.g;
      this.b = c.b;
      this.a = c.a;
      return this;
    }
    setFromString(hex) {
      hex = hex.charAt(0) == "#" ? hex.substr(1) : hex;
      this.r = parseInt(hex.substr(0, 2), 16) / 255;
      this.g = parseInt(hex.substr(2, 2), 16) / 255;
      this.b = parseInt(hex.substr(4, 2), 16) / 255;
      this.a = hex.length != 8 ? 1 : parseInt(hex.substr(6, 2), 16) / 255;
      return this;
    }
    add(r, g, b, a) {
      this.r += r;
      this.g += g;
      this.b += b;
      this.a += a;
      return this.clamp();
    }
    clamp() {
      if (this.r < 0) this.r = 0;
      else if (this.r > 1) this.r = 1;
      if (this.g < 0) this.g = 0;
      else if (this.g > 1) this.g = 1;
      if (this.b < 0) this.b = 0;
      else if (this.b > 1) this.b = 1;
      if (this.a < 0) this.a = 0;
      else if (this.a > 1) this.a = 1;
      return this;
    }
    static rgba8888ToColor(color, value) {
      color.r = ((value & 4278190080) >>> 24) / 255;
      color.g = ((value & 16711680) >>> 16) / 255;
      color.b = ((value & 65280) >>> 8) / 255;
      color.a = (value & 255) / 255;
    }
    static rgb888ToColor(color, value) {
      color.r = ((value & 16711680) >>> 16) / 255;
      color.g = ((value & 65280) >>> 8) / 255;
      color.b = (value & 255) / 255;
    }
    toRgb888() {
      const hex = (x) => ("0" + (x * 255).toString(16)).slice(-2);
      return Number("0x" + hex(this.r) + hex(this.g) + hex(this.b));
    }
    static fromString(hex, color = new _Color()) {
      return color.setFromString(hex);
    }
  };
  var MathUtils = class _MathUtils {
    static PI = 3.1415927;
    static PI2 = _MathUtils.PI * 2;
    static invPI2 = 1 / _MathUtils.PI2;
    static radiansToDegrees = 180 / _MathUtils.PI;
    static radDeg = _MathUtils.radiansToDegrees;
    static degreesToRadians = _MathUtils.PI / 180;
    static degRad = _MathUtils.degreesToRadians;
    static clamp(value, min, max) {
      if (value < min) return min;
      if (value > max) return max;
      return value;
    }
    static cosDeg(degrees) {
      return Math.cos(degrees * _MathUtils.degRad);
    }
    static sinDeg(degrees) {
      return Math.sin(degrees * _MathUtils.degRad);
    }
    static atan2Deg(y, x) {
      return Math.atan2(y, x) * _MathUtils.degRad;
    }
    static signum(value) {
      return value > 0 ? 1 : value < 0 ? -1 : 0;
    }
    static toInt(x) {
      return x > 0 ? Math.floor(x) : Math.ceil(x);
    }
    static cbrt(x) {
      let y = Math.pow(Math.abs(x), 1 / 3);
      return x < 0 ? -y : y;
    }
    static randomTriangular(min, max) {
      return _MathUtils.randomTriangularWith(min, max, (min + max) * 0.5);
    }
    static randomTriangularWith(min, max, mode) {
      let u = Math.random();
      let d = max - min;
      if (u <= (mode - min) / d) return min + Math.sqrt(u * d * (mode - min));
      return max - Math.sqrt((1 - u) * d * (max - mode));
    }
    static isPowerOfTwo(value) {
      return value && (value & value - 1) === 0;
    }
  };
  var Interpolation = class {
    apply(start, end, a) {
      return start + (end - start) * this.applyInternal(a);
    }
  };
  var Pow = class extends Interpolation {
    power = 2;
    constructor(power) {
      super();
      this.power = power;
    }
    applyInternal(a) {
      if (a <= 0.5) return Math.pow(a * 2, this.power) / 2;
      return Math.pow((a - 1) * 2, this.power) / (this.power % 2 == 0 ? -2 : 2) + 1;
    }
  };
  var PowOut = class extends Pow {
    constructor(power) {
      super(power);
    }
    applyInternal(a) {
      return Math.pow(a - 1, this.power) * (this.power % 2 == 0 ? -1 : 1) + 1;
    }
  };
  var Utils = class _Utils {
    static SUPPORTS_TYPED_ARRAYS = typeof Float32Array !== "undefined";
    static arrayCopy(source, sourceStart, dest, destStart, numElements) {
      for (let i = sourceStart, j = destStart; i < sourceStart + numElements; i++, j++) {
        dest[j] = source[i];
      }
    }
    static arrayFill(array, fromIndex, toIndex, value) {
      for (let i = fromIndex; i < toIndex; i++)
        array[i] = value;
    }
    static setArraySize(array, size, value = 0) {
      let oldSize = array.length;
      if (oldSize == size) return array;
      array.length = size;
      if (oldSize < size) {
        for (let i = oldSize; i < size; i++) array[i] = value;
      }
      return array;
    }
    static ensureArrayCapacity(array, size, value = 0) {
      if (array.length >= size) return array;
      return _Utils.setArraySize(array, size, value);
    }
    static newArray(size, defaultValue) {
      let array = new Array(size);
      for (let i = 0; i < size; i++) array[i] = defaultValue;
      return array;
    }
    static newFloatArray(size) {
      if (_Utils.SUPPORTS_TYPED_ARRAYS)
        return new Float32Array(size);
      else {
        let array = new Array(size);
        for (let i = 0; i < array.length; i++) array[i] = 0;
        return array;
      }
    }
    static newShortArray(size) {
      if (_Utils.SUPPORTS_TYPED_ARRAYS)
        return new Int16Array(size);
      else {
        let array = new Array(size);
        for (let i = 0; i < array.length; i++) array[i] = 0;
        return array;
      }
    }
    static toFloatArray(array) {
      return _Utils.SUPPORTS_TYPED_ARRAYS ? new Float32Array(array) : array;
    }
    static toSinglePrecision(value) {
      return _Utils.SUPPORTS_TYPED_ARRAYS ? Math.fround(value) : value;
    }
    // This function is used to fix WebKit 602 specific issue described at http://esotericsoftware.com/forum/iOS-10-disappearing-graphics-10109
    static webkit602BugfixHelper(alpha, blend) {
    }
    static contains(array, element, identity = true) {
      for (var i = 0; i < array.length; i++)
        if (array[i] == element) return true;
      return false;
    }
    static enumValue(type, name) {
      return type[name[0].toUpperCase() + name.slice(1)];
    }
  };
  var DebugUtils = class {
    static logBones(skeleton) {
      for (let i = 0; i < skeleton.bones.length; i++) {
        let bone = skeleton.bones[i];
        console.log(bone.data.name + ", " + bone.a + ", " + bone.b + ", " + bone.c + ", " + bone.d + ", " + bone.worldX + ", " + bone.worldY);
      }
    }
  };
  var Pool = class {
    items = new Array();
    instantiator;
    constructor(instantiator) {
      this.instantiator = instantiator;
    }
    obtain() {
      return this.items.length > 0 ? this.items.pop() : this.instantiator();
    }
    free(item) {
      if (item.reset) item.reset();
      this.items.push(item);
    }
    freeAll(items) {
      for (let i = 0; i < items.length; i++)
        this.free(items[i]);
    }
    clear() {
      this.items.length = 0;
    }
  };
  var Vector2 = class {
    constructor(x = 0, y = 0) {
      this.x = x;
      this.y = y;
    }
    set(x, y) {
      this.x = x;
      this.y = y;
      return this;
    }
    length() {
      let x = this.x;
      let y = this.y;
      return Math.sqrt(x * x + y * y);
    }
    normalize() {
      let len = this.length();
      if (len != 0) {
        this.x /= len;
        this.y /= len;
      }
      return this;
    }
  };
  var TimeKeeper = class {
    maxDelta = 0.064;
    framesPerSecond = 0;
    delta = 0;
    totalTime = 0;
    lastTime = Date.now() / 1e3;
    frameCount = 0;
    frameTime = 0;
    update() {
      let now = Date.now() / 1e3;
      this.delta = now - this.lastTime;
      this.frameTime += this.delta;
      this.totalTime += this.delta;
      if (this.delta > this.maxDelta) this.delta = this.maxDelta;
      this.lastTime = now;
      this.frameCount++;
      if (this.frameTime > 1) {
        this.framesPerSecond = this.frameCount / this.frameTime;
        this.frameTime = 0;
        this.frameCount = 0;
      }
    }
  };
  var WindowedMean = class {
    values;
    addedValues = 0;
    lastValue = 0;
    mean = 0;
    dirty = true;
    constructor(windowSize = 32) {
      this.values = new Array(windowSize);
    }
    hasEnoughData() {
      return this.addedValues >= this.values.length;
    }
    addValue(value) {
      if (this.addedValues < this.values.length) this.addedValues++;
      this.values[this.lastValue++] = value;
      if (this.lastValue > this.values.length - 1) this.lastValue = 0;
      this.dirty = true;
    }
    getMean() {
      if (this.hasEnoughData()) {
        if (this.dirty) {
          let mean = 0;
          for (let i = 0; i < this.values.length; i++)
            mean += this.values[i];
          this.mean = mean / this.values.length;
          this.dirty = false;
        }
        return this.mean;
      }
      return 0;
    }
  };

  // spine-core/src/attachments/Attachment.ts
  var Attachment = class {
    name;
    constructor(name) {
      if (!name) throw new Error("name cannot be null.");
      this.name = name;
    }
  };
  var VertexAttachment = class _VertexAttachment extends Attachment {
    static nextID = 0;
    /** The unique ID for this attachment. */
    id = _VertexAttachment.nextID++;
    /** The bones which affect the {@link #getVertices()}. The array entries are, for each vertex, the number of bones affecting
     * the vertex followed by that many bone indices, which is the index of the bone in {@link Skeleton#bones}. Will be null
     * if this attachment has no weights. */
    bones = null;
    /** The vertex positions in the bone's coordinate system. For a non-weighted attachment, the values are `x,y`
     * entries for each vertex. For a weighted attachment, the values are `x,y,weight` entries for each bone affecting
     * each vertex. */
    vertices = [];
    /** The maximum number of world vertex values that can be output by
     * {@link #computeWorldVertices()} using the `count` parameter. */
    worldVerticesLength = 0;
    /** Timelines for the timeline attachment are also applied to this attachment.
     * May be null if no attachment-specific timelines should be applied. */
    timelineAttachment = this;
    constructor(name) {
      super(name);
    }
    /** Transforms the attachment's local {@link #vertices} to world coordinates. If the slot's {@link Slot#deform} is
     * not empty, it is used to deform the vertices.
     *
     * See [World transforms](http://esotericsoftware.com/spine-runtime-skeletons#World-transforms) in the Spine
     * Runtimes Guide.
     * @param start The index of the first {@link #vertices} value to transform. Each vertex has 2 values, x and y.
     * @param count The number of world vertex values to output. Must be <= {@link #worldVerticesLength} - `start`.
     * @param worldVertices The output world vertices. Must have a length >= `offset` + `count` *
     *           `stride` / 2.
     * @param offset The `worldVertices` index to begin writing values.
     * @param stride The number of `worldVertices` entries between the value pairs written. */
    computeWorldVertices(slot, start, count, worldVertices2, offset, stride) {
      count = offset + (count >> 1) * stride;
      let skeleton = slot.bone.skeleton;
      let deformArray = slot.deform;
      let vertices = this.vertices;
      let bones = this.bones;
      if (!bones) {
        if (deformArray.length > 0) vertices = deformArray;
        let bone = slot.bone;
        let x = bone.worldX;
        let y = bone.worldY;
        let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
        for (let v2 = start, w = offset; w < count; v2 += 2, w += stride) {
          let vx = vertices[v2], vy = vertices[v2 + 1];
          worldVertices2[w] = vx * a + vy * b + x;
          worldVertices2[w + 1] = vx * c + vy * d + y;
        }
        return;
      }
      let v = 0, skip = 0;
      for (let i = 0; i < start; i += 2) {
        let n = bones[v];
        v += n + 1;
        skip += n;
      }
      let skeletonBones = skeleton.bones;
      if (deformArray.length == 0) {
        for (let w = offset, b = skip * 3; w < count; w += stride) {
          let wx = 0, wy = 0;
          let n = bones[v++];
          n += v;
          for (; v < n; v++, b += 3) {
            let bone = skeletonBones[bones[v]];
            let vx = vertices[b], vy = vertices[b + 1], weight = vertices[b + 2];
            wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
            wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
          }
          worldVertices2[w] = wx;
          worldVertices2[w + 1] = wy;
        }
      } else {
        let deform = deformArray;
        for (let w = offset, b = skip * 3, f = skip << 1; w < count; w += stride) {
          let wx = 0, wy = 0;
          let n = bones[v++];
          n += v;
          for (; v < n; v++, b += 3, f += 2) {
            let bone = skeletonBones[bones[v]];
            let vx = vertices[b] + deform[f], vy = vertices[b + 1] + deform[f + 1], weight = vertices[b + 2];
            wx += (vx * bone.a + vy * bone.b + bone.worldX) * weight;
            wy += (vx * bone.c + vy * bone.d + bone.worldY) * weight;
          }
          worldVertices2[w] = wx;
          worldVertices2[w + 1] = wy;
        }
      }
    }
    /** Does not copy id (generated) or name (set on construction). **/
    copyTo(attachment) {
      if (this.bones) {
        attachment.bones = new Array(this.bones.length);
        Utils.arrayCopy(this.bones, 0, attachment.bones, 0, this.bones.length);
      } else
        attachment.bones = null;
      if (this.vertices) {
        attachment.vertices = Utils.newFloatArray(this.vertices.length);
        Utils.arrayCopy(this.vertices, 0, attachment.vertices, 0, this.vertices.length);
      }
      attachment.worldVerticesLength = this.worldVerticesLength;
      attachment.timelineAttachment = this.timelineAttachment;
    }
  };

  // spine-core/src/attachments/Sequence.ts
  var Sequence = class _Sequence {
    static _nextID = 0;
    id = _Sequence.nextID();
    regions;
    start = 0;
    digits = 0;
    /** The index of the region to show for the setup pose. */
    setupIndex = 0;
    constructor(count) {
      this.regions = new Array(count);
    }
    copy() {
      let copy = new _Sequence(this.regions.length);
      Utils.arrayCopy(this.regions, 0, copy.regions, 0, this.regions.length);
      copy.start = this.start;
      copy.digits = this.digits;
      copy.setupIndex = this.setupIndex;
      return copy;
    }
    apply(slot, attachment) {
      let index = slot.sequenceIndex;
      if (index == -1) index = this.setupIndex;
      if (index >= this.regions.length) index = this.regions.length - 1;
      let region = this.regions[index];
      if (attachment.region != region) {
        attachment.region = region;
        attachment.updateRegion();
      }
    }
    getPath(basePath, index) {
      let result = basePath;
      let frame = (this.start + index).toString();
      for (let i = this.digits - frame.length; i > 0; i--)
        result += "0";
      result += frame;
      return result;
    }
    static nextID() {
      return _Sequence._nextID++;
    }
  };
  var SequenceMode = /* @__PURE__ */ ((SequenceMode2) => {
    SequenceMode2[SequenceMode2["hold"] = 0] = "hold";
    SequenceMode2[SequenceMode2["once"] = 1] = "once";
    SequenceMode2[SequenceMode2["loop"] = 2] = "loop";
    SequenceMode2[SequenceMode2["pingpong"] = 3] = "pingpong";
    SequenceMode2[SequenceMode2["onceReverse"] = 4] = "onceReverse";
    SequenceMode2[SequenceMode2["loopReverse"] = 5] = "loopReverse";
    SequenceMode2[SequenceMode2["pingpongReverse"] = 6] = "pingpongReverse";
    return SequenceMode2;
  })(SequenceMode || {});
  var SequenceModeValues = [
    0 /* hold */,
    1 /* once */,
    2 /* loop */,
    3 /* pingpong */,
    4 /* onceReverse */,
    5 /* loopReverse */,
    6 /* pingpongReverse */
  ];

  // spine-core/src/Animation.ts
  var Animation = class {
    /** The animation's name, which is unique across all animations in the skeleton. */
    name;
    timelines = [];
    timelineIds = new StringSet();
    /** The duration of the animation in seconds, which is the highest time of all keys in the timeline. */
    duration;
    constructor(name, timelines, duration) {
      if (!name) throw new Error("name cannot be null.");
      this.name = name;
      this.setTimelines(timelines);
      this.duration = duration;
    }
    setTimelines(timelines) {
      if (!timelines) throw new Error("timelines cannot be null.");
      this.timelines = timelines;
      this.timelineIds.clear();
      for (var i = 0; i < timelines.length; i++)
        this.timelineIds.addAll(timelines[i].getPropertyIds());
    }
    hasTimeline(ids) {
      for (let i = 0; i < ids.length; i++)
        if (this.timelineIds.contains(ids[i])) return true;
      return false;
    }
    /** Applies all the animation's timelines to the specified skeleton.
     *
     * See Timeline {@link Timeline#apply(Skeleton, float, float, Array, float, MixBlend, MixDirection)}.
     * @param loop If true, the animation repeats after {@link #getDuration()}.
     * @param events May be null to ignore fired events. */
    apply(skeleton, lastTime, time, loop, events, alpha, blend, direction) {
      if (!skeleton) throw new Error("skeleton cannot be null.");
      if (loop && this.duration != 0) {
        time %= this.duration;
        if (lastTime > 0) lastTime %= this.duration;
      }
      let timelines = this.timelines;
      for (let i = 0, n = timelines.length; i < n; i++)
        timelines[i].apply(skeleton, lastTime, time, events, alpha, blend, direction);
    }
  };
  var MixBlend = /* @__PURE__ */ ((MixBlend2) => {
    MixBlend2[MixBlend2["setup"] = 0] = "setup";
    MixBlend2[MixBlend2["first"] = 1] = "first";
    MixBlend2[MixBlend2["replace"] = 2] = "replace";
    MixBlend2[MixBlend2["add"] = 3] = "add";
    return MixBlend2;
  })(MixBlend || {});
  var MixDirection = /* @__PURE__ */ ((MixDirection2) => {
    MixDirection2[MixDirection2["mixIn"] = 0] = "mixIn";
    MixDirection2[MixDirection2["mixOut"] = 1] = "mixOut";
    return MixDirection2;
  })(MixDirection || {});
  var Property = {
    rotate: 0,
    x: 1,
    y: 2,
    scaleX: 3,
    scaleY: 4,
    shearX: 5,
    shearY: 6,
    inherit: 7,
    rgb: 8,
    alpha: 9,
    rgb2: 10,
    attachment: 11,
    deform: 12,
    event: 13,
    drawOrder: 14,
    ikConstraint: 15,
    transformConstraint: 16,
    pathConstraintPosition: 17,
    pathConstraintSpacing: 18,
    pathConstraintMix: 19,
    physicsConstraintInertia: 20,
    physicsConstraintStrength: 21,
    physicsConstraintDamping: 22,
    physicsConstraintMass: 23,
    physicsConstraintWind: 24,
    physicsConstraintGravity: 25,
    physicsConstraintMix: 26,
    physicsConstraintReset: 27,
    sequence: 28
  };
  var Timeline = class {
    propertyIds;
    frames;
    constructor(frameCount, propertyIds) {
      this.propertyIds = propertyIds;
      this.frames = Utils.newFloatArray(frameCount * this.getFrameEntries());
    }
    getPropertyIds() {
      return this.propertyIds;
    }
    getFrameEntries() {
      return 1;
    }
    getFrameCount() {
      return this.frames.length / this.getFrameEntries();
    }
    getDuration() {
      return this.frames[this.frames.length - this.getFrameEntries()];
    }
    static search1(frames, time) {
      let n = frames.length;
      for (let i = 1; i < n; i++)
        if (frames[i] > time) return i - 1;
      return n - 1;
    }
    static search(frames, time, step) {
      let n = frames.length;
      for (let i = step; i < n; i += step)
        if (frames[i] > time) return i - step;
      return n - step;
    }
  };
  var CurveTimeline = class extends Timeline {
    curves;
    // type, x, y, ...
    constructor(frameCount, bezierCount, propertyIds) {
      super(frameCount, propertyIds);
      this.curves = Utils.newFloatArray(
        frameCount + bezierCount * 18
        /*BEZIER_SIZE*/
      );
      this.curves[frameCount - 1] = 1;
    }
    /** Sets the specified key frame to linear interpolation. */
    setLinear(frame) {
      this.curves[frame] = 0;
    }
    /** Sets the specified key frame to stepped interpolation. */
    setStepped(frame) {
      this.curves[frame] = 1;
    }
    /** Shrinks the storage for Bezier curves, for use when <code>bezierCount</code> (specified in the constructor) was larger
     * than the actual number of Bezier curves. */
    shrink(bezierCount) {
      let size = this.getFrameCount() + bezierCount * 18;
      if (this.curves.length > size) {
        let newCurves = Utils.newFloatArray(size);
        Utils.arrayCopy(this.curves, 0, newCurves, 0, size);
        this.curves = newCurves;
      }
    }
    /** Stores the segments for the specified Bezier curve. For timelines that modify multiple values, there may be more than
     * one curve per frame.
     * @param bezier The ordinal of this Bezier curve for this timeline, between 0 and <code>bezierCount - 1</code> (specified
     *           in the constructor), inclusive.
     * @param frame Between 0 and <code>frameCount - 1</code>, inclusive.
     * @param value The index of the value for this frame that this curve is used for.
     * @param time1 The time for the first key.
     * @param value1 The value for the first key.
     * @param cx1 The time for the first Bezier handle.
     * @param cy1 The value for the first Bezier handle.
     * @param cx2 The time of the second Bezier handle.
     * @param cy2 The value for the second Bezier handle.
     * @param time2 The time for the second key.
     * @param value2 The value for the second key. */
    setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2) {
      let curves = this.curves;
      let i = this.getFrameCount() + bezier * 18;
      if (value == 0) curves[frame] = 2 + i;
      let tmpx = (time1 - cx1 * 2 + cx2) * 0.03, tmpy = (value1 - cy1 * 2 + cy2) * 0.03;
      let dddx = ((cx1 - cx2) * 3 - time1 + time2) * 6e-3, dddy = ((cy1 - cy2) * 3 - value1 + value2) * 6e-3;
      let ddx = tmpx * 2 + dddx, ddy = tmpy * 2 + dddy;
      let dx = (cx1 - time1) * 0.3 + tmpx + dddx * 0.16666667, dy = (cy1 - value1) * 0.3 + tmpy + dddy * 0.16666667;
      let x = time1 + dx, y = value1 + dy;
      for (let n = i + 18; i < n; i += 2) {
        curves[i] = x;
        curves[i + 1] = y;
        dx += ddx;
        dy += ddy;
        ddx += dddx;
        ddy += dddy;
        x += dx;
        y += dy;
      }
    }
    /** Returns the Bezier interpolated value for the specified time.
     * @param frameIndex The index into {@link #getFrames()} for the values of the frame before <code>time</code>.
     * @param valueOffset The offset from <code>frameIndex</code> to the value this curve is used for.
     * @param i The index of the Bezier segments. See {@link #getCurveType(int)}. */
    getBezierValue(time, frameIndex, valueOffset, i) {
      let curves = this.curves;
      if (curves[i] > time) {
        let x2 = this.frames[frameIndex], y2 = this.frames[frameIndex + valueOffset];
        return y2 + (time - x2) / (curves[i] - x2) * (curves[i + 1] - y2);
      }
      let n = i + 18;
      for (i += 2; i < n; i += 2) {
        if (curves[i] >= time) {
          let x2 = curves[i - 2], y2 = curves[i - 1];
          return y2 + (time - x2) / (curves[i] - x2) * (curves[i + 1] - y2);
        }
      }
      frameIndex += this.getFrameEntries();
      let x = curves[n - 2], y = curves[n - 1];
      return y + (time - x) / (this.frames[frameIndex] - x) * (this.frames[frameIndex + valueOffset] - y);
    }
  };
  var CurveTimeline1 = class extends CurveTimeline {
    constructor(frameCount, bezierCount, propertyId) {
      super(frameCount, bezierCount, [propertyId]);
    }
    getFrameEntries() {
      return 2;
    }
    /** Sets the time and value for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, value) {
      frame <<= 1;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*VALUE*/
      ] = value;
    }
    /** Returns the interpolated value for the specified time. */
    getCurveValue(time) {
      let frames = this.frames;
      let i = frames.length - 2;
      for (let ii = 2; ii <= i; ii += 2) {
        if (frames[ii] > time) {
          i = ii - 2;
          break;
        }
      }
      let curveType = this.curves[i >> 1];
      switch (curveType) {
        case 0:
          let before = frames[i], value = frames[
            i + 1
            /*VALUE*/
          ];
          return value + (time - before) / (frames[
            i + 2
            /*ENTRIES*/
          ] - before) * (frames[
            i + 2 + 1
            /*VALUE*/
          ] - value);
        case 1:
          return frames[
            i + 1
            /*VALUE*/
          ];
      }
      return this.getBezierValue(
        time,
        i,
        1,
        curveType - 2
        /*BEZIER*/
      );
    }
    getRelativeValue(time, alpha, blend, current, setup) {
      if (time < this.frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            return setup;
          case 1 /* first */:
            return current + (setup - current) * alpha;
        }
        return current;
      }
      let value = this.getCurveValue(time);
      switch (blend) {
        case 0 /* setup */:
          return setup + value * alpha;
        case 1 /* first */:
        case 2 /* replace */:
          value += setup - current;
      }
      return current + value * alpha;
    }
    getAbsoluteValue(time, alpha, blend, current, setup) {
      if (time < this.frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            return setup;
          case 1 /* first */:
            return current + (setup - current) * alpha;
        }
        return current;
      }
      let value = this.getCurveValue(time);
      if (blend == 0 /* setup */) return setup + (value - setup) * alpha;
      return current + (value - current) * alpha;
    }
    getAbsoluteValue2(time, alpha, blend, current, setup, value) {
      if (time < this.frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            return setup;
          case 1 /* first */:
            return current + (setup - current) * alpha;
        }
        return current;
      }
      if (blend == 0 /* setup */) return setup + (value - setup) * alpha;
      return current + (value - current) * alpha;
    }
    getScaleValue(time, alpha, blend, direction, current, setup) {
      const frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            return setup;
          case 1 /* first */:
            return current + (setup - current) * alpha;
        }
        return current;
      }
      let value = this.getCurveValue(time) * setup;
      if (alpha == 1) {
        if (blend == 3 /* add */) return current + value - setup;
        return value;
      }
      if (direction == 1 /* mixOut */) {
        switch (blend) {
          case 0 /* setup */:
            return setup + (Math.abs(value) * MathUtils.signum(setup) - setup) * alpha;
          case 1 /* first */:
          case 2 /* replace */:
            return current + (Math.abs(value) * MathUtils.signum(current) - current) * alpha;
        }
      } else {
        let s = 0;
        switch (blend) {
          case 0 /* setup */:
            s = Math.abs(setup) * MathUtils.signum(value);
            return s + (value - s) * alpha;
          case 1 /* first */:
          case 2 /* replace */:
            s = Math.abs(current) * MathUtils.signum(value);
            return s + (value - s) * alpha;
        }
      }
      return current + (value - setup) * alpha;
    }
  };
  var CurveTimeline2 = class extends CurveTimeline {
    /** @param bezierCount The maximum number of Bezier curves. See {@link #shrink(int)}.
     * @param propertyIds Unique identifiers for the properties the timeline modifies. */
    constructor(frameCount, bezierCount, propertyId1, propertyId2) {
      super(frameCount, bezierCount, [propertyId1, propertyId2]);
    }
    getFrameEntries() {
      return 3;
    }
    /** Sets the time and values for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, value1, value2) {
      frame *= 3;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*VALUE1*/
      ] = value1;
      this.frames[
        frame + 2
        /*VALUE2*/
      ] = value2;
    }
  };
  var RotateTimeline = class extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, Property.rotate + "|" + boneIndex);
      this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let bone = skeleton.bones[this.boneIndex];
      if (bone.active) bone.rotation = this.getRelativeValue(time, alpha, blend, bone.rotation, bone.data.rotation);
    }
  };
  var TranslateTimeline = class extends CurveTimeline2 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
      super(
        frameCount,
        bezierCount,
        Property.x + "|" + boneIndex,
        Property.y + "|" + boneIndex
      );
      this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let bone = skeleton.bones[this.boneIndex];
      if (!bone.active) return;
      let frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            bone.x = bone.data.x;
            bone.y = bone.data.y;
            return;
          case 1 /* first */:
            bone.x += (bone.data.x - bone.x) * alpha;
            bone.y += (bone.data.y - bone.y) * alpha;
        }
        return;
      }
      let x = 0, y = 0;
      let i = Timeline.search(
        frames,
        time,
        3
        /*ENTRIES*/
      );
      let curveType = this.curves[
        i / 3
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0:
          let before = frames[i];
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          let t = (time - before) / (frames[
            i + 3
            /*ENTRIES*/
          ] - before);
          x += (frames[
            i + 3 + 1
            /*VALUE1*/
          ] - x) * t;
          y += (frames[
            i + 3 + 2
            /*VALUE2*/
          ] - y) * t;
          break;
        case 1:
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          break;
        default:
          x = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          y = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
      }
      switch (blend) {
        case 0 /* setup */:
          bone.x = bone.data.x + x * alpha;
          bone.y = bone.data.y + y * alpha;
          break;
        case 1 /* first */:
        case 2 /* replace */:
          bone.x += (bone.data.x + x - bone.x) * alpha;
          bone.y += (bone.data.y + y - bone.y) * alpha;
          break;
        case 3 /* add */:
          bone.x += x * alpha;
          bone.y += y * alpha;
      }
    }
  };
  var TranslateXTimeline = class extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, Property.x + "|" + boneIndex);
      this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let bone = skeleton.bones[this.boneIndex];
      if (bone.active) bone.x = this.getRelativeValue(time, alpha, blend, bone.x, bone.data.x);
    }
  };
  var TranslateYTimeline = class extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, Property.y + "|" + boneIndex);
      this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let bone = skeleton.bones[this.boneIndex];
      if (bone.active) bone.y = this.getRelativeValue(time, alpha, blend, bone.y, bone.data.y);
    }
  };
  var ScaleTimeline = class extends CurveTimeline2 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
      super(
        frameCount,
        bezierCount,
        Property.scaleX + "|" + boneIndex,
        Property.scaleY + "|" + boneIndex
      );
      this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let bone = skeleton.bones[this.boneIndex];
      if (!bone.active) return;
      let frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            bone.scaleX = bone.data.scaleX;
            bone.scaleY = bone.data.scaleY;
            return;
          case 1 /* first */:
            bone.scaleX += (bone.data.scaleX - bone.scaleX) * alpha;
            bone.scaleY += (bone.data.scaleY - bone.scaleY) * alpha;
        }
        return;
      }
      let x, y;
      let i = Timeline.search(
        frames,
        time,
        3
        /*ENTRIES*/
      );
      let curveType = this.curves[
        i / 3
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0:
          let before = frames[i];
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          let t = (time - before) / (frames[
            i + 3
            /*ENTRIES*/
          ] - before);
          x += (frames[
            i + 3 + 1
            /*VALUE1*/
          ] - x) * t;
          y += (frames[
            i + 3 + 2
            /*VALUE2*/
          ] - y) * t;
          break;
        case 1:
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          break;
        default:
          x = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          y = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
      }
      x *= bone.data.scaleX;
      y *= bone.data.scaleY;
      if (alpha == 1) {
        if (blend == 3 /* add */) {
          bone.scaleX += x - bone.data.scaleX;
          bone.scaleY += y - bone.data.scaleY;
        } else {
          bone.scaleX = x;
          bone.scaleY = y;
        }
      } else {
        let bx = 0, by = 0;
        if (direction == 1 /* mixOut */) {
          switch (blend) {
            case 0 /* setup */:
              bx = bone.data.scaleX;
              by = bone.data.scaleY;
              bone.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
              bone.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
              break;
            case 1 /* first */:
            case 2 /* replace */:
              bx = bone.scaleX;
              by = bone.scaleY;
              bone.scaleX = bx + (Math.abs(x) * MathUtils.signum(bx) - bx) * alpha;
              bone.scaleY = by + (Math.abs(y) * MathUtils.signum(by) - by) * alpha;
              break;
            case 3 /* add */:
              bone.scaleX += (x - bone.data.scaleX) * alpha;
              bone.scaleY += (y - bone.data.scaleY) * alpha;
          }
        } else {
          switch (blend) {
            case 0 /* setup */:
              bx = Math.abs(bone.data.scaleX) * MathUtils.signum(x);
              by = Math.abs(bone.data.scaleY) * MathUtils.signum(y);
              bone.scaleX = bx + (x - bx) * alpha;
              bone.scaleY = by + (y - by) * alpha;
              break;
            case 1 /* first */:
            case 2 /* replace */:
              bx = Math.abs(bone.scaleX) * MathUtils.signum(x);
              by = Math.abs(bone.scaleY) * MathUtils.signum(y);
              bone.scaleX = bx + (x - bx) * alpha;
              bone.scaleY = by + (y - by) * alpha;
              break;
            case 3 /* add */:
              bone.scaleX += (x - bone.data.scaleX) * alpha;
              bone.scaleY += (y - bone.data.scaleY) * alpha;
          }
        }
      }
    }
  };
  var ScaleXTimeline = class extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, Property.scaleX + "|" + boneIndex);
      this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let bone = skeleton.bones[this.boneIndex];
      if (bone.active) bone.scaleX = this.getScaleValue(time, alpha, blend, direction, bone.scaleX, bone.data.scaleX);
    }
  };
  var ScaleYTimeline = class extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, Property.scaleY + "|" + boneIndex);
      this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let bone = skeleton.bones[this.boneIndex];
      if (bone.active) bone.scaleY = this.getScaleValue(time, alpha, blend, direction, bone.scaleY, bone.data.scaleY);
    }
  };
  var ShearTimeline = class extends CurveTimeline2 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
      super(
        frameCount,
        bezierCount,
        Property.shearX + "|" + boneIndex,
        Property.shearY + "|" + boneIndex
      );
      this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let bone = skeleton.bones[this.boneIndex];
      if (!bone.active) return;
      let frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            bone.shearX = bone.data.shearX;
            bone.shearY = bone.data.shearY;
            return;
          case 1 /* first */:
            bone.shearX += (bone.data.shearX - bone.shearX) * alpha;
            bone.shearY += (bone.data.shearY - bone.shearY) * alpha;
        }
        return;
      }
      let x = 0, y = 0;
      let i = Timeline.search(
        frames,
        time,
        3
        /*ENTRIES*/
      );
      let curveType = this.curves[
        i / 3
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0:
          let before = frames[i];
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          let t = (time - before) / (frames[
            i + 3
            /*ENTRIES*/
          ] - before);
          x += (frames[
            i + 3 + 1
            /*VALUE1*/
          ] - x) * t;
          y += (frames[
            i + 3 + 2
            /*VALUE2*/
          ] - y) * t;
          break;
        case 1:
          x = frames[
            i + 1
            /*VALUE1*/
          ];
          y = frames[
            i + 2
            /*VALUE2*/
          ];
          break;
        default:
          x = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          y = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
      }
      switch (blend) {
        case 0 /* setup */:
          bone.shearX = bone.data.shearX + x * alpha;
          bone.shearY = bone.data.shearY + y * alpha;
          break;
        case 1 /* first */:
        case 2 /* replace */:
          bone.shearX += (bone.data.shearX + x - bone.shearX) * alpha;
          bone.shearY += (bone.data.shearY + y - bone.shearY) * alpha;
          break;
        case 3 /* add */:
          bone.shearX += x * alpha;
          bone.shearY += y * alpha;
      }
    }
  };
  var ShearXTimeline = class extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, Property.shearX + "|" + boneIndex);
      this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let bone = skeleton.bones[this.boneIndex];
      if (bone.active) bone.shearX = this.getRelativeValue(time, alpha, blend, bone.shearX, bone.data.shearX);
    }
  };
  var ShearYTimeline = class extends CurveTimeline1 {
    boneIndex = 0;
    constructor(frameCount, bezierCount, boneIndex) {
      super(frameCount, bezierCount, Property.shearY + "|" + boneIndex);
      this.boneIndex = boneIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let bone = skeleton.bones[this.boneIndex];
      if (bone.active) bone.shearY = this.getRelativeValue(time, alpha, blend, bone.shearY, bone.data.shearY);
    }
  };
  var InheritTimeline = class extends Timeline {
    boneIndex = 0;
    constructor(frameCount, boneIndex) {
      super(frameCount, [Property.inherit + "|" + boneIndex]);
      this.boneIndex = boneIndex;
    }
    getFrameEntries() {
      return 2;
    }
    /** Sets the transform mode for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time The frame time in seconds. */
    setFrame(frame, time, inherit) {
      frame *= 2;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*INHERIT*/
      ] = inherit;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let bone = skeleton.bones[this.boneIndex];
      if (!bone.active) return;
      if (direction == 1 /* mixOut */) {
        if (blend == 0 /* setup */) bone.inherit = bone.data.inherit;
        return;
      }
      let frames = this.frames;
      if (time < frames[0]) {
        if (blend == 0 /* setup */ || blend == 1 /* first */) bone.inherit = bone.data.inherit;
        return;
      }
      bone.inherit = this.frames[
        Timeline.search(
          frames,
          time,
          2
          /*ENTRIES*/
        ) + 1
        /*INHERIT*/
      ];
    }
  };
  var RGBATimeline = class extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
      super(frameCount, bezierCount, [
        Property.rgb + "|" + slotIndex,
        Property.alpha + "|" + slotIndex
      ]);
      this.slotIndex = slotIndex;
    }
    getFrameEntries() {
      return 5;
    }
    /** Sets the time in seconds, red, green, blue, and alpha for the specified key frame. */
    setFrame(frame, time, r, g, b, a) {
      frame *= 5;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*R*/
      ] = r;
      this.frames[
        frame + 2
        /*G*/
      ] = g;
      this.frames[
        frame + 3
        /*B*/
      ] = b;
      this.frames[
        frame + 4
        /*A*/
      ] = a;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      let frames = this.frames;
      let color = slot.color;
      if (time < frames[0]) {
        let setup = slot.data.color;
        switch (blend) {
          case 0 /* setup */:
            color.setFromColor(setup);
            return;
          case 1 /* first */:
            color.add(
              (setup.r - color.r) * alpha,
              (setup.g - color.g) * alpha,
              (setup.b - color.b) * alpha,
              (setup.a - color.a) * alpha
            );
        }
        return;
      }
      let r = 0, g = 0, b = 0, a = 0;
      let i = Timeline.search(
        frames,
        time,
        5
        /*ENTRIES*/
      );
      let curveType = this.curves[
        i / 5
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0:
          let before = frames[i];
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          a = frames[
            i + 4
            /*A*/
          ];
          let t = (time - before) / (frames[
            i + 5
            /*ENTRIES*/
          ] - before);
          r += (frames[
            i + 5 + 1
            /*R*/
          ] - r) * t;
          g += (frames[
            i + 5 + 2
            /*G*/
          ] - g) * t;
          b += (frames[
            i + 5 + 3
            /*B*/
          ] - b) * t;
          a += (frames[
            i + 5 + 4
            /*A*/
          ] - a) * t;
          break;
        case 1:
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          a = frames[
            i + 4
            /*A*/
          ];
          break;
        default:
          r = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          g = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          b = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
          a = this.getBezierValue(
            time,
            i,
            4,
            curveType + 18 * 3 - 2
            /*BEZIER*/
          );
      }
      if (alpha == 1)
        color.set(r, g, b, a);
      else {
        if (blend == 0 /* setup */) color.setFromColor(slot.data.color);
        color.add((r - color.r) * alpha, (g - color.g) * alpha, (b - color.b) * alpha, (a - color.a) * alpha);
      }
    }
  };
  var RGBTimeline = class extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
      super(frameCount, bezierCount, [
        Property.rgb + "|" + slotIndex
      ]);
      this.slotIndex = slotIndex;
    }
    getFrameEntries() {
      return 4;
    }
    /** Sets the time in seconds, red, green, blue, and alpha for the specified key frame. */
    setFrame(frame, time, r, g, b) {
      frame <<= 2;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*R*/
      ] = r;
      this.frames[
        frame + 2
        /*G*/
      ] = g;
      this.frames[
        frame + 3
        /*B*/
      ] = b;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      let frames = this.frames;
      let color = slot.color;
      if (time < frames[0]) {
        let setup = slot.data.color;
        switch (blend) {
          case 0 /* setup */:
            color.r = setup.r;
            color.g = setup.g;
            color.b = setup.b;
            return;
          case 1 /* first */:
            color.r += (setup.r - color.r) * alpha;
            color.g += (setup.g - color.g) * alpha;
            color.b += (setup.b - color.b) * alpha;
        }
        return;
      }
      let r = 0, g = 0, b = 0;
      let i = Timeline.search(
        frames,
        time,
        4
        /*ENTRIES*/
      );
      let curveType = this.curves[i >> 2];
      switch (curveType) {
        case 0:
          let before = frames[i];
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          let t = (time - before) / (frames[
            i + 4
            /*ENTRIES*/
          ] - before);
          r += (frames[
            i + 4 + 1
            /*R*/
          ] - r) * t;
          g += (frames[
            i + 4 + 2
            /*G*/
          ] - g) * t;
          b += (frames[
            i + 4 + 3
            /*B*/
          ] - b) * t;
          break;
        case 1:
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          break;
        default:
          r = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          g = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          b = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
      }
      if (alpha == 1) {
        color.r = r;
        color.g = g;
        color.b = b;
      } else {
        if (blend == 0 /* setup */) {
          let setup = slot.data.color;
          color.r = setup.r;
          color.g = setup.g;
          color.b = setup.b;
        }
        color.r += (r - color.r) * alpha;
        color.g += (g - color.g) * alpha;
        color.b += (b - color.b) * alpha;
      }
    }
  };
  var AlphaTimeline = class extends CurveTimeline1 {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
      super(frameCount, bezierCount, Property.alpha + "|" + slotIndex);
      this.slotIndex = slotIndex;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      let color = slot.color;
      if (time < this.frames[0]) {
        let setup = slot.data.color;
        switch (blend) {
          case 0 /* setup */:
            color.a = setup.a;
            return;
          case 1 /* first */:
            color.a += (setup.a - color.a) * alpha;
        }
        return;
      }
      let a = this.getCurveValue(time);
      if (alpha == 1)
        color.a = a;
      else {
        if (blend == 0 /* setup */) color.a = slot.data.color.a;
        color.a += (a - color.a) * alpha;
      }
    }
  };
  var RGBA2Timeline = class extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
      super(frameCount, bezierCount, [
        Property.rgb + "|" + slotIndex,
        Property.alpha + "|" + slotIndex,
        Property.rgb2 + "|" + slotIndex
      ]);
      this.slotIndex = slotIndex;
    }
    getFrameEntries() {
      return 8;
    }
    /** Sets the time in seconds, light, and dark colors for the specified key frame. */
    setFrame(frame, time, r, g, b, a, r2, g2, b2) {
      frame <<= 3;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*R*/
      ] = r;
      this.frames[
        frame + 2
        /*G*/
      ] = g;
      this.frames[
        frame + 3
        /*B*/
      ] = b;
      this.frames[
        frame + 4
        /*A*/
      ] = a;
      this.frames[
        frame + 5
        /*R2*/
      ] = r2;
      this.frames[
        frame + 6
        /*G2*/
      ] = g2;
      this.frames[
        frame + 7
        /*B2*/
      ] = b2;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      let frames = this.frames;
      let light = slot.color, dark = slot.darkColor;
      if (time < frames[0]) {
        let setupLight = slot.data.color, setupDark = slot.data.darkColor;
        switch (blend) {
          case 0 /* setup */:
            light.setFromColor(setupLight);
            dark.r = setupDark.r;
            dark.g = setupDark.g;
            dark.b = setupDark.b;
            return;
          case 1 /* first */:
            light.add(
              (setupLight.r - light.r) * alpha,
              (setupLight.g - light.g) * alpha,
              (setupLight.b - light.b) * alpha,
              (setupLight.a - light.a) * alpha
            );
            dark.r += (setupDark.r - dark.r) * alpha;
            dark.g += (setupDark.g - dark.g) * alpha;
            dark.b += (setupDark.b - dark.b) * alpha;
        }
        return;
      }
      let r = 0, g = 0, b = 0, a = 0, r2 = 0, g2 = 0, b2 = 0;
      let i = Timeline.search(
        frames,
        time,
        8
        /*ENTRIES*/
      );
      let curveType = this.curves[i >> 3];
      switch (curveType) {
        case 0:
          let before = frames[i];
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          a = frames[
            i + 4
            /*A*/
          ];
          r2 = frames[
            i + 5
            /*R2*/
          ];
          g2 = frames[
            i + 6
            /*G2*/
          ];
          b2 = frames[
            i + 7
            /*B2*/
          ];
          let t = (time - before) / (frames[
            i + 8
            /*ENTRIES*/
          ] - before);
          r += (frames[
            i + 8 + 1
            /*R*/
          ] - r) * t;
          g += (frames[
            i + 8 + 2
            /*G*/
          ] - g) * t;
          b += (frames[
            i + 8 + 3
            /*B*/
          ] - b) * t;
          a += (frames[
            i + 8 + 4
            /*A*/
          ] - a) * t;
          r2 += (frames[
            i + 8 + 5
            /*R2*/
          ] - r2) * t;
          g2 += (frames[
            i + 8 + 6
            /*G2*/
          ] - g2) * t;
          b2 += (frames[
            i + 8 + 7
            /*B2*/
          ] - b2) * t;
          break;
        case 1:
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          a = frames[
            i + 4
            /*A*/
          ];
          r2 = frames[
            i + 5
            /*R2*/
          ];
          g2 = frames[
            i + 6
            /*G2*/
          ];
          b2 = frames[
            i + 7
            /*B2*/
          ];
          break;
        default:
          r = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          g = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          b = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
          a = this.getBezierValue(
            time,
            i,
            4,
            curveType + 18 * 3 - 2
            /*BEZIER*/
          );
          r2 = this.getBezierValue(
            time,
            i,
            5,
            curveType + 18 * 4 - 2
            /*BEZIER*/
          );
          g2 = this.getBezierValue(
            time,
            i,
            6,
            curveType + 18 * 5 - 2
            /*BEZIER*/
          );
          b2 = this.getBezierValue(
            time,
            i,
            7,
            curveType + 18 * 6 - 2
            /*BEZIER*/
          );
      }
      if (alpha == 1) {
        light.set(r, g, b, a);
        dark.r = r2;
        dark.g = g2;
        dark.b = b2;
      } else {
        if (blend == 0 /* setup */) {
          light.setFromColor(slot.data.color);
          let setupDark = slot.data.darkColor;
          dark.r = setupDark.r;
          dark.g = setupDark.g;
          dark.b = setupDark.b;
        }
        light.add((r - light.r) * alpha, (g - light.g) * alpha, (b - light.b) * alpha, (a - light.a) * alpha);
        dark.r += (r2 - dark.r) * alpha;
        dark.g += (g2 - dark.g) * alpha;
        dark.b += (b2 - dark.b) * alpha;
      }
    }
  };
  var RGB2Timeline = class extends CurveTimeline {
    slotIndex = 0;
    constructor(frameCount, bezierCount, slotIndex) {
      super(frameCount, bezierCount, [
        Property.rgb + "|" + slotIndex,
        Property.rgb2 + "|" + slotIndex
      ]);
      this.slotIndex = slotIndex;
    }
    getFrameEntries() {
      return 7;
    }
    /** Sets the time in seconds, light, and dark colors for the specified key frame. */
    setFrame(frame, time, r, g, b, r2, g2, b2) {
      frame *= 7;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*R*/
      ] = r;
      this.frames[
        frame + 2
        /*G*/
      ] = g;
      this.frames[
        frame + 3
        /*B*/
      ] = b;
      this.frames[
        frame + 4
        /*R2*/
      ] = r2;
      this.frames[
        frame + 5
        /*G2*/
      ] = g2;
      this.frames[
        frame + 6
        /*B2*/
      ] = b2;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      let frames = this.frames;
      let light = slot.color, dark = slot.darkColor;
      if (time < frames[0]) {
        let setupLight = slot.data.color, setupDark = slot.data.darkColor;
        switch (blend) {
          case 0 /* setup */:
            light.r = setupLight.r;
            light.g = setupLight.g;
            light.b = setupLight.b;
            dark.r = setupDark.r;
            dark.g = setupDark.g;
            dark.b = setupDark.b;
            return;
          case 1 /* first */:
            light.r += (setupLight.r - light.r) * alpha;
            light.g += (setupLight.g - light.g) * alpha;
            light.b += (setupLight.b - light.b) * alpha;
            dark.r += (setupDark.r - dark.r) * alpha;
            dark.g += (setupDark.g - dark.g) * alpha;
            dark.b += (setupDark.b - dark.b) * alpha;
        }
        return;
      }
      let r = 0, g = 0, b = 0, a = 0, r2 = 0, g2 = 0, b2 = 0;
      let i = Timeline.search(
        frames,
        time,
        7
        /*ENTRIES*/
      );
      let curveType = this.curves[
        i / 7
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0:
          let before = frames[i];
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          r2 = frames[
            i + 4
            /*R2*/
          ];
          g2 = frames[
            i + 5
            /*G2*/
          ];
          b2 = frames[
            i + 6
            /*B2*/
          ];
          let t = (time - before) / (frames[
            i + 7
            /*ENTRIES*/
          ] - before);
          r += (frames[
            i + 7 + 1
            /*R*/
          ] - r) * t;
          g += (frames[
            i + 7 + 2
            /*G*/
          ] - g) * t;
          b += (frames[
            i + 7 + 3
            /*B*/
          ] - b) * t;
          r2 += (frames[
            i + 7 + 4
            /*R2*/
          ] - r2) * t;
          g2 += (frames[
            i + 7 + 5
            /*G2*/
          ] - g2) * t;
          b2 += (frames[
            i + 7 + 6
            /*B2*/
          ] - b2) * t;
          break;
        case 1:
          r = frames[
            i + 1
            /*R*/
          ];
          g = frames[
            i + 2
            /*G*/
          ];
          b = frames[
            i + 3
            /*B*/
          ];
          r2 = frames[
            i + 4
            /*R2*/
          ];
          g2 = frames[
            i + 5
            /*G2*/
          ];
          b2 = frames[
            i + 6
            /*B2*/
          ];
          break;
        default:
          r = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          g = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          b = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
          r2 = this.getBezierValue(
            time,
            i,
            4,
            curveType + 18 * 3 - 2
            /*BEZIER*/
          );
          g2 = this.getBezierValue(
            time,
            i,
            5,
            curveType + 18 * 4 - 2
            /*BEZIER*/
          );
          b2 = this.getBezierValue(
            time,
            i,
            6,
            curveType + 18 * 5 - 2
            /*BEZIER*/
          );
      }
      if (alpha == 1) {
        light.r = r;
        light.g = g;
        light.b = b;
        dark.r = r2;
        dark.g = g2;
        dark.b = b2;
      } else {
        if (blend == 0 /* setup */) {
          let setupLight = slot.data.color, setupDark = slot.data.darkColor;
          light.r = setupLight.r;
          light.g = setupLight.g;
          light.b = setupLight.b;
          dark.r = setupDark.r;
          dark.g = setupDark.g;
          dark.b = setupDark.b;
        }
        light.r += (r - light.r) * alpha;
        light.g += (g - light.g) * alpha;
        light.b += (b - light.b) * alpha;
        dark.r += (r2 - dark.r) * alpha;
        dark.g += (g2 - dark.g) * alpha;
        dark.b += (b2 - dark.b) * alpha;
      }
    }
  };
  var AttachmentTimeline = class extends Timeline {
    slotIndex = 0;
    /** The attachment name for each key frame. May contain null values to clear the attachment. */
    attachmentNames;
    constructor(frameCount, slotIndex) {
      super(frameCount, [
        Property.attachment + "|" + slotIndex
      ]);
      this.slotIndex = slotIndex;
      this.attachmentNames = new Array(frameCount);
    }
    getFrameCount() {
      return this.frames.length;
    }
    /** Sets the time in seconds and the attachment name for the specified key frame. */
    setFrame(frame, time, attachmentName) {
      this.frames[frame] = time;
      this.attachmentNames[frame] = attachmentName;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      if (direction == 1 /* mixOut */) {
        if (blend == 0 /* setup */) this.setAttachment(skeleton, slot, slot.data.attachmentName);
        return;
      }
      if (time < this.frames[0]) {
        if (blend == 0 /* setup */ || blend == 1 /* first */) this.setAttachment(skeleton, slot, slot.data.attachmentName);
        return;
      }
      this.setAttachment(skeleton, slot, this.attachmentNames[Timeline.search1(this.frames, time)]);
    }
    setAttachment(skeleton, slot, attachmentName) {
      slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(this.slotIndex, attachmentName));
    }
  };
  var DeformTimeline = class extends CurveTimeline {
    slotIndex = 0;
    /** The attachment that will be deformed. */
    attachment;
    /** The vertices for each key frame. */
    vertices;
    constructor(frameCount, bezierCount, slotIndex, attachment) {
      super(frameCount, bezierCount, [
        Property.deform + "|" + slotIndex + "|" + attachment.id
      ]);
      this.slotIndex = slotIndex;
      this.attachment = attachment;
      this.vertices = new Array(frameCount);
    }
    getFrameCount() {
      return this.frames.length;
    }
    /** Sets the time in seconds and the vertices for the specified key frame.
     * @param vertices Vertex positions for an unweighted VertexAttachment, or deform offsets if it has weights. */
    setFrame(frame, time, vertices) {
      this.frames[frame] = time;
      this.vertices[frame] = vertices;
    }
    /** @param value1 Ignored (0 is used for a deform timeline).
     * @param value2 Ignored (1 is used for a deform timeline). */
    setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2) {
      let curves = this.curves;
      let i = this.getFrameCount() + bezier * 18;
      if (value == 0) curves[frame] = 2 + i;
      let tmpx = (time1 - cx1 * 2 + cx2) * 0.03, tmpy = cy2 * 0.03 - cy1 * 0.06;
      let dddx = ((cx1 - cx2) * 3 - time1 + time2) * 6e-3, dddy = (cy1 - cy2 + 0.33333333) * 0.018;
      let ddx = tmpx * 2 + dddx, ddy = tmpy * 2 + dddy;
      let dx = (cx1 - time1) * 0.3 + tmpx + dddx * 0.16666667, dy = cy1 * 0.3 + tmpy + dddy * 0.16666667;
      let x = time1 + dx, y = dy;
      for (let n = i + 18; i < n; i += 2) {
        curves[i] = x;
        curves[i + 1] = y;
        dx += ddx;
        dy += ddy;
        ddx += dddx;
        ddy += dddy;
        x += dx;
        y += dy;
      }
    }
    getCurvePercent(time, frame) {
      let curves = this.curves;
      let i = curves[frame];
      switch (i) {
        case 0:
          let x2 = this.frames[frame];
          return (time - x2) / (this.frames[frame + this.getFrameEntries()] - x2);
        case 1:
          return 0;
      }
      i -= 2;
      if (curves[i] > time) {
        let x2 = this.frames[frame];
        return curves[i + 1] * (time - x2) / (curves[i] - x2);
      }
      let n = i + 18;
      for (i += 2; i < n; i += 2) {
        if (curves[i] >= time) {
          let x2 = curves[i - 2], y2 = curves[i - 1];
          return y2 + (time - x2) / (curves[i] - x2) * (curves[i + 1] - y2);
        }
      }
      let x = curves[n - 2], y = curves[n - 1];
      return y + (1 - y) * (time - x) / (this.frames[frame + this.getFrameEntries()] - x);
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      let slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      let slotAttachment = slot.getAttachment();
      if (!slotAttachment) return;
      if (!(slotAttachment instanceof VertexAttachment) || slotAttachment.timelineAttachment != this.attachment) return;
      let deform = slot.deform;
      if (deform.length == 0) blend = 0 /* setup */;
      let vertices = this.vertices;
      let vertexCount = vertices[0].length;
      let frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            deform.length = 0;
            return;
          case 1 /* first */:
            if (alpha == 1) {
              deform.length = 0;
              return;
            }
            deform.length = vertexCount;
            let vertexAttachment = slotAttachment;
            if (!vertexAttachment.bones) {
              let setupVertices = vertexAttachment.vertices;
              for (var i = 0; i < vertexCount; i++)
                deform[i] += (setupVertices[i] - deform[i]) * alpha;
            } else {
              alpha = 1 - alpha;
              for (var i = 0; i < vertexCount; i++)
                deform[i] *= alpha;
            }
        }
        return;
      }
      deform.length = vertexCount;
      if (time >= frames[frames.length - 1]) {
        let lastVertices = vertices[frames.length - 1];
        if (alpha == 1) {
          if (blend == 3 /* add */) {
            let vertexAttachment = slotAttachment;
            if (!vertexAttachment.bones) {
              let setupVertices = vertexAttachment.vertices;
              for (let i2 = 0; i2 < vertexCount; i2++)
                deform[i2] += lastVertices[i2] - setupVertices[i2];
            } else {
              for (let i2 = 0; i2 < vertexCount; i2++)
                deform[i2] += lastVertices[i2];
            }
          } else
            Utils.arrayCopy(lastVertices, 0, deform, 0, vertexCount);
        } else {
          switch (blend) {
            case 0 /* setup */: {
              let vertexAttachment2 = slotAttachment;
              if (!vertexAttachment2.bones) {
                let setupVertices = vertexAttachment2.vertices;
                for (let i2 = 0; i2 < vertexCount; i2++) {
                  let setup = setupVertices[i2];
                  deform[i2] = setup + (lastVertices[i2] - setup) * alpha;
                }
              } else {
                for (let i2 = 0; i2 < vertexCount; i2++)
                  deform[i2] = lastVertices[i2] * alpha;
              }
              break;
            }
            case 1 /* first */:
            case 2 /* replace */:
              for (let i2 = 0; i2 < vertexCount; i2++)
                deform[i2] += (lastVertices[i2] - deform[i2]) * alpha;
              break;
            case 3 /* add */:
              let vertexAttachment = slotAttachment;
              if (!vertexAttachment.bones) {
                let setupVertices = vertexAttachment.vertices;
                for (let i2 = 0; i2 < vertexCount; i2++)
                  deform[i2] += (lastVertices[i2] - setupVertices[i2]) * alpha;
              } else {
                for (let i2 = 0; i2 < vertexCount; i2++)
                  deform[i2] += lastVertices[i2] * alpha;
              }
          }
        }
        return;
      }
      let frame = Timeline.search1(frames, time);
      let percent = this.getCurvePercent(time, frame);
      let prevVertices = vertices[frame];
      let nextVertices = vertices[frame + 1];
      if (alpha == 1) {
        if (blend == 3 /* add */) {
          let vertexAttachment = slotAttachment;
          if (!vertexAttachment.bones) {
            let setupVertices = vertexAttachment.vertices;
            for (let i2 = 0; i2 < vertexCount; i2++) {
              let prev = prevVertices[i2];
              deform[i2] += prev + (nextVertices[i2] - prev) * percent - setupVertices[i2];
            }
          } else {
            for (let i2 = 0; i2 < vertexCount; i2++) {
              let prev = prevVertices[i2];
              deform[i2] += prev + (nextVertices[i2] - prev) * percent;
            }
          }
        } else {
          for (let i2 = 0; i2 < vertexCount; i2++) {
            let prev = prevVertices[i2];
            deform[i2] = prev + (nextVertices[i2] - prev) * percent;
          }
        }
      } else {
        switch (blend) {
          case 0 /* setup */: {
            let vertexAttachment2 = slotAttachment;
            if (!vertexAttachment2.bones) {
              let setupVertices = vertexAttachment2.vertices;
              for (let i2 = 0; i2 < vertexCount; i2++) {
                let prev = prevVertices[i2], setup = setupVertices[i2];
                deform[i2] = setup + (prev + (nextVertices[i2] - prev) * percent - setup) * alpha;
              }
            } else {
              for (let i2 = 0; i2 < vertexCount; i2++) {
                let prev = prevVertices[i2];
                deform[i2] = (prev + (nextVertices[i2] - prev) * percent) * alpha;
              }
            }
            break;
          }
          case 1 /* first */:
          case 2 /* replace */:
            for (let i2 = 0; i2 < vertexCount; i2++) {
              let prev = prevVertices[i2];
              deform[i2] += (prev + (nextVertices[i2] - prev) * percent - deform[i2]) * alpha;
            }
            break;
          case 3 /* add */:
            let vertexAttachment = slotAttachment;
            if (!vertexAttachment.bones) {
              let setupVertices = vertexAttachment.vertices;
              for (let i2 = 0; i2 < vertexCount; i2++) {
                let prev = prevVertices[i2];
                deform[i2] += (prev + (nextVertices[i2] - prev) * percent - setupVertices[i2]) * alpha;
              }
            } else {
              for (let i2 = 0; i2 < vertexCount; i2++) {
                let prev = prevVertices[i2];
                deform[i2] += (prev + (nextVertices[i2] - prev) * percent) * alpha;
              }
            }
        }
      }
    }
  };
  var EventTimeline = class _EventTimeline extends Timeline {
    static propertyIds = ["" + Property.event];
    /** The event for each key frame. */
    events;
    constructor(frameCount) {
      super(frameCount, _EventTimeline.propertyIds);
      this.events = new Array(frameCount);
    }
    getFrameCount() {
      return this.frames.length;
    }
    /** Sets the time in seconds and the event for the specified key frame. */
    setFrame(frame, event) {
      this.frames[frame] = event.time;
      this.events[frame] = event;
    }
    /** Fires events for frames > `lastTime` and <= `time`. */
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      if (!firedEvents) return;
      let frames = this.frames;
      let frameCount = this.frames.length;
      if (lastTime > time) {
        this.apply(skeleton, lastTime, Number.MAX_VALUE, firedEvents, alpha, blend, direction);
        lastTime = -1;
      } else if (lastTime >= frames[frameCount - 1])
        return;
      if (time < frames[0]) return;
      let i = 0;
      if (lastTime < frames[0])
        i = 0;
      else {
        i = Timeline.search1(frames, lastTime) + 1;
        let frameTime = frames[i];
        while (i > 0) {
          if (frames[i - 1] != frameTime) break;
          i--;
        }
      }
      for (; i < frameCount && time >= frames[i]; i++)
        firedEvents.push(this.events[i]);
    }
  };
  var DrawOrderTimeline = class _DrawOrderTimeline extends Timeline {
    static propertyIds = ["" + Property.drawOrder];
    /** The draw order for each key frame. See {@link #setFrame(int, float, int[])}. */
    drawOrders;
    constructor(frameCount) {
      super(frameCount, _DrawOrderTimeline.propertyIds);
      this.drawOrders = new Array(frameCount);
    }
    getFrameCount() {
      return this.frames.length;
    }
    /** Sets the time in seconds and the draw order for the specified key frame.
     * @param drawOrder For each slot in {@link Skeleton#slots}, the index of the new draw order. May be null to use setup pose
     *           draw order. */
    setFrame(frame, time, drawOrder) {
      this.frames[frame] = time;
      this.drawOrders[frame] = drawOrder;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      if (direction == 1 /* mixOut */) {
        if (blend == 0 /* setup */) Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
        return;
      }
      if (time < this.frames[0]) {
        if (blend == 0 /* setup */ || blend == 1 /* first */) Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
        return;
      }
      let idx = Timeline.search1(this.frames, time);
      let drawOrderToSetupIndex = this.drawOrders[idx];
      if (!drawOrderToSetupIndex)
        Utils.arrayCopy(skeleton.slots, 0, skeleton.drawOrder, 0, skeleton.slots.length);
      else {
        let drawOrder = skeleton.drawOrder;
        let slots = skeleton.slots;
        for (let i = 0, n = drawOrderToSetupIndex.length; i < n; i++)
          drawOrder[i] = slots[drawOrderToSetupIndex[i]];
      }
    }
  };
  var IkConstraintTimeline = class extends CurveTimeline {
    /** The index of the IK constraint in {@link Skeleton#getIkConstraints()} that will be changed when this timeline is applied */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, ikConstraintIndex) {
      super(frameCount, bezierCount, [
        Property.ikConstraint + "|" + ikConstraintIndex
      ]);
      this.constraintIndex = ikConstraintIndex;
    }
    getFrameEntries() {
      return 6;
    }
    /** Sets the time in seconds, mix, softness, bend direction, compress, and stretch for the specified key frame. */
    setFrame(frame, time, mix, softness, bendDirection, compress, stretch) {
      frame *= 6;
      this.frames[frame] = time;
      this.frames[
        frame + 1
        /*MIX*/
      ] = mix;
      this.frames[
        frame + 2
        /*SOFTNESS*/
      ] = softness;
      this.frames[
        frame + 3
        /*BEND_DIRECTION*/
      ] = bendDirection;
      this.frames[
        frame + 4
        /*COMPRESS*/
      ] = compress ? 1 : 0;
      this.frames[
        frame + 5
        /*STRETCH*/
      ] = stretch ? 1 : 0;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      let constraint = skeleton.ikConstraints[this.constraintIndex];
      if (!constraint.active) return;
      let frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            constraint.mix = constraint.data.mix;
            constraint.softness = constraint.data.softness;
            constraint.bendDirection = constraint.data.bendDirection;
            constraint.compress = constraint.data.compress;
            constraint.stretch = constraint.data.stretch;
            return;
          case 1 /* first */:
            constraint.mix += (constraint.data.mix - constraint.mix) * alpha;
            constraint.softness += (constraint.data.softness - constraint.softness) * alpha;
            constraint.bendDirection = constraint.data.bendDirection;
            constraint.compress = constraint.data.compress;
            constraint.stretch = constraint.data.stretch;
        }
        return;
      }
      let mix = 0, softness = 0;
      let i = Timeline.search(
        frames,
        time,
        6
        /*ENTRIES*/
      );
      let curveType = this.curves[
        i / 6
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0:
          let before = frames[i];
          mix = frames[
            i + 1
            /*MIX*/
          ];
          softness = frames[
            i + 2
            /*SOFTNESS*/
          ];
          let t = (time - before) / (frames[
            i + 6
            /*ENTRIES*/
          ] - before);
          mix += (frames[
            i + 6 + 1
            /*MIX*/
          ] - mix) * t;
          softness += (frames[
            i + 6 + 2
            /*SOFTNESS*/
          ] - softness) * t;
          break;
        case 1:
          mix = frames[
            i + 1
            /*MIX*/
          ];
          softness = frames[
            i + 2
            /*SOFTNESS*/
          ];
          break;
        default:
          mix = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          softness = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
      }
      if (blend == 0 /* setup */) {
        constraint.mix = constraint.data.mix + (mix - constraint.data.mix) * alpha;
        constraint.softness = constraint.data.softness + (softness - constraint.data.softness) * alpha;
        if (direction == 1 /* mixOut */) {
          constraint.bendDirection = constraint.data.bendDirection;
          constraint.compress = constraint.data.compress;
          constraint.stretch = constraint.data.stretch;
        } else {
          constraint.bendDirection = frames[
            i + 3
            /*BEND_DIRECTION*/
          ];
          constraint.compress = frames[
            i + 4
            /*COMPRESS*/
          ] != 0;
          constraint.stretch = frames[
            i + 5
            /*STRETCH*/
          ] != 0;
        }
      } else {
        constraint.mix += (mix - constraint.mix) * alpha;
        constraint.softness += (softness - constraint.softness) * alpha;
        if (direction == 0 /* mixIn */) {
          constraint.bendDirection = frames[
            i + 3
            /*BEND_DIRECTION*/
          ];
          constraint.compress = frames[
            i + 4
            /*COMPRESS*/
          ] != 0;
          constraint.stretch = frames[
            i + 5
            /*STRETCH*/
          ] != 0;
        }
      }
    }
  };
  var TransformConstraintTimeline = class extends CurveTimeline {
    /** The index of the transform constraint slot in {@link Skeleton#transformConstraints} that will be changed. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, transformConstraintIndex) {
      super(frameCount, bezierCount, [
        Property.transformConstraint + "|" + transformConstraintIndex
      ]);
      this.constraintIndex = transformConstraintIndex;
    }
    getFrameEntries() {
      return 7;
    }
    /** The time in seconds, rotate mix, translate mix, scale mix, and shear mix for the specified key frame. */
    setFrame(frame, time, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY) {
      let frames = this.frames;
      frame *= 7;
      frames[frame] = time;
      frames[
        frame + 1
        /*ROTATE*/
      ] = mixRotate;
      frames[
        frame + 2
        /*X*/
      ] = mixX;
      frames[
        frame + 3
        /*Y*/
      ] = mixY;
      frames[
        frame + 4
        /*SCALEX*/
      ] = mixScaleX;
      frames[
        frame + 5
        /*SCALEY*/
      ] = mixScaleY;
      frames[
        frame + 6
        /*SHEARY*/
      ] = mixShearY;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      let constraint = skeleton.transformConstraints[this.constraintIndex];
      if (!constraint.active) return;
      let frames = this.frames;
      if (time < frames[0]) {
        let data = constraint.data;
        switch (blend) {
          case 0 /* setup */:
            constraint.mixRotate = data.mixRotate;
            constraint.mixX = data.mixX;
            constraint.mixY = data.mixY;
            constraint.mixScaleX = data.mixScaleX;
            constraint.mixScaleY = data.mixScaleY;
            constraint.mixShearY = data.mixShearY;
            return;
          case 1 /* first */:
            constraint.mixRotate += (data.mixRotate - constraint.mixRotate) * alpha;
            constraint.mixX += (data.mixX - constraint.mixX) * alpha;
            constraint.mixY += (data.mixY - constraint.mixY) * alpha;
            constraint.mixScaleX += (data.mixScaleX - constraint.mixScaleX) * alpha;
            constraint.mixScaleY += (data.mixScaleY - constraint.mixScaleY) * alpha;
            constraint.mixShearY += (data.mixShearY - constraint.mixShearY) * alpha;
        }
        return;
      }
      let rotate, x, y, scaleX, scaleY, shearY;
      let i = Timeline.search(
        frames,
        time,
        7
        /*ENTRIES*/
      );
      let curveType = this.curves[
        i / 7
        /*ENTRIES*/
      ];
      switch (curveType) {
        case 0:
          let before = frames[i];
          rotate = frames[
            i + 1
            /*ROTATE*/
          ];
          x = frames[
            i + 2
            /*X*/
          ];
          y = frames[
            i + 3
            /*Y*/
          ];
          scaleX = frames[
            i + 4
            /*SCALEX*/
          ];
          scaleY = frames[
            i + 5
            /*SCALEY*/
          ];
          shearY = frames[
            i + 6
            /*SHEARY*/
          ];
          let t = (time - before) / (frames[
            i + 7
            /*ENTRIES*/
          ] - before);
          rotate += (frames[
            i + 7 + 1
            /*ROTATE*/
          ] - rotate) * t;
          x += (frames[
            i + 7 + 2
            /*X*/
          ] - x) * t;
          y += (frames[
            i + 7 + 3
            /*Y*/
          ] - y) * t;
          scaleX += (frames[
            i + 7 + 4
            /*SCALEX*/
          ] - scaleX) * t;
          scaleY += (frames[
            i + 7 + 5
            /*SCALEY*/
          ] - scaleY) * t;
          shearY += (frames[
            i + 7 + 6
            /*SHEARY*/
          ] - shearY) * t;
          break;
        case 1:
          rotate = frames[
            i + 1
            /*ROTATE*/
          ];
          x = frames[
            i + 2
            /*X*/
          ];
          y = frames[
            i + 3
            /*Y*/
          ];
          scaleX = frames[
            i + 4
            /*SCALEX*/
          ];
          scaleY = frames[
            i + 5
            /*SCALEY*/
          ];
          shearY = frames[
            i + 6
            /*SHEARY*/
          ];
          break;
        default:
          rotate = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          x = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          y = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
          scaleX = this.getBezierValue(
            time,
            i,
            4,
            curveType + 18 * 3 - 2
            /*BEZIER*/
          );
          scaleY = this.getBezierValue(
            time,
            i,
            5,
            curveType + 18 * 4 - 2
            /*BEZIER*/
          );
          shearY = this.getBezierValue(
            time,
            i,
            6,
            curveType + 18 * 5 - 2
            /*BEZIER*/
          );
      }
      if (blend == 0 /* setup */) {
        let data = constraint.data;
        constraint.mixRotate = data.mixRotate + (rotate - data.mixRotate) * alpha;
        constraint.mixX = data.mixX + (x - data.mixX) * alpha;
        constraint.mixY = data.mixY + (y - data.mixY) * alpha;
        constraint.mixScaleX = data.mixScaleX + (scaleX - data.mixScaleX) * alpha;
        constraint.mixScaleY = data.mixScaleY + (scaleY - data.mixScaleY) * alpha;
        constraint.mixShearY = data.mixShearY + (shearY - data.mixShearY) * alpha;
      } else {
        constraint.mixRotate += (rotate - constraint.mixRotate) * alpha;
        constraint.mixX += (x - constraint.mixX) * alpha;
        constraint.mixY += (y - constraint.mixY) * alpha;
        constraint.mixScaleX += (scaleX - constraint.mixScaleX) * alpha;
        constraint.mixScaleY += (scaleY - constraint.mixScaleY) * alpha;
        constraint.mixShearY += (shearY - constraint.mixShearY) * alpha;
      }
    }
  };
  var PathConstraintPositionTimeline = class extends CurveTimeline1 {
    /** The index of the path constraint in {@link Skeleton#getPathConstraints()} that will be changed when this timeline is
     * applied. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, pathConstraintIndex) {
      super(frameCount, bezierCount, Property.pathConstraintPosition + "|" + pathConstraintIndex);
      this.constraintIndex = pathConstraintIndex;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      let constraint = skeleton.pathConstraints[this.constraintIndex];
      if (constraint.active)
        constraint.position = this.getAbsoluteValue(time, alpha, blend, constraint.position, constraint.data.position);
    }
  };
  var PathConstraintSpacingTimeline = class extends CurveTimeline1 {
    /** The index of the path constraint in {@link Skeleton#getPathConstraints()} that will be changed when this timeline is
     * applied. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, pathConstraintIndex) {
      super(frameCount, bezierCount, Property.pathConstraintSpacing + "|" + pathConstraintIndex);
      this.constraintIndex = pathConstraintIndex;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      let constraint = skeleton.pathConstraints[this.constraintIndex];
      if (constraint.active)
        constraint.spacing = this.getAbsoluteValue(time, alpha, blend, constraint.spacing, constraint.data.spacing);
    }
  };
  var PathConstraintMixTimeline = class extends CurveTimeline {
    /** The index of the path constraint in {@link Skeleton#getPathConstraints()} that will be changed when this timeline is
     * applied. */
    constraintIndex = 0;
    constructor(frameCount, bezierCount, pathConstraintIndex) {
      super(frameCount, bezierCount, [
        Property.pathConstraintMix + "|" + pathConstraintIndex
      ]);
      this.constraintIndex = pathConstraintIndex;
    }
    getFrameEntries() {
      return 4;
    }
    setFrame(frame, time, mixRotate, mixX, mixY) {
      let frames = this.frames;
      frame <<= 2;
      frames[frame] = time;
      frames[
        frame + 1
        /*ROTATE*/
      ] = mixRotate;
      frames[
        frame + 2
        /*X*/
      ] = mixX;
      frames[
        frame + 3
        /*Y*/
      ] = mixY;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      let constraint = skeleton.pathConstraints[this.constraintIndex];
      if (!constraint.active) return;
      let frames = this.frames;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            constraint.mixRotate = constraint.data.mixRotate;
            constraint.mixX = constraint.data.mixX;
            constraint.mixY = constraint.data.mixY;
            return;
          case 1 /* first */:
            constraint.mixRotate += (constraint.data.mixRotate - constraint.mixRotate) * alpha;
            constraint.mixX += (constraint.data.mixX - constraint.mixX) * alpha;
            constraint.mixY += (constraint.data.mixY - constraint.mixY) * alpha;
        }
        return;
      }
      let rotate, x, y;
      let i = Timeline.search(
        frames,
        time,
        4
        /*ENTRIES*/
      );
      let curveType = this.curves[i >> 2];
      switch (curveType) {
        case 0:
          let before = frames[i];
          rotate = frames[
            i + 1
            /*ROTATE*/
          ];
          x = frames[
            i + 2
            /*X*/
          ];
          y = frames[
            i + 3
            /*Y*/
          ];
          let t = (time - before) / (frames[
            i + 4
            /*ENTRIES*/
          ] - before);
          rotate += (frames[
            i + 4 + 1
            /*ROTATE*/
          ] - rotate) * t;
          x += (frames[
            i + 4 + 2
            /*X*/
          ] - x) * t;
          y += (frames[
            i + 4 + 3
            /*Y*/
          ] - y) * t;
          break;
        case 1:
          rotate = frames[
            i + 1
            /*ROTATE*/
          ];
          x = frames[
            i + 2
            /*X*/
          ];
          y = frames[
            i + 3
            /*Y*/
          ];
          break;
        default:
          rotate = this.getBezierValue(
            time,
            i,
            1,
            curveType - 2
            /*BEZIER*/
          );
          x = this.getBezierValue(
            time,
            i,
            2,
            curveType + 18 - 2
            /*BEZIER*/
          );
          y = this.getBezierValue(
            time,
            i,
            3,
            curveType + 18 * 2 - 2
            /*BEZIER*/
          );
      }
      if (blend == 0 /* setup */) {
        let data = constraint.data;
        constraint.mixRotate = data.mixRotate + (rotate - data.mixRotate) * alpha;
        constraint.mixX = data.mixX + (x - data.mixX) * alpha;
        constraint.mixY = data.mixY + (y - data.mixY) * alpha;
      } else {
        constraint.mixRotate += (rotate - constraint.mixRotate) * alpha;
        constraint.mixX += (x - constraint.mixX) * alpha;
        constraint.mixY += (y - constraint.mixY) * alpha;
      }
    }
  };
  var PhysicsConstraintTimeline = class extends CurveTimeline1 {
    /** The index of the physics constraint in {@link Skeleton#getPhysicsConstraints()} that will be changed when this timeline
     * is applied, or -1 if all physics constraints in the skeleton will be changed. */
    constraintIndex = 0;
    /** @param physicsConstraintIndex -1 for all physics constraints in the skeleton. */
    constructor(frameCount, bezierCount, physicsConstraintIndex, property) {
      super(frameCount, bezierCount, property + "|" + physicsConstraintIndex);
      this.constraintIndex = physicsConstraintIndex;
    }
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      let constraint;
      if (this.constraintIndex == -1) {
        const value = time >= this.frames[0] ? this.getCurveValue(time) : 0;
        for (const constraint2 of skeleton.physicsConstraints) {
          if (constraint2.active && this.global(constraint2.data))
            this.set(constraint2, this.getAbsoluteValue2(time, alpha, blend, this.get(constraint2), this.setup(constraint2), value));
        }
      } else {
        constraint = skeleton.physicsConstraints[this.constraintIndex];
        if (constraint.active) this.set(constraint, this.getAbsoluteValue(time, alpha, blend, this.get(constraint), this.setup(constraint)));
      }
    }
  };
  var PhysicsConstraintInertiaTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
      super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintInertia);
    }
    setup(constraint) {
      return constraint.data.inertia;
    }
    get(constraint) {
      return constraint.inertia;
    }
    set(constraint, value) {
      constraint.inertia = value;
    }
    global(constraint) {
      return constraint.inertiaGlobal;
    }
  };
  var PhysicsConstraintStrengthTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
      super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintStrength);
    }
    setup(constraint) {
      return constraint.data.strength;
    }
    get(constraint) {
      return constraint.strength;
    }
    set(constraint, value) {
      constraint.strength = value;
    }
    global(constraint) {
      return constraint.strengthGlobal;
    }
  };
  var PhysicsConstraintDampingTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
      super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintDamping);
    }
    setup(constraint) {
      return constraint.data.damping;
    }
    get(constraint) {
      return constraint.damping;
    }
    set(constraint, value) {
      constraint.damping = value;
    }
    global(constraint) {
      return constraint.dampingGlobal;
    }
  };
  var PhysicsConstraintMassTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
      super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintMass);
    }
    setup(constraint) {
      return 1 / constraint.data.massInverse;
    }
    get(constraint) {
      return 1 / constraint.massInverse;
    }
    set(constraint, value) {
      constraint.massInverse = 1 / value;
    }
    global(constraint) {
      return constraint.massGlobal;
    }
  };
  var PhysicsConstraintWindTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
      super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintWind);
    }
    setup(constraint) {
      return constraint.data.wind;
    }
    get(constraint) {
      return constraint.wind;
    }
    set(constraint, value) {
      constraint.wind = value;
    }
    global(constraint) {
      return constraint.windGlobal;
    }
  };
  var PhysicsConstraintGravityTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
      super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintGravity);
    }
    setup(constraint) {
      return constraint.data.gravity;
    }
    get(constraint) {
      return constraint.gravity;
    }
    set(constraint, value) {
      constraint.gravity = value;
    }
    global(constraint) {
      return constraint.gravityGlobal;
    }
  };
  var PhysicsConstraintMixTimeline = class extends PhysicsConstraintTimeline {
    constructor(frameCount, bezierCount, physicsConstraintIndex) {
      super(frameCount, bezierCount, physicsConstraintIndex, Property.physicsConstraintMix);
    }
    setup(constraint) {
      return constraint.data.mix;
    }
    get(constraint) {
      return constraint.mix;
    }
    set(constraint, value) {
      constraint.mix = value;
    }
    global(constraint) {
      return constraint.mixGlobal;
    }
  };
  var PhysicsConstraintResetTimeline = class _PhysicsConstraintResetTimeline extends Timeline {
    static propertyIds = [Property.physicsConstraintReset.toString()];
    /** The index of the physics constraint in {@link Skeleton#getPhysicsConstraints()} that will be reset when this timeline is
    * applied, or -1 if all physics constraints in the skeleton will be reset. */
    constraintIndex;
    /** @param physicsConstraintIndex -1 for all physics constraints in the skeleton. */
    constructor(frameCount, physicsConstraintIndex) {
      super(frameCount, _PhysicsConstraintResetTimeline.propertyIds);
      this.constraintIndex = physicsConstraintIndex;
    }
    getFrameCount() {
      return this.frames.length;
    }
    /** Sets the time for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive. */
    setFrame(frame, time) {
      this.frames[frame] = time;
    }
    /** Resets the physics constraint when frames > <code>lastTime</code> and <= <code>time</code>. */
    apply(skeleton, lastTime, time, firedEvents, alpha, blend, direction) {
      let constraint;
      if (this.constraintIndex != -1) {
        constraint = skeleton.physicsConstraints[this.constraintIndex];
        if (!constraint.active) return;
      }
      const frames = this.frames;
      if (lastTime > time) {
        this.apply(skeleton, lastTime, Number.MAX_VALUE, [], alpha, blend, direction);
        lastTime = -1;
      } else if (lastTime >= frames[frames.length - 1])
        return;
      if (time < frames[0]) return;
      if (lastTime < frames[0] || time >= frames[Timeline.search1(frames, lastTime) + 1]) {
        if (constraint != null)
          constraint.reset();
        else {
          for (const constraint2 of skeleton.physicsConstraints) {
            if (constraint2.active) constraint2.reset();
          }
        }
      }
    }
  };
  var SequenceTimeline = class _SequenceTimeline extends Timeline {
    static ENTRIES = 3;
    static MODE = 1;
    static DELAY = 2;
    slotIndex;
    attachment;
    constructor(frameCount, slotIndex, attachment) {
      super(frameCount, [
        Property.sequence + "|" + slotIndex + "|" + attachment.sequence.id
      ]);
      this.slotIndex = slotIndex;
      this.attachment = attachment;
    }
    getFrameEntries() {
      return _SequenceTimeline.ENTRIES;
    }
    getSlotIndex() {
      return this.slotIndex;
    }
    getAttachment() {
      return this.attachment;
    }
    /** Sets the time, mode, index, and frame time for the specified frame.
     * @param frame Between 0 and <code>frameCount</code>, inclusive.
     * @param time Seconds between frames. */
    setFrame(frame, time, mode, index, delay) {
      let frames = this.frames;
      frame *= _SequenceTimeline.ENTRIES;
      frames[frame] = time;
      frames[frame + _SequenceTimeline.MODE] = mode | index << 4;
      frames[frame + _SequenceTimeline.DELAY] = delay;
    }
    apply(skeleton, lastTime, time, events, alpha, blend, direction) {
      let slot = skeleton.slots[this.slotIndex];
      if (!slot.bone.active) return;
      let slotAttachment = slot.attachment;
      let attachment = this.attachment;
      if (slotAttachment != attachment) {
        if (!(slotAttachment instanceof VertexAttachment) || slotAttachment.timelineAttachment != attachment) return;
      }
      if (direction == 1 /* mixOut */) {
        if (blend == 0 /* setup */) slot.sequenceIndex = -1;
        return;
      }
      let frames = this.frames;
      if (time < frames[0]) {
        if (blend == 0 /* setup */ || blend == 1 /* first */) slot.sequenceIndex = -1;
        return;
      }
      let i = Timeline.search(frames, time, _SequenceTimeline.ENTRIES);
      let before = frames[i];
      let modeAndIndex = frames[i + _SequenceTimeline.MODE];
      let delay = frames[i + _SequenceTimeline.DELAY];
      if (!this.attachment.sequence) return;
      let index = modeAndIndex >> 4, count = this.attachment.sequence.regions.length;
      let mode = SequenceModeValues[modeAndIndex & 15];
      if (mode != 0 /* hold */) {
        index += (time - before) / delay + 1e-5 | 0;
        switch (mode) {
          case 1 /* once */:
            index = Math.min(count - 1, index);
            break;
          case 2 /* loop */:
            index %= count;
            break;
          case 3 /* pingpong */: {
            let n = (count << 1) - 2;
            index = n == 0 ? 0 : index % n;
            if (index >= count) index = n - index;
            break;
          }
          case 4 /* onceReverse */:
            index = Math.max(count - 1 - index, 0);
            break;
          case 5 /* loopReverse */:
            index = count - 1 - index % count;
            break;
          case 6 /* pingpongReverse */: {
            let n = (count << 1) - 2;
            index = n == 0 ? 0 : (index + count - 1) % n;
            if (index >= count) index = n - index;
          }
        }
      }
      slot.sequenceIndex = index;
    }
  };

  // spine-core/src/AnimationState.ts
  var AnimationState = class _AnimationState {
    static _emptyAnimation = new Animation("<empty>", [], 0);
    static emptyAnimation() {
      return _AnimationState._emptyAnimation;
    }
    /** The AnimationStateData to look up mix durations. */
    data;
    /** The list of tracks that currently have animations, which may contain null entries. */
    tracks = new Array();
    /** Multiplier for the delta time when the animation state is updated, causing time for all animations and mixes to play slower
     * or faster. Defaults to 1.
     *
     * See TrackEntry {@link TrackEntry#timeScale} for affecting a single animation. */
    timeScale = 1;
    unkeyedState = 0;
    events = new Array();
    listeners = new Array();
    queue = new EventQueue(this);
    propertyIDs = new StringSet();
    animationsChanged = false;
    trackEntryPool = new Pool(() => new TrackEntry());
    constructor(data) {
      this.data = data;
    }
    /** Increments each track entry {@link TrackEntry#trackTime()}, setting queued animations as current if needed. */
    update(delta) {
      delta *= this.timeScale;
      let tracks = this.tracks;
      for (let i = 0, n = tracks.length; i < n; i++) {
        let current = tracks[i];
        if (!current) continue;
        current.animationLast = current.nextAnimationLast;
        current.trackLast = current.nextTrackLast;
        let currentDelta = delta * current.timeScale;
        if (current.delay > 0) {
          current.delay -= currentDelta;
          if (current.delay > 0) continue;
          currentDelta = -current.delay;
          current.delay = 0;
        }
        let next = current.next;
        if (next) {
          let nextTime = current.trackLast - next.delay;
          if (nextTime >= 0) {
            next.delay = 0;
            next.trackTime += current.timeScale == 0 ? 0 : (nextTime / current.timeScale + delta) * next.timeScale;
            current.trackTime += currentDelta;
            this.setCurrent(i, next, true);
            while (next.mixingFrom) {
              next.mixTime += delta;
              next = next.mixingFrom;
            }
            continue;
          }
        } else if (current.trackLast >= current.trackEnd && !current.mixingFrom) {
          tracks[i] = null;
          this.queue.end(current);
          this.clearNext(current);
          continue;
        }
        if (current.mixingFrom && this.updateMixingFrom(current, delta)) {
          let from = current.mixingFrom;
          current.mixingFrom = null;
          if (from) from.mixingTo = null;
          while (from) {
            this.queue.end(from);
            from = from.mixingFrom;
          }
        }
        current.trackTime += currentDelta;
      }
      this.queue.drain();
    }
    /** Returns true when all mixing from entries are complete. */
    updateMixingFrom(to, delta) {
      let from = to.mixingFrom;
      if (!from) return true;
      let finished = this.updateMixingFrom(from, delta);
      from.animationLast = from.nextAnimationLast;
      from.trackLast = from.nextTrackLast;
      if (to.nextTrackLast != -1 && to.mixTime >= to.mixDuration) {
        if (from.totalAlpha == 0 || to.mixDuration == 0) {
          to.mixingFrom = from.mixingFrom;
          if (from.mixingFrom != null) from.mixingFrom.mixingTo = to;
          to.interruptAlpha = from.interruptAlpha;
          this.queue.end(from);
        }
        return finished;
      }
      from.trackTime += delta * from.timeScale;
      to.mixTime += delta;
      return false;
    }
    /** Poses the skeleton using the track entry animations. There are no side effects other than invoking listeners, so the
     * animation state can be applied to multiple skeletons to pose them identically.
     * @returns True if any animations were applied. */
    apply(skeleton) {
      if (!skeleton) throw new Error("skeleton cannot be null.");
      if (this.animationsChanged) this._animationsChanged();
      let events = this.events;
      let tracks = this.tracks;
      let applied = false;
      for (let i2 = 0, n2 = tracks.length; i2 < n2; i2++) {
        let current = tracks[i2];
        if (!current || current.delay > 0) continue;
        applied = true;
        let blend = i2 == 0 ? 1 /* first */ : current.mixBlend;
        let alpha = current.alpha;
        if (current.mixingFrom)
          alpha *= this.applyMixingFrom(current, skeleton, blend);
        else if (current.trackTime >= current.trackEnd && !current.next)
          alpha = 0;
        let attachments = alpha >= current.alphaAttachmentThreshold;
        let animationLast = current.animationLast, animationTime = current.getAnimationTime(), applyTime = animationTime;
        let applyEvents = events;
        if (current.reverse) {
          applyTime = current.animation.duration - applyTime;
          applyEvents = null;
        }
        let timelines = current.animation.timelines;
        let timelineCount = timelines.length;
        if (i2 == 0 && alpha == 1 || blend == 3 /* add */) {
          if (i2 == 0) attachments = true;
          for (let ii = 0; ii < timelineCount; ii++) {
            Utils.webkit602BugfixHelper(alpha, blend);
            var timeline = timelines[ii];
            if (timeline instanceof AttachmentTimeline)
              this.applyAttachmentTimeline(timeline, skeleton, applyTime, blend, attachments);
            else
              timeline.apply(skeleton, animationLast, applyTime, applyEvents, alpha, blend, 0 /* mixIn */);
          }
        } else {
          let timelineMode = current.timelineMode;
          let shortestRotation = current.shortestRotation;
          let firstFrame = !shortestRotation && current.timelinesRotation.length != timelineCount << 1;
          if (firstFrame) current.timelinesRotation.length = timelineCount << 1;
          for (let ii = 0; ii < timelineCount; ii++) {
            let timeline2 = timelines[ii];
            let timelineBlend = timelineMode[ii] == SUBSEQUENT ? blend : 0 /* setup */;
            if (!shortestRotation && timeline2 instanceof RotateTimeline) {
              this.applyRotateTimeline(timeline2, skeleton, applyTime, alpha, timelineBlend, current.timelinesRotation, ii << 1, firstFrame);
            } else if (timeline2 instanceof AttachmentTimeline) {
              this.applyAttachmentTimeline(timeline2, skeleton, applyTime, blend, attachments);
            } else {
              Utils.webkit602BugfixHelper(alpha, blend);
              timeline2.apply(skeleton, animationLast, applyTime, applyEvents, alpha, timelineBlend, 0 /* mixIn */);
            }
          }
        }
        this.queueEvents(current, animationTime);
        events.length = 0;
        current.nextAnimationLast = animationTime;
        current.nextTrackLast = current.trackTime;
      }
      var setupState = this.unkeyedState + SETUP;
      var slots = skeleton.slots;
      for (var i = 0, n = skeleton.slots.length; i < n; i++) {
        var slot = slots[i];
        if (slot.attachmentState == setupState) {
          var attachmentName = slot.data.attachmentName;
          slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(slot.data.index, attachmentName));
        }
      }
      this.unkeyedState += 2;
      this.queue.drain();
      return applied;
    }
    applyMixingFrom(to, skeleton, blend) {
      let from = to.mixingFrom;
      if (from.mixingFrom) this.applyMixingFrom(from, skeleton, blend);
      let mix = 0;
      if (to.mixDuration == 0) {
        mix = 1;
        if (blend == 1 /* first */) blend = 0 /* setup */;
      } else {
        mix = to.mixTime / to.mixDuration;
        if (mix > 1) mix = 1;
        if (blend != 1 /* first */) blend = from.mixBlend;
      }
      let attachments = mix < from.mixAttachmentThreshold, drawOrder = mix < from.mixDrawOrderThreshold;
      let timelines = from.animation.timelines;
      let timelineCount = timelines.length;
      let alphaHold = from.alpha * to.interruptAlpha, alphaMix = alphaHold * (1 - mix);
      let animationLast = from.animationLast, animationTime = from.getAnimationTime(), applyTime = animationTime;
      let events = null;
      if (from.reverse)
        applyTime = from.animation.duration - applyTime;
      else if (mix < from.eventThreshold)
        events = this.events;
      if (blend == 3 /* add */) {
        for (let i = 0; i < timelineCount; i++)
          timelines[i].apply(skeleton, animationLast, applyTime, events, alphaMix, blend, 1 /* mixOut */);
      } else {
        let timelineMode = from.timelineMode;
        let timelineHoldMix = from.timelineHoldMix;
        let shortestRotation = from.shortestRotation;
        let firstFrame = !shortestRotation && from.timelinesRotation.length != timelineCount << 1;
        if (firstFrame) from.timelinesRotation.length = timelineCount << 1;
        from.totalAlpha = 0;
        for (let i = 0; i < timelineCount; i++) {
          let timeline = timelines[i];
          let direction = 1 /* mixOut */;
          let timelineBlend;
          let alpha = 0;
          switch (timelineMode[i]) {
            case SUBSEQUENT:
              if (!drawOrder && timeline instanceof DrawOrderTimeline) continue;
              timelineBlend = blend;
              alpha = alphaMix;
              break;
            case FIRST:
              timelineBlend = 0 /* setup */;
              alpha = alphaMix;
              break;
            case HOLD_SUBSEQUENT:
              timelineBlend = blend;
              alpha = alphaHold;
              break;
            case HOLD_FIRST:
              timelineBlend = 0 /* setup */;
              alpha = alphaHold;
              break;
            default:
              timelineBlend = 0 /* setup */;
              let holdMix = timelineHoldMix[i];
              alpha = alphaHold * Math.max(0, 1 - holdMix.mixTime / holdMix.mixDuration);
              break;
          }
          from.totalAlpha += alpha;
          if (!shortestRotation && timeline instanceof RotateTimeline)
            this.applyRotateTimeline(timeline, skeleton, applyTime, alpha, timelineBlend, from.timelinesRotation, i << 1, firstFrame);
          else if (timeline instanceof AttachmentTimeline)
            this.applyAttachmentTimeline(timeline, skeleton, applyTime, timelineBlend, attachments && alpha >= from.alphaAttachmentThreshold);
          else {
            Utils.webkit602BugfixHelper(alpha, blend);
            if (drawOrder && timeline instanceof DrawOrderTimeline && timelineBlend == 0 /* setup */)
              direction = 0 /* mixIn */;
            timeline.apply(skeleton, animationLast, applyTime, events, alpha, timelineBlend, direction);
          }
        }
      }
      if (to.mixDuration > 0) this.queueEvents(from, animationTime);
      this.events.length = 0;
      from.nextAnimationLast = animationTime;
      from.nextTrackLast = from.trackTime;
      return mix;
    }
    applyAttachmentTimeline(timeline, skeleton, time, blend, attachments) {
      var slot = skeleton.slots[timeline.slotIndex];
      if (!slot.bone.active) return;
      if (time < timeline.frames[0]) {
        if (blend == 0 /* setup */ || blend == 1 /* first */)
          this.setAttachment(skeleton, slot, slot.data.attachmentName, attachments);
      } else
        this.setAttachment(skeleton, slot, timeline.attachmentNames[Timeline.search1(timeline.frames, time)], attachments);
      if (slot.attachmentState <= this.unkeyedState) slot.attachmentState = this.unkeyedState + SETUP;
    }
    setAttachment(skeleton, slot, attachmentName, attachments) {
      slot.setAttachment(!attachmentName ? null : skeleton.getAttachment(slot.data.index, attachmentName));
      if (attachments) slot.attachmentState = this.unkeyedState + CURRENT;
    }
    applyRotateTimeline(timeline, skeleton, time, alpha, blend, timelinesRotation, i, firstFrame) {
      if (firstFrame) timelinesRotation[i] = 0;
      if (alpha == 1) {
        timeline.apply(skeleton, 0, time, null, 1, blend, 0 /* mixIn */);
        return;
      }
      let bone = skeleton.bones[timeline.boneIndex];
      if (!bone.active) return;
      let frames = timeline.frames;
      let r1 = 0, r2 = 0;
      if (time < frames[0]) {
        switch (blend) {
          case 0 /* setup */:
            bone.rotation = bone.data.rotation;
          default:
            return;
          case 1 /* first */:
            r1 = bone.rotation;
            r2 = bone.data.rotation;
        }
      } else {
        r1 = blend == 0 /* setup */ ? bone.data.rotation : bone.rotation;
        r2 = bone.data.rotation + timeline.getCurveValue(time);
      }
      let total = 0, diff = r2 - r1;
      diff -= Math.ceil(diff / 360 - 0.5) * 360;
      if (diff == 0) {
        total = timelinesRotation[i];
      } else {
        let lastTotal = 0, lastDiff = 0;
        if (firstFrame) {
          lastTotal = 0;
          lastDiff = diff;
        } else {
          lastTotal = timelinesRotation[i];
          lastDiff = timelinesRotation[i + 1];
        }
        let loops = lastTotal - lastTotal % 360;
        total = diff + loops;
        let current = diff >= 0, dir = lastTotal >= 0;
        if (Math.abs(lastDiff) <= 90 && MathUtils.signum(lastDiff) != MathUtils.signum(diff)) {
          if (Math.abs(lastTotal - loops) > 180) {
            total += 360 * MathUtils.signum(lastTotal);
            dir = current;
          } else if (loops != 0)
            total -= 360 * MathUtils.signum(lastTotal);
          else
            dir = current;
        }
        if (dir != current) total += 360 * MathUtils.signum(lastTotal);
        timelinesRotation[i] = total;
      }
      timelinesRotation[i + 1] = diff;
      bone.rotation = r1 + total * alpha;
    }
    queueEvents(entry, animationTime) {
      let animationStart = entry.animationStart, animationEnd = entry.animationEnd;
      let duration = animationEnd - animationStart;
      let trackLastWrapped = entry.trackLast % duration;
      let events = this.events;
      let i = 0, n = events.length;
      for (; i < n; i++) {
        let event = events[i];
        if (event.time < trackLastWrapped) break;
        if (event.time > animationEnd) continue;
        this.queue.event(entry, event);
      }
      let complete = false;
      if (entry.loop) {
        if (duration == 0)
          complete = true;
        else {
          const cycles = Math.floor(entry.trackTime / duration);
          complete = cycles > 0 && cycles > Math.floor(entry.trackLast / duration);
        }
      } else
        complete = animationTime >= animationEnd && entry.animationLast < animationEnd;
      if (complete) this.queue.complete(entry);
      for (; i < n; i++) {
        let event = events[i];
        if (event.time < animationStart) continue;
        this.queue.event(entry, event);
      }
    }
    /** Removes all animations from all tracks, leaving skeletons in their current pose.
     *
     * It may be desired to use {@link AnimationState#setEmptyAnimation()} to mix the skeletons back to the setup pose,
     * rather than leaving them in their current pose. */
    clearTracks() {
      let oldDrainDisabled = this.queue.drainDisabled;
      this.queue.drainDisabled = true;
      for (let i = 0, n = this.tracks.length; i < n; i++)
        this.clearTrack(i);
      this.tracks.length = 0;
      this.queue.drainDisabled = oldDrainDisabled;
      this.queue.drain();
    }
    /** Removes all animations from the track, leaving skeletons in their current pose.
     *
     * It may be desired to use {@link AnimationState#setEmptyAnimation()} to mix the skeletons back to the setup pose,
     * rather than leaving them in their current pose. */
    clearTrack(trackIndex) {
      if (trackIndex >= this.tracks.length) return;
      let current = this.tracks[trackIndex];
      if (!current) return;
      this.queue.end(current);
      this.clearNext(current);
      let entry = current;
      while (true) {
        let from = entry.mixingFrom;
        if (!from) break;
        this.queue.end(from);
        entry.mixingFrom = null;
        entry.mixingTo = null;
        entry = from;
      }
      this.tracks[current.trackIndex] = null;
      this.queue.drain();
    }
    setCurrent(index, current, interrupt) {
      let from = this.expandToIndex(index);
      this.tracks[index] = current;
      current.previous = null;
      if (from) {
        if (interrupt) this.queue.interrupt(from);
        current.mixingFrom = from;
        from.mixingTo = current;
        current.mixTime = 0;
        if (from.mixingFrom && from.mixDuration > 0)
          current.interruptAlpha *= Math.min(1, from.mixTime / from.mixDuration);
        from.timelinesRotation.length = 0;
      }
      this.queue.start(current);
    }
    /** Sets an animation by name.
      *
      * See {@link #setAnimationWith()}. */
    setAnimation(trackIndex, animationName, loop = false) {
      let animation = this.data.skeletonData.findAnimation(animationName);
      if (!animation) throw new Error("Animation not found: " + animationName);
      return this.setAnimationWith(trackIndex, animation, loop);
    }
    /** Sets the current animation for a track, discarding any queued animations. If the formerly current track entry was never
     * applied to a skeleton, it is replaced (not mixed from).
     * @param loop If true, the animation will repeat. If false it will not, instead its last frame is applied if played beyond its
     *           duration. In either case {@link TrackEntry#trackEnd} determines when the track is cleared.
     * @returns A track entry to allow further customization of animation playback. References to the track entry must not be kept
     *         after the {@link AnimationStateListener#dispose()} event occurs. */
    setAnimationWith(trackIndex, animation, loop = false) {
      if (!animation) throw new Error("animation cannot be null.");
      let interrupt = true;
      let current = this.expandToIndex(trackIndex);
      if (current) {
        if (current.nextTrackLast == -1) {
          this.tracks[trackIndex] = current.mixingFrom;
          this.queue.interrupt(current);
          this.queue.end(current);
          this.clearNext(current);
          current = current.mixingFrom;
          interrupt = false;
        } else
          this.clearNext(current);
      }
      let entry = this.trackEntry(trackIndex, animation, loop, current);
      this.setCurrent(trackIndex, entry, interrupt);
      this.queue.drain();
      return entry;
    }
    /** Queues an animation by name.
     *
     * See {@link #addAnimationWith()}. */
    addAnimation(trackIndex, animationName, loop = false, delay = 0) {
      let animation = this.data.skeletonData.findAnimation(animationName);
      if (!animation) throw new Error("Animation not found: " + animationName);
      return this.addAnimationWith(trackIndex, animation, loop, delay);
    }
    /** Adds an animation to be played after the current or last queued animation for a track. If the track is empty, it is
     * equivalent to calling {@link #setAnimationWith()}.
     * @param delay If > 0, sets {@link TrackEntry#delay}. If <= 0, the delay set is the duration of the previous track entry
     *           minus any mix duration (from the {@link AnimationStateData}) plus the specified `delay` (ie the mix
     *           ends at (`delay` = 0) or before (`delay` < 0) the previous track entry duration). If the
     *           previous entry is looping, its next loop completion is used instead of its duration.
     * @returns A track entry to allow further customization of animation playback. References to the track entry must not be kept
     *         after the {@link AnimationStateListener#dispose()} event occurs. */
    addAnimationWith(trackIndex, animation, loop = false, delay = 0) {
      if (!animation) throw new Error("animation cannot be null.");
      let last = this.expandToIndex(trackIndex);
      if (last) {
        while (last.next)
          last = last.next;
      }
      let entry = this.trackEntry(trackIndex, animation, loop, last);
      if (!last) {
        this.setCurrent(trackIndex, entry, true);
        this.queue.drain();
        if (delay < 0) delay = 0;
      } else {
        last.next = entry;
        entry.previous = last;
        if (delay <= 0) delay = Math.max(delay + last.getTrackComplete() - entry.mixDuration, 0);
      }
      entry.delay = delay;
      return entry;
    }
    /** Sets an empty animation for a track, discarding any queued animations, and sets the track entry's
     * {@link TrackEntry#mixduration}. An empty animation has no timelines and serves as a placeholder for mixing in or out.
     *
     * Mixing out is done by setting an empty animation with a mix duration using either {@link #setEmptyAnimation()},
     * {@link #setEmptyAnimations()}, or {@link #addEmptyAnimation()}. Mixing to an empty animation causes
     * the previous animation to be applied less and less over the mix duration. Properties keyed in the previous animation
     * transition to the value from lower tracks or to the setup pose value if no lower tracks key the property. A mix duration of
     * 0 still mixes out over one frame.
     *
     * Mixing in is done by first setting an empty animation, then adding an animation using
     * {@link #addAnimation()} and on the returned track entry, set the
     * {@link TrackEntry#setMixDuration()}. Mixing from an empty animation causes the new animation to be applied more and
     * more over the mix duration. Properties keyed in the new animation transition from the value from lower tracks or from the
     * setup pose value if no lower tracks key the property to the value keyed in the new animation. */
    setEmptyAnimation(trackIndex, mixDuration = 0) {
      let entry = this.setAnimationWith(trackIndex, _AnimationState.emptyAnimation(), false);
      entry.mixDuration = mixDuration;
      entry.trackEnd = mixDuration;
      return entry;
    }
    /** Adds an empty animation to be played after the current or last queued animation for a track, and sets the track entry's
     * {@link TrackEntry#mixDuration}. If the track is empty, it is equivalent to calling
     * {@link #setEmptyAnimation()}.
     *
     * See {@link #setEmptyAnimation()}.
     * @param delay If > 0, sets {@link TrackEntry#delay}. If <= 0, the delay set is the duration of the previous track entry
     *           minus any mix duration plus the specified `delay` (ie the mix ends at (`delay` = 0) or
     *           before (`delay` < 0) the previous track entry duration). If the previous entry is looping, its next
     *           loop completion is used instead of its duration.
     * @return A track entry to allow further customization of animation playback. References to the track entry must not be kept
     *         after the {@link AnimationStateListener#dispose()} event occurs. */
    addEmptyAnimation(trackIndex, mixDuration = 0, delay = 0) {
      let entry = this.addAnimationWith(trackIndex, _AnimationState.emptyAnimation(), false, delay);
      if (delay <= 0) entry.delay = Math.max(entry.delay + entry.mixDuration - mixDuration, 0);
      entry.mixDuration = mixDuration;
      entry.trackEnd = mixDuration;
      return entry;
    }
    /** Sets an empty animation for every track, discarding any queued animations, and mixes to it over the specified mix
      * duration. */
    setEmptyAnimations(mixDuration = 0) {
      let oldDrainDisabled = this.queue.drainDisabled;
      this.queue.drainDisabled = true;
      for (let i = 0, n = this.tracks.length; i < n; i++) {
        let current = this.tracks[i];
        if (current) this.setEmptyAnimation(current.trackIndex, mixDuration);
      }
      this.queue.drainDisabled = oldDrainDisabled;
      this.queue.drain();
    }
    expandToIndex(index) {
      if (index < this.tracks.length) return this.tracks[index];
      Utils.ensureArrayCapacity(this.tracks, index + 1, null);
      this.tracks.length = index + 1;
      return null;
    }
    /** @param last May be null. */
    trackEntry(trackIndex, animation, loop, last) {
      let entry = this.trackEntryPool.obtain();
      entry.reset();
      entry.trackIndex = trackIndex;
      entry.animation = animation;
      entry.loop = loop;
      entry.holdPrevious = false;
      entry.reverse = false;
      entry.shortestRotation = false;
      entry.eventThreshold = 0;
      entry.alphaAttachmentThreshold = 0;
      entry.mixAttachmentThreshold = 0;
      entry.mixDrawOrderThreshold = 0;
      entry.animationStart = 0;
      entry.animationEnd = animation.duration;
      entry.animationLast = -1;
      entry.nextAnimationLast = -1;
      entry.delay = 0;
      entry.trackTime = 0;
      entry.trackLast = -1;
      entry.nextTrackLast = -1;
      entry.trackEnd = Number.MAX_VALUE;
      entry.timeScale = 1;
      entry.alpha = 1;
      entry.mixTime = 0;
      entry.mixDuration = !last ? 0 : this.data.getMix(last.animation, animation);
      entry.interruptAlpha = 1;
      entry.totalAlpha = 0;
      entry.mixBlend = 2 /* replace */;
      return entry;
    }
    /** Removes the {@link TrackEntry#getNext() next entry} and all entries after it for the specified entry. */
    clearNext(entry) {
      let next = entry.next;
      while (next) {
        this.queue.dispose(next);
        next = next.next;
      }
      entry.next = null;
    }
    _animationsChanged() {
      this.animationsChanged = false;
      this.propertyIDs.clear();
      let tracks = this.tracks;
      for (let i = 0, n = tracks.length; i < n; i++) {
        let entry = tracks[i];
        if (!entry) continue;
        while (entry.mixingFrom)
          entry = entry.mixingFrom;
        do {
          if (!entry.mixingTo || entry.mixBlend != 3 /* add */) this.computeHold(entry);
          entry = entry.mixingTo;
        } while (entry);
      }
    }
    computeHold(entry) {
      let to = entry.mixingTo;
      let timelines = entry.animation.timelines;
      let timelinesCount = entry.animation.timelines.length;
      let timelineMode = entry.timelineMode;
      timelineMode.length = timelinesCount;
      let timelineHoldMix = entry.timelineHoldMix;
      timelineHoldMix.length = 0;
      let propertyIDs = this.propertyIDs;
      if (to && to.holdPrevious) {
        for (let i = 0; i < timelinesCount; i++)
          timelineMode[i] = propertyIDs.addAll(timelines[i].getPropertyIds()) ? HOLD_FIRST : HOLD_SUBSEQUENT;
        return;
      }
      outer:
        for (let i = 0; i < timelinesCount; i++) {
          let timeline = timelines[i];
          let ids = timeline.getPropertyIds();
          if (!propertyIDs.addAll(ids))
            timelineMode[i] = SUBSEQUENT;
          else if (!to || timeline instanceof AttachmentTimeline || timeline instanceof DrawOrderTimeline || timeline instanceof EventTimeline || !to.animation.hasTimeline(ids)) {
            timelineMode[i] = FIRST;
          } else {
            for (let next = to.mixingTo; next; next = next.mixingTo) {
              if (next.animation.hasTimeline(ids)) continue;
              if (entry.mixDuration > 0) {
                timelineMode[i] = HOLD_MIX;
                timelineHoldMix[i] = next;
                continue outer;
              }
              break;
            }
            timelineMode[i] = HOLD_FIRST;
          }
        }
    }
    /** Returns the track entry for the animation currently playing on the track, or null if no animation is currently playing. */
    getCurrent(trackIndex) {
      if (trackIndex >= this.tracks.length) return null;
      return this.tracks[trackIndex];
    }
    /** Adds a listener to receive events for all track entries. */
    addListener(listener) {
      if (!listener) throw new Error("listener cannot be null.");
      this.listeners.push(listener);
    }
    /** Removes the listener added with {@link #addListener()}. */
    removeListener(listener) {
      let index = this.listeners.indexOf(listener);
      if (index >= 0) this.listeners.splice(index, 1);
    }
    /** Removes all listeners added with {@link #addListener()}. */
    clearListeners() {
      this.listeners.length = 0;
    }
    /** Discards all listener notifications that have not yet been delivered. This can be useful to call from an
     * {@link AnimationStateListener} when it is known that further notifications that may have been already queued for delivery
     * are not wanted because new animations are being set. */
    clearListenerNotifications() {
      this.queue.clear();
    }
  };
  var TrackEntry = class {
    /** The animation to apply for this track entry. */
    animation = null;
    previous = null;
    /** The animation queued to start after this animation, or null. `next` makes up a linked list. */
    next = null;
    /** The track entry for the previous animation when mixing from the previous animation to this animation, or null if no
     * mixing is currently occuring. When mixing from multiple animations, `mixingFrom` makes up a linked list. */
    mixingFrom = null;
    /** The track entry for the next animation when mixing from this animation to the next animation, or null if no mixing is
     * currently occuring. When mixing to multiple animations, `mixingTo` makes up a linked list. */
    mixingTo = null;
    /** The listener for events generated by this track entry, or null.
     *
     * A track entry returned from {@link AnimationState#setAnimation()} is already the current animation
     * for the track, so the track entry listener {@link AnimationStateListener#start()} will not be called. */
    listener = null;
    /** The index of the track where this track entry is either current or queued.
     *
     * See {@link AnimationState#getCurrent()}. */
    trackIndex = 0;
    /** If true, the animation will repeat. If false it will not, instead its last frame is applied if played beyond its
     * duration. */
    loop = false;
    /** If true, when mixing from the previous animation to this animation, the previous animation is applied as normal instead
     * of being mixed out.
     *
     * When mixing between animations that key the same property, if a lower track also keys that property then the value will
     * briefly dip toward the lower track value during the mix. This happens because the first animation mixes from 100% to 0%
     * while the second animation mixes from 0% to 100%. Setting `holdPrevious` to true applies the first animation
     * at 100% during the mix so the lower track value is overwritten. Such dipping does not occur on the lowest track which
     * keys the property, only when a higher track also keys the property.
     *
     * Snapping will occur if `holdPrevious` is true and this animation does not key all the same properties as the
     * previous animation. */
    holdPrevious = false;
    reverse = false;
    shortestRotation = false;
    /** When the mix percentage ({@link #mixTime} / {@link #mixDuration}) is less than the
     * `eventThreshold`, event timelines are applied while this animation is being mixed out. Defaults to 0, so event
     * timelines are not applied while this animation is being mixed out. */
    eventThreshold = 0;
    /** When the mix percentage ({@link #mixtime} / {@link #mixDuration}) is less than the
     * `attachmentThreshold`, attachment timelines are applied while this animation is being mixed out. Defaults to
     * 0, so attachment timelines are not applied while this animation is being mixed out. */
    mixAttachmentThreshold = 0;
    /** When {@link #getAlpha()} is greater than <code>alphaAttachmentThreshold</code>, attachment timelines are applied.
     * Defaults to 0, so attachment timelines are always applied. */
    alphaAttachmentThreshold = 0;
    /** When the mix percentage ({@link #getMixTime()} / {@link #getMixDuration()}) is less than the
     * <code>mixDrawOrderThreshold</code>, draw order timelines are applied while this animation is being mixed out. Defaults to
     * 0, so draw order timelines are not applied while this animation is being mixed out. */
    mixDrawOrderThreshold = 0;
    /** Seconds when this animation starts, both initially and after looping. Defaults to 0.
     *
     * When changing the `animationStart` time, it often makes sense to set {@link #animationLast} to the same
     * value to prevent timeline keys before the start time from triggering. */
    animationStart = 0;
    /** Seconds for the last frame of this animation. Non-looping animations won't play past this time. Looping animations will
     * loop back to {@link #animationStart} at this time. Defaults to the animation {@link Animation#duration}. */
    animationEnd = 0;
    /** The time in seconds this animation was last applied. Some timelines use this for one-time triggers. Eg, when this
     * animation is applied, event timelines will fire all events between the `animationLast` time (exclusive) and
     * `animationTime` (inclusive). Defaults to -1 to ensure triggers on frame 0 happen the first time this animation
     * is applied. */
    animationLast = 0;
    nextAnimationLast = 0;
    /** Seconds to postpone playing the animation. When this track entry is the current track entry, `delay`
     * postpones incrementing the {@link #trackTime}. When this track entry is queued, `delay` is the time from
     * the start of the previous animation to when this track entry will become the current track entry (ie when the previous
     * track entry {@link TrackEntry#trackTime} >= this track entry's `delay`).
     *
     * {@link #timeScale} affects the delay. */
    delay = 0;
    /** Current time in seconds this track entry has been the current track entry. The track time determines
     * {@link #animationTime}. The track time can be set to start the animation at a time other than 0, without affecting
     * looping. */
    trackTime = 0;
    trackLast = 0;
    nextTrackLast = 0;
    /** The track time in seconds when this animation will be removed from the track. Defaults to the highest possible float
     * value, meaning the animation will be applied until a new animation is set or the track is cleared. If the track end time
     * is reached, no other animations are queued for playback, and mixing from any previous animations is complete, then the
     * properties keyed by the animation are set to the setup pose and the track is cleared.
     *
     * It may be desired to use {@link AnimationState#addEmptyAnimation()} rather than have the animation
     * abruptly cease being applied. */
    trackEnd = 0;
    /** Multiplier for the delta time when this track entry is updated, causing time for this animation to pass slower or
     * faster. Defaults to 1.
     *
     * {@link #mixTime} is not affected by track entry time scale, so {@link #mixDuration} may need to be adjusted to
     * match the animation speed.
     *
     * When using {@link AnimationState#addAnimation()} with a `delay` <= 0, note the
     * {@link #delay} is set using the mix duration from the {@link AnimationStateData}, assuming time scale to be 1. If
     * the time scale is not 1, the delay may need to be adjusted.
     *
     * See AnimationState {@link AnimationState#timeScale} for affecting all animations. */
    timeScale = 0;
    /** Values < 1 mix this animation with the skeleton's current pose (usually the pose resulting from lower tracks). Defaults
     * to 1, which overwrites the skeleton's current pose with this animation.
     *
     * Typically track 0 is used to completely pose the skeleton, then alpha is used on higher tracks. It doesn't make sense to
     * use alpha on track 0 if the skeleton pose is from the last frame render. */
    alpha = 0;
    /** Seconds from 0 to the {@link #getMixDuration()} when mixing from the previous animation to this animation. May be
     * slightly more than `mixDuration` when the mix is complete. */
    mixTime = 0;
    /** Seconds for mixing from the previous animation to this animation. Defaults to the value provided by AnimationStateData
     * {@link AnimationStateData#getMix()} based on the animation before this animation (if any).
     *
     * A mix duration of 0 still mixes out over one frame to provide the track entry being mixed out a chance to revert the
     * properties it was animating.
     *
     * The `mixDuration` can be set manually rather than use the value from
     * {@link AnimationStateData#getMix()}. In that case, the `mixDuration` can be set for a new
     * track entry only before {@link AnimationState#update(float)} is first called.
     *
     * When using {@link AnimationState#addAnimation()} with a `delay` <= 0, note the
     * {@link #delay} is set using the mix duration from the {@link AnimationStateData}, not a mix duration set
     * afterward. */
    _mixDuration = 0;
    interruptAlpha = 0;
    totalAlpha = 0;
    get mixDuration() {
      return this._mixDuration;
    }
    set mixDuration(mixDuration) {
      this._mixDuration = mixDuration;
    }
    setMixDurationWithDelay(mixDuration, delay) {
      this._mixDuration = mixDuration;
      if (delay <= 0) {
        if (this.previous != null)
          delay = Math.max(delay + this.previous.getTrackComplete() - mixDuration, 0);
        else
          delay = 0;
      }
      this.delay = delay;
    }
    /** Controls how properties keyed in the animation are mixed with lower tracks. Defaults to {@link MixBlend#replace}, which
     * replaces the values from the lower tracks with the animation values. {@link MixBlend#add} adds the animation values to
     * the values from the lower tracks.
     *
     * The `mixBlend` can be set for a new track entry only before {@link AnimationState#apply()} is first
     * called. */
    mixBlend = 2 /* replace */;
    timelineMode = new Array();
    timelineHoldMix = new Array();
    timelinesRotation = new Array();
    reset() {
      this.next = null;
      this.previous = null;
      this.mixingFrom = null;
      this.mixingTo = null;
      this.animation = null;
      this.listener = null;
      this.timelineMode.length = 0;
      this.timelineHoldMix.length = 0;
      this.timelinesRotation.length = 0;
    }
    /** Uses {@link #trackTime} to compute the `animationTime`, which is between {@link #animationStart}
     * and {@link #animationEnd}. When the `trackTime` is 0, the `animationTime` is equal to the
     * `animationStart` time. */
    getAnimationTime() {
      if (this.loop) {
        let duration = this.animationEnd - this.animationStart;
        if (duration == 0) return this.animationStart;
        return this.trackTime % duration + this.animationStart;
      }
      return Math.min(this.trackTime + this.animationStart, this.animationEnd);
    }
    setAnimationLast(animationLast) {
      this.animationLast = animationLast;
      this.nextAnimationLast = animationLast;
    }
    /** Returns true if at least one loop has been completed.
     *
     * See {@link AnimationStateListener#complete()}. */
    isComplete() {
      return this.trackTime >= this.animationEnd - this.animationStart;
    }
    /** Resets the rotation directions for mixing this entry's rotate timelines. This can be useful to avoid bones rotating the
     * long way around when using {@link #alpha} and starting animations on other tracks.
     *
     * Mixing with {@link MixBlend#replace} involves finding a rotation between two others, which has two possible solutions:
     * the short way or the long way around. The two rotations likely change over time, so which direction is the short or long
     * way also changes. If the short way was always chosen, bones would flip to the other side when that direction became the
     * long way. TrackEntry chooses the short way the first time it is applied and remembers that direction. */
    resetRotationDirections() {
      this.timelinesRotation.length = 0;
    }
    getTrackComplete() {
      let duration = this.animationEnd - this.animationStart;
      if (duration != 0) {
        if (this.loop) return duration * (1 + (this.trackTime / duration | 0));
        if (this.trackTime < duration) return duration;
      }
      return this.trackTime;
    }
    /** Returns true if this track entry has been applied at least once.
     * <p>
     * See {@link AnimationState#apply(Skeleton)}. */
    wasApplied() {
      return this.nextTrackLast != -1;
    }
    /** Returns true if there is a {@link #getNext()} track entry and it will become the current track entry during the next
     * {@link AnimationState#update(float)}. */
    isNextReady() {
      return this.next != null && this.nextTrackLast - this.next.delay >= 0;
    }
  };
  var EventQueue = class {
    objects = [];
    drainDisabled = false;
    animState;
    constructor(animState) {
      this.animState = animState;
    }
    start(entry) {
      this.objects.push(0 /* start */);
      this.objects.push(entry);
      this.animState.animationsChanged = true;
    }
    interrupt(entry) {
      this.objects.push(1 /* interrupt */);
      this.objects.push(entry);
    }
    end(entry) {
      this.objects.push(2 /* end */);
      this.objects.push(entry);
      this.animState.animationsChanged = true;
    }
    dispose(entry) {
      this.objects.push(3 /* dispose */);
      this.objects.push(entry);
    }
    complete(entry) {
      this.objects.push(4 /* complete */);
      this.objects.push(entry);
    }
    event(entry, event) {
      this.objects.push(5 /* event */);
      this.objects.push(entry);
      this.objects.push(event);
    }
    drain() {
      if (this.drainDisabled) return;
      this.drainDisabled = true;
      let objects = this.objects;
      let listeners = this.animState.listeners;
      for (let i = 0; i < objects.length; i += 2) {
        let type = objects[i];
        let entry = objects[i + 1];
        switch (type) {
          case 0 /* start */:
            if (entry.listener && entry.listener.start) entry.listener.start(entry);
            for (let ii = 0; ii < listeners.length; ii++) {
              let listener = listeners[ii];
              if (listener.start) listener.start(entry);
            }
            break;
          case 1 /* interrupt */:
            if (entry.listener && entry.listener.interrupt) entry.listener.interrupt(entry);
            for (let ii = 0; ii < listeners.length; ii++) {
              let listener = listeners[ii];
              if (listener.interrupt) listener.interrupt(entry);
            }
            break;
          case 2 /* end */:
            if (entry.listener && entry.listener.end) entry.listener.end(entry);
            for (let ii = 0; ii < listeners.length; ii++) {
              let listener = listeners[ii];
              if (listener.end) listener.end(entry);
            }
          // Fall through.
          case 3 /* dispose */:
            if (entry.listener && entry.listener.dispose) entry.listener.dispose(entry);
            for (let ii = 0; ii < listeners.length; ii++) {
              let listener = listeners[ii];
              if (listener.dispose) listener.dispose(entry);
            }
            this.animState.trackEntryPool.free(entry);
            break;
          case 4 /* complete */:
            if (entry.listener && entry.listener.complete) entry.listener.complete(entry);
            for (let ii = 0; ii < listeners.length; ii++) {
              let listener = listeners[ii];
              if (listener.complete) listener.complete(entry);
            }
            break;
          case 5 /* event */:
            let event = objects[i++ + 2];
            if (entry.listener && entry.listener.event) entry.listener.event(entry, event);
            for (let ii = 0; ii < listeners.length; ii++) {
              let listener = listeners[ii];
              if (listener.event) listener.event(entry, event);
            }
            break;
        }
      }
      this.clear();
      this.drainDisabled = false;
    }
    clear() {
      this.objects.length = 0;
    }
  };
  var EventType = /* @__PURE__ */ ((EventType2) => {
    EventType2[EventType2["start"] = 0] = "start";
    EventType2[EventType2["interrupt"] = 1] = "interrupt";
    EventType2[EventType2["end"] = 2] = "end";
    EventType2[EventType2["dispose"] = 3] = "dispose";
    EventType2[EventType2["complete"] = 4] = "complete";
    EventType2[EventType2["event"] = 5] = "event";
    return EventType2;
  })(EventType || {});
  var AnimationStateAdapter = class {
    start(entry) {
    }
    interrupt(entry) {
    }
    end(entry) {
    }
    dispose(entry) {
    }
    complete(entry) {
    }
    event(entry, event) {
    }
  };
  var SUBSEQUENT = 0;
  var FIRST = 1;
  var HOLD_SUBSEQUENT = 2;
  var HOLD_FIRST = 3;
  var HOLD_MIX = 4;
  var SETUP = 1;
  var CURRENT = 2;

  // spine-core/src/AnimationStateData.ts
  var AnimationStateData = class {
    /** The SkeletonData to look up animations when they are specified by name. */
    skeletonData;
    animationToMixTime = {};
    /** The mix duration to use when no mix duration has been defined between two animations. */
    defaultMix = 0;
    constructor(skeletonData) {
      if (!skeletonData) throw new Error("skeletonData cannot be null.");
      this.skeletonData = skeletonData;
    }
    /** Sets a mix duration by animation name.
     *
     * See {@link #setMixWith()}. */
    setMix(fromName, toName, duration) {
      let from = this.skeletonData.findAnimation(fromName);
      if (!from) throw new Error("Animation not found: " + fromName);
      let to = this.skeletonData.findAnimation(toName);
      if (!to) throw new Error("Animation not found: " + toName);
      this.setMixWith(from, to, duration);
    }
    /** Sets the mix duration when changing from the specified animation to the other.
     *
     * See {@link TrackEntry#mixDuration}. */
    setMixWith(from, to, duration) {
      if (!from) throw new Error("from cannot be null.");
      if (!to) throw new Error("to cannot be null.");
      let key = from.name + "." + to.name;
      this.animationToMixTime[key] = duration;
    }
    /** Returns the mix duration to use when changing from the specified animation to the other, or the {@link #defaultMix} if
      * no mix duration has been set. */
    getMix(from, to) {
      let key = from.name + "." + to.name;
      let value = this.animationToMixTime[key];
      return value === void 0 ? this.defaultMix : value;
    }
  };

  // spine-core/src/attachments/BoundingBoxAttachment.ts
  var BoundingBoxAttachment = class _BoundingBoxAttachment extends VertexAttachment {
    color = new Color(1, 1, 1, 1);
    constructor(name) {
      super(name);
    }
    copy() {
      let copy = new _BoundingBoxAttachment(this.name);
      this.copyTo(copy);
      copy.color.setFromColor(this.color);
      return copy;
    }
  };

  // spine-core/src/attachments/ClippingAttachment.ts
  var ClippingAttachment = class _ClippingAttachment extends VertexAttachment {
    /** Clipping is performed between the clipping polygon's slot and the end slot. Returns null if clipping is done until the end of
     * the skeleton's rendering. */
    endSlot = null;
    // Nonessential.
    /** The color of the clipping polygon as it was in Spine. Available only when nonessential data was exported. Clipping polygons
     * are not usually rendered at runtime. */
    color = new Color(0.2275, 0.2275, 0.8078, 1);
    // ce3a3aff
    constructor(name) {
      super(name);
    }
    copy() {
      let copy = new _ClippingAttachment(this.name);
      this.copyTo(copy);
      copy.endSlot = this.endSlot;
      copy.color.setFromColor(this.color);
      return copy;
    }
  };

  // spine-core/src/Texture.ts
  var Texture = class {
    _image;
    constructor(image) {
      this._image = image;
    }
    getImage() {
      return this._image;
    }
  };
  var TextureFilter = /* @__PURE__ */ ((TextureFilter3) => {
    TextureFilter3[TextureFilter3["Nearest"] = 9728] = "Nearest";
    TextureFilter3[TextureFilter3["Linear"] = 9729] = "Linear";
    TextureFilter3[TextureFilter3["MipMap"] = 9987] = "MipMap";
    TextureFilter3[TextureFilter3["MipMapNearestNearest"] = 9984] = "MipMapNearestNearest";
    TextureFilter3[TextureFilter3["MipMapLinearNearest"] = 9985] = "MipMapLinearNearest";
    TextureFilter3[TextureFilter3["MipMapNearestLinear"] = 9986] = "MipMapNearestLinear";
    TextureFilter3[TextureFilter3["MipMapLinearLinear"] = 9987] = "MipMapLinearLinear";
    return TextureFilter3;
  })(TextureFilter || {});
  var TextureWrap = /* @__PURE__ */ ((TextureWrap4) => {
    TextureWrap4[TextureWrap4["MirroredRepeat"] = 33648] = "MirroredRepeat";
    TextureWrap4[TextureWrap4["ClampToEdge"] = 33071] = "ClampToEdge";
    TextureWrap4[TextureWrap4["Repeat"] = 10497] = "Repeat";
    return TextureWrap4;
  })(TextureWrap || {});
  var TextureRegion = class {
    texture;
    u = 0;
    v = 0;
    u2 = 0;
    v2 = 0;
    width = 0;
    height = 0;
    degrees = 0;
    offsetX = 0;
    offsetY = 0;
    originalWidth = 0;
    originalHeight = 0;
  };
  var FakeTexture = class extends Texture {
    setFilters(minFilter, magFilter) {
    }
    setWraps(uWrap, vWrap) {
    }
    dispose() {
    }
  };

  // spine-core/src/TextureAtlas.ts
  var TextureAtlas = class {
    pages = new Array();
    regions = new Array();
    constructor(atlasText) {
      let reader = new TextureAtlasReader(atlasText);
      let entry = new Array(4);
      let pageFields = {};
      pageFields["size"] = (page2) => {
        page2.width = parseInt(entry[1]);
        page2.height = parseInt(entry[2]);
      };
      pageFields["format"] = () => {
      };
      pageFields["filter"] = (page2) => {
        page2.minFilter = Utils.enumValue(TextureFilter, entry[1]);
        page2.magFilter = Utils.enumValue(TextureFilter, entry[2]);
      };
      pageFields["repeat"] = (page2) => {
        if (entry[1].indexOf("x") != -1) page2.uWrap = 10497 /* Repeat */;
        if (entry[1].indexOf("y") != -1) page2.vWrap = 10497 /* Repeat */;
      };
      pageFields["pma"] = (page2) => {
        page2.pma = entry[1] == "true";
      };
      var regionFields = {};
      regionFields["xy"] = (region) => {
        region.x = parseInt(entry[1]);
        region.y = parseInt(entry[2]);
      };
      regionFields["size"] = (region) => {
        region.width = parseInt(entry[1]);
        region.height = parseInt(entry[2]);
      };
      regionFields["bounds"] = (region) => {
        region.x = parseInt(entry[1]);
        region.y = parseInt(entry[2]);
        region.width = parseInt(entry[3]);
        region.height = parseInt(entry[4]);
      };
      regionFields["offset"] = (region) => {
        region.offsetX = parseInt(entry[1]);
        region.offsetY = parseInt(entry[2]);
      };
      regionFields["orig"] = (region) => {
        region.originalWidth = parseInt(entry[1]);
        region.originalHeight = parseInt(entry[2]);
      };
      regionFields["offsets"] = (region) => {
        region.offsetX = parseInt(entry[1]);
        region.offsetY = parseInt(entry[2]);
        region.originalWidth = parseInt(entry[3]);
        region.originalHeight = parseInt(entry[4]);
      };
      regionFields["rotate"] = (region) => {
        let value = entry[1];
        if (value == "true")
          region.degrees = 90;
        else if (value != "false")
          region.degrees = parseInt(value);
      };
      regionFields["index"] = (region) => {
        region.index = parseInt(entry[1]);
      };
      let line = reader.readLine();
      while (line && line.trim().length == 0)
        line = reader.readLine();
      while (true) {
        if (!line || line.trim().length == 0) break;
        if (reader.readEntry(entry, line) == 0) break;
        line = reader.readLine();
      }
      let page = null;
      let names = null;
      let values = null;
      while (true) {
        if (line === null) break;
        if (line.trim().length == 0) {
          page = null;
          line = reader.readLine();
        } else if (!page) {
          page = new TextureAtlasPage(line.trim());
          while (true) {
            if (reader.readEntry(entry, line = reader.readLine()) == 0) break;
            let field = pageFields[entry[0]];
            if (field) field(page);
          }
          this.pages.push(page);
        } else {
          let region = new TextureAtlasRegion(page, line);
          while (true) {
            let count = reader.readEntry(entry, line = reader.readLine());
            if (count == 0) break;
            let field = regionFields[entry[0]];
            if (field)
              field(region);
            else {
              if (!names) names = [];
              if (!values) values = [];
              names.push(entry[0]);
              let entryValues = [];
              for (let i = 0; i < count; i++)
                entryValues.push(parseInt(entry[i + 1]));
              values.push(entryValues);
            }
          }
          if (region.originalWidth == 0 && region.originalHeight == 0) {
            region.originalWidth = region.width;
            region.originalHeight = region.height;
          }
          if (names && names.length > 0 && values && values.length > 0) {
            region.names = names;
            region.values = values;
            names = null;
            values = null;
          }
          region.u = region.x / page.width;
          region.v = region.y / page.height;
          if (region.degrees == 90) {
            region.u2 = (region.x + region.height) / page.width;
            region.v2 = (region.y + region.width) / page.height;
          } else {
            region.u2 = (region.x + region.width) / page.width;
            region.v2 = (region.y + region.height) / page.height;
          }
          this.regions.push(region);
        }
      }
    }
    findRegion(name) {
      for (let i = 0; i < this.regions.length; i++) {
        if (this.regions[i].name == name) {
          return this.regions[i];
        }
      }
      return null;
    }
    setTextures(assetManager, pathPrefix = "") {
      for (let page of this.pages)
        page.setTexture(assetManager.get(pathPrefix + page.name));
    }
    dispose() {
      for (let i = 0; i < this.pages.length; i++) {
        this.pages[i].texture?.dispose();
      }
    }
  };
  var TextureAtlasReader = class {
    lines;
    index = 0;
    constructor(text) {
      this.lines = text.split(/\r\n|\r|\n/);
    }
    readLine() {
      if (this.index >= this.lines.length)
        return null;
      return this.lines[this.index++];
    }
    readEntry(entry, line) {
      if (!line) return 0;
      line = line.trim();
      if (line.length == 0) return 0;
      let colon = line.indexOf(":");
      if (colon == -1) return 0;
      entry[0] = line.substr(0, colon).trim();
      for (let i = 1, lastMatch = colon + 1; ; i++) {
        let comma = line.indexOf(",", lastMatch);
        if (comma == -1) {
          entry[i] = line.substr(lastMatch).trim();
          return i;
        }
        entry[i] = line.substr(lastMatch, comma - lastMatch).trim();
        lastMatch = comma + 1;
        if (i == 4) return 4;
      }
    }
  };
  var TextureAtlasPage = class {
    name;
    minFilter = 9728 /* Nearest */;
    magFilter = 9728 /* Nearest */;
    uWrap = 33071 /* ClampToEdge */;
    vWrap = 33071 /* ClampToEdge */;
    texture = null;
    width = 0;
    height = 0;
    pma = false;
    regions = new Array();
    constructor(name) {
      this.name = name;
    }
    setTexture(texture) {
      this.texture = texture;
      texture.setFilters(this.minFilter, this.magFilter);
      texture.setWraps(this.uWrap, this.vWrap);
      for (let region of this.regions)
        region.texture = texture;
    }
  };
  var TextureAtlasRegion = class extends TextureRegion {
    page;
    name;
    x = 0;
    y = 0;
    offsetX = 0;
    offsetY = 0;
    originalWidth = 0;
    originalHeight = 0;
    index = 0;
    degrees = 0;
    names = null;
    values = null;
    constructor(page, name) {
      super();
      this.page = page;
      this.name = name;
      page.regions.push(this);
    }
  };

  // spine-core/src/attachments/MeshAttachment.ts
  var MeshAttachment = class _MeshAttachment extends VertexAttachment {
    region = null;
    /** The name of the texture region for this attachment. */
    path;
    /** The UV pair for each vertex, normalized within the texture region. */
    regionUVs = [];
    /** The UV pair for each vertex, normalized within the entire texture.
     *
     * See {@link #updateUVs}. */
    uvs = [];
    /** Triplets of vertex indices which describe the mesh's triangulation. */
    triangles = [];
    /** The color to tint the mesh. */
    color = new Color(1, 1, 1, 1);
    /** The width of the mesh's image. Available only when nonessential data was exported. */
    width = 0;
    /** The height of the mesh's image. Available only when nonessential data was exported. */
    height = 0;
    /** The number of entries at the beginning of {@link #vertices} that make up the mesh hull. */
    hullLength = 0;
    /** Vertex index pairs describing edges for controling triangulation. Mesh triangles will never cross edges. Only available if
     * nonessential data was exported. Triangulation is not performed at runtime. */
    edges = [];
    parentMesh = null;
    sequence = null;
    tempColor = new Color(0, 0, 0, 0);
    constructor(name, path) {
      super(name);
      this.path = path;
    }
    /** Calculates {@link #uvs} using the {@link #regionUVs} and region. Must be called if the region, the region's properties, or
     * the {@link #regionUVs} are changed. */
    updateRegion() {
      if (!this.region) throw new Error("Region not set.");
      let regionUVs = this.regionUVs;
      if (!this.uvs || this.uvs.length != regionUVs.length) this.uvs = Utils.newFloatArray(regionUVs.length);
      let uvs = this.uvs;
      let n = this.uvs.length;
      let u = this.region.u, v = this.region.v, width = 0, height = 0;
      if (this.region instanceof TextureAtlasRegion) {
        let region = this.region, page = region.page;
        let textureWidth = page.width, textureHeight = page.height;
        switch (region.degrees) {
          case 90:
            u -= (region.originalHeight - region.offsetY - region.height) / textureWidth;
            v -= (region.originalWidth - region.offsetX - region.width) / textureHeight;
            width = region.originalHeight / textureWidth;
            height = region.originalWidth / textureHeight;
            for (let i = 0; i < n; i += 2) {
              uvs[i] = u + regionUVs[i + 1] * width;
              uvs[i + 1] = v + (1 - regionUVs[i]) * height;
            }
            return;
          case 180:
            u -= (region.originalWidth - region.offsetX - region.width) / textureWidth;
            v -= region.offsetY / textureHeight;
            width = region.originalWidth / textureWidth;
            height = region.originalHeight / textureHeight;
            for (let i = 0; i < n; i += 2) {
              uvs[i] = u + (1 - regionUVs[i]) * width;
              uvs[i + 1] = v + (1 - regionUVs[i + 1]) * height;
            }
            return;
          case 270:
            u -= region.offsetY / textureWidth;
            v -= region.offsetX / textureHeight;
            width = region.originalHeight / textureWidth;
            height = region.originalWidth / textureHeight;
            for (let i = 0; i < n; i += 2) {
              uvs[i] = u + (1 - regionUVs[i + 1]) * width;
              uvs[i + 1] = v + regionUVs[i] * height;
            }
            return;
        }
        u -= region.offsetX / textureWidth;
        v -= (region.originalHeight - region.offsetY - region.height) / textureHeight;
        width = region.originalWidth / textureWidth;
        height = region.originalHeight / textureHeight;
      } else if (!this.region) {
        u = v = 0;
        width = height = 1;
      } else {
        width = this.region.u2 - u;
        height = this.region.v2 - v;
      }
      for (let i = 0; i < n; i += 2) {
        uvs[i] = u + regionUVs[i] * width;
        uvs[i + 1] = v + regionUVs[i + 1] * height;
      }
    }
    /** The parent mesh if this is a linked mesh, else null. A linked mesh shares the {@link #bones}, {@link #vertices},
     * {@link #regionUVs}, {@link #triangles}, {@link #hullLength}, {@link #edges}, {@link #width}, and {@link #height} with the
     * parent mesh, but may have a different {@link #name} or {@link #path} (and therefore a different texture). */
    getParentMesh() {
      return this.parentMesh;
    }
    /** @param parentMesh May be null. */
    setParentMesh(parentMesh) {
      this.parentMesh = parentMesh;
      if (parentMesh) {
        this.bones = parentMesh.bones;
        this.vertices = parentMesh.vertices;
        this.worldVerticesLength = parentMesh.worldVerticesLength;
        this.regionUVs = parentMesh.regionUVs;
        this.triangles = parentMesh.triangles;
        this.hullLength = parentMesh.hullLength;
        this.worldVerticesLength = parentMesh.worldVerticesLength;
      }
    }
    copy() {
      if (this.parentMesh) return this.newLinkedMesh();
      let copy = new _MeshAttachment(this.name, this.path);
      copy.region = this.region;
      copy.color.setFromColor(this.color);
      this.copyTo(copy);
      copy.regionUVs = new Array(this.regionUVs.length);
      Utils.arrayCopy(this.regionUVs, 0, copy.regionUVs, 0, this.regionUVs.length);
      copy.uvs = this.uvs instanceof Float32Array ? Utils.newFloatArray(this.uvs.length) : new Array(this.uvs.length);
      Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, this.uvs.length);
      copy.triangles = new Array(this.triangles.length);
      Utils.arrayCopy(this.triangles, 0, copy.triangles, 0, this.triangles.length);
      copy.hullLength = this.hullLength;
      copy.sequence = this.sequence != null ? this.sequence.copy() : null;
      if (this.edges) {
        copy.edges = new Array(this.edges.length);
        Utils.arrayCopy(this.edges, 0, copy.edges, 0, this.edges.length);
      }
      copy.width = this.width;
      copy.height = this.height;
      return copy;
    }
    computeWorldVertices(slot, start, count, worldVertices2, offset, stride) {
      if (this.sequence != null) this.sequence.apply(slot, this);
      super.computeWorldVertices(slot, start, count, worldVertices2, offset, stride);
    }
    /** Returns a new mesh with the {@link #parentMesh} set to this mesh's parent mesh, if any, else to this mesh. **/
    newLinkedMesh() {
      let copy = new _MeshAttachment(this.name, this.path);
      copy.region = this.region;
      copy.color.setFromColor(this.color);
      copy.timelineAttachment = this.timelineAttachment;
      copy.setParentMesh(this.parentMesh ? this.parentMesh : this);
      if (copy.region != null) copy.updateRegion();
      return copy;
    }
  };

  // spine-core/src/attachments/PathAttachment.ts
  var PathAttachment = class _PathAttachment extends VertexAttachment {
    /** The lengths along the path in the setup pose from the start of the path to the end of each Bezier curve. */
    lengths = [];
    /** If true, the start and end knots are connected. */
    closed = false;
    /** If true, additional calculations are performed to make calculating positions along the path more accurate. If false, fewer
     * calculations are performed but calculating positions along the path is less accurate. */
    constantSpeed = false;
    /** The color of the path as it was in Spine. Available only when nonessential data was exported. Paths are not usually
     * rendered at runtime. */
    color = new Color(1, 1, 1, 1);
    constructor(name) {
      super(name);
    }
    copy() {
      let copy = new _PathAttachment(this.name);
      this.copyTo(copy);
      copy.lengths = new Array(this.lengths.length);
      Utils.arrayCopy(this.lengths, 0, copy.lengths, 0, this.lengths.length);
      copy.closed = closed;
      copy.constantSpeed = this.constantSpeed;
      copy.color.setFromColor(this.color);
      return copy;
    }
  };

  // spine-core/src/attachments/PointAttachment.ts
  var PointAttachment = class _PointAttachment extends VertexAttachment {
    x = 0;
    y = 0;
    rotation = 0;
    /** The color of the point attachment as it was in Spine. Available only when nonessential data was exported. Point attachments
     * are not usually rendered at runtime. */
    color = new Color(0.38, 0.94, 0, 1);
    constructor(name) {
      super(name);
    }
    computeWorldPosition(bone, point) {
      point.x = this.x * bone.a + this.y * bone.b + bone.worldX;
      point.y = this.x * bone.c + this.y * bone.d + bone.worldY;
      return point;
    }
    computeWorldRotation(bone) {
      const r = this.rotation * MathUtils.degRad, cos = Math.cos(r), sin = Math.sin(r);
      const x = cos * bone.a + sin * bone.b;
      const y = cos * bone.c + sin * bone.d;
      return MathUtils.atan2Deg(y, x);
    }
    copy() {
      let copy = new _PointAttachment(this.name);
      copy.x = this.x;
      copy.y = this.y;
      copy.rotation = this.rotation;
      copy.color.setFromColor(this.color);
      return copy;
    }
  };

  // spine-core/src/attachments/RegionAttachment.ts
  var RegionAttachment = class _RegionAttachment extends Attachment {
    /** The local x translation. */
    x = 0;
    /** The local y translation. */
    y = 0;
    /** The local scaleX. */
    scaleX = 1;
    /** The local scaleY. */
    scaleY = 1;
    /** The local rotation. */
    rotation = 0;
    /** The width of the region attachment in Spine. */
    width = 0;
    /** The height of the region attachment in Spine. */
    height = 0;
    /** The color to tint the region attachment. */
    color = new Color(1, 1, 1, 1);
    /** The name of the texture region for this attachment. */
    path;
    region = null;
    sequence = null;
    /** For each of the 4 vertices, a pair of <code>x,y</code> values that is the local position of the vertex.
     *
     * See {@link #updateOffset()}. */
    offset = Utils.newFloatArray(8);
    uvs = Utils.newFloatArray(8);
    tempColor = new Color(1, 1, 1, 1);
    constructor(name, path) {
      super(name);
      this.path = path;
    }
    /** Calculates the {@link #offset} using the region settings. Must be called after changing region settings. */
    updateRegion() {
      if (!this.region) throw new Error("Region not set.");
      let region = this.region;
      let uvs = this.uvs;
      if (region == null) {
        uvs[0] = 0;
        uvs[1] = 0;
        uvs[2] = 0;
        uvs[3] = 1;
        uvs[4] = 1;
        uvs[5] = 1;
        uvs[6] = 1;
        uvs[7] = 0;
        return;
      }
      let regionScaleX = this.width / this.region.originalWidth * this.scaleX;
      let regionScaleY = this.height / this.region.originalHeight * this.scaleY;
      let localX = -this.width / 2 * this.scaleX + this.region.offsetX * regionScaleX;
      let localY = -this.height / 2 * this.scaleY + this.region.offsetY * regionScaleY;
      let localX2 = localX + this.region.width * regionScaleX;
      let localY2 = localY + this.region.height * regionScaleY;
      let radians = this.rotation * MathUtils.degRad;
      let cos = Math.cos(radians);
      let sin = Math.sin(radians);
      let x = this.x, y = this.y;
      let localXCos = localX * cos + x;
      let localXSin = localX * sin;
      let localYCos = localY * cos + y;
      let localYSin = localY * sin;
      let localX2Cos = localX2 * cos + x;
      let localX2Sin = localX2 * sin;
      let localY2Cos = localY2 * cos + y;
      let localY2Sin = localY2 * sin;
      let offset = this.offset;
      offset[0] = localXCos - localYSin;
      offset[1] = localYCos + localXSin;
      offset[2] = localXCos - localY2Sin;
      offset[3] = localY2Cos + localXSin;
      offset[4] = localX2Cos - localY2Sin;
      offset[5] = localY2Cos + localX2Sin;
      offset[6] = localX2Cos - localYSin;
      offset[7] = localYCos + localX2Sin;
      if (region.degrees == 90) {
        uvs[0] = region.u2;
        uvs[1] = region.v2;
        uvs[2] = region.u;
        uvs[3] = region.v2;
        uvs[4] = region.u;
        uvs[5] = region.v;
        uvs[6] = region.u2;
        uvs[7] = region.v;
      } else {
        uvs[0] = region.u;
        uvs[1] = region.v2;
        uvs[2] = region.u;
        uvs[3] = region.v;
        uvs[4] = region.u2;
        uvs[5] = region.v;
        uvs[6] = region.u2;
        uvs[7] = region.v2;
      }
    }
    /** Transforms the attachment's four vertices to world coordinates. If the attachment has a {@link #sequence}, the region may
     * be changed.
     * <p>
     * See <a href="http://esotericsoftware.com/spine-runtime-skeletons#World-transforms">World transforms</a> in the Spine
     * Runtimes Guide.
     * @param worldVertices The output world vertices. Must have a length >= <code>offset</code> + 8.
     * @param offset The <code>worldVertices</code> index to begin writing values.
     * @param stride The number of <code>worldVertices</code> entries between the value pairs written. */
    computeWorldVertices(slot, worldVertices2, offset, stride) {
      if (this.sequence != null)
        this.sequence.apply(slot, this);
      let bone = slot.bone;
      let vertexOffset = this.offset;
      let x = bone.worldX, y = bone.worldY;
      let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
      let offsetX = 0, offsetY = 0;
      offsetX = vertexOffset[0];
      offsetY = vertexOffset[1];
      worldVertices2[offset] = offsetX * a + offsetY * b + x;
      worldVertices2[offset + 1] = offsetX * c + offsetY * d + y;
      offset += stride;
      offsetX = vertexOffset[2];
      offsetY = vertexOffset[3];
      worldVertices2[offset] = offsetX * a + offsetY * b + x;
      worldVertices2[offset + 1] = offsetX * c + offsetY * d + y;
      offset += stride;
      offsetX = vertexOffset[4];
      offsetY = vertexOffset[5];
      worldVertices2[offset] = offsetX * a + offsetY * b + x;
      worldVertices2[offset + 1] = offsetX * c + offsetY * d + y;
      offset += stride;
      offsetX = vertexOffset[6];
      offsetY = vertexOffset[7];
      worldVertices2[offset] = offsetX * a + offsetY * b + x;
      worldVertices2[offset + 1] = offsetX * c + offsetY * d + y;
    }
    copy() {
      let copy = new _RegionAttachment(this.name, this.path);
      copy.region = this.region;
      copy.x = this.x;
      copy.y = this.y;
      copy.scaleX = this.scaleX;
      copy.scaleY = this.scaleY;
      copy.rotation = this.rotation;
      copy.width = this.width;
      copy.height = this.height;
      Utils.arrayCopy(this.uvs, 0, copy.uvs, 0, 8);
      Utils.arrayCopy(this.offset, 0, copy.offset, 0, 8);
      copy.color.setFromColor(this.color);
      copy.sequence = this.sequence != null ? this.sequence.copy() : null;
      return copy;
    }
    static X1 = 0;
    static Y1 = 1;
    static C1R = 2;
    static C1G = 3;
    static C1B = 4;
    static C1A = 5;
    static U1 = 6;
    static V1 = 7;
    static X2 = 8;
    static Y2 = 9;
    static C2R = 10;
    static C2G = 11;
    static C2B = 12;
    static C2A = 13;
    static U2 = 14;
    static V2 = 15;
    static X3 = 16;
    static Y3 = 17;
    static C3R = 18;
    static C3G = 19;
    static C3B = 20;
    static C3A = 21;
    static U3 = 22;
    static V3 = 23;
    static X4 = 24;
    static Y4 = 25;
    static C4R = 26;
    static C4G = 27;
    static C4B = 28;
    static C4A = 29;
    static U4 = 30;
    static V4 = 31;
  };

  // spine-core/src/AtlasAttachmentLoader.ts
  var AtlasAttachmentLoader = class {
    atlas;
    constructor(atlas) {
      this.atlas = atlas;
    }
    loadSequence(name, basePath, sequence) {
      let regions = sequence.regions;
      for (let i = 0, n = regions.length; i < n; i++) {
        let path = sequence.getPath(basePath, i);
        let region = this.atlas.findRegion(path);
        if (region == null) throw new Error("Region not found in atlas: " + path + " (sequence: " + name + ")");
        regions[i] = region;
      }
    }
    newRegionAttachment(skin, name, path, sequence) {
      let attachment = new RegionAttachment(name, path);
      if (sequence != null) {
        this.loadSequence(name, path, sequence);
      } else {
        let region = this.atlas.findRegion(path);
        if (!region) throw new Error("Region not found in atlas: " + path + " (region attachment: " + name + ")");
        attachment.region = region;
      }
      return attachment;
    }
    newMeshAttachment(skin, name, path, sequence) {
      let attachment = new MeshAttachment(name, path);
      if (sequence != null) {
        this.loadSequence(name, path, sequence);
      } else {
        let region = this.atlas.findRegion(path);
        if (!region) throw new Error("Region not found in atlas: " + path + " (mesh attachment: " + name + ")");
        attachment.region = region;
      }
      return attachment;
    }
    newBoundingBoxAttachment(skin, name) {
      return new BoundingBoxAttachment(name);
    }
    newPathAttachment(skin, name) {
      return new PathAttachment(name);
    }
    newPointAttachment(skin, name) {
      return new PointAttachment(name);
    }
    newClippingAttachment(skin, name) {
      return new ClippingAttachment(name);
    }
  };

  // spine-core/src/BoneData.ts
  var BoneData = class {
    /** The index of the bone in {@link Skeleton#getBones()}. */
    index = 0;
    /** The name of the bone, which is unique across all bones in the skeleton. */
    name;
    /** @returns May be null. */
    parent = null;
    /** The bone's length. */
    length = 0;
    /** The local x translation. */
    x = 0;
    /** The local y translation. */
    y = 0;
    /** The local rotation in degrees, counter clockwise. */
    rotation = 0;
    /** The local scaleX. */
    scaleX = 1;
    /** The local scaleY. */
    scaleY = 1;
    /** The local shearX. */
    shearX = 0;
    /** The local shearX. */
    shearY = 0;
    /** The transform mode for how parent world transforms affect this bone. */
    inherit = 0 /* Normal */;
    /** When true, {@link Skeleton#updateWorldTransform()} only updates this bone if the {@link Skeleton#skin} contains this
      * bone.
      * @see Skin#bones */
    skinRequired = false;
    /** The color of the bone as it was in Spine. Available only when nonessential data was exported. Bones are not usually
     * rendered at runtime. */
    color = new Color();
    /** The bone icon as it was in Spine, or null if nonessential data was not exported. */
    icon;
    /** False if the bone was hidden in Spine and nonessential data was exported. Does not affect runtime rendering. */
    visible = false;
    constructor(index, name, parent) {
      if (index < 0) throw new Error("index must be >= 0.");
      if (!name) throw new Error("name cannot be null.");
      this.index = index;
      this.name = name;
      this.parent = parent;
    }
  };
  var Inherit = /* @__PURE__ */ ((Inherit2) => {
    Inherit2[Inherit2["Normal"] = 0] = "Normal";
    Inherit2[Inherit2["OnlyTranslation"] = 1] = "OnlyTranslation";
    Inherit2[Inherit2["NoRotationOrReflection"] = 2] = "NoRotationOrReflection";
    Inherit2[Inherit2["NoScale"] = 3] = "NoScale";
    Inherit2[Inherit2["NoScaleOrReflection"] = 4] = "NoScaleOrReflection";
    return Inherit2;
  })(Inherit || {});

  // spine-core/src/Bone.ts
  var Bone = class {
    /** The bone's setup pose data. */
    data;
    /** The skeleton this bone belongs to. */
    skeleton;
    /** The parent bone, or null if this is the root bone. */
    parent = null;
    /** The immediate children of this bone. */
    children = new Array();
    /** The local x translation. */
    x = 0;
    /** The local y translation. */
    y = 0;
    /** The local rotation in degrees, counter clockwise. */
    rotation = 0;
    /** The local scaleX. */
    scaleX = 0;
    /** The local scaleY. */
    scaleY = 0;
    /** The local shearX. */
    shearX = 0;
    /** The local shearY. */
    shearY = 0;
    /** The applied local x translation. */
    ax = 0;
    /** The applied local y translation. */
    ay = 0;
    /** The applied local rotation in degrees, counter clockwise. */
    arotation = 0;
    /** The applied local scaleX. */
    ascaleX = 0;
    /** The applied local scaleY. */
    ascaleY = 0;
    /** The applied local shearX. */
    ashearX = 0;
    /** The applied local shearY. */
    ashearY = 0;
    /** Part of the world transform matrix for the X axis. If changed, {@link #updateAppliedTransform()} should be called. */
    a = 0;
    /** Part of the world transform matrix for the Y axis. If changed, {@link #updateAppliedTransform()} should be called. */
    b = 0;
    /** Part of the world transform matrix for the X axis. If changed, {@link #updateAppliedTransform()} should be called. */
    c = 0;
    /** Part of the world transform matrix for the Y axis. If changed, {@link #updateAppliedTransform()} should be called. */
    d = 0;
    /** The world X position. If changed, {@link #updateAppliedTransform()} should be called. */
    worldY = 0;
    /** The world Y position. If changed, {@link #updateAppliedTransform()} should be called. */
    worldX = 0;
    inherit = 0 /* Normal */;
    sorted = false;
    active = false;
    /** @param parent May be null. */
    constructor(data, skeleton, parent) {
      if (!data) throw new Error("data cannot be null.");
      if (!skeleton) throw new Error("skeleton cannot be null.");
      this.data = data;
      this.skeleton = skeleton;
      this.parent = parent;
      this.setToSetupPose();
    }
    /** Returns false when the bone has not been computed because {@link BoneData#skinRequired} is true and the
      * {@link Skeleton#skin active skin} does not {@link Skin#bones contain} this bone. */
    isActive() {
      return this.active;
    }
    /** Computes the world transform using the parent bone and this bone's local applied transform. */
    update(physics) {
      this.updateWorldTransformWith(this.ax, this.ay, this.arotation, this.ascaleX, this.ascaleY, this.ashearX, this.ashearY);
    }
    /** Computes the world transform using the parent bone and this bone's local transform.
     *
     * See {@link #updateWorldTransformWith()}. */
    updateWorldTransform() {
      this.updateWorldTransformWith(this.x, this.y, this.rotation, this.scaleX, this.scaleY, this.shearX, this.shearY);
    }
    /** Computes the world transform using the parent bone and the specified local transform. The applied transform is set to the
     * specified local transform. Child bones are not updated.
     *
     * See [World transforms](http://esotericsoftware.com/spine-runtime-skeletons#World-transforms) in the Spine
     * Runtimes Guide. */
    updateWorldTransformWith(x, y, rotation, scaleX, scaleY, shearX, shearY) {
      this.ax = x;
      this.ay = y;
      this.arotation = rotation;
      this.ascaleX = scaleX;
      this.ascaleY = scaleY;
      this.ashearX = shearX;
      this.ashearY = shearY;
      let parent = this.parent;
      if (!parent) {
        let skeleton = this.skeleton;
        const sx = skeleton.scaleX, sy = skeleton.scaleY;
        const rx = (rotation + shearX) * MathUtils.degRad;
        const ry = (rotation + 90 + shearY) * MathUtils.degRad;
        this.a = Math.cos(rx) * scaleX * sx;
        this.b = Math.cos(ry) * scaleY * sx;
        this.c = Math.sin(rx) * scaleX * sy;
        this.d = Math.sin(ry) * scaleY * sy;
        this.worldX = x * sx + skeleton.x;
        this.worldY = y * sy + skeleton.y;
        return;
      }
      let pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
      this.worldX = pa * x + pb * y + parent.worldX;
      this.worldY = pc * x + pd * y + parent.worldY;
      switch (this.inherit) {
        case 0 /* Normal */: {
          const rx = (rotation + shearX) * MathUtils.degRad;
          const ry = (rotation + 90 + shearY) * MathUtils.degRad;
          const la = Math.cos(rx) * scaleX;
          const lb = Math.cos(ry) * scaleY;
          const lc = Math.sin(rx) * scaleX;
          const ld = Math.sin(ry) * scaleY;
          this.a = pa * la + pb * lc;
          this.b = pa * lb + pb * ld;
          this.c = pc * la + pd * lc;
          this.d = pc * lb + pd * ld;
          return;
        }
        case 1 /* OnlyTranslation */: {
          const rx = (rotation + shearX) * MathUtils.degRad;
          const ry = (rotation + 90 + shearY) * MathUtils.degRad;
          this.a = Math.cos(rx) * scaleX;
          this.b = Math.cos(ry) * scaleY;
          this.c = Math.sin(rx) * scaleX;
          this.d = Math.sin(ry) * scaleY;
          break;
        }
        case 2 /* NoRotationOrReflection */: {
          let sx = 1 / this.skeleton.scaleX, sy = 1 / this.skeleton.scaleY;
          pa *= sx;
          pc *= sy;
          let s = pa * pa + pc * pc;
          let prx = 0;
          if (s > 1e-4) {
            s = Math.abs(pa * pd * sy - pb * sx * pc) / s;
            pb = pc * s;
            pd = pa * s;
            prx = Math.atan2(pc, pa) * MathUtils.radDeg;
          } else {
            pa = 0;
            pc = 0;
            prx = 90 - Math.atan2(pd, pb) * MathUtils.radDeg;
          }
          const rx = (rotation + shearX - prx) * MathUtils.degRad;
          const ry = (rotation + shearY - prx + 90) * MathUtils.degRad;
          const la = Math.cos(rx) * scaleX;
          const lb = Math.cos(ry) * scaleY;
          const lc = Math.sin(rx) * scaleX;
          const ld = Math.sin(ry) * scaleY;
          this.a = pa * la - pb * lc;
          this.b = pa * lb - pb * ld;
          this.c = pc * la + pd * lc;
          this.d = pc * lb + pd * ld;
          break;
        }
        case 3 /* NoScale */:
        case 4 /* NoScaleOrReflection */: {
          rotation *= MathUtils.degRad;
          const cos = Math.cos(rotation), sin = Math.sin(rotation);
          let za = (pa * cos + pb * sin) / this.skeleton.scaleX;
          let zc = (pc * cos + pd * sin) / this.skeleton.scaleY;
          let s = Math.sqrt(za * za + zc * zc);
          if (s > 1e-5) s = 1 / s;
          za *= s;
          zc *= s;
          s = Math.sqrt(za * za + zc * zc);
          if (this.inherit == 3 /* NoScale */ && pa * pd - pb * pc < 0 != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0)) s = -s;
          rotation = Math.PI / 2 + Math.atan2(zc, za);
          const zb = Math.cos(rotation) * s;
          const zd = Math.sin(rotation) * s;
          shearX *= MathUtils.degRad;
          shearY = (90 + shearY) * MathUtils.degRad;
          const la = Math.cos(shearX) * scaleX;
          const lb = Math.cos(shearY) * scaleY;
          const lc = Math.sin(shearX) * scaleX;
          const ld = Math.sin(shearY) * scaleY;
          this.a = za * la + zb * lc;
          this.b = za * lb + zb * ld;
          this.c = zc * la + zd * lc;
          this.d = zc * lb + zd * ld;
          break;
        }
      }
      this.a *= this.skeleton.scaleX;
      this.b *= this.skeleton.scaleX;
      this.c *= this.skeleton.scaleY;
      this.d *= this.skeleton.scaleY;
    }
    /** Sets this bone's local transform to the setup pose. */
    setToSetupPose() {
      let data = this.data;
      this.x = data.x;
      this.y = data.y;
      this.rotation = data.rotation;
      this.scaleX = data.scaleX;
      this.scaleY = data.scaleY;
      this.shearX = data.shearX;
      this.shearY = data.shearY;
      this.inherit = data.inherit;
    }
    /** Computes the applied transform values from the world transform.
     *
     * If the world transform is modified (by a constraint, {@link #rotateWorld(float)}, etc) then this method should be called so
     * the applied transform matches the world transform. The applied transform may be needed by other code (eg to apply other
     * constraints).
     *
     * Some information is ambiguous in the world transform, such as -1,-1 scale versus 180 rotation. The applied transform after
     * calling this method is equivalent to the local transform used to compute the world transform, but may not be identical. */
    updateAppliedTransform() {
      let parent = this.parent;
      if (!parent) {
        this.ax = this.worldX - this.skeleton.x;
        this.ay = this.worldY - this.skeleton.y;
        this.arotation = Math.atan2(this.c, this.a) * MathUtils.radDeg;
        this.ascaleX = Math.sqrt(this.a * this.a + this.c * this.c);
        this.ascaleY = Math.sqrt(this.b * this.b + this.d * this.d);
        this.ashearX = 0;
        this.ashearY = Math.atan2(this.a * this.b + this.c * this.d, this.a * this.d - this.b * this.c) * MathUtils.radDeg;
        return;
      }
      let pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
      let pid = 1 / (pa * pd - pb * pc);
      let ia = pd * pid, ib = pb * pid, ic = pc * pid, id = pa * pid;
      let dx = this.worldX - parent.worldX, dy = this.worldY - parent.worldY;
      this.ax = dx * ia - dy * ib;
      this.ay = dy * id - dx * ic;
      let ra, rb, rc, rd;
      if (this.inherit == 1 /* OnlyTranslation */) {
        ra = this.a;
        rb = this.b;
        rc = this.c;
        rd = this.d;
      } else {
        switch (this.inherit) {
          case 2 /* NoRotationOrReflection */: {
            let s2 = Math.abs(pa * pd - pb * pc) / (pa * pa + pc * pc);
            pb = -pc * this.skeleton.scaleX * s2 / this.skeleton.scaleY;
            pd = pa * this.skeleton.scaleY * s2 / this.skeleton.scaleX;
            pid = 1 / (pa * pd - pb * pc);
            ia = pd * pid;
            ib = pb * pid;
            break;
          }
          case 3 /* NoScale */:
          case 4 /* NoScaleOrReflection */:
            let cos = MathUtils.cosDeg(this.rotation), sin = MathUtils.sinDeg(this.rotation);
            pa = (pa * cos + pb * sin) / this.skeleton.scaleX;
            pc = (pc * cos + pd * sin) / this.skeleton.scaleY;
            let s = Math.sqrt(pa * pa + pc * pc);
            if (s > 1e-5) s = 1 / s;
            pa *= s;
            pc *= s;
            s = Math.sqrt(pa * pa + pc * pc);
            if (this.inherit == 3 /* NoScale */ && pid < 0 != (this.skeleton.scaleX < 0 != this.skeleton.scaleY < 0)) s = -s;
            let r = MathUtils.PI / 2 + Math.atan2(pc, pa);
            pb = Math.cos(r) * s;
            pd = Math.sin(r) * s;
            pid = 1 / (pa * pd - pb * pc);
            ia = pd * pid;
            ib = pb * pid;
            ic = pc * pid;
            id = pa * pid;
        }
        ra = ia * this.a - ib * this.c;
        rb = ia * this.b - ib * this.d;
        rc = id * this.c - ic * this.a;
        rd = id * this.d - ic * this.b;
      }
      this.ashearX = 0;
      this.ascaleX = Math.sqrt(ra * ra + rc * rc);
      if (this.ascaleX > 1e-4) {
        let det = ra * rd - rb * rc;
        this.ascaleY = det / this.ascaleX;
        this.ashearY = -Math.atan2(ra * rb + rc * rd, det) * MathUtils.radDeg;
        this.arotation = Math.atan2(rc, ra) * MathUtils.radDeg;
      } else {
        this.ascaleX = 0;
        this.ascaleY = Math.sqrt(rb * rb + rd * rd);
        this.ashearY = 0;
        this.arotation = 90 - Math.atan2(rd, rb) * MathUtils.radDeg;
      }
    }
    /** The world rotation for the X axis, calculated using {@link #a} and {@link #c}. */
    getWorldRotationX() {
      return Math.atan2(this.c, this.a) * MathUtils.radDeg;
    }
    /** The world rotation for the Y axis, calculated using {@link #b} and {@link #d}. */
    getWorldRotationY() {
      return Math.atan2(this.d, this.b) * MathUtils.radDeg;
    }
    /** The magnitude (always positive) of the world scale X, calculated using {@link #a} and {@link #c}. */
    getWorldScaleX() {
      return Math.sqrt(this.a * this.a + this.c * this.c);
    }
    /** The magnitude (always positive) of the world scale Y, calculated using {@link #b} and {@link #d}. */
    getWorldScaleY() {
      return Math.sqrt(this.b * this.b + this.d * this.d);
    }
    /** Transforms a point from world coordinates to the bone's local coordinates. */
    worldToLocal(world) {
      let invDet = 1 / (this.a * this.d - this.b * this.c);
      let x = world.x - this.worldX, y = world.y - this.worldY;
      world.x = x * this.d * invDet - y * this.b * invDet;
      world.y = y * this.a * invDet - x * this.c * invDet;
      return world;
    }
    /** Transforms a point from the bone's local coordinates to world coordinates. */
    localToWorld(local) {
      let x = local.x, y = local.y;
      local.x = x * this.a + y * this.b + this.worldX;
      local.y = x * this.c + y * this.d + this.worldY;
      return local;
    }
    /** Transforms a point from world coordinates to the parent bone's local coordinates. */
    worldToParent(world) {
      if (world == null) throw new Error("world cannot be null.");
      return this.parent == null ? world : this.parent.worldToLocal(world);
    }
    /** Transforms a point from the parent bone's coordinates to world coordinates. */
    parentToWorld(world) {
      if (world == null) throw new Error("world cannot be null.");
      return this.parent == null ? world : this.parent.localToWorld(world);
    }
    /** Transforms a world rotation to a local rotation. */
    worldToLocalRotation(worldRotation) {
      let sin = MathUtils.sinDeg(worldRotation), cos = MathUtils.cosDeg(worldRotation);
      return Math.atan2(this.a * sin - this.c * cos, this.d * cos - this.b * sin) * MathUtils.radDeg + this.rotation - this.shearX;
    }
    /** Transforms a local rotation to a world rotation. */
    localToWorldRotation(localRotation) {
      localRotation -= this.rotation - this.shearX;
      let sin = MathUtils.sinDeg(localRotation), cos = MathUtils.cosDeg(localRotation);
      return Math.atan2(cos * this.c + sin * this.d, cos * this.a + sin * this.b) * MathUtils.radDeg;
    }
    /** Rotates the world transform the specified amount.
     * <p>
     * After changes are made to the world transform, {@link #updateAppliedTransform()} should be called and
     * {@link #update(Physics)} will need to be called on any child bones, recursively. */
    rotateWorld(degrees) {
      degrees *= MathUtils.degRad;
      const sin = Math.sin(degrees), cos = Math.cos(degrees);
      const ra = this.a, rb = this.b;
      this.a = cos * ra - sin * this.c;
      this.b = cos * rb - sin * this.d;
      this.c = sin * ra + cos * this.c;
      this.d = sin * rb + cos * this.d;
    }
  };

  // spine-core/src/ConstraintData.ts
  var ConstraintData = class {
    constructor(name, order, skinRequired) {
      this.name = name;
      this.order = order;
      this.skinRequired = skinRequired;
    }
  };

  // spine-core/src/AssetManagerBase.ts
  var AssetManagerBase = class {
    pathPrefix = "";
    textureLoader;
    downloader;
    cache;
    errors = {};
    toLoad = 0;
    loaded = 0;
    constructor(textureLoader, pathPrefix = "", downloader = new Downloader(), cache = new AssetCache()) {
      this.textureLoader = textureLoader;
      this.pathPrefix = pathPrefix;
      this.downloader = downloader;
      this.cache = cache;
    }
    start(path) {
      this.toLoad++;
      return this.pathPrefix + path;
    }
    success(callback, path, asset) {
      this.toLoad--;
      this.loaded++;
      this.cache.assets[path] = asset;
      this.cache.assetsRefCount[path] = (this.cache.assetsRefCount[path] || 0) + 1;
      if (callback) callback(path, asset);
    }
    error(callback, path, message) {
      this.toLoad--;
      this.loaded++;
      this.errors[path] = message;
      if (callback) callback(path, message);
    }
    loadAll() {
      let promise = new Promise((resolve, reject) => {
        let check = () => {
          if (this.isLoadingComplete()) {
            if (this.hasErrors()) reject(this.errors);
            else resolve(this);
            return;
          }
          requestAnimationFrame(check);
        };
        requestAnimationFrame(check);
      });
      return promise;
    }
    setRawDataURI(path, data) {
      this.downloader.rawDataUris[this.pathPrefix + path] = data;
    }
    loadBinary(path, success = () => {
    }, error = () => {
    }) {
      path = this.start(path);
      if (this.reuseAssets(path, success, error)) return;
      this.cache.assetsLoaded[path] = new Promise((resolve, reject) => {
        this.downloader.downloadBinary(path, (data) => {
          this.success(success, path, data);
          resolve(data);
        }, (status, responseText) => {
          const errorMsg = `Couldn't load binary ${path}: status ${status}, ${responseText}`;
          this.error(error, path, errorMsg);
          reject(errorMsg);
        });
      });
    }
    loadText(path, success = () => {
    }, error = () => {
    }) {
      path = this.start(path);
      this.downloader.downloadText(path, (data) => {
        this.success(success, path, data);
      }, (status, responseText) => {
        this.error(error, path, `Couldn't load text ${path}: status ${status}, ${responseText}`);
      });
    }
    loadJson(path, success = () => {
    }, error = () => {
    }) {
      path = this.start(path);
      if (this.reuseAssets(path, success, error)) return;
      this.cache.assetsLoaded[path] = new Promise((resolve, reject) => {
        this.downloader.downloadJson(path, (data) => {
          this.success(success, path, data);
          resolve(data);
        }, (status, responseText) => {
          const errorMsg = `Couldn't load JSON ${path}: status ${status}, ${responseText}`;
          this.error(error, path, errorMsg);
          reject(errorMsg);
        });
      });
    }
    reuseAssets(path, success = () => {
    }, error = () => {
    }) {
      const loadedStatus = this.cache.assetsLoaded[path];
      const alreadyExistsOrLoading = loadedStatus !== void 0;
      if (alreadyExistsOrLoading) {
        this.cache.assetsLoaded[path] = loadedStatus.then((data) => {
          data = data instanceof Image || data instanceof ImageBitmap ? this.textureLoader(data) : data;
          this.success(success, path, data);
          return data;
        }).catch((errorMsg) => this.error(error, path, errorMsg));
      }
      return alreadyExistsOrLoading;
    }
    loadTexture(path, success = () => {
    }, error = () => {
    }) {
      path = this.start(path);
      if (this.reuseAssets(path, success, error)) return;
      this.cache.assetsLoaded[path] = new Promise((resolve, reject) => {
        let isBrowser = !!(typeof window !== "undefined" && typeof navigator !== "undefined" && window.document);
        let isWebWorker = !isBrowser;
        if (isWebWorker) {
          fetch(path, { mode: "cors" }).then((response) => {
            if (response.ok) return response.blob();
            const errorMsg = `Couldn't load image: ${path}`;
            this.error(error, path, `Couldn't load image: ${path}`);
            reject(errorMsg);
          }).then((blob) => {
            return blob ? createImageBitmap(blob, { premultiplyAlpha: "none", colorSpaceConversion: "none" }) : null;
          }).then((bitmap) => {
            if (bitmap) {
              const texture = this.textureLoader(bitmap);
              this.success(success, path, texture);
              resolve(texture);
            }
            ;
          });
        } else {
          let image = new Image();
          image.crossOrigin = "anonymous";
          image.onload = () => {
            const texture = this.textureLoader(image);
            this.success(success, path, texture);
            resolve(texture);
          };
          image.onerror = () => {
            const errorMsg = `Couldn't load image: ${path}`;
            this.error(error, path, errorMsg);
            reject(errorMsg);
          };
          if (this.downloader.rawDataUris[path]) path = this.downloader.rawDataUris[path];
          image.src = path;
        }
      });
    }
    loadTextureAtlas(path, success = () => {
    }, error = () => {
    }, fileAlias) {
      let index = path.lastIndexOf("/");
      let parent = index >= 0 ? path.substring(0, index + 1) : "";
      path = this.start(path);
      if (this.reuseAssets(path, success, error)) return;
      this.cache.assetsLoaded[path] = new Promise((resolve, reject) => {
        this.downloader.downloadText(path, (atlasText) => {
          try {
            let atlas = new TextureAtlas(atlasText);
            let toLoad = atlas.pages.length, abort = false;
            for (let page of atlas.pages) {
              this.loadTexture(
                !fileAlias ? parent + page.name : fileAlias[page.name],
                (imagePath, texture) => {
                  if (!abort) {
                    page.setTexture(texture);
                    if (--toLoad == 0) {
                      this.success(success, path, atlas);
                      resolve(atlas);
                    }
                  }
                },
                (imagePath, message) => {
                  if (!abort) {
                    const errorMsg = `Couldn't load texture ${path} page image: ${imagePath}`;
                    this.error(error, path, errorMsg);
                    reject(errorMsg);
                  }
                  abort = true;
                }
              );
            }
          } catch (e) {
            const errorMsg = `Couldn't parse texture atlas ${path}: ${e.message}`;
            this.error(error, path, errorMsg);
            reject(errorMsg);
          }
        }, (status, responseText) => {
          const errorMsg = `Couldn't load texture atlas ${path}: status ${status}, ${responseText}`;
          this.error(error, path, errorMsg);
          reject(errorMsg);
        });
      });
    }
    loadTextureAtlasButNoTextures(path, success = () => {
    }, error = () => {
    }, fileAlias) {
      path = this.start(path);
      if (this.reuseAssets(path, success, error)) return;
      this.cache.assetsLoaded[path] = new Promise((resolve, reject) => {
        this.downloader.downloadText(path, (atlasText) => {
          try {
            const atlas = new TextureAtlas(atlasText);
            this.success(success, path, atlas);
            resolve(atlas);
          } catch (e) {
            const errorMsg = `Couldn't parse texture atlas ${path}: ${e.message}`;
            this.error(error, path, errorMsg);
            reject(errorMsg);
          }
        }, (status, responseText) => {
          const errorMsg = `Couldn't load texture atlas ${path}: status ${status}, ${responseText}`;
          this.error(error, path, errorMsg);
          reject(errorMsg);
        });
      });
    }
    // Promisified versions of load function
    async loadBinaryAsync(path) {
      return new Promise((resolve, reject) => {
        this.loadBinary(
          path,
          (_, binary) => resolve(binary),
          (_, message) => reject(message)
        );
      });
    }
    async loadJsonAsync(path) {
      return new Promise((resolve, reject) => {
        this.loadJson(
          path,
          (_, object) => resolve(object),
          (_, message) => reject(message)
        );
      });
    }
    async loadTextureAsync(path) {
      return new Promise((resolve, reject) => {
        this.loadTexture(
          path,
          (_, texture) => resolve(texture),
          (_, message) => reject(message)
        );
      });
    }
    async loadTextureAtlasAsync(path) {
      return new Promise((resolve, reject) => {
        this.loadTextureAtlas(
          path,
          (_, atlas) => resolve(atlas),
          (_, message) => reject(message)
        );
      });
    }
    async loadTextureAtlasButNoTexturesAsync(path) {
      return new Promise((resolve, reject) => {
        this.loadTextureAtlasButNoTextures(
          path,
          (_, atlas) => resolve(atlas),
          (_, message) => reject(message)
        );
      });
    }
    setCache(cache) {
      this.cache = cache;
    }
    get(path) {
      return this.cache.assets[this.pathPrefix + path];
    }
    require(path) {
      path = this.pathPrefix + path;
      let asset = this.cache.assets[path];
      if (asset) return asset;
      let error = this.errors[path];
      throw Error("Asset not found: " + path + (error ? "\n" + error : ""));
    }
    remove(path) {
      path = this.pathPrefix + path;
      let asset = this.cache.assets[path];
      if (asset.dispose) asset.dispose();
      delete this.cache.assets[path];
      delete this.cache.assetsRefCount[path];
      delete this.cache.assetsLoaded[path];
      return asset;
    }
    removeAll() {
      for (let path in this.cache.assets) {
        let asset = this.cache.assets[path];
        if (asset.dispose) asset.dispose();
      }
      this.cache.assets = {};
      this.cache.assetsLoaded = {};
      this.cache.assetsRefCount = {};
    }
    isLoadingComplete() {
      return this.toLoad == 0;
    }
    getToLoad() {
      return this.toLoad;
    }
    getLoaded() {
      return this.loaded;
    }
    dispose() {
      this.removeAll();
    }
    // dispose asset only if it's not used by others
    disposeAsset(path) {
      if (--this.cache.assetsRefCount[path] === 0) {
        this.remove(path);
      }
    }
    hasErrors() {
      return Object.keys(this.errors).length > 0;
    }
    getErrors() {
      return this.errors;
    }
  };
  var AssetCache = class _AssetCache {
    assets = {};
    assetsRefCount = {};
    assetsLoaded = {};
    static AVAILABLE_CACHES = /* @__PURE__ */ new Map();
    static getCache(id) {
      const cache = _AssetCache.AVAILABLE_CACHES.get(id);
      if (cache) return cache;
      const newCache = new _AssetCache();
      _AssetCache.AVAILABLE_CACHES.set(id, newCache);
      return newCache;
    }
    async addAsset(path, asset) {
      this.assetsLoaded[path] = Promise.resolve(asset);
      this.assets[path] = await asset;
    }
  };
  var Downloader = class {
    callbacks = {};
    rawDataUris = {};
    dataUriToString(dataUri) {
      if (!dataUri.startsWith("data:")) {
        throw new Error("Not a data URI.");
      }
      let base64Idx = dataUri.indexOf("base64,");
      if (base64Idx != -1) {
        base64Idx += "base64,".length;
        return atob(dataUri.substr(base64Idx));
      } else {
        return dataUri.substr(dataUri.indexOf(",") + 1);
      }
    }
    base64ToUint8Array(base64) {
      var binary_string = window.atob(base64);
      var len = binary_string.length;
      var bytes = new Uint8Array(len);
      for (var i = 0; i < len; i++) {
        bytes[i] = binary_string.charCodeAt(i);
      }
      return bytes;
    }
    dataUriToUint8Array(dataUri) {
      if (!dataUri.startsWith("data:")) {
        throw new Error("Not a data URI.");
      }
      let base64Idx = dataUri.indexOf("base64,");
      if (base64Idx == -1) throw new Error("Not a binary data URI.");
      base64Idx += "base64,".length;
      return this.base64ToUint8Array(dataUri.substr(base64Idx));
    }
    downloadText(url, success, error) {
      if (this.start(url, success, error)) return;
      const rawDataUri = this.rawDataUris[url];
      if (rawDataUri && !rawDataUri.includes(".")) {
        try {
          this.finish(url, 200, this.dataUriToString(rawDataUri));
        } catch (e) {
          this.finish(url, 400, JSON.stringify(e));
        }
        return;
      }
      let request = new XMLHttpRequest();
      request.overrideMimeType("text/html");
      request.open("GET", rawDataUri ? rawDataUri : url, true);
      let done = () => {
        this.finish(url, request.status, request.responseText);
      };
      request.onload = done;
      request.onerror = done;
      request.send();
    }
    downloadJson(url, success, error) {
      this.downloadText(url, (data) => {
        success(JSON.parse(data));
      }, error);
    }
    downloadBinary(url, success, error) {
      if (this.start(url, success, error)) return;
      const rawDataUri = this.rawDataUris[url];
      if (rawDataUri && !rawDataUri.includes(".")) {
        try {
          this.finish(url, 200, this.dataUriToUint8Array(rawDataUri));
        } catch (e) {
          this.finish(url, 400, JSON.stringify(e));
        }
        return;
      }
      let request = new XMLHttpRequest();
      request.open("GET", rawDataUri ? rawDataUri : url, true);
      request.responseType = "arraybuffer";
      let onerror = () => {
        this.finish(url, request.status, request.response);
      };
      request.onload = () => {
        if (request.status == 200 || request.status == 0)
          this.finish(url, 200, new Uint8Array(request.response));
        else
          onerror();
      };
      request.onerror = onerror;
      request.send();
    }
    start(url, success, error) {
      let callbacks = this.callbacks[url];
      try {
        if (callbacks) return true;
        this.callbacks[url] = callbacks = [];
      } finally {
        callbacks.push(success, error);
      }
    }
    finish(url, status, data) {
      let callbacks = this.callbacks[url];
      delete this.callbacks[url];
      let args = status == 200 || status == 0 ? [data] : [status, data];
      for (let i = args.length - 1, n = callbacks.length; i < n; i += 2)
        callbacks[i].apply(null, args);
    }
  };

  // spine-core/src/Event.ts
  var Event = class {
    data;
    intValue = 0;
    floatValue = 0;
    stringValue = null;
    time = 0;
    volume = 0;
    balance = 0;
    constructor(time, data) {
      if (!data) throw new Error("data cannot be null.");
      this.time = time;
      this.data = data;
    }
  };

  // spine-core/src/EventData.ts
  var EventData = class {
    name;
    intValue = 0;
    floatValue = 0;
    stringValue = null;
    audioPath = null;
    volume = 0;
    balance = 0;
    constructor(name) {
      this.name = name;
    }
  };

  // spine-core/src/IkConstraint.ts
  var IkConstraint = class {
    /** The IK constraint's setup pose data. */
    data;
    /** The bones that will be modified by this IK constraint. */
    bones;
    /** The bone that is the IK target. */
    target;
    /** Controls the bend direction of the IK bones, either 1 or -1. */
    bendDirection = 0;
    /** When true and only a single bone is being constrained, if the target is too close, the bone is scaled to reach it. */
    compress = false;
    /** When true, if the target is out of range, the parent bone is scaled to reach it. If more than one bone is being constrained
     * and the parent bone has local nonuniform scale, stretch is not applied. */
    stretch = false;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained rotations. */
    mix = 1;
    /** For two bone IK, the distance from the maximum reach of the bones that rotation will slow. */
    softness = 0;
    active = false;
    constructor(data, skeleton) {
      if (!data) throw new Error("data cannot be null.");
      if (!skeleton) throw new Error("skeleton cannot be null.");
      this.data = data;
      this.bones = new Array();
      for (let i = 0; i < data.bones.length; i++) {
        let bone = skeleton.findBone(data.bones[i].name);
        if (!bone) throw new Error(`Couldn't find bone ${data.bones[i].name}`);
        this.bones.push(bone);
      }
      let target = skeleton.findBone(data.target.name);
      if (!target) throw new Error(`Couldn't find bone ${data.target.name}`);
      this.target = target;
      this.mix = data.mix;
      this.softness = data.softness;
      this.bendDirection = data.bendDirection;
      this.compress = data.compress;
      this.stretch = data.stretch;
    }
    isActive() {
      return this.active;
    }
    setToSetupPose() {
      const data = this.data;
      this.mix = data.mix;
      this.softness = data.softness;
      this.bendDirection = data.bendDirection;
      this.compress = data.compress;
      this.stretch = data.stretch;
    }
    update(physics) {
      if (this.mix == 0) return;
      let target = this.target;
      let bones = this.bones;
      switch (bones.length) {
        case 1:
          this.apply1(bones[0], target.worldX, target.worldY, this.compress, this.stretch, this.data.uniform, this.mix);
          break;
        case 2:
          this.apply2(bones[0], bones[1], target.worldX, target.worldY, this.bendDirection, this.stretch, this.data.uniform, this.softness, this.mix);
          break;
      }
    }
    /** Applies 1 bone IK. The target is specified in the world coordinate system. */
    apply1(bone, targetX, targetY, compress, stretch, uniform, alpha) {
      let p = bone.parent;
      if (!p) throw new Error("IK bone must have parent.");
      let pa = p.a, pb = p.b, pc = p.c, pd = p.d;
      let rotationIK = -bone.ashearX - bone.arotation, tx = 0, ty = 0;
      switch (bone.inherit) {
        case 1 /* OnlyTranslation */:
          tx = (targetX - bone.worldX) * MathUtils.signum(bone.skeleton.scaleX);
          ty = (targetY - bone.worldY) * MathUtils.signum(bone.skeleton.scaleY);
          break;
        case 2 /* NoRotationOrReflection */:
          let s = Math.abs(pa * pd - pb * pc) / Math.max(1e-4, pa * pa + pc * pc);
          let sa = pa / bone.skeleton.scaleX;
          let sc = pc / bone.skeleton.scaleY;
          pb = -sc * s * bone.skeleton.scaleX;
          pd = sa * s * bone.skeleton.scaleY;
          rotationIK += Math.atan2(sc, sa) * MathUtils.radDeg;
        // Fall through
        default:
          let x = targetX - p.worldX, y = targetY - p.worldY;
          let d = pa * pd - pb * pc;
          if (Math.abs(d) <= 1e-4) {
            tx = 0;
            ty = 0;
          } else {
            tx = (x * pd - y * pb) / d - bone.ax;
            ty = (y * pa - x * pc) / d - bone.ay;
          }
      }
      rotationIK += Math.atan2(ty, tx) * MathUtils.radDeg;
      if (bone.ascaleX < 0) rotationIK += 180;
      if (rotationIK > 180)
        rotationIK -= 360;
      else if (rotationIK < -180)
        rotationIK += 360;
      let sx = bone.ascaleX, sy = bone.ascaleY;
      if (compress || stretch) {
        switch (bone.inherit) {
          case 3 /* NoScale */:
          case 4 /* NoScaleOrReflection */:
            tx = targetX - bone.worldX;
            ty = targetY - bone.worldY;
        }
        const b = bone.data.length * sx;
        if (b > 1e-4) {
          const dd = tx * tx + ty * ty;
          if (compress && dd < b * b || stretch && dd > b * b) {
            const s = (Math.sqrt(dd) / b - 1) * alpha + 1;
            sx *= s;
            if (uniform) sy *= s;
          }
        }
      }
      bone.updateWorldTransformWith(
        bone.ax,
        bone.ay,
        bone.arotation + rotationIK * alpha,
        sx,
        sy,
        bone.ashearX,
        bone.ashearY
      );
    }
    /** Applies 2 bone IK. The target is specified in the world coordinate system.
     * @param child A direct descendant of the parent bone. */
    apply2(parent, child, targetX, targetY, bendDir, stretch, uniform, softness, alpha) {
      if (parent.inherit != 0 /* Normal */ || child.inherit != 0 /* Normal */) return;
      let px = parent.ax, py = parent.ay, psx = parent.ascaleX, psy = parent.ascaleY, sx = psx, sy = psy, csx = child.ascaleX;
      let os1 = 0, os2 = 0, s2 = 0;
      if (psx < 0) {
        psx = -psx;
        os1 = 180;
        s2 = -1;
      } else {
        os1 = 0;
        s2 = 1;
      }
      if (psy < 0) {
        psy = -psy;
        s2 = -s2;
      }
      if (csx < 0) {
        csx = -csx;
        os2 = 180;
      } else
        os2 = 0;
      let cx = child.ax, cy = 0, cwx = 0, cwy = 0, a = parent.a, b = parent.b, c = parent.c, d = parent.d;
      let u = Math.abs(psx - psy) <= 1e-4;
      if (!u || stretch) {
        cy = 0;
        cwx = a * cx + parent.worldX;
        cwy = c * cx + parent.worldY;
      } else {
        cy = child.ay;
        cwx = a * cx + b * cy + parent.worldX;
        cwy = c * cx + d * cy + parent.worldY;
      }
      let pp = parent.parent;
      if (!pp) throw new Error("IK parent must itself have a parent.");
      a = pp.a;
      b = pp.b;
      c = pp.c;
      d = pp.d;
      let id = a * d - b * c, x = cwx - pp.worldX, y = cwy - pp.worldY;
      id = Math.abs(id) <= 1e-4 ? 0 : 1 / id;
      let dx = (x * d - y * b) * id - px, dy = (y * a - x * c) * id - py;
      let l1 = Math.sqrt(dx * dx + dy * dy), l2 = child.data.length * csx, a1, a2;
      if (l1 < 1e-4) {
        this.apply1(parent, targetX, targetY, false, stretch, false, alpha);
        child.updateWorldTransformWith(cx, cy, 0, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
        return;
      }
      x = targetX - pp.worldX;
      y = targetY - pp.worldY;
      let tx = (x * d - y * b) * id - px, ty = (y * a - x * c) * id - py;
      let dd = tx * tx + ty * ty;
      if (softness != 0) {
        softness *= psx * (csx + 1) * 0.5;
        let td = Math.sqrt(dd), sd = td - l1 - l2 * psx + softness;
        if (sd > 0) {
          let p = Math.min(1, sd / (softness * 2)) - 1;
          p = (sd - softness * (1 - p * p)) / td;
          tx -= p * tx;
          ty -= p * ty;
          dd = tx * tx + ty * ty;
        }
      }
      outer:
        if (u) {
          l2 *= psx;
          let cos = (dd - l1 * l1 - l2 * l2) / (2 * l1 * l2);
          if (cos < -1) {
            cos = -1;
            a2 = Math.PI * bendDir;
          } else if (cos > 1) {
            cos = 1;
            a2 = 0;
            if (stretch) {
              a = (Math.sqrt(dd) / (l1 + l2) - 1) * alpha + 1;
              sx *= a;
              if (uniform) sy *= a;
            }
          } else
            a2 = Math.acos(cos) * bendDir;
          a = l1 + l2 * cos;
          b = l2 * Math.sin(a2);
          a1 = Math.atan2(ty * a - tx * b, tx * a + ty * b);
        } else {
          a = psx * l2;
          b = psy * l2;
          let aa = a * a, bb = b * b, ta = Math.atan2(ty, tx);
          c = bb * l1 * l1 + aa * dd - aa * bb;
          let c1 = -2 * bb * l1, c2 = bb - aa;
          d = c1 * c1 - 4 * c2 * c;
          if (d >= 0) {
            let q = Math.sqrt(d);
            if (c1 < 0) q = -q;
            q = -(c1 + q) * 0.5;
            let r0 = q / c2, r1 = c / q;
            let r = Math.abs(r0) < Math.abs(r1) ? r0 : r1;
            r0 = dd - r * r;
            if (r0 >= 0) {
              y = Math.sqrt(r0) * bendDir;
              a1 = ta - Math.atan2(y, r);
              a2 = Math.atan2(y / psy, (r - l1) / psx);
              break outer;
            }
          }
          let minAngle = MathUtils.PI, minX = l1 - a, minDist = minX * minX, minY = 0;
          let maxAngle = 0, maxX = l1 + a, maxDist = maxX * maxX, maxY = 0;
          c = -a * l1 / (aa - bb);
          if (c >= -1 && c <= 1) {
            c = Math.acos(c);
            x = a * Math.cos(c) + l1;
            y = b * Math.sin(c);
            d = x * x + y * y;
            if (d < minDist) {
              minAngle = c;
              minDist = d;
              minX = x;
              minY = y;
            }
            if (d > maxDist) {
              maxAngle = c;
              maxDist = d;
              maxX = x;
              maxY = y;
            }
          }
          if (dd <= (minDist + maxDist) * 0.5) {
            a1 = ta - Math.atan2(minY * bendDir, minX);
            a2 = minAngle * bendDir;
          } else {
            a1 = ta - Math.atan2(maxY * bendDir, maxX);
            a2 = maxAngle * bendDir;
          }
        }
      let os = Math.atan2(cy, cx) * s2;
      let rotation = parent.arotation;
      a1 = (a1 - os) * MathUtils.radDeg + os1 - rotation;
      if (a1 > 180)
        a1 -= 360;
      else if (a1 < -180)
        a1 += 360;
      parent.updateWorldTransformWith(px, py, rotation + a1 * alpha, sx, sy, 0, 0);
      rotation = child.arotation;
      a2 = ((a2 + os) * MathUtils.radDeg - child.ashearX) * s2 + os2 - rotation;
      if (a2 > 180)
        a2 -= 360;
      else if (a2 < -180)
        a2 += 360;
      child.updateWorldTransformWith(cx, cy, rotation + a2 * alpha, child.ascaleX, child.ascaleY, child.ashearX, child.ashearY);
    }
  };

  // spine-core/src/IkConstraintData.ts
  var IkConstraintData = class extends ConstraintData {
    /** The bones that are constrained by this IK constraint. */
    bones = new Array();
    /** The bone that is the IK target. */
    _target = null;
    set target(boneData) {
      this._target = boneData;
    }
    get target() {
      if (!this._target) throw new Error("BoneData not set.");
      else return this._target;
    }
    /** Controls the bend direction of the IK bones, either 1 or -1. */
    bendDirection = 0;
    /** When true and only a single bone is being constrained, if the target is too close, the bone is scaled to reach it. */
    compress = false;
    /** When true, if the target is out of range, the parent bone is scaled to reach it. If more than one bone is being constrained
     * and the parent bone has local nonuniform scale, stretch is not applied. */
    stretch = false;
    /** When true, only a single bone is being constrained, and {@link #getCompress()} or {@link #getStretch()} is used, the bone
     * is scaled on both the X and Y axes. */
    uniform = false;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained rotations. */
    mix = 0;
    /** For two bone IK, the distance from the maximum reach of the bones that rotation will slow. */
    softness = 0;
    constructor(name) {
      super(name, 0, false);
    }
  };

  // spine-core/src/PathConstraintData.ts
  var PathConstraintData = class extends ConstraintData {
    /** The bones that will be modified by this path constraint. */
    bones = new Array();
    /** The slot whose path attachment will be used to constrained the bones. */
    _target = null;
    set target(slotData) {
      this._target = slotData;
    }
    get target() {
      if (!this._target) throw new Error("SlotData not set.");
      else return this._target;
    }
    /** The mode for positioning the first bone on the path. */
    positionMode = 0 /* Fixed */;
    /** The mode for positioning the bones after the first bone on the path. */
    spacingMode = 1 /* Fixed */;
    /** The mode for adjusting the rotation of the bones. */
    rotateMode = 1 /* Chain */;
    /** An offset added to the constrained bone rotation. */
    offsetRotation = 0;
    /** The position along the path. */
    position = 0;
    /** The spacing between bones. */
    spacing = 0;
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    constructor(name) {
      super(name, 0, false);
    }
  };
  var PositionMode = /* @__PURE__ */ ((PositionMode2) => {
    PositionMode2[PositionMode2["Fixed"] = 0] = "Fixed";
    PositionMode2[PositionMode2["Percent"] = 1] = "Percent";
    return PositionMode2;
  })(PositionMode || {});
  var SpacingMode = /* @__PURE__ */ ((SpacingMode2) => {
    SpacingMode2[SpacingMode2["Length"] = 0] = "Length";
    SpacingMode2[SpacingMode2["Fixed"] = 1] = "Fixed";
    SpacingMode2[SpacingMode2["Percent"] = 2] = "Percent";
    SpacingMode2[SpacingMode2["Proportional"] = 3] = "Proportional";
    return SpacingMode2;
  })(SpacingMode || {});
  var RotateMode = /* @__PURE__ */ ((RotateMode2) => {
    RotateMode2[RotateMode2["Tangent"] = 0] = "Tangent";
    RotateMode2[RotateMode2["Chain"] = 1] = "Chain";
    RotateMode2[RotateMode2["ChainScale"] = 2] = "ChainScale";
    return RotateMode2;
  })(RotateMode || {});

  // spine-core/src/PathConstraint.ts
  var PathConstraint = class _PathConstraint {
    static NONE = -1;
    static BEFORE = -2;
    static AFTER = -3;
    static epsilon = 1e-5;
    /** The path constraint's setup pose data. */
    data;
    /** The bones that will be modified by this path constraint. */
    bones;
    /** The slot whose path attachment will be used to constrained the bones. */
    target;
    /** The position along the path. */
    position = 0;
    /** The spacing between bones. */
    spacing = 0;
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    spaces = new Array();
    positions = new Array();
    world = new Array();
    curves = new Array();
    lengths = new Array();
    segments = new Array();
    active = false;
    constructor(data, skeleton) {
      if (!data) throw new Error("data cannot be null.");
      if (!skeleton) throw new Error("skeleton cannot be null.");
      this.data = data;
      this.bones = new Array();
      for (let i = 0, n = data.bones.length; i < n; i++) {
        let bone = skeleton.findBone(data.bones[i].name);
        if (!bone) throw new Error(`Couldn't find bone ${data.bones[i].name}.`);
        this.bones.push(bone);
      }
      let target = skeleton.findSlot(data.target.name);
      if (!target) throw new Error(`Couldn't find target bone ${data.target.name}`);
      this.target = target;
      this.position = data.position;
      this.spacing = data.spacing;
      this.mixRotate = data.mixRotate;
      this.mixX = data.mixX;
      this.mixY = data.mixY;
    }
    isActive() {
      return this.active;
    }
    setToSetupPose() {
      const data = this.data;
      this.position = data.position;
      this.spacing = data.spacing;
      this.mixRotate = data.mixRotate;
      this.mixX = data.mixX;
      this.mixY = data.mixY;
    }
    update(physics) {
      let attachment = this.target.getAttachment();
      if (!(attachment instanceof PathAttachment)) return;
      let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY;
      if (mixRotate == 0 && mixX == 0 && mixY == 0) return;
      let data = this.data;
      let tangents = data.rotateMode == 0 /* Tangent */, scale = data.rotateMode == 2 /* ChainScale */;
      let bones = this.bones;
      let boneCount = bones.length, spacesCount = tangents ? boneCount : boneCount + 1;
      let spaces = Utils.setArraySize(this.spaces, spacesCount), lengths = scale ? this.lengths = Utils.setArraySize(this.lengths, boneCount) : [];
      let spacing = this.spacing;
      switch (data.spacingMode) {
        case 2 /* Percent */:
          if (scale) {
            for (let i = 0, n = spacesCount - 1; i < n; i++) {
              let bone = bones[i];
              let setupLength = bone.data.length;
              let x = setupLength * bone.a, y = setupLength * bone.c;
              lengths[i] = Math.sqrt(x * x + y * y);
            }
          }
          Utils.arrayFill(spaces, 1, spacesCount, spacing);
          break;
        case 3 /* Proportional */:
          let sum = 0;
          for (let i = 0, n = spacesCount - 1; i < n; ) {
            let bone = bones[i];
            let setupLength = bone.data.length;
            if (setupLength < _PathConstraint.epsilon) {
              if (scale) lengths[i] = 0;
              spaces[++i] = spacing;
            } else {
              let x = setupLength * bone.a, y = setupLength * bone.c;
              let length = Math.sqrt(x * x + y * y);
              if (scale) lengths[i] = length;
              spaces[++i] = length;
              sum += length;
            }
          }
          if (sum > 0) {
            sum = spacesCount / sum * spacing;
            for (let i = 1; i < spacesCount; i++)
              spaces[i] *= sum;
          }
          break;
        default:
          let lengthSpacing = data.spacingMode == 0 /* Length */;
          for (let i = 0, n = spacesCount - 1; i < n; ) {
            let bone = bones[i];
            let setupLength = bone.data.length;
            if (setupLength < _PathConstraint.epsilon) {
              if (scale) lengths[i] = 0;
              spaces[++i] = spacing;
            } else {
              let x = setupLength * bone.a, y = setupLength * bone.c;
              let length = Math.sqrt(x * x + y * y);
              if (scale) lengths[i] = length;
              spaces[++i] = (lengthSpacing ? setupLength + spacing : spacing) * length / setupLength;
            }
          }
      }
      let positions = this.computeWorldPositions(attachment, spacesCount, tangents);
      let boneX = positions[0], boneY = positions[1], offsetRotation = data.offsetRotation;
      let tip = false;
      if (offsetRotation == 0)
        tip = data.rotateMode == 1 /* Chain */;
      else {
        tip = false;
        let p = this.target.bone;
        offsetRotation *= p.a * p.d - p.b * p.c > 0 ? MathUtils.degRad : -MathUtils.degRad;
      }
      for (let i = 0, p = 3; i < boneCount; i++, p += 3) {
        let bone = bones[i];
        bone.worldX += (boneX - bone.worldX) * mixX;
        bone.worldY += (boneY - bone.worldY) * mixY;
        let x = positions[p], y = positions[p + 1], dx = x - boneX, dy = y - boneY;
        if (scale) {
          let length = lengths[i];
          if (length != 0) {
            let s = (Math.sqrt(dx * dx + dy * dy) / length - 1) * mixRotate + 1;
            bone.a *= s;
            bone.c *= s;
          }
        }
        boneX = x;
        boneY = y;
        if (mixRotate > 0) {
          let a = bone.a, b = bone.b, c = bone.c, d = bone.d, r = 0, cos = 0, sin = 0;
          if (tangents)
            r = positions[p - 1];
          else if (spaces[i + 1] == 0)
            r = positions[p + 2];
          else
            r = Math.atan2(dy, dx);
          r -= Math.atan2(c, a);
          if (tip) {
            cos = Math.cos(r);
            sin = Math.sin(r);
            let length = bone.data.length;
            boneX += (length * (cos * a - sin * c) - dx) * mixRotate;
            boneY += (length * (sin * a + cos * c) - dy) * mixRotate;
          } else {
            r += offsetRotation;
          }
          if (r > MathUtils.PI)
            r -= MathUtils.PI2;
          else if (r < -MathUtils.PI)
            r += MathUtils.PI2;
          r *= mixRotate;
          cos = Math.cos(r);
          sin = Math.sin(r);
          bone.a = cos * a - sin * c;
          bone.b = cos * b - sin * d;
          bone.c = sin * a + cos * c;
          bone.d = sin * b + cos * d;
        }
        bone.updateAppliedTransform();
      }
    }
    computeWorldPositions(path, spacesCount, tangents) {
      let target = this.target;
      let position = this.position;
      let spaces = this.spaces, out = Utils.setArraySize(this.positions, spacesCount * 3 + 2), world = this.world;
      let closed2 = path.closed;
      let verticesLength = path.worldVerticesLength, curveCount = verticesLength / 6, prevCurve = _PathConstraint.NONE;
      if (!path.constantSpeed) {
        let lengths = path.lengths;
        curveCount -= closed2 ? 1 : 2;
        let pathLength2 = lengths[curveCount];
        if (this.data.positionMode == 1 /* Percent */) position *= pathLength2;
        let multiplier2;
        switch (this.data.spacingMode) {
          case 2 /* Percent */:
            multiplier2 = pathLength2;
            break;
          case 3 /* Proportional */:
            multiplier2 = pathLength2 / spacesCount;
            break;
          default:
            multiplier2 = 1;
        }
        world = Utils.setArraySize(this.world, 8);
        for (let i = 0, o = 0, curve = 0; i < spacesCount; i++, o += 3) {
          let space = spaces[i] * multiplier2;
          position += space;
          let p = position;
          if (closed2) {
            p %= pathLength2;
            if (p < 0) p += pathLength2;
            curve = 0;
          } else if (p < 0) {
            if (prevCurve != _PathConstraint.BEFORE) {
              prevCurve = _PathConstraint.BEFORE;
              path.computeWorldVertices(target, 2, 4, world, 0, 2);
            }
            this.addBeforePosition(p, world, 0, out, o);
            continue;
          } else if (p > pathLength2) {
            if (prevCurve != _PathConstraint.AFTER) {
              prevCurve = _PathConstraint.AFTER;
              path.computeWorldVertices(target, verticesLength - 6, 4, world, 0, 2);
            }
            this.addAfterPosition(p - pathLength2, world, 0, out, o);
            continue;
          }
          for (; ; curve++) {
            let length = lengths[curve];
            if (p > length) continue;
            if (curve == 0)
              p /= length;
            else {
              let prev = lengths[curve - 1];
              p = (p - prev) / (length - prev);
            }
            break;
          }
          if (curve != prevCurve) {
            prevCurve = curve;
            if (closed2 && curve == curveCount) {
              path.computeWorldVertices(target, verticesLength - 4, 4, world, 0, 2);
              path.computeWorldVertices(target, 0, 4, world, 4, 2);
            } else
              path.computeWorldVertices(target, curve * 6 + 2, 8, world, 0, 2);
          }
          this.addCurvePosition(
            p,
            world[0],
            world[1],
            world[2],
            world[3],
            world[4],
            world[5],
            world[6],
            world[7],
            out,
            o,
            tangents || i > 0 && space == 0
          );
        }
        return out;
      }
      if (closed2) {
        verticesLength += 2;
        world = Utils.setArraySize(this.world, verticesLength);
        path.computeWorldVertices(target, 2, verticesLength - 4, world, 0, 2);
        path.computeWorldVertices(target, 0, 2, world, verticesLength - 4, 2);
        world[verticesLength - 2] = world[0];
        world[verticesLength - 1] = world[1];
      } else {
        curveCount--;
        verticesLength -= 4;
        world = Utils.setArraySize(this.world, verticesLength);
        path.computeWorldVertices(target, 2, verticesLength, world, 0, 2);
      }
      let curves = Utils.setArraySize(this.curves, curveCount);
      let pathLength = 0;
      let x1 = world[0], y1 = world[1], cx1 = 0, cy1 = 0, cx2 = 0, cy2 = 0, x2 = 0, y2 = 0;
      let tmpx = 0, tmpy = 0, dddfx = 0, dddfy = 0, ddfx = 0, ddfy = 0, dfx = 0, dfy = 0;
      for (let i = 0, w = 2; i < curveCount; i++, w += 6) {
        cx1 = world[w];
        cy1 = world[w + 1];
        cx2 = world[w + 2];
        cy2 = world[w + 3];
        x2 = world[w + 4];
        y2 = world[w + 5];
        tmpx = (x1 - cx1 * 2 + cx2) * 0.1875;
        tmpy = (y1 - cy1 * 2 + cy2) * 0.1875;
        dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.09375;
        dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.09375;
        ddfx = tmpx * 2 + dddfx;
        ddfy = tmpy * 2 + dddfy;
        dfx = (cx1 - x1) * 0.75 + tmpx + dddfx * 0.16666667;
        dfy = (cy1 - y1) * 0.75 + tmpy + dddfy * 0.16666667;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        dfx += ddfx;
        dfy += ddfy;
        ddfx += dddfx;
        ddfy += dddfy;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        dfx += ddfx;
        dfy += ddfy;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        dfx += ddfx + dddfx;
        dfy += ddfy + dddfy;
        pathLength += Math.sqrt(dfx * dfx + dfy * dfy);
        curves[i] = pathLength;
        x1 = x2;
        y1 = y2;
      }
      if (this.data.positionMode == 1 /* Percent */) position *= pathLength;
      let multiplier;
      switch (this.data.spacingMode) {
        case 2 /* Percent */:
          multiplier = pathLength;
          break;
        case 3 /* Proportional */:
          multiplier = pathLength / spacesCount;
          break;
        default:
          multiplier = 1;
      }
      let segments = this.segments;
      let curveLength = 0;
      for (let i = 0, o = 0, curve = 0, segment = 0; i < spacesCount; i++, o += 3) {
        let space = spaces[i] * multiplier;
        position += space;
        let p = position;
        if (closed2) {
          p %= pathLength;
          if (p < 0) p += pathLength;
          curve = 0;
        } else if (p < 0) {
          this.addBeforePosition(p, world, 0, out, o);
          continue;
        } else if (p > pathLength) {
          this.addAfterPosition(p - pathLength, world, verticesLength - 4, out, o);
          continue;
        }
        for (; ; curve++) {
          let length = curves[curve];
          if (p > length) continue;
          if (curve == 0)
            p /= length;
          else {
            let prev = curves[curve - 1];
            p = (p - prev) / (length - prev);
          }
          break;
        }
        if (curve != prevCurve) {
          prevCurve = curve;
          let ii = curve * 6;
          x1 = world[ii];
          y1 = world[ii + 1];
          cx1 = world[ii + 2];
          cy1 = world[ii + 3];
          cx2 = world[ii + 4];
          cy2 = world[ii + 5];
          x2 = world[ii + 6];
          y2 = world[ii + 7];
          tmpx = (x1 - cx1 * 2 + cx2) * 0.03;
          tmpy = (y1 - cy1 * 2 + cy2) * 0.03;
          dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 6e-3;
          dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 6e-3;
          ddfx = tmpx * 2 + dddfx;
          ddfy = tmpy * 2 + dddfy;
          dfx = (cx1 - x1) * 0.3 + tmpx + dddfx * 0.16666667;
          dfy = (cy1 - y1) * 0.3 + tmpy + dddfy * 0.16666667;
          curveLength = Math.sqrt(dfx * dfx + dfy * dfy);
          segments[0] = curveLength;
          for (ii = 1; ii < 8; ii++) {
            dfx += ddfx;
            dfy += ddfy;
            ddfx += dddfx;
            ddfy += dddfy;
            curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
            segments[ii] = curveLength;
          }
          dfx += ddfx;
          dfy += ddfy;
          curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
          segments[8] = curveLength;
          dfx += ddfx + dddfx;
          dfy += ddfy + dddfy;
          curveLength += Math.sqrt(dfx * dfx + dfy * dfy);
          segments[9] = curveLength;
          segment = 0;
        }
        p *= curveLength;
        for (; ; segment++) {
          let length = segments[segment];
          if (p > length) continue;
          if (segment == 0)
            p /= length;
          else {
            let prev = segments[segment - 1];
            p = segment + (p - prev) / (length - prev);
          }
          break;
        }
        this.addCurvePosition(p * 0.1, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents || i > 0 && space == 0);
      }
      return out;
    }
    addBeforePosition(p, temp, i, out, o) {
      let x1 = temp[i], y1 = temp[i + 1], dx = temp[i + 2] - x1, dy = temp[i + 3] - y1, r = Math.atan2(dy, dx);
      out[o] = x1 + p * Math.cos(r);
      out[o + 1] = y1 + p * Math.sin(r);
      out[o + 2] = r;
    }
    addAfterPosition(p, temp, i, out, o) {
      let x1 = temp[i + 2], y1 = temp[i + 3], dx = x1 - temp[i], dy = y1 - temp[i + 1], r = Math.atan2(dy, dx);
      out[o] = x1 + p * Math.cos(r);
      out[o + 1] = y1 + p * Math.sin(r);
      out[o + 2] = r;
    }
    addCurvePosition(p, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, o, tangents) {
      if (p == 0 || isNaN(p)) {
        out[o] = x1;
        out[o + 1] = y1;
        out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
        return;
      }
      let tt = p * p, ttt = tt * p, u = 1 - p, uu = u * u, uuu = uu * u;
      let ut = u * p, ut3 = ut * 3, uut3 = u * ut3, utt3 = ut3 * p;
      let x = x1 * uuu + cx1 * uut3 + cx2 * utt3 + x2 * ttt, y = y1 * uuu + cy1 * uut3 + cy2 * utt3 + y2 * ttt;
      out[o] = x;
      out[o + 1] = y;
      if (tangents) {
        if (p < 1e-3)
          out[o + 2] = Math.atan2(cy1 - y1, cx1 - x1);
        else
          out[o + 2] = Math.atan2(y - (y1 * uu + cy1 * ut * 2 + cy2 * tt), x - (x1 * uu + cx1 * ut * 2 + cx2 * tt));
      }
    }
  };

  // spine-core/src/PhysicsConstraint.ts
  var PhysicsConstraint = class {
    data;
    _bone = null;
    /** The bone constrained by this physics constraint. */
    set bone(bone) {
      this._bone = bone;
    }
    get bone() {
      if (!this._bone) throw new Error("Bone not set.");
      else return this._bone;
    }
    inertia = 0;
    strength = 0;
    damping = 0;
    massInverse = 0;
    wind = 0;
    gravity = 0;
    mix = 0;
    _reset = true;
    ux = 0;
    uy = 0;
    cx = 0;
    cy = 0;
    tx = 0;
    ty = 0;
    xOffset = 0;
    xVelocity = 0;
    yOffset = 0;
    yVelocity = 0;
    rotateOffset = 0;
    rotateVelocity = 0;
    scaleOffset = 0;
    scaleVelocity = 0;
    active = false;
    skeleton;
    remaining = 0;
    lastTime = 0;
    constructor(data, skeleton) {
      this.data = data;
      this.skeleton = skeleton;
      this.bone = skeleton.bones[data.bone.index];
      this.inertia = data.inertia;
      this.strength = data.strength;
      this.damping = data.damping;
      this.massInverse = data.massInverse;
      this.wind = data.wind;
      this.gravity = data.gravity;
      this.mix = data.mix;
    }
    reset() {
      this.remaining = 0;
      this.lastTime = this.skeleton.time;
      this._reset = true;
      this.xOffset = 0;
      this.xVelocity = 0;
      this.yOffset = 0;
      this.yVelocity = 0;
      this.rotateOffset = 0;
      this.rotateVelocity = 0;
      this.scaleOffset = 0;
      this.scaleVelocity = 0;
    }
    setToSetupPose() {
      const data = this.data;
      this.inertia = data.inertia;
      this.strength = data.strength;
      this.damping = data.damping;
      this.massInverse = data.massInverse;
      this.wind = data.wind;
      this.gravity = data.gravity;
      this.mix = data.mix;
    }
    isActive() {
      return this.active;
    }
    /** Applies the constraint to the constrained bones. */
    update(physics) {
      const mix = this.mix;
      if (mix == 0) return;
      const x = this.data.x > 0, y = this.data.y > 0, rotateOrShearX = this.data.rotate > 0 || this.data.shearX > 0, scaleX = this.data.scaleX > 0;
      const bone = this.bone;
      const l = bone.data.length;
      switch (physics) {
        case 0 /* none */:
          return;
        case 1 /* reset */:
          this.reset();
        // Fall through.
        case 2 /* update */:
          const skeleton = this.skeleton;
          const delta = Math.max(this.skeleton.time - this.lastTime, 0);
          this.remaining += delta;
          this.lastTime = skeleton.time;
          const bx = bone.worldX, by = bone.worldY;
          if (this._reset) {
            this._reset = false;
            this.ux = bx;
            this.uy = by;
          } else {
            let a = this.remaining, i = this.inertia, t = this.data.step, f = this.skeleton.data.referenceScale, d = -1;
            let qx = this.data.limit * delta, qy = qx * Math.abs(skeleton.scaleY);
            qx *= Math.abs(skeleton.scaleX);
            if (x || y) {
              if (x) {
                const u = (this.ux - bx) * i;
                this.xOffset += u > qx ? qx : u < -qx ? -qx : u;
                this.ux = bx;
              }
              if (y) {
                const u = (this.uy - by) * i;
                this.yOffset += u > qy ? qy : u < -qy ? -qy : u;
                this.uy = by;
              }
              if (a >= t) {
                d = Math.pow(this.damping, 60 * t);
                const m = this.massInverse * t, e = this.strength, w = this.wind * f * skeleton.scaleX, g = this.gravity * f * skeleton.scaleY;
                do {
                  if (x) {
                    this.xVelocity += (w - this.xOffset * e) * m;
                    this.xOffset += this.xVelocity * t;
                    this.xVelocity *= d;
                  }
                  if (y) {
                    this.yVelocity -= (g + this.yOffset * e) * m;
                    this.yOffset += this.yVelocity * t;
                    this.yVelocity *= d;
                  }
                  a -= t;
                } while (a >= t);
              }
              if (x) bone.worldX += this.xOffset * mix * this.data.x;
              if (y) bone.worldY += this.yOffset * mix * this.data.y;
            }
            if (rotateOrShearX || scaleX) {
              let ca = Math.atan2(bone.c, bone.a), c = 0, s = 0, mr = 0;
              let dx = this.cx - bone.worldX, dy = this.cy - bone.worldY;
              if (dx > qx)
                dx = qx;
              else if (dx < -qx)
                dx = -qx;
              if (dy > qy)
                dy = qy;
              else if (dy < -qy)
                dy = -qy;
              if (rotateOrShearX) {
                mr = (this.data.rotate + this.data.shearX) * mix;
                let r = Math.atan2(dy + this.ty, dx + this.tx) - ca - this.rotateOffset * mr;
                this.rotateOffset += (r - Math.ceil(r * MathUtils.invPI2 - 0.5) * MathUtils.PI2) * i;
                r = this.rotateOffset * mr + ca;
                c = Math.cos(r);
                s = Math.sin(r);
                if (scaleX) {
                  r = l * bone.getWorldScaleX();
                  if (r > 0) this.scaleOffset += (dx * c + dy * s) * i / r;
                }
              } else {
                c = Math.cos(ca);
                s = Math.sin(ca);
                const r = l * bone.getWorldScaleX();
                if (r > 0) this.scaleOffset += (dx * c + dy * s) * i / r;
              }
              a = this.remaining;
              if (a >= t) {
                if (d == -1) d = Math.pow(this.damping, 60 * t);
                const m = this.massInverse * t, e = this.strength, w = this.wind, g = Skeleton.yDown ? -this.gravity : this.gravity, h = l / f;
                while (true) {
                  a -= t;
                  if (scaleX) {
                    this.scaleVelocity += (w * c - g * s - this.scaleOffset * e) * m;
                    this.scaleOffset += this.scaleVelocity * t;
                    this.scaleVelocity *= d;
                  }
                  if (rotateOrShearX) {
                    this.rotateVelocity -= ((w * s + g * c) * h + this.rotateOffset * e) * m;
                    this.rotateOffset += this.rotateVelocity * t;
                    this.rotateVelocity *= d;
                    if (a < t) break;
                    const r = this.rotateOffset * mr + ca;
                    c = Math.cos(r);
                    s = Math.sin(r);
                  } else if (a < t)
                    break;
                }
              }
            }
            this.remaining = a;
          }
          this.cx = bone.worldX;
          this.cy = bone.worldY;
          break;
        case 3 /* pose */:
          if (x) bone.worldX += this.xOffset * mix * this.data.x;
          if (y) bone.worldY += this.yOffset * mix * this.data.y;
      }
      if (rotateOrShearX) {
        let o = this.rotateOffset * mix, s = 0, c = 0, a = 0;
        if (this.data.shearX > 0) {
          let r = 0;
          if (this.data.rotate > 0) {
            r = o * this.data.rotate;
            s = Math.sin(r);
            c = Math.cos(r);
            a = bone.b;
            bone.b = c * a - s * bone.d;
            bone.d = s * a + c * bone.d;
          }
          r += o * this.data.shearX;
          s = Math.sin(r);
          c = Math.cos(r);
          a = bone.a;
          bone.a = c * a - s * bone.c;
          bone.c = s * a + c * bone.c;
        } else {
          o *= this.data.rotate;
          s = Math.sin(o);
          c = Math.cos(o);
          a = bone.a;
          bone.a = c * a - s * bone.c;
          bone.c = s * a + c * bone.c;
          a = bone.b;
          bone.b = c * a - s * bone.d;
          bone.d = s * a + c * bone.d;
        }
      }
      if (scaleX) {
        const s = 1 + this.scaleOffset * mix * this.data.scaleX;
        bone.a *= s;
        bone.c *= s;
      }
      if (physics != 3 /* pose */) {
        this.tx = l * bone.a;
        this.ty = l * bone.c;
      }
      bone.updateAppliedTransform();
    }
    /** Translates the physics constraint so next {@link #update(Physics)} forces are applied as if the bone moved an additional
     * amount in world space. */
    translate(x, y) {
      this.ux -= x;
      this.uy -= y;
      this.cx -= x;
      this.cy -= y;
    }
    /** Rotates the physics constraint so next {@link #update(Physics)} forces are applied as if the bone rotated around the
     * specified point in world space. */
    rotate(x, y, degrees) {
      const r = degrees * MathUtils.degRad, cos = Math.cos(r), sin = Math.sin(r);
      const dx = this.cx - x, dy = this.cy - y;
      this.translate(dx * cos - dy * sin - dx, dx * sin + dy * cos - dy);
    }
  };

  // spine-core/src/Slot.ts
  var Slot = class {
    /** The slot's setup pose data. */
    data;
    /** The bone this slot belongs to. */
    bone;
    /** The color used to tint the slot's attachment. If {@link #getDarkColor()} is set, this is used as the light color for two
     * color tinting. */
    color;
    /** The dark color used to tint the slot's attachment for two color tinting, or null if two color tinting is not used. The dark
     * color's alpha is not used. */
    darkColor = null;
    attachment = null;
    attachmentState = 0;
    /** The index of the texture region to display when the slot's attachment has a {@link Sequence}. -1 represents the
     * {@link Sequence#getSetupIndex()}. */
    sequenceIndex = -1;
    /** Values to deform the slot's attachment. For an unweighted mesh, the entries are local positions for each vertex. For a
     * weighted mesh, the entries are an offset for each vertex which will be added to the mesh's local vertex positions.
     *
     * See {@link VertexAttachment#computeWorldVertices()} and {@link DeformTimeline}. */
    deform = new Array();
    constructor(data, bone) {
      if (!data) throw new Error("data cannot be null.");
      if (!bone) throw new Error("bone cannot be null.");
      this.data = data;
      this.bone = bone;
      this.color = new Color();
      this.darkColor = !data.darkColor ? null : new Color();
      this.setToSetupPose();
    }
    /** The skeleton this slot belongs to. */
    getSkeleton() {
      return this.bone.skeleton;
    }
    /** The current attachment for the slot, or null if the slot has no attachment. */
    getAttachment() {
      return this.attachment;
    }
    /** Sets the slot's attachment and, if the attachment changed, resets {@link #sequenceIndex} and clears the {@link #deform}.
     * The deform is not cleared if the old attachment has the same {@link VertexAttachment#getTimelineAttachment()} as the
     * specified attachment. */
    setAttachment(attachment) {
      if (this.attachment == attachment) return;
      if (!(attachment instanceof VertexAttachment) || !(this.attachment instanceof VertexAttachment) || attachment.timelineAttachment != this.attachment.timelineAttachment) {
        this.deform.length = 0;
      }
      this.attachment = attachment;
      this.sequenceIndex = -1;
    }
    /** Sets this slot to the setup pose. */
    setToSetupPose() {
      this.color.setFromColor(this.data.color);
      if (this.darkColor) this.darkColor.setFromColor(this.data.darkColor);
      if (!this.data.attachmentName)
        this.attachment = null;
      else {
        this.attachment = null;
        this.setAttachment(this.bone.skeleton.getAttachment(this.data.index, this.data.attachmentName));
      }
    }
  };

  // spine-core/src/TransformConstraint.ts
  var TransformConstraint = class {
    /** The transform constraint's setup pose data. */
    data;
    /** The bones that will be modified by this transform constraint. */
    bones;
    /** The target bone whose world transform will be copied to the constrained bones. */
    target;
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    mixScaleX = 0;
    mixScaleY = 0;
    mixShearY = 0;
    temp = new Vector2();
    active = false;
    constructor(data, skeleton) {
      if (!data) throw new Error("data cannot be null.");
      if (!skeleton) throw new Error("skeleton cannot be null.");
      this.data = data;
      this.bones = new Array();
      for (let i = 0; i < data.bones.length; i++) {
        let bone = skeleton.findBone(data.bones[i].name);
        if (!bone) throw new Error(`Couldn't find bone ${data.bones[i].name}.`);
        this.bones.push(bone);
      }
      let target = skeleton.findBone(data.target.name);
      if (!target) throw new Error(`Couldn't find target bone ${data.target.name}.`);
      this.target = target;
      this.mixRotate = data.mixRotate;
      this.mixX = data.mixX;
      this.mixY = data.mixY;
      this.mixScaleX = data.mixScaleX;
      this.mixScaleY = data.mixScaleY;
      this.mixShearY = data.mixShearY;
    }
    isActive() {
      return this.active;
    }
    setToSetupPose() {
      const data = this.data;
      this.mixRotate = data.mixRotate;
      this.mixX = data.mixX;
      this.mixY = data.mixY;
      this.mixScaleX = data.mixScaleX;
      this.mixScaleY = data.mixScaleY;
      this.mixShearY = data.mixShearY;
    }
    update(physics) {
      if (this.mixRotate == 0 && this.mixX == 0 && this.mixY == 0 && this.mixScaleX == 0 && this.mixScaleY == 0 && this.mixShearY == 0) return;
      if (this.data.local) {
        if (this.data.relative)
          this.applyRelativeLocal();
        else
          this.applyAbsoluteLocal();
      } else {
        if (this.data.relative)
          this.applyRelativeWorld();
        else
          this.applyAbsoluteWorld();
      }
    }
    applyAbsoluteWorld() {
      let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
      let translate = mixX != 0 || mixY != 0;
      let target = this.target;
      let ta = target.a, tb = target.b, tc = target.c, td = target.d;
      let degRadReflect = ta * td - tb * tc > 0 ? MathUtils.degRad : -MathUtils.degRad;
      let offsetRotation = this.data.offsetRotation * degRadReflect;
      let offsetShearY = this.data.offsetShearY * degRadReflect;
      let bones = this.bones;
      for (let i = 0, n = bones.length; i < n; i++) {
        let bone = bones[i];
        if (mixRotate != 0) {
          let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
          let r = Math.atan2(tc, ta) - Math.atan2(c, a) + offsetRotation;
          if (r > MathUtils.PI)
            r -= MathUtils.PI2;
          else if (r < -MathUtils.PI)
            r += MathUtils.PI2;
          r *= mixRotate;
          let cos = Math.cos(r), sin = Math.sin(r);
          bone.a = cos * a - sin * c;
          bone.b = cos * b - sin * d;
          bone.c = sin * a + cos * c;
          bone.d = sin * b + cos * d;
        }
        if (translate) {
          let temp = this.temp;
          target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
          bone.worldX += (temp.x - bone.worldX) * mixX;
          bone.worldY += (temp.y - bone.worldY) * mixY;
        }
        if (mixScaleX != 0) {
          let s = Math.sqrt(bone.a * bone.a + bone.c * bone.c);
          if (s != 0) s = (s + (Math.sqrt(ta * ta + tc * tc) - s + this.data.offsetScaleX) * mixScaleX) / s;
          bone.a *= s;
          bone.c *= s;
        }
        if (mixScaleY != 0) {
          let s = Math.sqrt(bone.b * bone.b + bone.d * bone.d);
          if (s != 0) s = (s + (Math.sqrt(tb * tb + td * td) - s + this.data.offsetScaleY) * mixScaleY) / s;
          bone.b *= s;
          bone.d *= s;
        }
        if (mixShearY > 0) {
          let b = bone.b, d = bone.d;
          let by = Math.atan2(d, b);
          let r = Math.atan2(td, tb) - Math.atan2(tc, ta) - (by - Math.atan2(bone.c, bone.a));
          if (r > MathUtils.PI)
            r -= MathUtils.PI2;
          else if (r < -MathUtils.PI)
            r += MathUtils.PI2;
          r = by + (r + offsetShearY) * mixShearY;
          let s = Math.sqrt(b * b + d * d);
          bone.b = Math.cos(r) * s;
          bone.d = Math.sin(r) * s;
        }
        bone.updateAppliedTransform();
      }
    }
    applyRelativeWorld() {
      let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
      let translate = mixX != 0 || mixY != 0;
      let target = this.target;
      let ta = target.a, tb = target.b, tc = target.c, td = target.d;
      let degRadReflect = ta * td - tb * tc > 0 ? MathUtils.degRad : -MathUtils.degRad;
      let offsetRotation = this.data.offsetRotation * degRadReflect, offsetShearY = this.data.offsetShearY * degRadReflect;
      let bones = this.bones;
      for (let i = 0, n = bones.length; i < n; i++) {
        let bone = bones[i];
        if (mixRotate != 0) {
          let a = bone.a, b = bone.b, c = bone.c, d = bone.d;
          let r = Math.atan2(tc, ta) + offsetRotation;
          if (r > MathUtils.PI)
            r -= MathUtils.PI2;
          else if (r < -MathUtils.PI)
            r += MathUtils.PI2;
          r *= mixRotate;
          let cos = Math.cos(r), sin = Math.sin(r);
          bone.a = cos * a - sin * c;
          bone.b = cos * b - sin * d;
          bone.c = sin * a + cos * c;
          bone.d = sin * b + cos * d;
        }
        if (translate) {
          let temp = this.temp;
          target.localToWorld(temp.set(this.data.offsetX, this.data.offsetY));
          bone.worldX += temp.x * mixX;
          bone.worldY += temp.y * mixY;
        }
        if (mixScaleX != 0) {
          let s = (Math.sqrt(ta * ta + tc * tc) - 1 + this.data.offsetScaleX) * mixScaleX + 1;
          bone.a *= s;
          bone.c *= s;
        }
        if (mixScaleY != 0) {
          let s = (Math.sqrt(tb * tb + td * td) - 1 + this.data.offsetScaleY) * mixScaleY + 1;
          bone.b *= s;
          bone.d *= s;
        }
        if (mixShearY > 0) {
          let r = Math.atan2(td, tb) - Math.atan2(tc, ta);
          if (r > MathUtils.PI)
            r -= MathUtils.PI2;
          else if (r < -MathUtils.PI)
            r += MathUtils.PI2;
          let b = bone.b, d = bone.d;
          r = Math.atan2(d, b) + (r - MathUtils.PI / 2 + offsetShearY) * mixShearY;
          let s = Math.sqrt(b * b + d * d);
          bone.b = Math.cos(r) * s;
          bone.d = Math.sin(r) * s;
        }
        bone.updateAppliedTransform();
      }
    }
    applyAbsoluteLocal() {
      let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
      let target = this.target;
      let bones = this.bones;
      for (let i = 0, n = bones.length; i < n; i++) {
        let bone = bones[i];
        let rotation = bone.arotation;
        if (mixRotate != 0) rotation += (target.arotation - rotation + this.data.offsetRotation) * mixRotate;
        let x = bone.ax, y = bone.ay;
        x += (target.ax - x + this.data.offsetX) * mixX;
        y += (target.ay - y + this.data.offsetY) * mixY;
        let scaleX = bone.ascaleX, scaleY = bone.ascaleY;
        if (mixScaleX != 0 && scaleX != 0)
          scaleX = (scaleX + (target.ascaleX - scaleX + this.data.offsetScaleX) * mixScaleX) / scaleX;
        if (mixScaleY != 0 && scaleY != 0)
          scaleY = (scaleY + (target.ascaleY - scaleY + this.data.offsetScaleY) * mixScaleY) / scaleY;
        let shearY = bone.ashearY;
        if (mixShearY != 0) shearY += (target.ashearY - shearY + this.data.offsetShearY) * mixShearY;
        bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
      }
    }
    applyRelativeLocal() {
      let mixRotate = this.mixRotate, mixX = this.mixX, mixY = this.mixY, mixScaleX = this.mixScaleX, mixScaleY = this.mixScaleY, mixShearY = this.mixShearY;
      let target = this.target;
      let bones = this.bones;
      for (let i = 0, n = bones.length; i < n; i++) {
        let bone = bones[i];
        let rotation = bone.arotation + (target.arotation + this.data.offsetRotation) * mixRotate;
        let x = bone.ax + (target.ax + this.data.offsetX) * mixX;
        let y = bone.ay + (target.ay + this.data.offsetY) * mixY;
        let scaleX = bone.ascaleX * ((target.ascaleX - 1 + this.data.offsetScaleX) * mixScaleX + 1);
        let scaleY = bone.ascaleY * ((target.ascaleY - 1 + this.data.offsetScaleY) * mixScaleY + 1);
        let shearY = bone.ashearY + (target.ashearY + this.data.offsetShearY) * mixShearY;
        bone.updateWorldTransformWith(x, y, rotation, scaleX, scaleY, bone.ashearX, shearY);
      }
    }
  };

  // spine-core/src/Skeleton.ts
  var Skeleton = class _Skeleton {
    static quadTriangles = [0, 1, 2, 2, 3, 0];
    static yDown = false;
    /** The skeleton's setup pose data. */
    data;
    /** The skeleton's bones, sorted parent first. The root bone is always the first bone. */
    bones;
    /** The skeleton's slots in the setup pose draw order. */
    slots;
    /** The skeleton's slots in the order they should be drawn. The returned array may be modified to change the draw order. */
    drawOrder;
    /** The skeleton's IK constraints. */
    ikConstraints;
    /** The skeleton's transform constraints. */
    transformConstraints;
    /** The skeleton's path constraints. */
    pathConstraints;
    /** The skeleton's physics constraints. */
    physicsConstraints;
    /** The list of bones and constraints, sorted in the order they should be updated, as computed by {@link #updateCache()}. */
    _updateCache = new Array();
    /** The skeleton's current skin. May be null. */
    skin = null;
    /** The color to tint all the skeleton's attachments. */
    color;
    /** Scales the entire skeleton on the X axis. This affects all bones, even if the bone's transform mode disallows scale
      * inheritance. */
    scaleX = 1;
    /** Scales the entire skeleton on the Y axis. This affects all bones, even if the bone's transform mode disallows scale
      * inheritance. */
    _scaleY = 1;
    get scaleY() {
      return _Skeleton.yDown ? -this._scaleY : this._scaleY;
    }
    set scaleY(scaleY) {
      this._scaleY = scaleY;
    }
    /** Sets the skeleton X position, which is added to the root bone worldX position. */
    x = 0;
    /** Sets the skeleton Y position, which is added to the root bone worldY position. */
    y = 0;
    /** Returns the skeleton's time. This is used for time-based manipulations, such as {@link PhysicsConstraint}.
     * <p>
     * See {@link #update(float)}. */
    time = 0;
    constructor(data) {
      if (!data) throw new Error("data cannot be null.");
      this.data = data;
      this.bones = new Array();
      for (let i = 0; i < data.bones.length; i++) {
        let boneData = data.bones[i];
        let bone;
        if (!boneData.parent)
          bone = new Bone(boneData, this, null);
        else {
          let parent = this.bones[boneData.parent.index];
          bone = new Bone(boneData, this, parent);
          parent.children.push(bone);
        }
        this.bones.push(bone);
      }
      this.slots = new Array();
      this.drawOrder = new Array();
      for (let i = 0; i < data.slots.length; i++) {
        let slotData = data.slots[i];
        let bone = this.bones[slotData.boneData.index];
        let slot = new Slot(slotData, bone);
        this.slots.push(slot);
        this.drawOrder.push(slot);
      }
      this.ikConstraints = new Array();
      for (let i = 0; i < data.ikConstraints.length; i++) {
        let ikConstraintData = data.ikConstraints[i];
        this.ikConstraints.push(new IkConstraint(ikConstraintData, this));
      }
      this.transformConstraints = new Array();
      for (let i = 0; i < data.transformConstraints.length; i++) {
        let transformConstraintData = data.transformConstraints[i];
        this.transformConstraints.push(new TransformConstraint(transformConstraintData, this));
      }
      this.pathConstraints = new Array();
      for (let i = 0; i < data.pathConstraints.length; i++) {
        let pathConstraintData = data.pathConstraints[i];
        this.pathConstraints.push(new PathConstraint(pathConstraintData, this));
      }
      this.physicsConstraints = new Array();
      for (let i = 0; i < data.physicsConstraints.length; i++) {
        let physicsConstraintData = data.physicsConstraints[i];
        this.physicsConstraints.push(new PhysicsConstraint(physicsConstraintData, this));
      }
      this.color = new Color(1, 1, 1, 1);
      this.updateCache();
    }
    /** Caches information about bones and constraints. Must be called if the {@link #getSkin()} is modified or if bones,
     * constraints, or weighted path attachments are added or removed. */
    updateCache() {
      let updateCache = this._updateCache;
      updateCache.length = 0;
      let bones = this.bones;
      for (let i = 0, n = bones.length; i < n; i++) {
        let bone = bones[i];
        bone.sorted = bone.data.skinRequired;
        bone.active = !bone.sorted;
      }
      if (this.skin) {
        let skinBones = this.skin.bones;
        for (let i = 0, n = this.skin.bones.length; i < n; i++) {
          let bone = this.bones[skinBones[i].index];
          do {
            bone.sorted = false;
            bone.active = true;
            bone = bone.parent;
          } while (bone);
        }
      }
      let ikConstraints = this.ikConstraints;
      let transformConstraints = this.transformConstraints;
      let pathConstraints = this.pathConstraints;
      let physicsConstraints = this.physicsConstraints;
      let ikCount = ikConstraints.length, transformCount = transformConstraints.length, pathCount = pathConstraints.length, physicsCount = this.physicsConstraints.length;
      let constraintCount = ikCount + transformCount + pathCount + physicsCount;
      outer:
        for (let i = 0; i < constraintCount; i++) {
          for (let ii = 0; ii < ikCount; ii++) {
            let constraint = ikConstraints[ii];
            if (constraint.data.order == i) {
              this.sortIkConstraint(constraint);
              continue outer;
            }
          }
          for (let ii = 0; ii < transformCount; ii++) {
            let constraint = transformConstraints[ii];
            if (constraint.data.order == i) {
              this.sortTransformConstraint(constraint);
              continue outer;
            }
          }
          for (let ii = 0; ii < pathCount; ii++) {
            let constraint = pathConstraints[ii];
            if (constraint.data.order == i) {
              this.sortPathConstraint(constraint);
              continue outer;
            }
          }
          for (let ii = 0; ii < physicsCount; ii++) {
            const constraint = physicsConstraints[ii];
            if (constraint.data.order == i) {
              this.sortPhysicsConstraint(constraint);
              continue outer;
            }
          }
        }
      for (let i = 0, n = bones.length; i < n; i++)
        this.sortBone(bones[i]);
    }
    sortIkConstraint(constraint) {
      constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || this.skin && Utils.contains(this.skin.constraints, constraint.data, true));
      if (!constraint.active) return;
      let target = constraint.target;
      this.sortBone(target);
      let constrained = constraint.bones;
      let parent = constrained[0];
      this.sortBone(parent);
      if (constrained.length == 1) {
        this._updateCache.push(constraint);
        this.sortReset(parent.children);
      } else {
        let child = constrained[constrained.length - 1];
        this.sortBone(child);
        this._updateCache.push(constraint);
        this.sortReset(parent.children);
        child.sorted = true;
      }
    }
    sortPathConstraint(constraint) {
      constraint.active = constraint.target.bone.isActive() && (!constraint.data.skinRequired || this.skin && Utils.contains(this.skin.constraints, constraint.data, true));
      if (!constraint.active) return;
      let slot = constraint.target;
      let slotIndex = slot.data.index;
      let slotBone = slot.bone;
      if (this.skin) this.sortPathConstraintAttachment(this.skin, slotIndex, slotBone);
      if (this.data.defaultSkin && this.data.defaultSkin != this.skin)
        this.sortPathConstraintAttachment(this.data.defaultSkin, slotIndex, slotBone);
      for (let i = 0, n = this.data.skins.length; i < n; i++)
        this.sortPathConstraintAttachment(this.data.skins[i], slotIndex, slotBone);
      let attachment = slot.getAttachment();
      if (attachment instanceof PathAttachment) this.sortPathConstraintAttachmentWith(attachment, slotBone);
      let constrained = constraint.bones;
      let boneCount = constrained.length;
      for (let i = 0; i < boneCount; i++)
        this.sortBone(constrained[i]);
      this._updateCache.push(constraint);
      for (let i = 0; i < boneCount; i++)
        this.sortReset(constrained[i].children);
      for (let i = 0; i < boneCount; i++)
        constrained[i].sorted = true;
    }
    sortTransformConstraint(constraint) {
      constraint.active = constraint.target.isActive() && (!constraint.data.skinRequired || this.skin && Utils.contains(this.skin.constraints, constraint.data, true));
      if (!constraint.active) return;
      this.sortBone(constraint.target);
      let constrained = constraint.bones;
      let boneCount = constrained.length;
      if (constraint.data.local) {
        for (let i = 0; i < boneCount; i++) {
          let child = constrained[i];
          this.sortBone(child.parent);
          this.sortBone(child);
        }
      } else {
        for (let i = 0; i < boneCount; i++) {
          this.sortBone(constrained[i]);
        }
      }
      this._updateCache.push(constraint);
      for (let i = 0; i < boneCount; i++)
        this.sortReset(constrained[i].children);
      for (let i = 0; i < boneCount; i++)
        constrained[i].sorted = true;
    }
    sortPathConstraintAttachment(skin, slotIndex, slotBone) {
      let attachments = skin.attachments[slotIndex];
      if (!attachments) return;
      for (let key in attachments) {
        this.sortPathConstraintAttachmentWith(attachments[key], slotBone);
      }
    }
    sortPathConstraintAttachmentWith(attachment, slotBone) {
      if (!(attachment instanceof PathAttachment)) return;
      let pathBones = attachment.bones;
      if (!pathBones)
        this.sortBone(slotBone);
      else {
        let bones = this.bones;
        for (let i = 0, n = pathBones.length; i < n; ) {
          let nn = pathBones[i++];
          nn += i;
          while (i < nn)
            this.sortBone(bones[pathBones[i++]]);
        }
      }
    }
    sortPhysicsConstraint(constraint) {
      const bone = constraint.bone;
      constraint.active = bone.active && (!constraint.data.skinRequired || this.skin != null && Utils.contains(this.skin.constraints, constraint.data, true));
      if (!constraint.active) return;
      this.sortBone(bone);
      this._updateCache.push(constraint);
      this.sortReset(bone.children);
      bone.sorted = true;
    }
    sortBone(bone) {
      if (!bone) return;
      if (bone.sorted) return;
      let parent = bone.parent;
      if (parent) this.sortBone(parent);
      bone.sorted = true;
      this._updateCache.push(bone);
    }
    sortReset(bones) {
      for (let i = 0, n = bones.length; i < n; i++) {
        let bone = bones[i];
        if (!bone.active) continue;
        if (bone.sorted) this.sortReset(bone.children);
        bone.sorted = false;
      }
    }
    /** Updates the world transform for each bone and applies all constraints.
     *
     * See [World transforms](http://esotericsoftware.com/spine-runtime-skeletons#World-transforms) in the Spine
     * Runtimes Guide. */
    updateWorldTransform(physics) {
      if (physics === void 0 || physics === null) throw new Error("physics is undefined");
      let bones = this.bones;
      for (let i = 0, n = bones.length; i < n; i++) {
        let bone = bones[i];
        bone.ax = bone.x;
        bone.ay = bone.y;
        bone.arotation = bone.rotation;
        bone.ascaleX = bone.scaleX;
        bone.ascaleY = bone.scaleY;
        bone.ashearX = bone.shearX;
        bone.ashearY = bone.shearY;
      }
      let updateCache = this._updateCache;
      for (let i = 0, n = updateCache.length; i < n; i++)
        updateCache[i].update(physics);
    }
    updateWorldTransformWith(physics, parent) {
      if (!parent) throw new Error("parent cannot be null.");
      let bones = this.bones;
      for (let i = 1, n = bones.length; i < n; i++) {
        let bone = bones[i];
        bone.ax = bone.x;
        bone.ay = bone.y;
        bone.arotation = bone.rotation;
        bone.ascaleX = bone.scaleX;
        bone.ascaleY = bone.scaleY;
        bone.ashearX = bone.shearX;
        bone.ashearY = bone.shearY;
      }
      let rootBone = this.getRootBone();
      if (!rootBone) throw new Error("Root bone must not be null.");
      let pa = parent.a, pb = parent.b, pc = parent.c, pd = parent.d;
      rootBone.worldX = pa * this.x + pb * this.y + parent.worldX;
      rootBone.worldY = pc * this.x + pd * this.y + parent.worldY;
      const rx = (rootBone.rotation + rootBone.shearX) * MathUtils.degRad;
      const ry = (rootBone.rotation + 90 + rootBone.shearY) * MathUtils.degRad;
      const la = Math.cos(rx) * rootBone.scaleX;
      const lb = Math.cos(ry) * rootBone.scaleY;
      const lc = Math.sin(rx) * rootBone.scaleX;
      const ld = Math.sin(ry) * rootBone.scaleY;
      rootBone.a = (pa * la + pb * lc) * this.scaleX;
      rootBone.b = (pa * lb + pb * ld) * this.scaleX;
      rootBone.c = (pc * la + pd * lc) * this.scaleY;
      rootBone.d = (pc * lb + pd * ld) * this.scaleY;
      let updateCache = this._updateCache;
      for (let i = 0, n = updateCache.length; i < n; i++) {
        let updatable = updateCache[i];
        if (updatable != rootBone) updatable.update(physics);
      }
    }
    /** Sets the bones, constraints, and slots to their setup pose values. */
    setToSetupPose() {
      this.setBonesToSetupPose();
      this.setSlotsToSetupPose();
    }
    /** Sets the bones and constraints to their setup pose values. */
    setBonesToSetupPose() {
      for (const bone of this.bones) bone.setToSetupPose();
      for (const constraint of this.ikConstraints) constraint.setToSetupPose();
      for (const constraint of this.transformConstraints) constraint.setToSetupPose();
      for (const constraint of this.pathConstraints) constraint.setToSetupPose();
      for (const constraint of this.physicsConstraints) constraint.setToSetupPose();
    }
    /** Sets the slots and draw order to their setup pose values. */
    setSlotsToSetupPose() {
      let slots = this.slots;
      Utils.arrayCopy(slots, 0, this.drawOrder, 0, slots.length);
      for (let i = 0, n = slots.length; i < n; i++)
        slots[i].setToSetupPose();
    }
    /** @returns May return null. */
    getRootBone() {
      if (this.bones.length == 0) return null;
      return this.bones[0];
    }
    /** @returns May be null. */
    findBone(boneName) {
      if (!boneName) throw new Error("boneName cannot be null.");
      let bones = this.bones;
      for (let i = 0, n = bones.length; i < n; i++) {
        let bone = bones[i];
        if (bone.data.name == boneName) return bone;
      }
      return null;
    }
    /** Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it
     * repeatedly.
     * @returns May be null. */
    findSlot(slotName) {
      if (!slotName) throw new Error("slotName cannot be null.");
      let slots = this.slots;
      for (let i = 0, n = slots.length; i < n; i++) {
        let slot = slots[i];
        if (slot.data.name == slotName) return slot;
      }
      return null;
    }
    /** Sets a skin by name.
     *
     * See {@link #setSkin()}. */
    setSkinByName(skinName) {
      let skin = this.data.findSkin(skinName);
      if (!skin) throw new Error("Skin not found: " + skinName);
      this.setSkin(skin);
    }
    /** Sets the skin used to look up attachments before looking in the {@link SkeletonData#defaultSkin default skin}. If the
     * skin is changed, {@link #updateCache()} is called.
     *
     * Attachments from the new skin are attached if the corresponding attachment from the old skin was attached. If there was no
     * old skin, each slot's setup mode attachment is attached from the new skin.
     *
     * After changing the skin, the visible attachments can be reset to those attached in the setup pose by calling
     * {@link #setSlotsToSetupPose()}. Also, often {@link AnimationState#apply()} is called before the next time the
     * skeleton is rendered to allow any attachment keys in the current animation(s) to hide or show attachments from the new skin.
     * @param newSkin May be null. */
    setSkin(newSkin) {
      if (newSkin == this.skin) return;
      if (newSkin) {
        if (this.skin)
          newSkin.attachAll(this, this.skin);
        else {
          let slots = this.slots;
          for (let i = 0, n = slots.length; i < n; i++) {
            let slot = slots[i];
            let name = slot.data.attachmentName;
            if (name) {
              let attachment = newSkin.getAttachment(i, name);
              if (attachment) slot.setAttachment(attachment);
            }
          }
        }
      }
      this.skin = newSkin;
      this.updateCache();
    }
    /** Finds an attachment by looking in the {@link #skin} and {@link SkeletonData#defaultSkin} using the slot name and attachment
     * name.
     *
     * See {@link #getAttachment()}.
     * @returns May be null. */
    getAttachmentByName(slotName, attachmentName) {
      let slot = this.data.findSlot(slotName);
      if (!slot) throw new Error(`Can't find slot with name ${slotName}`);
      return this.getAttachment(slot.index, attachmentName);
    }
    /** Finds an attachment by looking in the {@link #skin} and {@link SkeletonData#defaultSkin} using the slot index and
     * attachment name. First the skin is checked and if the attachment was not found, the default skin is checked.
     *
     * See [Runtime skins](http://esotericsoftware.com/spine-runtime-skins) in the Spine Runtimes Guide.
     * @returns May be null. */
    getAttachment(slotIndex, attachmentName) {
      if (!attachmentName) throw new Error("attachmentName cannot be null.");
      if (this.skin) {
        let attachment = this.skin.getAttachment(slotIndex, attachmentName);
        if (attachment) return attachment;
      }
      if (this.data.defaultSkin) return this.data.defaultSkin.getAttachment(slotIndex, attachmentName);
      return null;
    }
    /** A convenience method to set an attachment by finding the slot with {@link #findSlot()}, finding the attachment with
     * {@link #getAttachment()}, then setting the slot's {@link Slot#attachment}.
     * @param attachmentName May be null to clear the slot's attachment. */
    setAttachment(slotName, attachmentName) {
      if (!slotName) throw new Error("slotName cannot be null.");
      let slots = this.slots;
      for (let i = 0, n = slots.length; i < n; i++) {
        let slot = slots[i];
        if (slot.data.name == slotName) {
          let attachment = null;
          if (attachmentName) {
            attachment = this.getAttachment(i, attachmentName);
            if (!attachment) throw new Error("Attachment not found: " + attachmentName + ", for slot: " + slotName);
          }
          slot.setAttachment(attachment);
          return;
        }
      }
      throw new Error("Slot not found: " + slotName);
    }
    /** Finds an IK constraint by comparing each IK constraint's name. It is more efficient to cache the results of this method
     * than to call it repeatedly.
     * @return May be null. */
    findIkConstraint(constraintName) {
      if (!constraintName) throw new Error("constraintName cannot be null.");
      return this.ikConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Finds a transform constraint by comparing each transform constraint's name. It is more efficient to cache the results of
     * this method than to call it repeatedly.
     * @return May be null. */
    findTransformConstraint(constraintName) {
      if (!constraintName) throw new Error("constraintName cannot be null.");
      return this.transformConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Finds a path constraint by comparing each path constraint's name. It is more efficient to cache the results of this method
     * than to call it repeatedly.
     * @return May be null. */
    findPathConstraint(constraintName) {
      if (!constraintName) throw new Error("constraintName cannot be null.");
      return this.pathConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Finds a physics constraint by comparing each physics constraint's name. It is more efficient to cache the results of this
     * method than to call it repeatedly. */
    findPhysicsConstraint(constraintName) {
      if (constraintName == null) throw new Error("constraintName cannot be null.");
      return this.physicsConstraints.find((constraint) => constraint.data.name == constraintName) ?? null;
    }
    /** Returns the axis aligned bounding box (AABB) of the region and mesh attachments for the current pose as `{ x: number, y: number, width: number, height: number }`.
     * Note that this method will create temporary objects which can add to garbage collection pressure. Use `getBounds()` if garbage collection is a concern. */
    getBoundsRect(clipper) {
      let offset = new Vector2();
      let size = new Vector2();
      this.getBounds(offset, size, void 0, clipper);
      return { x: offset.x, y: offset.y, width: size.x, height: size.y };
    }
    /** Returns the axis aligned bounding box (AABB) of the region and mesh attachments for the current pose.
     * @param offset An output value, the distance from the skeleton origin to the bottom left corner of the AABB.
     * @param size An output value, the width and height of the AABB.
     * @param temp Working memory to temporarily store attachments' computed world vertices.
     * @param clipper {@link SkeletonClipping} to use. If <code>null</code>, no clipping is applied. */
    getBounds(offset, size, temp = new Array(2), clipper = null) {
      if (!offset) throw new Error("offset cannot be null.");
      if (!size) throw new Error("size cannot be null.");
      let drawOrder = this.drawOrder;
      let minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
      for (let i = 0, n = drawOrder.length; i < n; i++) {
        let slot = drawOrder[i];
        if (!slot.bone.active) continue;
        let verticesLength = 0;
        let vertices = null;
        let triangles = null;
        let attachment = slot.getAttachment();
        if (attachment instanceof RegionAttachment) {
          verticesLength = 8;
          vertices = Utils.setArraySize(temp, verticesLength, 0);
          attachment.computeWorldVertices(slot, vertices, 0, 2);
          triangles = _Skeleton.quadTriangles;
        } else if (attachment instanceof MeshAttachment) {
          let mesh = attachment;
          verticesLength = mesh.worldVerticesLength;
          vertices = Utils.setArraySize(temp, verticesLength, 0);
          mesh.computeWorldVertices(slot, 0, verticesLength, vertices, 0, 2);
          triangles = mesh.triangles;
        } else if (attachment instanceof ClippingAttachment && clipper != null) {
          clipper.clipStart(slot, attachment);
          continue;
        }
        if (vertices && triangles) {
          if (clipper != null && clipper.isClipping()) {
            clipper.clipTriangles(vertices, triangles, triangles.length);
            vertices = clipper.clippedVertices;
            verticesLength = clipper.clippedVertices.length;
          }
          for (let ii = 0, nn = vertices.length; ii < nn; ii += 2) {
            let x = vertices[ii], y = vertices[ii + 1];
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
        if (clipper != null) clipper.clipEndWithSlot(slot);
      }
      if (clipper != null) clipper.clipEnd();
      offset.set(minX, minY);
      size.set(maxX - minX, maxY - minY);
    }
    /** Increments the skeleton's {@link #time}. */
    update(delta) {
      this.time += delta;
    }
    physicsTranslate(x, y) {
      const physicsConstraints = this.physicsConstraints;
      for (let i = 0, n = physicsConstraints.length; i < n; i++)
        physicsConstraints[i].translate(x, y);
    }
    /** Calls {@link PhysicsConstraint#rotate(float, float, float)} for each physics constraint. */
    physicsRotate(x, y, degrees) {
      const physicsConstraints = this.physicsConstraints;
      for (let i = 0, n = physicsConstraints.length; i < n; i++)
        physicsConstraints[i].rotate(x, y, degrees);
    }
  };
  var Physics = /* @__PURE__ */ ((Physics2) => {
    Physics2[Physics2["none"] = 0] = "none";
    Physics2[Physics2["reset"] = 1] = "reset";
    Physics2[Physics2["update"] = 2] = "update";
    Physics2[Physics2["pose"] = 3] = "pose";
    return Physics2;
  })(Physics || {});

  // spine-core/src/PhysicsConstraintData.ts
  var PhysicsConstraintData = class extends ConstraintData {
    _bone = null;
    /** The bone constrained by this physics constraint. */
    set bone(boneData) {
      this._bone = boneData;
    }
    get bone() {
      if (!this._bone) throw new Error("BoneData not set.");
      else return this._bone;
    }
    x = 0;
    y = 0;
    rotate = 0;
    scaleX = 0;
    shearX = 0;
    limit = 0;
    step = 0;
    inertia = 0;
    strength = 0;
    damping = 0;
    massInverse = 0;
    wind = 0;
    gravity = 0;
    /** A percentage (0-1) that controls the mix between the constrained and unconstrained poses. */
    mix = 0;
    inertiaGlobal = false;
    strengthGlobal = false;
    dampingGlobal = false;
    massGlobal = false;
    windGlobal = false;
    gravityGlobal = false;
    mixGlobal = false;
    constructor(name) {
      super(name, 0, false);
    }
  };

  // spine-core/src/SkeletonData.ts
  var SkeletonData = class {
    /** The skeleton's name, which by default is the name of the skeleton data file, if possible. May be null. */
    name = null;
    /** The skeleton's bones, sorted parent first. The root bone is always the first bone. */
    bones = new Array();
    // Ordered parents first.
    /** The skeleton's slots in the setup pose draw order. */
    slots = new Array();
    // Setup pose draw order.
    skins = new Array();
    /** The skeleton's default skin. By default this skin contains all attachments that were not in a skin in Spine.
     *
     * See {@link Skeleton#getAttachmentByName()}.
     * May be null. */
    defaultSkin = null;
    /** The skeleton's events. */
    events = new Array();
    /** The skeleton's animations. */
    animations = new Array();
    /** The skeleton's IK constraints. */
    ikConstraints = new Array();
    /** The skeleton's transform constraints. */
    transformConstraints = new Array();
    /** The skeleton's path constraints. */
    pathConstraints = new Array();
    /** The skeleton's physics constraints. */
    physicsConstraints = new Array();
    /** The X coordinate of the skeleton's axis aligned bounding box in the setup pose. */
    x = 0;
    /** The Y coordinate of the skeleton's axis aligned bounding box in the setup pose. */
    y = 0;
    /** The width of the skeleton's axis aligned bounding box in the setup pose. */
    width = 0;
    /** The height of the skeleton's axis aligned bounding box in the setup pose. */
    height = 0;
    /** Baseline scale factor for applying distance-dependent effects on non-scalable properties, such as angle or scale. Default
     * is 100. */
    referenceScale = 100;
    /** The Spine version used to export the skeleton data, or null. */
    version = null;
    /** The skeleton data hash. This value will change if any of the skeleton data has changed. May be null. */
    hash = null;
    // Nonessential
    /** The dopesheet FPS in Spine. Available only when nonessential data was exported. */
    fps = 0;
    /** The path to the images directory as defined in Spine. Available only when nonessential data was exported. May be null. */
    imagesPath = null;
    /** The path to the audio directory as defined in Spine. Available only when nonessential data was exported. May be null. */
    audioPath = null;
    /** Finds a bone by comparing each bone's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findBone(boneName) {
      if (!boneName) throw new Error("boneName cannot be null.");
      let bones = this.bones;
      for (let i = 0, n = bones.length; i < n; i++) {
        let bone = bones[i];
        if (bone.name == boneName) return bone;
      }
      return null;
    }
    /** Finds a slot by comparing each slot's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findSlot(slotName) {
      if (!slotName) throw new Error("slotName cannot be null.");
      let slots = this.slots;
      for (let i = 0, n = slots.length; i < n; i++) {
        let slot = slots[i];
        if (slot.name == slotName) return slot;
      }
      return null;
    }
    /** Finds a skin by comparing each skin's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findSkin(skinName) {
      if (!skinName) throw new Error("skinName cannot be null.");
      let skins = this.skins;
      for (let i = 0, n = skins.length; i < n; i++) {
        let skin = skins[i];
        if (skin.name == skinName) return skin;
      }
      return null;
    }
    /** Finds an event by comparing each events's name. It is more efficient to cache the results of this method than to call it
     * multiple times.
     * @returns May be null. */
    findEvent(eventDataName) {
      if (!eventDataName) throw new Error("eventDataName cannot be null.");
      let events = this.events;
      for (let i = 0, n = events.length; i < n; i++) {
        let event = events[i];
        if (event.name == eventDataName) return event;
      }
      return null;
    }
    /** Finds an animation by comparing each animation's name. It is more efficient to cache the results of this method than to
     * call it multiple times.
     * @returns May be null. */
    findAnimation(animationName) {
      if (!animationName) throw new Error("animationName cannot be null.");
      let animations = this.animations;
      for (let i = 0, n = animations.length; i < n; i++) {
        let animation = animations[i];
        if (animation.name == animationName) return animation;
      }
      return null;
    }
    /** Finds an IK constraint by comparing each IK constraint's name. It is more efficient to cache the results of this method
     * than to call it multiple times.
     * @return May be null. */
    findIkConstraint(constraintName) {
      if (!constraintName) throw new Error("constraintName cannot be null.");
      const ikConstraints = this.ikConstraints;
      for (let i = 0, n = ikConstraints.length; i < n; i++) {
        const constraint = ikConstraints[i];
        if (constraint.name == constraintName) return constraint;
      }
      return null;
    }
    /** Finds a transform constraint by comparing each transform constraint's name. It is more efficient to cache the results of
     * this method than to call it multiple times.
     * @return May be null. */
    findTransformConstraint(constraintName) {
      if (!constraintName) throw new Error("constraintName cannot be null.");
      const transformConstraints = this.transformConstraints;
      for (let i = 0, n = transformConstraints.length; i < n; i++) {
        const constraint = transformConstraints[i];
        if (constraint.name == constraintName) return constraint;
      }
      return null;
    }
    /** Finds a path constraint by comparing each path constraint's name. It is more efficient to cache the results of this method
     * than to call it multiple times.
     * @return May be null. */
    findPathConstraint(constraintName) {
      if (!constraintName) throw new Error("constraintName cannot be null.");
      const pathConstraints = this.pathConstraints;
      for (let i = 0, n = pathConstraints.length; i < n; i++) {
        const constraint = pathConstraints[i];
        if (constraint.name == constraintName) return constraint;
      }
      return null;
    }
    /** Finds a physics constraint by comparing each physics constraint's name. It is more efficient to cache the results of this method
     * than to call it multiple times.
     * @return May be null. */
    findPhysicsConstraint(constraintName) {
      if (!constraintName) throw new Error("constraintName cannot be null.");
      const physicsConstraints = this.physicsConstraints;
      for (let i = 0, n = physicsConstraints.length; i < n; i++) {
        const constraint = physicsConstraints[i];
        if (constraint.name == constraintName) return constraint;
      }
      return null;
    }
  };

  // spine-core/src/Skin.ts
  var SkinEntry = class {
    constructor(slotIndex = 0, name, attachment) {
      this.slotIndex = slotIndex;
      this.name = name;
      this.attachment = attachment;
    }
  };
  var Skin = class {
    /** The skin's name, which is unique across all skins in the skeleton. */
    name;
    attachments = new Array();
    bones = Array();
    constraints = new Array();
    /** The color of the skin as it was in Spine, or a default color if nonessential data was not exported. */
    color = new Color(0.99607843, 0.61960787, 0.30980393, 1);
    // fe9e4fff
    constructor(name) {
      if (!name) throw new Error("name cannot be null.");
      this.name = name;
    }
    /** Adds an attachment to the skin for the specified slot index and name. */
    setAttachment(slotIndex, name, attachment) {
      if (!attachment) throw new Error("attachment cannot be null.");
      let attachments = this.attachments;
      if (slotIndex >= attachments.length) attachments.length = slotIndex + 1;
      if (!attachments[slotIndex]) attachments[slotIndex] = {};
      attachments[slotIndex][name] = attachment;
    }
    /** Adds all attachments, bones, and constraints from the specified skin to this skin. */
    addSkin(skin) {
      for (let i = 0; i < skin.bones.length; i++) {
        let bone = skin.bones[i];
        let contained = false;
        for (let ii = 0; ii < this.bones.length; ii++) {
          if (this.bones[ii] == bone) {
            contained = true;
            break;
          }
        }
        if (!contained) this.bones.push(bone);
      }
      for (let i = 0; i < skin.constraints.length; i++) {
        let constraint = skin.constraints[i];
        let contained = false;
        for (let ii = 0; ii < this.constraints.length; ii++) {
          if (this.constraints[ii] == constraint) {
            contained = true;
            break;
          }
        }
        if (!contained) this.constraints.push(constraint);
      }
      let attachments = skin.getAttachments();
      for (let i = 0; i < attachments.length; i++) {
        var attachment = attachments[i];
        this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
      }
    }
    /** Adds all bones and constraints and copies of all attachments from the specified skin to this skin. Mesh attachments are not
     * copied, instead a new linked mesh is created. The attachment copies can be modified without affecting the originals. */
    copySkin(skin) {
      for (let i = 0; i < skin.bones.length; i++) {
        let bone = skin.bones[i];
        let contained = false;
        for (let ii = 0; ii < this.bones.length; ii++) {
          if (this.bones[ii] == bone) {
            contained = true;
            break;
          }
        }
        if (!contained) this.bones.push(bone);
      }
      for (let i = 0; i < skin.constraints.length; i++) {
        let constraint = skin.constraints[i];
        let contained = false;
        for (let ii = 0; ii < this.constraints.length; ii++) {
          if (this.constraints[ii] == constraint) {
            contained = true;
            break;
          }
        }
        if (!contained) this.constraints.push(constraint);
      }
      let attachments = skin.getAttachments();
      for (let i = 0; i < attachments.length; i++) {
        var attachment = attachments[i];
        if (!attachment.attachment) continue;
        if (attachment.attachment instanceof MeshAttachment) {
          attachment.attachment = attachment.attachment.newLinkedMesh();
          this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
        } else {
          attachment.attachment = attachment.attachment.copy();
          this.setAttachment(attachment.slotIndex, attachment.name, attachment.attachment);
        }
      }
    }
    /** Returns the attachment for the specified slot index and name, or null. */
    getAttachment(slotIndex, name) {
      let dictionary = this.attachments[slotIndex];
      return dictionary ? dictionary[name] : null;
    }
    /** Removes the attachment in the skin for the specified slot index and name, if any. */
    removeAttachment(slotIndex, name) {
      let dictionary = this.attachments[slotIndex];
      if (dictionary) delete dictionary[name];
    }
    /** Returns all attachments in this skin. */
    getAttachments() {
      let entries = new Array();
      for (var i = 0; i < this.attachments.length; i++) {
        let slotAttachments = this.attachments[i];
        if (slotAttachments) {
          for (let name in slotAttachments) {
            let attachment = slotAttachments[name];
            if (attachment) entries.push(new SkinEntry(i, name, attachment));
          }
        }
      }
      return entries;
    }
    /** Returns all attachments in this skin for the specified slot index. */
    getAttachmentsForSlot(slotIndex, attachments) {
      let slotAttachments = this.attachments[slotIndex];
      if (slotAttachments) {
        for (let name in slotAttachments) {
          let attachment = slotAttachments[name];
          if (attachment) attachments.push(new SkinEntry(slotIndex, name, attachment));
        }
      }
    }
    /** Clears all attachments, bones, and constraints. */
    clear() {
      this.attachments.length = 0;
      this.bones.length = 0;
      this.constraints.length = 0;
    }
    /** Attach each attachment in this skin if the corresponding attachment in the old skin is currently attached. */
    attachAll(skeleton, oldSkin) {
      let slotIndex = 0;
      for (let i = 0; i < skeleton.slots.length; i++) {
        let slot = skeleton.slots[i];
        let slotAttachment = slot.getAttachment();
        if (slotAttachment && slotIndex < oldSkin.attachments.length) {
          let dictionary = oldSkin.attachments[slotIndex];
          for (let key in dictionary) {
            let skinAttachment = dictionary[key];
            if (slotAttachment == skinAttachment) {
              let attachment = this.getAttachment(slotIndex, key);
              if (attachment) slot.setAttachment(attachment);
              break;
            }
          }
        }
        slotIndex++;
      }
    }
  };

  // spine-core/src/SlotData.ts
  var SlotData = class {
    /** The index of the slot in {@link Skeleton#getSlots()}. */
    index = 0;
    /** The name of the slot, which is unique across all slots in the skeleton. */
    name;
    /** The bone this slot belongs to. */
    boneData;
    /** The color used to tint the slot's attachment. If {@link #getDarkColor()} is set, this is used as the light color for two
     * color tinting. */
    color = new Color(1, 1, 1, 1);
    /** The dark color used to tint the slot's attachment for two color tinting, or null if two color tinting is not used. The dark
     * color's alpha is not used. */
    darkColor = null;
    /** The name of the attachment that is visible for this slot in the setup pose, or null if no attachment is visible. */
    attachmentName = null;
    /** The blend mode for drawing the slot's attachment. */
    blendMode = 0 /* Normal */;
    /** False if the slot was hidden in Spine and nonessential data was exported. Does not affect runtime rendering. */
    visible = true;
    constructor(index, name, boneData) {
      if (index < 0) throw new Error("index must be >= 0.");
      if (!name) throw new Error("name cannot be null.");
      if (!boneData) throw new Error("boneData cannot be null.");
      this.index = index;
      this.name = name;
      this.boneData = boneData;
    }
  };
  var BlendMode = /* @__PURE__ */ ((BlendMode4) => {
    BlendMode4[BlendMode4["Normal"] = 0] = "Normal";
    BlendMode4[BlendMode4["Additive"] = 1] = "Additive";
    BlendMode4[BlendMode4["Multiply"] = 2] = "Multiply";
    BlendMode4[BlendMode4["Screen"] = 3] = "Screen";
    return BlendMode4;
  })(BlendMode || {});

  // spine-core/src/TransformConstraintData.ts
  var TransformConstraintData = class extends ConstraintData {
    /** The bones that will be modified by this transform constraint. */
    bones = new Array();
    /** The target bone whose world transform will be copied to the constrained bones. */
    _target = null;
    set target(boneData) {
      this._target = boneData;
    }
    get target() {
      if (!this._target) throw new Error("BoneData not set.");
      else return this._target;
    }
    mixRotate = 0;
    mixX = 0;
    mixY = 0;
    mixScaleX = 0;
    mixScaleY = 0;
    mixShearY = 0;
    /** An offset added to the constrained bone rotation. */
    offsetRotation = 0;
    /** An offset added to the constrained bone X translation. */
    offsetX = 0;
    /** An offset added to the constrained bone Y translation. */
    offsetY = 0;
    /** An offset added to the constrained bone scaleX. */
    offsetScaleX = 0;
    /** An offset added to the constrained bone scaleY. */
    offsetScaleY = 0;
    /** An offset added to the constrained bone shearY. */
    offsetShearY = 0;
    relative = false;
    local = false;
    constructor(name) {
      super(name, 0, false);
    }
  };

  // spine-core/src/SkeletonBinary.ts
  var SkeletonBinary = class {
    /** Scales bone positions, image sizes, and translations as they are loaded. This allows different size images to be used at
     * runtime than were used in Spine.
     *
     * See [Scaling](http://esotericsoftware.com/spine-loading-skeleton-data#Scaling) in the Spine Runtimes Guide. */
    scale = 1;
    attachmentLoader;
    linkedMeshes = new Array();
    constructor(attachmentLoader) {
      this.attachmentLoader = attachmentLoader;
    }
    readSkeletonData(binary) {
      let scale = this.scale;
      let skeletonData = new SkeletonData();
      skeletonData.name = "";
      let input = new BinaryInput(binary);
      let lowHash = input.readInt32();
      let highHash = input.readInt32();
      skeletonData.hash = highHash == 0 && lowHash == 0 ? null : highHash.toString(16) + lowHash.toString(16);
      skeletonData.version = input.readString();
      skeletonData.x = input.readFloat();
      skeletonData.y = input.readFloat();
      skeletonData.width = input.readFloat();
      skeletonData.height = input.readFloat();
      skeletonData.referenceScale = input.readFloat() * scale;
      let nonessential = input.readBoolean();
      if (nonessential) {
        skeletonData.fps = input.readFloat();
        skeletonData.imagesPath = input.readString();
        skeletonData.audioPath = input.readString();
      }
      let n = 0;
      n = input.readInt(true);
      for (let i = 0; i < n; i++) {
        let str = input.readString();
        if (!str) throw new Error("String in string table must not be null.");
        input.strings.push(str);
      }
      n = input.readInt(true);
      for (let i = 0; i < n; i++) {
        let name = input.readString();
        if (!name) throw new Error("Bone name must not be null.");
        let parent = i == 0 ? null : skeletonData.bones[input.readInt(true)];
        let data = new BoneData(i, name, parent);
        data.rotation = input.readFloat();
        data.x = input.readFloat() * scale;
        data.y = input.readFloat() * scale;
        data.scaleX = input.readFloat();
        data.scaleY = input.readFloat();
        data.shearX = input.readFloat();
        data.shearY = input.readFloat();
        data.length = input.readFloat() * scale;
        data.inherit = input.readByte();
        data.skinRequired = input.readBoolean();
        if (nonessential) {
          Color.rgba8888ToColor(data.color, input.readInt32());
          data.icon = input.readString() ?? void 0;
          data.visible = input.readBoolean();
        }
        skeletonData.bones.push(data);
      }
      n = input.readInt(true);
      for (let i = 0; i < n; i++) {
        let slotName = input.readString();
        if (!slotName) throw new Error("Slot name must not be null.");
        let boneData = skeletonData.bones[input.readInt(true)];
        let data = new SlotData(i, slotName, boneData);
        Color.rgba8888ToColor(data.color, input.readInt32());
        let darkColor = input.readInt32();
        if (darkColor != -1) Color.rgb888ToColor(data.darkColor = new Color(), darkColor);
        data.attachmentName = input.readStringRef();
        data.blendMode = input.readInt(true);
        if (nonessential) data.visible = input.readBoolean();
        skeletonData.slots.push(data);
      }
      n = input.readInt(true);
      for (let i = 0, nn; i < n; i++) {
        let name = input.readString();
        if (!name) throw new Error("IK constraint data name must not be null.");
        let data = new IkConstraintData(name);
        data.order = input.readInt(true);
        nn = input.readInt(true);
        for (let ii = 0; ii < nn; ii++)
          data.bones.push(skeletonData.bones[input.readInt(true)]);
        data.target = skeletonData.bones[input.readInt(true)];
        let flags = input.readByte();
        data.skinRequired = (flags & 1) != 0;
        data.bendDirection = (flags & 2) != 0 ? 1 : -1;
        data.compress = (flags & 4) != 0;
        data.stretch = (flags & 8) != 0;
        data.uniform = (flags & 16) != 0;
        if ((flags & 32) != 0) data.mix = (flags & 64) != 0 ? input.readFloat() : 1;
        if ((flags & 128) != 0) data.softness = input.readFloat() * scale;
        skeletonData.ikConstraints.push(data);
      }
      n = input.readInt(true);
      for (let i = 0, nn; i < n; i++) {
        let name = input.readString();
        if (!name) throw new Error("Transform constraint data name must not be null.");
        let data = new TransformConstraintData(name);
        data.order = input.readInt(true);
        nn = input.readInt(true);
        for (let ii = 0; ii < nn; ii++)
          data.bones.push(skeletonData.bones[input.readInt(true)]);
        data.target = skeletonData.bones[input.readInt(true)];
        let flags = input.readByte();
        data.skinRequired = (flags & 1) != 0;
        data.local = (flags & 2) != 0;
        data.relative = (flags & 4) != 0;
        if ((flags & 8) != 0) data.offsetRotation = input.readFloat();
        if ((flags & 16) != 0) data.offsetX = input.readFloat() * scale;
        if ((flags & 32) != 0) data.offsetY = input.readFloat() * scale;
        if ((flags & 64) != 0) data.offsetScaleX = input.readFloat();
        if ((flags & 128) != 0) data.offsetScaleY = input.readFloat();
        flags = input.readByte();
        if ((flags & 1) != 0) data.offsetShearY = input.readFloat();
        if ((flags & 2) != 0) data.mixRotate = input.readFloat();
        if ((flags & 4) != 0) data.mixX = input.readFloat();
        if ((flags & 8) != 0) data.mixY = input.readFloat();
        if ((flags & 16) != 0) data.mixScaleX = input.readFloat();
        if ((flags & 32) != 0) data.mixScaleY = input.readFloat();
        if ((flags & 64) != 0) data.mixShearY = input.readFloat();
        skeletonData.transformConstraints.push(data);
      }
      n = input.readInt(true);
      for (let i = 0, nn; i < n; i++) {
        let name = input.readString();
        if (!name) throw new Error("Path constraint data name must not be null.");
        let data = new PathConstraintData(name);
        data.order = input.readInt(true);
        data.skinRequired = input.readBoolean();
        nn = input.readInt(true);
        for (let ii = 0; ii < nn; ii++)
          data.bones.push(skeletonData.bones[input.readInt(true)]);
        data.target = skeletonData.slots[input.readInt(true)];
        const flags = input.readByte();
        data.positionMode = flags & 1;
        data.spacingMode = flags >> 1 & 3;
        data.rotateMode = flags >> 3 & 3;
        if ((flags & 128) != 0) data.offsetRotation = input.readFloat();
        data.position = input.readFloat();
        if (data.positionMode == 0 /* Fixed */) data.position *= scale;
        data.spacing = input.readFloat();
        if (data.spacingMode == 0 /* Length */ || data.spacingMode == 1 /* Fixed */) data.spacing *= scale;
        data.mixRotate = input.readFloat();
        data.mixX = input.readFloat();
        data.mixY = input.readFloat();
        skeletonData.pathConstraints.push(data);
      }
      n = input.readInt(true);
      for (let i = 0, nn; i < n; i++) {
        const name = input.readString();
        if (!name) throw new Error("Physics constraint data name must not be null.");
        const data = new PhysicsConstraintData(name);
        data.order = input.readInt(true);
        data.bone = skeletonData.bones[input.readInt(true)];
        let flags = input.readByte();
        data.skinRequired = (flags & 1) != 0;
        if ((flags & 2) != 0) data.x = input.readFloat();
        if ((flags & 4) != 0) data.y = input.readFloat();
        if ((flags & 8) != 0) data.rotate = input.readFloat();
        if ((flags & 16) != 0) data.scaleX = input.readFloat();
        if ((flags & 32) != 0) data.shearX = input.readFloat();
        data.limit = ((flags & 64) != 0 ? input.readFloat() : 5e3) * scale;
        data.step = 1 / input.readUnsignedByte();
        data.inertia = input.readFloat();
        data.strength = input.readFloat();
        data.damping = input.readFloat();
        data.massInverse = (flags & 128) != 0 ? input.readFloat() : 1;
        data.wind = input.readFloat();
        data.gravity = input.readFloat();
        flags = input.readByte();
        if ((flags & 1) != 0) data.inertiaGlobal = true;
        if ((flags & 2) != 0) data.strengthGlobal = true;
        if ((flags & 4) != 0) data.dampingGlobal = true;
        if ((flags & 8) != 0) data.massGlobal = true;
        if ((flags & 16) != 0) data.windGlobal = true;
        if ((flags & 32) != 0) data.gravityGlobal = true;
        if ((flags & 64) != 0) data.mixGlobal = true;
        data.mix = (flags & 128) != 0 ? input.readFloat() : 1;
        skeletonData.physicsConstraints.push(data);
      }
      let defaultSkin = this.readSkin(input, skeletonData, true, nonessential);
      if (defaultSkin) {
        skeletonData.defaultSkin = defaultSkin;
        skeletonData.skins.push(defaultSkin);
      }
      {
        let i = skeletonData.skins.length;
        Utils.setArraySize(skeletonData.skins, n = i + input.readInt(true));
        for (; i < n; i++) {
          let skin = this.readSkin(input, skeletonData, false, nonessential);
          if (!skin) throw new Error("readSkin() should not have returned null.");
          skeletonData.skins[i] = skin;
        }
      }
      n = this.linkedMeshes.length;
      for (let i = 0; i < n; i++) {
        let linkedMesh = this.linkedMeshes[i];
        const skin = skeletonData.skins[linkedMesh.skinIndex];
        if (!linkedMesh.parent) throw new Error("Linked mesh parent must not be null");
        let parent = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
        if (!parent) throw new Error(`Parent mesh not found: ${linkedMesh.parent}`);
        linkedMesh.mesh.timelineAttachment = linkedMesh.inheritTimeline ? parent : linkedMesh.mesh;
        linkedMesh.mesh.setParentMesh(parent);
        if (linkedMesh.mesh.region != null) linkedMesh.mesh.updateRegion();
      }
      this.linkedMeshes.length = 0;
      n = input.readInt(true);
      for (let i = 0; i < n; i++) {
        let eventName = input.readString();
        if (!eventName) throw new Error("Event data name must not be null");
        let data = new EventData(eventName);
        data.intValue = input.readInt(false);
        data.floatValue = input.readFloat();
        data.stringValue = input.readString();
        data.audioPath = input.readString();
        if (data.audioPath) {
          data.volume = input.readFloat();
          data.balance = input.readFloat();
        }
        skeletonData.events.push(data);
      }
      n = input.readInt(true);
      for (let i = 0; i < n; i++) {
        let animationName = input.readString();
        if (!animationName) throw new Error("Animatio name must not be null.");
        skeletonData.animations.push(this.readAnimation(input, animationName, skeletonData));
      }
      return skeletonData;
    }
    readSkin(input, skeletonData, defaultSkin, nonessential) {
      let skin = null;
      let slotCount = 0;
      if (defaultSkin) {
        slotCount = input.readInt(true);
        if (slotCount == 0) return null;
        skin = new Skin("default");
      } else {
        let skinName = input.readString();
        if (!skinName) throw new Error("Skin name must not be null.");
        skin = new Skin(skinName);
        if (nonessential) Color.rgba8888ToColor(skin.color, input.readInt32());
        skin.bones.length = input.readInt(true);
        for (let i = 0, n = skin.bones.length; i < n; i++)
          skin.bones[i] = skeletonData.bones[input.readInt(true)];
        for (let i = 0, n = input.readInt(true); i < n; i++)
          skin.constraints.push(skeletonData.ikConstraints[input.readInt(true)]);
        for (let i = 0, n = input.readInt(true); i < n; i++)
          skin.constraints.push(skeletonData.transformConstraints[input.readInt(true)]);
        for (let i = 0, n = input.readInt(true); i < n; i++)
          skin.constraints.push(skeletonData.pathConstraints[input.readInt(true)]);
        for (let i = 0, n = input.readInt(true); i < n; i++)
          skin.constraints.push(skeletonData.physicsConstraints[input.readInt(true)]);
        slotCount = input.readInt(true);
      }
      for (let i = 0; i < slotCount; i++) {
        let slotIndex = input.readInt(true);
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          let name = input.readStringRef();
          if (!name)
            throw new Error("Attachment name must not be null");
          let attachment = this.readAttachment(input, skeletonData, skin, slotIndex, name, nonessential);
          if (attachment) skin.setAttachment(slotIndex, name, attachment);
        }
      }
      return skin;
    }
    readAttachment(input, skeletonData, skin, slotIndex, attachmentName, nonessential) {
      let scale = this.scale;
      let flags = input.readByte();
      const name = (flags & 8) != 0 ? input.readStringRef() : attachmentName;
      if (!name) throw new Error("Attachment name must not be null");
      switch (flags & 7) {
        // BUG?
        case 0 /* Region */: {
          let path = (flags & 16) != 0 ? input.readStringRef() : null;
          const color = (flags & 32) != 0 ? input.readInt32() : 4294967295;
          const sequence = (flags & 64) != 0 ? this.readSequence(input) : null;
          let rotation = (flags & 128) != 0 ? input.readFloat() : 0;
          let x = input.readFloat();
          let y = input.readFloat();
          let scaleX = input.readFloat();
          let scaleY = input.readFloat();
          let width = input.readFloat();
          let height = input.readFloat();
          if (!path) path = name;
          let region = this.attachmentLoader.newRegionAttachment(skin, name, path, sequence);
          if (!region) return null;
          region.path = path;
          region.x = x * scale;
          region.y = y * scale;
          region.scaleX = scaleX;
          region.scaleY = scaleY;
          region.rotation = rotation;
          region.width = width * scale;
          region.height = height * scale;
          Color.rgba8888ToColor(region.color, color);
          region.sequence = sequence;
          if (sequence == null) region.updateRegion();
          return region;
        }
        case 1 /* BoundingBox */: {
          let vertices = this.readVertices(input, (flags & 16) != 0);
          let color = nonessential ? input.readInt32() : 0;
          let box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
          if (!box) return null;
          box.worldVerticesLength = vertices.length;
          box.vertices = vertices.vertices;
          box.bones = vertices.bones;
          if (nonessential) Color.rgba8888ToColor(box.color, color);
          return box;
        }
        case 2 /* Mesh */: {
          let path = (flags & 16) != 0 ? input.readStringRef() : name;
          const color = (flags & 32) != 0 ? input.readInt32() : 4294967295;
          const sequence = (flags & 64) != 0 ? this.readSequence(input) : null;
          const hullLength = input.readInt(true);
          const vertices = this.readVertices(input, (flags & 128) != 0);
          const uvs = this.readFloatArray(input, vertices.length, 1);
          const triangles = this.readShortArray(input, (vertices.length - hullLength - 2) * 3);
          let edges = [];
          let width = 0, height = 0;
          if (nonessential) {
            edges = this.readShortArray(input, input.readInt(true));
            width = input.readFloat();
            height = input.readFloat();
          }
          if (!path) path = name;
          let mesh = this.attachmentLoader.newMeshAttachment(skin, name, path, sequence);
          if (!mesh) return null;
          mesh.path = path;
          Color.rgba8888ToColor(mesh.color, color);
          mesh.bones = vertices.bones;
          mesh.vertices = vertices.vertices;
          mesh.worldVerticesLength = vertices.length;
          mesh.triangles = triangles;
          mesh.regionUVs = uvs;
          if (sequence == null) mesh.updateRegion();
          mesh.hullLength = hullLength << 1;
          mesh.sequence = sequence;
          if (nonessential) {
            mesh.edges = edges;
            mesh.width = width * scale;
            mesh.height = height * scale;
          }
          return mesh;
        }
        case 3 /* LinkedMesh */: {
          const path = (flags & 16) != 0 ? input.readStringRef() : name;
          if (path == null) throw new Error("Path of linked mesh must not be null");
          const color = (flags & 32) != 0 ? input.readInt32() : 4294967295;
          const sequence = (flags & 64) != 0 ? this.readSequence(input) : null;
          const inheritTimelines = (flags & 128) != 0;
          const skinIndex = input.readInt(true);
          const parent = input.readStringRef();
          let width = 0, height = 0;
          if (nonessential) {
            width = input.readFloat();
            height = input.readFloat();
          }
          let mesh = this.attachmentLoader.newMeshAttachment(skin, name, path, sequence);
          if (!mesh) return null;
          mesh.path = path;
          Color.rgba8888ToColor(mesh.color, color);
          mesh.sequence = sequence;
          if (nonessential) {
            mesh.width = width * scale;
            mesh.height = height * scale;
          }
          this.linkedMeshes.push(new LinkedMesh(mesh, skinIndex, slotIndex, parent, inheritTimelines));
          return mesh;
        }
        case 4 /* Path */: {
          const closed2 = (flags & 16) != 0;
          const constantSpeed = (flags & 32) != 0;
          const vertices = this.readVertices(input, (flags & 64) != 0);
          const lengths = Utils.newArray(vertices.length / 6, 0);
          for (let i = 0, n = lengths.length; i < n; i++)
            lengths[i] = input.readFloat() * scale;
          const color = nonessential ? input.readInt32() : 0;
          const path = this.attachmentLoader.newPathAttachment(skin, name);
          if (!path) return null;
          path.closed = closed2;
          path.constantSpeed = constantSpeed;
          path.worldVerticesLength = vertices.length;
          path.vertices = vertices.vertices;
          path.bones = vertices.bones;
          path.lengths = lengths;
          if (nonessential) Color.rgba8888ToColor(path.color, color);
          return path;
        }
        case 5 /* Point */: {
          const rotation = input.readFloat();
          const x = input.readFloat();
          const y = input.readFloat();
          const color = nonessential ? input.readInt32() : 0;
          const point = this.attachmentLoader.newPointAttachment(skin, name);
          if (!point) return null;
          point.x = x * scale;
          point.y = y * scale;
          point.rotation = rotation;
          if (nonessential) Color.rgba8888ToColor(point.color, color);
          return point;
        }
        case 6 /* Clipping */: {
          const endSlotIndex = input.readInt(true);
          const vertices = this.readVertices(input, (flags & 16) != 0);
          let color = nonessential ? input.readInt32() : 0;
          let clip = this.attachmentLoader.newClippingAttachment(skin, name);
          if (!clip) return null;
          clip.endSlot = skeletonData.slots[endSlotIndex];
          clip.worldVerticesLength = vertices.length;
          clip.vertices = vertices.vertices;
          clip.bones = vertices.bones;
          if (nonessential) Color.rgba8888ToColor(clip.color, color);
          return clip;
        }
      }
      return null;
    }
    readSequence(input) {
      let sequence = new Sequence(input.readInt(true));
      sequence.start = input.readInt(true);
      sequence.digits = input.readInt(true);
      sequence.setupIndex = input.readInt(true);
      return sequence;
    }
    readVertices(input, weighted) {
      const scale = this.scale;
      const vertexCount = input.readInt(true);
      const vertices = new Vertices();
      vertices.length = vertexCount << 1;
      if (!weighted) {
        vertices.vertices = this.readFloatArray(input, vertices.length, scale);
        return vertices;
      }
      let weights = new Array();
      let bonesArray = new Array();
      for (let i = 0; i < vertexCount; i++) {
        let boneCount = input.readInt(true);
        bonesArray.push(boneCount);
        for (let ii = 0; ii < boneCount; ii++) {
          bonesArray.push(input.readInt(true));
          weights.push(input.readFloat() * scale);
          weights.push(input.readFloat() * scale);
          weights.push(input.readFloat());
        }
      }
      vertices.vertices = Utils.toFloatArray(weights);
      vertices.bones = bonesArray;
      return vertices;
    }
    readFloatArray(input, n, scale) {
      let array = new Array(n);
      if (scale == 1) {
        for (let i = 0; i < n; i++)
          array[i] = input.readFloat();
      } else {
        for (let i = 0; i < n; i++)
          array[i] = input.readFloat() * scale;
      }
      return array;
    }
    readShortArray(input, n) {
      let array = new Array(n);
      for (let i = 0; i < n; i++)
        array[i] = input.readInt(true);
      return array;
    }
    readAnimation(input, name, skeletonData) {
      input.readInt(true);
      let timelines = new Array();
      let scale = this.scale;
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        let slotIndex = input.readInt(true);
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          let timelineType = input.readByte();
          let frameCount = input.readInt(true);
          let frameLast = frameCount - 1;
          switch (timelineType) {
            case SLOT_ATTACHMENT: {
              let timeline = new AttachmentTimeline(frameCount, slotIndex);
              for (let frame = 0; frame < frameCount; frame++)
                timeline.setFrame(frame, input.readFloat(), input.readStringRef());
              timelines.push(timeline);
              break;
            }
            case SLOT_RGBA: {
              let bezierCount = input.readInt(true);
              let timeline = new RGBATimeline(frameCount, bezierCount, slotIndex);
              let time = input.readFloat();
              let r = input.readUnsignedByte() / 255;
              let g = input.readUnsignedByte() / 255;
              let b = input.readUnsignedByte() / 255;
              let a = input.readUnsignedByte() / 255;
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, r, g, b, a);
                if (frame == frameLast) break;
                let time2 = input.readFloat();
                let r2 = input.readUnsignedByte() / 255;
                let g2 = input.readUnsignedByte() / 255;
                let b2 = input.readUnsignedByte() / 255;
                let a2 = input.readUnsignedByte() / 255;
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, r2, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, g2, 1);
                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, b2, 1);
                    setBezier(input, timeline, bezier++, frame, 3, time, time2, a, a2, 1);
                }
                time = time2;
                r = r2;
                g = g2;
                b = b2;
                a = a2;
              }
              timelines.push(timeline);
              break;
            }
            case SLOT_RGB: {
              let bezierCount = input.readInt(true);
              let timeline = new RGBTimeline(frameCount, bezierCount, slotIndex);
              let time = input.readFloat();
              let r = input.readUnsignedByte() / 255;
              let g = input.readUnsignedByte() / 255;
              let b = input.readUnsignedByte() / 255;
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, r, g, b);
                if (frame == frameLast) break;
                let time2 = input.readFloat();
                let r2 = input.readUnsignedByte() / 255;
                let g2 = input.readUnsignedByte() / 255;
                let b2 = input.readUnsignedByte() / 255;
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, r2, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, g2, 1);
                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, b2, 1);
                }
                time = time2;
                r = r2;
                g = g2;
                b = b2;
              }
              timelines.push(timeline);
              break;
            }
            case SLOT_RGBA2: {
              let bezierCount = input.readInt(true);
              let timeline = new RGBA2Timeline(frameCount, bezierCount, slotIndex);
              let time = input.readFloat();
              let r = input.readUnsignedByte() / 255;
              let g = input.readUnsignedByte() / 255;
              let b = input.readUnsignedByte() / 255;
              let a = input.readUnsignedByte() / 255;
              let r2 = input.readUnsignedByte() / 255;
              let g2 = input.readUnsignedByte() / 255;
              let b2 = input.readUnsignedByte() / 255;
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, r, g, b, a, r2, g2, b2);
                if (frame == frameLast) break;
                let time2 = input.readFloat();
                let nr = input.readUnsignedByte() / 255;
                let ng = input.readUnsignedByte() / 255;
                let nb = input.readUnsignedByte() / 255;
                let na = input.readUnsignedByte() / 255;
                let nr2 = input.readUnsignedByte() / 255;
                let ng2 = input.readUnsignedByte() / 255;
                let nb2 = input.readUnsignedByte() / 255;
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, nr, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, ng, 1);
                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, nb, 1);
                    setBezier(input, timeline, bezier++, frame, 3, time, time2, a, na, 1);
                    setBezier(input, timeline, bezier++, frame, 4, time, time2, r2, nr2, 1);
                    setBezier(input, timeline, bezier++, frame, 5, time, time2, g2, ng2, 1);
                    setBezier(input, timeline, bezier++, frame, 6, time, time2, b2, nb2, 1);
                }
                time = time2;
                r = nr;
                g = ng;
                b = nb;
                a = na;
                r2 = nr2;
                g2 = ng2;
                b2 = nb2;
              }
              timelines.push(timeline);
              break;
            }
            case SLOT_RGB2: {
              let bezierCount = input.readInt(true);
              let timeline = new RGB2Timeline(frameCount, bezierCount, slotIndex);
              let time = input.readFloat();
              let r = input.readUnsignedByte() / 255;
              let g = input.readUnsignedByte() / 255;
              let b = input.readUnsignedByte() / 255;
              let r2 = input.readUnsignedByte() / 255;
              let g2 = input.readUnsignedByte() / 255;
              let b2 = input.readUnsignedByte() / 255;
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, r, g, b, r2, g2, b2);
                if (frame == frameLast) break;
                let time2 = input.readFloat();
                let nr = input.readUnsignedByte() / 255;
                let ng = input.readUnsignedByte() / 255;
                let nb = input.readUnsignedByte() / 255;
                let nr2 = input.readUnsignedByte() / 255;
                let ng2 = input.readUnsignedByte() / 255;
                let nb2 = input.readUnsignedByte() / 255;
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, r, nr, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, g, ng, 1);
                    setBezier(input, timeline, bezier++, frame, 2, time, time2, b, nb, 1);
                    setBezier(input, timeline, bezier++, frame, 3, time, time2, r2, nr2, 1);
                    setBezier(input, timeline, bezier++, frame, 4, time, time2, g2, ng2, 1);
                    setBezier(input, timeline, bezier++, frame, 5, time, time2, b2, nb2, 1);
                }
                time = time2;
                r = nr;
                g = ng;
                b = nb;
                r2 = nr2;
                g2 = ng2;
                b2 = nb2;
              }
              timelines.push(timeline);
              break;
            }
            case SLOT_ALPHA: {
              let timeline = new AlphaTimeline(frameCount, input.readInt(true), slotIndex);
              let time = input.readFloat(), a = input.readUnsignedByte() / 255;
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, a);
                if (frame == frameLast) break;
                let time2 = input.readFloat();
                let a2 = input.readUnsignedByte() / 255;
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, a, a2, 1);
                }
                time = time2;
                a = a2;
              }
              timelines.push(timeline);
            }
          }
        }
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        let boneIndex = input.readInt(true);
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          let type = input.readByte(), frameCount = input.readInt(true);
          if (type == BONE_INHERIT) {
            let timeline = new InheritTimeline(frameCount, boneIndex);
            for (let frame = 0; frame < frameCount; frame++) {
              timeline.setFrame(frame, input.readFloat(), input.readByte());
            }
            timelines.push(timeline);
            continue;
          }
          let bezierCount = input.readInt(true);
          switch (type) {
            case BONE_ROTATE:
              timelines.push(readTimeline1(input, new RotateTimeline(frameCount, bezierCount, boneIndex), 1));
              break;
            case BONE_TRANSLATE:
              timelines.push(readTimeline2(input, new TranslateTimeline(frameCount, bezierCount, boneIndex), scale));
              break;
            case BONE_TRANSLATEX:
              timelines.push(readTimeline1(input, new TranslateXTimeline(frameCount, bezierCount, boneIndex), scale));
              break;
            case BONE_TRANSLATEY:
              timelines.push(readTimeline1(input, new TranslateYTimeline(frameCount, bezierCount, boneIndex), scale));
              break;
            case BONE_SCALE:
              timelines.push(readTimeline2(input, new ScaleTimeline(frameCount, bezierCount, boneIndex), 1));
              break;
            case BONE_SCALEX:
              timelines.push(readTimeline1(input, new ScaleXTimeline(frameCount, bezierCount, boneIndex), 1));
              break;
            case BONE_SCALEY:
              timelines.push(readTimeline1(input, new ScaleYTimeline(frameCount, bezierCount, boneIndex), 1));
              break;
            case BONE_SHEAR:
              timelines.push(readTimeline2(input, new ShearTimeline(frameCount, bezierCount, boneIndex), 1));
              break;
            case BONE_SHEARX:
              timelines.push(readTimeline1(input, new ShearXTimeline(frameCount, bezierCount, boneIndex), 1));
              break;
            case BONE_SHEARY:
              timelines.push(readTimeline1(input, new ShearYTimeline(frameCount, bezierCount, boneIndex), 1));
          }
        }
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        let index = input.readInt(true), frameCount = input.readInt(true), frameLast = frameCount - 1;
        let timeline = new IkConstraintTimeline(frameCount, input.readInt(true), index);
        let flags = input.readByte();
        let time = input.readFloat(), mix = (flags & 1) != 0 ? (flags & 2) != 0 ? input.readFloat() : 1 : 0;
        let softness = (flags & 4) != 0 ? input.readFloat() * scale : 0;
        for (let frame = 0, bezier = 0; ; frame++) {
          timeline.setFrame(frame, time, mix, softness, (flags & 8) != 0 ? 1 : -1, (flags & 16) != 0, (flags & 32) != 0);
          if (frame == frameLast) break;
          flags = input.readByte();
          const time2 = input.readFloat(), mix2 = (flags & 1) != 0 ? (flags & 2) != 0 ? input.readFloat() : 1 : 0;
          const softness2 = (flags & 4) != 0 ? input.readFloat() * scale : 0;
          if ((flags & 64) != 0) {
            timeline.setStepped(frame);
          } else if ((flags & 128) != 0) {
            setBezier(input, timeline, bezier++, frame, 0, time, time2, mix, mix2, 1);
            setBezier(input, timeline, bezier++, frame, 1, time, time2, softness, softness2, scale);
          }
          time = time2;
          mix = mix2;
          softness = softness2;
        }
        timelines.push(timeline);
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        let index = input.readInt(true), frameCount = input.readInt(true), frameLast = frameCount - 1;
        let timeline = new TransformConstraintTimeline(frameCount, input.readInt(true), index);
        let time = input.readFloat(), mixRotate = input.readFloat(), mixX = input.readFloat(), mixY = input.readFloat(), mixScaleX = input.readFloat(), mixScaleY = input.readFloat(), mixShearY = input.readFloat();
        for (let frame = 0, bezier = 0; ; frame++) {
          timeline.setFrame(frame, time, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY);
          if (frame == frameLast) break;
          let time2 = input.readFloat(), mixRotate2 = input.readFloat(), mixX2 = input.readFloat(), mixY2 = input.readFloat(), mixScaleX2 = input.readFloat(), mixScaleY2 = input.readFloat(), mixShearY2 = input.readFloat();
          switch (input.readByte()) {
            case CURVE_STEPPED:
              timeline.setStepped(frame);
              break;
            case CURVE_BEZIER:
              setBezier(input, timeline, bezier++, frame, 0, time, time2, mixRotate, mixRotate2, 1);
              setBezier(input, timeline, bezier++, frame, 1, time, time2, mixX, mixX2, 1);
              setBezier(input, timeline, bezier++, frame, 2, time, time2, mixY, mixY2, 1);
              setBezier(input, timeline, bezier++, frame, 3, time, time2, mixScaleX, mixScaleX2, 1);
              setBezier(input, timeline, bezier++, frame, 4, time, time2, mixScaleY, mixScaleY2, 1);
              setBezier(input, timeline, bezier++, frame, 5, time, time2, mixShearY, mixShearY2, 1);
          }
          time = time2;
          mixRotate = mixRotate2;
          mixX = mixX2;
          mixY = mixY2;
          mixScaleX = mixScaleX2;
          mixScaleY = mixScaleY2;
          mixShearY = mixShearY2;
        }
        timelines.push(timeline);
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        let index = input.readInt(true);
        let data = skeletonData.pathConstraints[index];
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          const type = input.readByte(), frameCount = input.readInt(true), bezierCount = input.readInt(true);
          switch (type) {
            case PATH_POSITION:
              timelines.push(readTimeline1(
                input,
                new PathConstraintPositionTimeline(frameCount, bezierCount, index),
                data.positionMode == 0 /* Fixed */ ? scale : 1
              ));
              break;
            case PATH_SPACING:
              timelines.push(readTimeline1(
                input,
                new PathConstraintSpacingTimeline(frameCount, bezierCount, index),
                data.spacingMode == 0 /* Length */ || data.spacingMode == 1 /* Fixed */ ? scale : 1
              ));
              break;
            case PATH_MIX:
              let timeline = new PathConstraintMixTimeline(frameCount, bezierCount, index);
              let time = input.readFloat(), mixRotate = input.readFloat(), mixX = input.readFloat(), mixY = input.readFloat();
              for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1; ; frame++) {
                timeline.setFrame(frame, time, mixRotate, mixX, mixY);
                if (frame == frameLast) break;
                let time2 = input.readFloat(), mixRotate2 = input.readFloat(), mixX2 = input.readFloat(), mixY2 = input.readFloat();
                switch (input.readByte()) {
                  case CURVE_STEPPED:
                    timeline.setStepped(frame);
                    break;
                  case CURVE_BEZIER:
                    setBezier(input, timeline, bezier++, frame, 0, time, time2, mixRotate, mixRotate2, 1);
                    setBezier(input, timeline, bezier++, frame, 1, time, time2, mixX, mixX2, 1);
                    setBezier(input, timeline, bezier++, frame, 2, time, time2, mixY, mixY2, 1);
                }
                time = time2;
                mixRotate = mixRotate2;
                mixX = mixX2;
                mixY = mixY2;
              }
              timelines.push(timeline);
          }
        }
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        const index = input.readInt(true) - 1;
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          const type = input.readByte(), frameCount = input.readInt(true);
          if (type == PHYSICS_RESET) {
            const timeline = new PhysicsConstraintResetTimeline(frameCount, index);
            for (let frame = 0; frame < frameCount; frame++)
              timeline.setFrame(frame, input.readFloat());
            timelines.push(timeline);
            continue;
          }
          const bezierCount = input.readInt(true);
          switch (type) {
            case PHYSICS_INERTIA:
              timelines.push(readTimeline1(input, new PhysicsConstraintInertiaTimeline(frameCount, bezierCount, index), 1));
              break;
            case PHYSICS_STRENGTH:
              timelines.push(readTimeline1(input, new PhysicsConstraintStrengthTimeline(frameCount, bezierCount, index), 1));
              break;
            case PHYSICS_DAMPING:
              timelines.push(readTimeline1(input, new PhysicsConstraintDampingTimeline(frameCount, bezierCount, index), 1));
              break;
            case PHYSICS_MASS:
              timelines.push(readTimeline1(input, new PhysicsConstraintMassTimeline(frameCount, bezierCount, index), 1));
              break;
            case PHYSICS_WIND:
              timelines.push(readTimeline1(input, new PhysicsConstraintWindTimeline(frameCount, bezierCount, index), 1));
              break;
            case PHYSICS_GRAVITY:
              timelines.push(readTimeline1(input, new PhysicsConstraintGravityTimeline(frameCount, bezierCount, index), 1));
              break;
            case PHYSICS_MIX:
              timelines.push(readTimeline1(input, new PhysicsConstraintMixTimeline(frameCount, bezierCount, index), 1));
          }
        }
      }
      for (let i = 0, n = input.readInt(true); i < n; i++) {
        let skin = skeletonData.skins[input.readInt(true)];
        for (let ii = 0, nn = input.readInt(true); ii < nn; ii++) {
          let slotIndex = input.readInt(true);
          for (let iii = 0, nnn = input.readInt(true); iii < nnn; iii++) {
            let attachmentName = input.readStringRef();
            if (!attachmentName) throw new Error("attachmentName must not be null.");
            let attachment = skin.getAttachment(slotIndex, attachmentName);
            let timelineType = input.readByte();
            let frameCount = input.readInt(true);
            let frameLast = frameCount - 1;
            switch (timelineType) {
              case ATTACHMENT_DEFORM: {
                let vertexAttachment = attachment;
                let weighted = vertexAttachment.bones;
                let vertices = vertexAttachment.vertices;
                let deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
                let bezierCount = input.readInt(true);
                let timeline = new DeformTimeline(frameCount, bezierCount, slotIndex, vertexAttachment);
                let time = input.readFloat();
                for (let frame = 0, bezier = 0; ; frame++) {
                  let deform;
                  let end = input.readInt(true);
                  if (end == 0)
                    deform = weighted ? Utils.newFloatArray(deformLength) : vertices;
                  else {
                    deform = Utils.newFloatArray(deformLength);
                    let start = input.readInt(true);
                    end += start;
                    if (scale == 1) {
                      for (let v = start; v < end; v++)
                        deform[v] = input.readFloat();
                    } else {
                      for (let v = start; v < end; v++)
                        deform[v] = input.readFloat() * scale;
                    }
                    if (!weighted) {
                      for (let v = 0, vn = deform.length; v < vn; v++)
                        deform[v] += vertices[v];
                    }
                  }
                  timeline.setFrame(frame, time, deform);
                  if (frame == frameLast) break;
                  let time2 = input.readFloat();
                  switch (input.readByte()) {
                    case CURVE_STEPPED:
                      timeline.setStepped(frame);
                      break;
                    case CURVE_BEZIER:
                      setBezier(input, timeline, bezier++, frame, 0, time, time2, 0, 1, 1);
                  }
                  time = time2;
                }
                timelines.push(timeline);
                break;
              }
              case ATTACHMENT_SEQUENCE: {
                let timeline = new SequenceTimeline(frameCount, slotIndex, attachment);
                for (let frame = 0; frame < frameCount; frame++) {
                  let time = input.readFloat();
                  let modeAndIndex = input.readInt32();
                  timeline.setFrame(
                    frame,
                    time,
                    SequenceModeValues[modeAndIndex & 15],
                    modeAndIndex >> 4,
                    input.readFloat()
                  );
                }
                timelines.push(timeline);
                break;
              }
            }
          }
        }
      }
      let drawOrderCount = input.readInt(true);
      if (drawOrderCount > 0) {
        let timeline = new DrawOrderTimeline(drawOrderCount);
        let slotCount = skeletonData.slots.length;
        for (let i = 0; i < drawOrderCount; i++) {
          let time = input.readFloat();
          let offsetCount = input.readInt(true);
          let drawOrder = Utils.newArray(slotCount, 0);
          for (let ii = slotCount - 1; ii >= 0; ii--)
            drawOrder[ii] = -1;
          let unchanged = Utils.newArray(slotCount - offsetCount, 0);
          let originalIndex = 0, unchangedIndex = 0;
          for (let ii = 0; ii < offsetCount; ii++) {
            let slotIndex = input.readInt(true);
            while (originalIndex != slotIndex)
              unchanged[unchangedIndex++] = originalIndex++;
            drawOrder[originalIndex + input.readInt(true)] = originalIndex++;
          }
          while (originalIndex < slotCount)
            unchanged[unchangedIndex++] = originalIndex++;
          for (let ii = slotCount - 1; ii >= 0; ii--)
            if (drawOrder[ii] == -1) drawOrder[ii] = unchanged[--unchangedIndex];
          timeline.setFrame(i, time, drawOrder);
        }
        timelines.push(timeline);
      }
      let eventCount = input.readInt(true);
      if (eventCount > 0) {
        let timeline = new EventTimeline(eventCount);
        for (let i = 0; i < eventCount; i++) {
          let time = input.readFloat();
          let eventData = skeletonData.events[input.readInt(true)];
          let event = new Event(time, eventData);
          event.intValue = input.readInt(false);
          event.floatValue = input.readFloat();
          event.stringValue = input.readString();
          if (event.stringValue == null) event.stringValue = eventData.stringValue;
          if (event.data.audioPath) {
            event.volume = input.readFloat();
            event.balance = input.readFloat();
          }
          timeline.setFrame(i, event);
        }
        timelines.push(timeline);
      }
      let duration = 0;
      for (let i = 0, n = timelines.length; i < n; i++)
        duration = Math.max(duration, timelines[i].getDuration());
      return new Animation(name, timelines, duration);
    }
  };
  var BinaryInput = class {
    constructor(data, strings = new Array(), index = 0, buffer = new DataView(data instanceof ArrayBuffer ? data : data.buffer)) {
      this.strings = strings;
      this.index = index;
      this.buffer = buffer;
    }
    readByte() {
      return this.buffer.getInt8(this.index++);
    }
    readUnsignedByte() {
      return this.buffer.getUint8(this.index++);
    }
    readShort() {
      let value = this.buffer.getInt16(this.index);
      this.index += 2;
      return value;
    }
    readInt32() {
      let value = this.buffer.getInt32(this.index);
      this.index += 4;
      return value;
    }
    readInt(optimizePositive) {
      let b = this.readByte();
      let result = b & 127;
      if ((b & 128) != 0) {
        b = this.readByte();
        result |= (b & 127) << 7;
        if ((b & 128) != 0) {
          b = this.readByte();
          result |= (b & 127) << 14;
          if ((b & 128) != 0) {
            b = this.readByte();
            result |= (b & 127) << 21;
            if ((b & 128) != 0) {
              b = this.readByte();
              result |= (b & 127) << 28;
            }
          }
        }
      }
      return optimizePositive ? result : result >>> 1 ^ -(result & 1);
    }
    readStringRef() {
      let index = this.readInt(true);
      return index == 0 ? null : this.strings[index - 1];
    }
    readString() {
      let byteCount = this.readInt(true);
      switch (byteCount) {
        case 0:
          return null;
        case 1:
          return "";
      }
      byteCount--;
      let chars = "";
      let charCount = 0;
      for (let i = 0; i < byteCount; ) {
        let b = this.readUnsignedByte();
        switch (b >> 4) {
          case 12:
          case 13:
            chars += String.fromCharCode((b & 31) << 6 | this.readByte() & 63);
            i += 2;
            break;
          case 14:
            chars += String.fromCharCode((b & 15) << 12 | (this.readByte() & 63) << 6 | this.readByte() & 63);
            i += 3;
            break;
          default:
            chars += String.fromCharCode(b);
            i++;
        }
      }
      return chars;
    }
    readFloat() {
      let value = this.buffer.getFloat32(this.index);
      this.index += 4;
      return value;
    }
    readBoolean() {
      return this.readByte() != 0;
    }
  };
  var LinkedMesh = class {
    parent;
    skinIndex;
    slotIndex;
    mesh;
    inheritTimeline;
    constructor(mesh, skinIndex, slotIndex, parent, inheritDeform) {
      this.mesh = mesh;
      this.skinIndex = skinIndex;
      this.slotIndex = slotIndex;
      this.parent = parent;
      this.inheritTimeline = inheritDeform;
    }
  };
  var Vertices = class {
    constructor(bones = null, vertices = null, length = 0) {
      this.bones = bones;
      this.vertices = vertices;
      this.length = length;
    }
  };
  function readTimeline1(input, timeline, scale) {
    let time = input.readFloat(), value = input.readFloat() * scale;
    for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1; ; frame++) {
      timeline.setFrame(frame, time, value);
      if (frame == frameLast) break;
      let time2 = input.readFloat(), value2 = input.readFloat() * scale;
      switch (input.readByte()) {
        case CURVE_STEPPED:
          timeline.setStepped(frame);
          break;
        case CURVE_BEZIER:
          setBezier(input, timeline, bezier++, frame, 0, time, time2, value, value2, scale);
      }
      time = time2;
      value = value2;
    }
    return timeline;
  }
  function readTimeline2(input, timeline, scale) {
    let time = input.readFloat(), value1 = input.readFloat() * scale, value2 = input.readFloat() * scale;
    for (let frame = 0, bezier = 0, frameLast = timeline.getFrameCount() - 1; ; frame++) {
      timeline.setFrame(frame, time, value1, value2);
      if (frame == frameLast) break;
      let time2 = input.readFloat(), nvalue1 = input.readFloat() * scale, nvalue2 = input.readFloat() * scale;
      switch (input.readByte()) {
        case CURVE_STEPPED:
          timeline.setStepped(frame);
          break;
        case CURVE_BEZIER:
          setBezier(input, timeline, bezier++, frame, 0, time, time2, value1, nvalue1, scale);
          setBezier(input, timeline, bezier++, frame, 1, time, time2, value2, nvalue2, scale);
      }
      time = time2;
      value1 = nvalue1;
      value2 = nvalue2;
    }
    return timeline;
  }
  function setBezier(input, timeline, bezier, frame, value, time1, time2, value1, value2, scale) {
    timeline.setBezier(bezier, frame, value, time1, value1, input.readFloat(), input.readFloat() * scale, input.readFloat(), input.readFloat() * scale, time2, value2);
  }
  var BONE_ROTATE = 0;
  var BONE_TRANSLATE = 1;
  var BONE_TRANSLATEX = 2;
  var BONE_TRANSLATEY = 3;
  var BONE_SCALE = 4;
  var BONE_SCALEX = 5;
  var BONE_SCALEY = 6;
  var BONE_SHEAR = 7;
  var BONE_SHEARX = 8;
  var BONE_SHEARY = 9;
  var BONE_INHERIT = 10;
  var SLOT_ATTACHMENT = 0;
  var SLOT_RGBA = 1;
  var SLOT_RGB = 2;
  var SLOT_RGBA2 = 3;
  var SLOT_RGB2 = 4;
  var SLOT_ALPHA = 5;
  var ATTACHMENT_DEFORM = 0;
  var ATTACHMENT_SEQUENCE = 1;
  var PATH_POSITION = 0;
  var PATH_SPACING = 1;
  var PATH_MIX = 2;
  var PHYSICS_INERTIA = 0;
  var PHYSICS_STRENGTH = 1;
  var PHYSICS_DAMPING = 2;
  var PHYSICS_MASS = 4;
  var PHYSICS_WIND = 5;
  var PHYSICS_GRAVITY = 6;
  var PHYSICS_MIX = 7;
  var PHYSICS_RESET = 8;
  var CURVE_STEPPED = 1;
  var CURVE_BEZIER = 2;

  // spine-core/src/SkeletonBounds.ts
  var SkeletonBounds = class {
    /** The left edge of the axis aligned bounding box. */
    minX = 0;
    /** The bottom edge of the axis aligned bounding box. */
    minY = 0;
    /** The right edge of the axis aligned bounding box. */
    maxX = 0;
    /** The top edge of the axis aligned bounding box. */
    maxY = 0;
    /** The visible bounding boxes. */
    boundingBoxes = new Array();
    /** The world vertices for the bounding box polygons. */
    polygons = new Array();
    polygonPool = new Pool(() => {
      return Utils.newFloatArray(16);
    });
    /** Clears any previous polygons, finds all visible bounding box attachments, and computes the world vertices for each bounding
     * box's polygon.
     * @param updateAabb If true, the axis aligned bounding box containing all the polygons is computed. If false, the
     *           SkeletonBounds AABB methods will always return true. */
    update(skeleton, updateAabb) {
      if (!skeleton) throw new Error("skeleton cannot be null.");
      let boundingBoxes = this.boundingBoxes;
      let polygons = this.polygons;
      let polygonPool = this.polygonPool;
      let slots = skeleton.slots;
      let slotCount = slots.length;
      boundingBoxes.length = 0;
      polygonPool.freeAll(polygons);
      polygons.length = 0;
      for (let i = 0; i < slotCount; i++) {
        let slot = slots[i];
        if (!slot.bone.active) continue;
        let attachment = slot.getAttachment();
        if (attachment instanceof BoundingBoxAttachment) {
          let boundingBox = attachment;
          boundingBoxes.push(boundingBox);
          let polygon = polygonPool.obtain();
          if (polygon.length != boundingBox.worldVerticesLength) {
            polygon = Utils.newFloatArray(boundingBox.worldVerticesLength);
          }
          polygons.push(polygon);
          boundingBox.computeWorldVertices(slot, 0, boundingBox.worldVerticesLength, polygon, 0, 2);
        }
      }
      if (updateAabb) {
        this.aabbCompute();
      } else {
        this.minX = Number.POSITIVE_INFINITY;
        this.minY = Number.POSITIVE_INFINITY;
        this.maxX = Number.NEGATIVE_INFINITY;
        this.maxY = Number.NEGATIVE_INFINITY;
      }
    }
    aabbCompute() {
      let minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
      let polygons = this.polygons;
      for (let i = 0, n = polygons.length; i < n; i++) {
        let polygon = polygons[i];
        let vertices = polygon;
        for (let ii = 0, nn = polygon.length; ii < nn; ii += 2) {
          let x = vertices[ii];
          let y = vertices[ii + 1];
          minX = Math.min(minX, x);
          minY = Math.min(minY, y);
          maxX = Math.max(maxX, x);
          maxY = Math.max(maxY, y);
        }
      }
      this.minX = minX;
      this.minY = minY;
      this.maxX = maxX;
      this.maxY = maxY;
    }
    /** Returns true if the axis aligned bounding box contains the point. */
    aabbContainsPoint(x, y) {
      return x >= this.minX && x <= this.maxX && y >= this.minY && y <= this.maxY;
    }
    /** Returns true if the axis aligned bounding box intersects the line segment. */
    aabbIntersectsSegment(x1, y1, x2, y2) {
      let minX = this.minX;
      let minY = this.minY;
      let maxX = this.maxX;
      let maxY = this.maxY;
      if (x1 <= minX && x2 <= minX || y1 <= minY && y2 <= minY || x1 >= maxX && x2 >= maxX || y1 >= maxY && y2 >= maxY)
        return false;
      let m = (y2 - y1) / (x2 - x1);
      let y = m * (minX - x1) + y1;
      if (y > minY && y < maxY) return true;
      y = m * (maxX - x1) + y1;
      if (y > minY && y < maxY) return true;
      let x = (minY - y1) / m + x1;
      if (x > minX && x < maxX) return true;
      x = (maxY - y1) / m + x1;
      if (x > minX && x < maxX) return true;
      return false;
    }
    /** Returns true if the axis aligned bounding box intersects the axis aligned bounding box of the specified bounds. */
    aabbIntersectsSkeleton(bounds) {
      return this.minX < bounds.maxX && this.maxX > bounds.minX && this.minY < bounds.maxY && this.maxY > bounds.minY;
    }
    /** Returns the first bounding box attachment that contains the point, or null. When doing many checks, it is usually more
     * efficient to only call this method if {@link #aabbContainsPoint(float, float)} returns true. */
    containsPoint(x, y) {
      let polygons = this.polygons;
      for (let i = 0, n = polygons.length; i < n; i++)
        if (this.containsPointPolygon(polygons[i], x, y)) return this.boundingBoxes[i];
      return null;
    }
    /** Returns true if the polygon contains the point. */
    containsPointPolygon(polygon, x, y) {
      let vertices = polygon;
      let nn = polygon.length;
      let prevIndex = nn - 2;
      let inside = false;
      for (let ii = 0; ii < nn; ii += 2) {
        let vertexY = vertices[ii + 1];
        let prevY = vertices[prevIndex + 1];
        if (vertexY < y && prevY >= y || prevY < y && vertexY >= y) {
          let vertexX = vertices[ii];
          if (vertexX + (y - vertexY) / (prevY - vertexY) * (vertices[prevIndex] - vertexX) < x) inside = !inside;
        }
        prevIndex = ii;
      }
      return inside;
    }
    /** Returns the first bounding box attachment that contains any part of the line segment, or null. When doing many checks, it
     * is usually more efficient to only call this method if {@link #aabbIntersectsSegment()} returns
     * true. */
    intersectsSegment(x1, y1, x2, y2) {
      let polygons = this.polygons;
      for (let i = 0, n = polygons.length; i < n; i++)
        if (this.intersectsSegmentPolygon(polygons[i], x1, y1, x2, y2)) return this.boundingBoxes[i];
      return null;
    }
    /** Returns true if the polygon contains any part of the line segment. */
    intersectsSegmentPolygon(polygon, x1, y1, x2, y2) {
      let vertices = polygon;
      let nn = polygon.length;
      let width12 = x1 - x2, height12 = y1 - y2;
      let det1 = x1 * y2 - y1 * x2;
      let x3 = vertices[nn - 2], y3 = vertices[nn - 1];
      for (let ii = 0; ii < nn; ii += 2) {
        let x4 = vertices[ii], y4 = vertices[ii + 1];
        let det2 = x3 * y4 - y3 * x4;
        let width34 = x3 - x4, height34 = y3 - y4;
        let det3 = width12 * height34 - height12 * width34;
        let x = (det1 * width34 - width12 * det2) / det3;
        if ((x >= x3 && x <= x4 || x >= x4 && x <= x3) && (x >= x1 && x <= x2 || x >= x2 && x <= x1)) {
          let y = (det1 * height34 - height12 * det2) / det3;
          if ((y >= y3 && y <= y4 || y >= y4 && y <= y3) && (y >= y1 && y <= y2 || y >= y2 && y <= y1)) return true;
        }
        x3 = x4;
        y3 = y4;
      }
      return false;
    }
    /** Returns the polygon for the specified bounding box, or null. */
    getPolygon(boundingBox) {
      if (!boundingBox) throw new Error("boundingBox cannot be null.");
      let index = this.boundingBoxes.indexOf(boundingBox);
      return index == -1 ? null : this.polygons[index];
    }
    /** The width of the axis aligned bounding box. */
    getWidth() {
      return this.maxX - this.minX;
    }
    /** The height of the axis aligned bounding box. */
    getHeight() {
      return this.maxY - this.minY;
    }
  };

  // spine-core/src/Triangulator.ts
  var Triangulator = class _Triangulator {
    convexPolygons = new Array();
    convexPolygonsIndices = new Array();
    indicesArray = new Array();
    isConcaveArray = new Array();
    triangles = new Array();
    polygonPool = new Pool(() => {
      return new Array();
    });
    polygonIndicesPool = new Pool(() => {
      return new Array();
    });
    triangulate(verticesArray) {
      let vertices = verticesArray;
      let vertexCount = verticesArray.length >> 1;
      let indices = this.indicesArray;
      indices.length = 0;
      for (let i = 0; i < vertexCount; i++)
        indices[i] = i;
      let isConcave = this.isConcaveArray;
      isConcave.length = 0;
      for (let i = 0, n = vertexCount; i < n; ++i)
        isConcave[i] = _Triangulator.isConcave(i, vertexCount, vertices, indices);
      let triangles = this.triangles;
      triangles.length = 0;
      while (vertexCount > 3) {
        let previous = vertexCount - 1, i = 0, next = 1;
        while (true) {
          outer:
            if (!isConcave[i]) {
              let p1 = indices[previous] << 1, p2 = indices[i] << 1, p3 = indices[next] << 1;
              let p1x = vertices[p1], p1y = vertices[p1 + 1];
              let p2x = vertices[p2], p2y = vertices[p2 + 1];
              let p3x = vertices[p3], p3y = vertices[p3 + 1];
              for (let ii = (next + 1) % vertexCount; ii != previous; ii = (ii + 1) % vertexCount) {
                if (!isConcave[ii]) continue;
                let v = indices[ii] << 1;
                let vx = vertices[v], vy = vertices[v + 1];
                if (_Triangulator.positiveArea(p3x, p3y, p1x, p1y, vx, vy)) {
                  if (_Triangulator.positiveArea(p1x, p1y, p2x, p2y, vx, vy)) {
                    if (_Triangulator.positiveArea(p2x, p2y, p3x, p3y, vx, vy)) break outer;
                  }
                }
              }
              break;
            }
          if (next == 0) {
            do {
              if (!isConcave[i]) break;
              i--;
            } while (i > 0);
            break;
          }
          previous = i;
          i = next;
          next = (next + 1) % vertexCount;
        }
        triangles.push(indices[(vertexCount + i - 1) % vertexCount]);
        triangles.push(indices[i]);
        triangles.push(indices[(i + 1) % vertexCount]);
        indices.splice(i, 1);
        isConcave.splice(i, 1);
        vertexCount--;
        let previousIndex = (vertexCount + i - 1) % vertexCount;
        let nextIndex = i == vertexCount ? 0 : i;
        isConcave[previousIndex] = _Triangulator.isConcave(previousIndex, vertexCount, vertices, indices);
        isConcave[nextIndex] = _Triangulator.isConcave(nextIndex, vertexCount, vertices, indices);
      }
      if (vertexCount == 3) {
        triangles.push(indices[2]);
        triangles.push(indices[0]);
        triangles.push(indices[1]);
      }
      return triangles;
    }
    decompose(verticesArray, triangles) {
      let vertices = verticesArray;
      let convexPolygons = this.convexPolygons;
      this.polygonPool.freeAll(convexPolygons);
      convexPolygons.length = 0;
      let convexPolygonsIndices = this.convexPolygonsIndices;
      this.polygonIndicesPool.freeAll(convexPolygonsIndices);
      convexPolygonsIndices.length = 0;
      let polygonIndices = this.polygonIndicesPool.obtain();
      polygonIndices.length = 0;
      let polygon = this.polygonPool.obtain();
      polygon.length = 0;
      let fanBaseIndex = -1, lastWinding = 0;
      for (let i = 0, n = triangles.length; i < n; i += 3) {
        let t1 = triangles[i] << 1, t2 = triangles[i + 1] << 1, t3 = triangles[i + 2] << 1;
        let x1 = vertices[t1], y1 = vertices[t1 + 1];
        let x2 = vertices[t2], y2 = vertices[t2 + 1];
        let x3 = vertices[t3], y3 = vertices[t3 + 1];
        let merged = false;
        if (fanBaseIndex == t1) {
          let o = polygon.length - 4;
          let winding1 = _Triangulator.winding(polygon[o], polygon[o + 1], polygon[o + 2], polygon[o + 3], x3, y3);
          let winding2 = _Triangulator.winding(x3, y3, polygon[0], polygon[1], polygon[2], polygon[3]);
          if (winding1 == lastWinding && winding2 == lastWinding) {
            polygon.push(x3);
            polygon.push(y3);
            polygonIndices.push(t3);
            merged = true;
          }
        }
        if (!merged) {
          if (polygon.length > 0) {
            convexPolygons.push(polygon);
            convexPolygonsIndices.push(polygonIndices);
          } else {
            this.polygonPool.free(polygon);
            this.polygonIndicesPool.free(polygonIndices);
          }
          polygon = this.polygonPool.obtain();
          polygon.length = 0;
          polygon.push(x1);
          polygon.push(y1);
          polygon.push(x2);
          polygon.push(y2);
          polygon.push(x3);
          polygon.push(y3);
          polygonIndices = this.polygonIndicesPool.obtain();
          polygonIndices.length = 0;
          polygonIndices.push(t1);
          polygonIndices.push(t2);
          polygonIndices.push(t3);
          lastWinding = _Triangulator.winding(x1, y1, x2, y2, x3, y3);
          fanBaseIndex = t1;
        }
      }
      if (polygon.length > 0) {
        convexPolygons.push(polygon);
        convexPolygonsIndices.push(polygonIndices);
      }
      for (let i = 0, n = convexPolygons.length; i < n; i++) {
        polygonIndices = convexPolygonsIndices[i];
        if (polygonIndices.length == 0) continue;
        let firstIndex = polygonIndices[0];
        let lastIndex = polygonIndices[polygonIndices.length - 1];
        polygon = convexPolygons[i];
        let o = polygon.length - 4;
        let prevPrevX = polygon[o], prevPrevY = polygon[o + 1];
        let prevX = polygon[o + 2], prevY = polygon[o + 3];
        let firstX = polygon[0], firstY = polygon[1];
        let secondX = polygon[2], secondY = polygon[3];
        let winding = _Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, firstX, firstY);
        for (let ii = 0; ii < n; ii++) {
          if (ii == i) continue;
          let otherIndices = convexPolygonsIndices[ii];
          if (otherIndices.length != 3) continue;
          let otherFirstIndex = otherIndices[0];
          let otherSecondIndex = otherIndices[1];
          let otherLastIndex = otherIndices[2];
          let otherPoly = convexPolygons[ii];
          let x3 = otherPoly[otherPoly.length - 2], y3 = otherPoly[otherPoly.length - 1];
          if (otherFirstIndex != firstIndex || otherSecondIndex != lastIndex) continue;
          let winding1 = _Triangulator.winding(prevPrevX, prevPrevY, prevX, prevY, x3, y3);
          let winding2 = _Triangulator.winding(x3, y3, firstX, firstY, secondX, secondY);
          if (winding1 == winding && winding2 == winding) {
            otherPoly.length = 0;
            otherIndices.length = 0;
            polygon.push(x3);
            polygon.push(y3);
            polygonIndices.push(otherLastIndex);
            prevPrevX = prevX;
            prevPrevY = prevY;
            prevX = x3;
            prevY = y3;
            ii = 0;
          }
        }
      }
      for (let i = convexPolygons.length - 1; i >= 0; i--) {
        polygon = convexPolygons[i];
        if (polygon.length == 0) {
          convexPolygons.splice(i, 1);
          this.polygonPool.free(polygon);
          polygonIndices = convexPolygonsIndices[i];
          convexPolygonsIndices.splice(i, 1);
          this.polygonIndicesPool.free(polygonIndices);
        }
      }
      return convexPolygons;
    }
    static isConcave(index, vertexCount, vertices, indices) {
      let previous = indices[(vertexCount + index - 1) % vertexCount] << 1;
      let current = indices[index] << 1;
      let next = indices[(index + 1) % vertexCount] << 1;
      return !this.positiveArea(
        vertices[previous],
        vertices[previous + 1],
        vertices[current],
        vertices[current + 1],
        vertices[next],
        vertices[next + 1]
      );
    }
    static positiveArea(p1x, p1y, p2x, p2y, p3x, p3y) {
      return p1x * (p3y - p2y) + p2x * (p1y - p3y) + p3x * (p2y - p1y) >= 0;
    }
    static winding(p1x, p1y, p2x, p2y, p3x, p3y) {
      let px = p2x - p1x, py = p2y - p1y;
      return p3x * py - p3y * px + px * p1y - p1x * py >= 0 ? 1 : -1;
    }
  };

  // spine-core/src/SkeletonClipping.ts
  var SkeletonClipping = class _SkeletonClipping {
    triangulator = new Triangulator();
    clippingPolygon = new Array();
    clipOutput = new Array();
    clippedVertices = new Array();
    clippedUVs = new Array();
    clippedTriangles = new Array();
    scratch = new Array();
    clipAttachment = null;
    clippingPolygons = null;
    clipStart(slot, clip) {
      if (this.clipAttachment) return 0;
      this.clipAttachment = clip;
      let n = clip.worldVerticesLength;
      let vertices = Utils.setArraySize(this.clippingPolygon, n);
      clip.computeWorldVertices(slot, 0, n, vertices, 0, 2);
      let clippingPolygon = this.clippingPolygon;
      _SkeletonClipping.makeClockwise(clippingPolygon);
      let clippingPolygons = this.clippingPolygons = this.triangulator.decompose(clippingPolygon, this.triangulator.triangulate(clippingPolygon));
      for (let i = 0, n2 = clippingPolygons.length; i < n2; i++) {
        let polygon = clippingPolygons[i];
        _SkeletonClipping.makeClockwise(polygon);
        polygon.push(polygon[0]);
        polygon.push(polygon[1]);
      }
      return clippingPolygons.length;
    }
    clipEndWithSlot(slot) {
      if (this.clipAttachment && this.clipAttachment.endSlot == slot.data) this.clipEnd();
    }
    clipEnd() {
      if (!this.clipAttachment) return;
      this.clipAttachment = null;
      this.clippingPolygons = null;
      this.clippedVertices.length = 0;
      this.clippedTriangles.length = 0;
      this.clippingPolygon.length = 0;
    }
    isClipping() {
      return this.clipAttachment != null;
    }
    clipTriangles(vertices, verticesLengthOrTriangles, trianglesOrTrianglesLength, trianglesLengthOrUvs, uvsOrLight, lightOrDark, darkOrTwoColor, twoColorParam) {
      let triangles;
      let trianglesLength;
      let uvs;
      let light;
      let dark;
      let twoColor;
      if (typeof verticesLengthOrTriangles === "number") {
        triangles = trianglesOrTrianglesLength;
        trianglesLength = trianglesLengthOrUvs;
        uvs = uvsOrLight;
        light = lightOrDark;
        dark = darkOrTwoColor;
        twoColor = twoColorParam;
      } else {
        triangles = verticesLengthOrTriangles;
        trianglesLength = trianglesOrTrianglesLength;
        uvs = trianglesLengthOrUvs;
        light = uvsOrLight;
        dark = lightOrDark;
        twoColor = darkOrTwoColor;
      }
      if (uvs && light && dark && typeof twoColor === "boolean")
        this.clipTrianglesRender(vertices, triangles, trianglesLength, uvs, light, dark, twoColor);
      else
        this.clipTrianglesNoRender(vertices, triangles, trianglesLength);
    }
    clipTrianglesNoRender(vertices, triangles, trianglesLength) {
      let clipOutput = this.clipOutput, clippedVertices = this.clippedVertices;
      let clippedTriangles = this.clippedTriangles;
      let polygons = this.clippingPolygons;
      let polygonsCount = polygons.length;
      let index = 0;
      clippedVertices.length = 0;
      clippedTriangles.length = 0;
      for (let i = 0; i < trianglesLength; i += 3) {
        let vertexOffset = triangles[i] << 1;
        let x1 = vertices[vertexOffset], y1 = vertices[vertexOffset + 1];
        vertexOffset = triangles[i + 1] << 1;
        let x2 = vertices[vertexOffset], y2 = vertices[vertexOffset + 1];
        vertexOffset = triangles[i + 2] << 1;
        let x3 = vertices[vertexOffset], y3 = vertices[vertexOffset + 1];
        for (let p = 0; p < polygonsCount; p++) {
          let s = clippedVertices.length;
          if (this.clip(x1, y1, x2, y2, x3, y3, polygons[p], clipOutput)) {
            let clipOutputLength = clipOutput.length;
            if (clipOutputLength == 0) continue;
            let clipOutputCount = clipOutputLength >> 1;
            let clipOutputItems = this.clipOutput;
            let clippedVerticesItems = Utils.setArraySize(clippedVertices, s + clipOutputCount * 2);
            for (let ii = 0; ii < clipOutputLength; ii += 2, s += 2) {
              let x = clipOutputItems[ii], y = clipOutputItems[ii + 1];
              clippedVerticesItems[s] = x;
              clippedVerticesItems[s + 1] = y;
            }
            s = clippedTriangles.length;
            let clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3 * (clipOutputCount - 2));
            clipOutputCount--;
            for (let ii = 1; ii < clipOutputCount; ii++, s += 3) {
              clippedTrianglesItems[s] = index;
              clippedTrianglesItems[s + 1] = index + ii;
              clippedTrianglesItems[s + 2] = index + ii + 1;
            }
            index += clipOutputCount + 1;
          } else {
            let clippedVerticesItems = Utils.setArraySize(clippedVertices, s + 3 * 2);
            clippedVerticesItems[s] = x1;
            clippedVerticesItems[s + 1] = y1;
            clippedVerticesItems[s + 2] = x2;
            clippedVerticesItems[s + 3] = y2;
            clippedVerticesItems[s + 4] = x3;
            clippedVerticesItems[s + 5] = y3;
            s = clippedTriangles.length;
            let clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3);
            clippedTrianglesItems[s] = index;
            clippedTrianglesItems[s + 1] = index + 1;
            clippedTrianglesItems[s + 2] = index + 2;
            index += 3;
            break;
          }
        }
      }
    }
    clipTrianglesRender(vertices, triangles, trianglesLength, uvs, light, dark, twoColor) {
      let clipOutput = this.clipOutput, clippedVertices = this.clippedVertices;
      let clippedTriangles = this.clippedTriangles;
      let polygons = this.clippingPolygons;
      let polygonsCount = polygons.length;
      let vertexSize = twoColor ? 12 : 8;
      let index = 0;
      clippedVertices.length = 0;
      clippedTriangles.length = 0;
      for (let i = 0; i < trianglesLength; i += 3) {
        let vertexOffset = triangles[i] << 1;
        let x1 = vertices[vertexOffset], y1 = vertices[vertexOffset + 1];
        let u1 = uvs[vertexOffset], v1 = uvs[vertexOffset + 1];
        vertexOffset = triangles[i + 1] << 1;
        let x2 = vertices[vertexOffset], y2 = vertices[vertexOffset + 1];
        let u2 = uvs[vertexOffset], v2 = uvs[vertexOffset + 1];
        vertexOffset = triangles[i + 2] << 1;
        let x3 = vertices[vertexOffset], y3 = vertices[vertexOffset + 1];
        let u3 = uvs[vertexOffset], v3 = uvs[vertexOffset + 1];
        for (let p = 0; p < polygonsCount; p++) {
          let s = clippedVertices.length;
          if (this.clip(x1, y1, x2, y2, x3, y3, polygons[p], clipOutput)) {
            let clipOutputLength = clipOutput.length;
            if (clipOutputLength == 0) continue;
            let d0 = y2 - y3, d1 = x3 - x2, d2 = x1 - x3, d4 = y3 - y1;
            let d = 1 / (d0 * d2 + d1 * (y1 - y3));
            let clipOutputCount = clipOutputLength >> 1;
            let clipOutputItems = this.clipOutput;
            let clippedVerticesItems = Utils.setArraySize(clippedVertices, s + clipOutputCount * vertexSize);
            for (let ii = 0; ii < clipOutputLength; ii += 2, s += vertexSize) {
              let x = clipOutputItems[ii], y = clipOutputItems[ii + 1];
              clippedVerticesItems[s] = x;
              clippedVerticesItems[s + 1] = y;
              clippedVerticesItems[s + 2] = light.r;
              clippedVerticesItems[s + 3] = light.g;
              clippedVerticesItems[s + 4] = light.b;
              clippedVerticesItems[s + 5] = light.a;
              let c0 = x - x3, c1 = y - y3;
              let a = (d0 * c0 + d1 * c1) * d;
              let b = (d4 * c0 + d2 * c1) * d;
              let c = 1 - a - b;
              clippedVerticesItems[s + 6] = u1 * a + u2 * b + u3 * c;
              clippedVerticesItems[s + 7] = v1 * a + v2 * b + v3 * c;
              if (twoColor) {
                clippedVerticesItems[s + 8] = dark.r;
                clippedVerticesItems[s + 9] = dark.g;
                clippedVerticesItems[s + 10] = dark.b;
                clippedVerticesItems[s + 11] = dark.a;
              }
            }
            s = clippedTriangles.length;
            let clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3 * (clipOutputCount - 2));
            clipOutputCount--;
            for (let ii = 1; ii < clipOutputCount; ii++, s += 3) {
              clippedTrianglesItems[s] = index;
              clippedTrianglesItems[s + 1] = index + ii;
              clippedTrianglesItems[s + 2] = index + ii + 1;
            }
            index += clipOutputCount + 1;
          } else {
            let clippedVerticesItems = Utils.setArraySize(clippedVertices, s + 3 * vertexSize);
            clippedVerticesItems[s] = x1;
            clippedVerticesItems[s + 1] = y1;
            clippedVerticesItems[s + 2] = light.r;
            clippedVerticesItems[s + 3] = light.g;
            clippedVerticesItems[s + 4] = light.b;
            clippedVerticesItems[s + 5] = light.a;
            if (!twoColor) {
              clippedVerticesItems[s + 6] = u1;
              clippedVerticesItems[s + 7] = v1;
              clippedVerticesItems[s + 8] = x2;
              clippedVerticesItems[s + 9] = y2;
              clippedVerticesItems[s + 10] = light.r;
              clippedVerticesItems[s + 11] = light.g;
              clippedVerticesItems[s + 12] = light.b;
              clippedVerticesItems[s + 13] = light.a;
              clippedVerticesItems[s + 14] = u2;
              clippedVerticesItems[s + 15] = v2;
              clippedVerticesItems[s + 16] = x3;
              clippedVerticesItems[s + 17] = y3;
              clippedVerticesItems[s + 18] = light.r;
              clippedVerticesItems[s + 19] = light.g;
              clippedVerticesItems[s + 20] = light.b;
              clippedVerticesItems[s + 21] = light.a;
              clippedVerticesItems[s + 22] = u3;
              clippedVerticesItems[s + 23] = v3;
            } else {
              clippedVerticesItems[s + 6] = u1;
              clippedVerticesItems[s + 7] = v1;
              clippedVerticesItems[s + 8] = dark.r;
              clippedVerticesItems[s + 9] = dark.g;
              clippedVerticesItems[s + 10] = dark.b;
              clippedVerticesItems[s + 11] = dark.a;
              clippedVerticesItems[s + 12] = x2;
              clippedVerticesItems[s + 13] = y2;
              clippedVerticesItems[s + 14] = light.r;
              clippedVerticesItems[s + 15] = light.g;
              clippedVerticesItems[s + 16] = light.b;
              clippedVerticesItems[s + 17] = light.a;
              clippedVerticesItems[s + 18] = u2;
              clippedVerticesItems[s + 19] = v2;
              clippedVerticesItems[s + 20] = dark.r;
              clippedVerticesItems[s + 21] = dark.g;
              clippedVerticesItems[s + 22] = dark.b;
              clippedVerticesItems[s + 23] = dark.a;
              clippedVerticesItems[s + 24] = x3;
              clippedVerticesItems[s + 25] = y3;
              clippedVerticesItems[s + 26] = light.r;
              clippedVerticesItems[s + 27] = light.g;
              clippedVerticesItems[s + 28] = light.b;
              clippedVerticesItems[s + 29] = light.a;
              clippedVerticesItems[s + 30] = u3;
              clippedVerticesItems[s + 31] = v3;
              clippedVerticesItems[s + 32] = dark.r;
              clippedVerticesItems[s + 33] = dark.g;
              clippedVerticesItems[s + 34] = dark.b;
              clippedVerticesItems[s + 35] = dark.a;
            }
            s = clippedTriangles.length;
            let clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3);
            clippedTrianglesItems[s] = index;
            clippedTrianglesItems[s + 1] = index + 1;
            clippedTrianglesItems[s + 2] = index + 2;
            index += 3;
            break;
          }
        }
      }
    }
    clipTrianglesUnpacked(vertices, triangles, trianglesLength, uvs) {
      let clipOutput = this.clipOutput, clippedVertices = this.clippedVertices, clippedUVs = this.clippedUVs;
      let clippedTriangles = this.clippedTriangles;
      let polygons = this.clippingPolygons;
      let polygonsCount = polygons.length;
      let index = 0;
      clippedVertices.length = 0;
      clippedUVs.length = 0;
      clippedTriangles.length = 0;
      for (let i = 0; i < trianglesLength; i += 3) {
        let vertexOffset = triangles[i] << 1;
        let x1 = vertices[vertexOffset], y1 = vertices[vertexOffset + 1];
        let u1 = uvs[vertexOffset], v1 = uvs[vertexOffset + 1];
        vertexOffset = triangles[i + 1] << 1;
        let x2 = vertices[vertexOffset], y2 = vertices[vertexOffset + 1];
        let u2 = uvs[vertexOffset], v2 = uvs[vertexOffset + 1];
        vertexOffset = triangles[i + 2] << 1;
        let x3 = vertices[vertexOffset], y3 = vertices[vertexOffset + 1];
        let u3 = uvs[vertexOffset], v3 = uvs[vertexOffset + 1];
        for (let p = 0; p < polygonsCount; p++) {
          let s = clippedVertices.length;
          if (this.clip(x1, y1, x2, y2, x3, y3, polygons[p], clipOutput)) {
            let clipOutputLength = clipOutput.length;
            if (clipOutputLength == 0) continue;
            let d0 = y2 - y3, d1 = x3 - x2, d2 = x1 - x3, d4 = y3 - y1;
            let d = 1 / (d0 * d2 + d1 * (y1 - y3));
            let clipOutputCount = clipOutputLength >> 1;
            let clipOutputItems = this.clipOutput;
            let clippedVerticesItems = Utils.setArraySize(clippedVertices, s + clipOutputCount * 2);
            let clippedUVsItems = Utils.setArraySize(clippedUVs, s + clipOutputCount * 2);
            for (let ii = 0; ii < clipOutputLength; ii += 2, s += 2) {
              let x = clipOutputItems[ii], y = clipOutputItems[ii + 1];
              clippedVerticesItems[s] = x;
              clippedVerticesItems[s + 1] = y;
              let c0 = x - x3, c1 = y - y3;
              let a = (d0 * c0 + d1 * c1) * d;
              let b = (d4 * c0 + d2 * c1) * d;
              let c = 1 - a - b;
              clippedUVsItems[s] = u1 * a + u2 * b + u3 * c;
              clippedUVsItems[s + 1] = v1 * a + v2 * b + v3 * c;
            }
            s = clippedTriangles.length;
            let clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3 * (clipOutputCount - 2));
            clipOutputCount--;
            for (let ii = 1; ii < clipOutputCount; ii++, s += 3) {
              clippedTrianglesItems[s] = index;
              clippedTrianglesItems[s + 1] = index + ii;
              clippedTrianglesItems[s + 2] = index + ii + 1;
            }
            index += clipOutputCount + 1;
          } else {
            let clippedVerticesItems = Utils.setArraySize(clippedVertices, s + 3 * 2);
            clippedVerticesItems[s] = x1;
            clippedVerticesItems[s + 1] = y1;
            clippedVerticesItems[s + 2] = x2;
            clippedVerticesItems[s + 3] = y2;
            clippedVerticesItems[s + 4] = x3;
            clippedVerticesItems[s + 5] = y3;
            let clippedUVSItems = Utils.setArraySize(clippedUVs, s + 3 * 2);
            clippedUVSItems[s] = u1;
            clippedUVSItems[s + 1] = v1;
            clippedUVSItems[s + 2] = u2;
            clippedUVSItems[s + 3] = v2;
            clippedUVSItems[s + 4] = u3;
            clippedUVSItems[s + 5] = v3;
            s = clippedTriangles.length;
            let clippedTrianglesItems = Utils.setArraySize(clippedTriangles, s + 3);
            clippedTrianglesItems[s] = index;
            clippedTrianglesItems[s + 1] = index + 1;
            clippedTrianglesItems[s + 2] = index + 2;
            index += 3;
            break;
          }
        }
      }
    }
    /** Clips the input triangle against the convex, clockwise clipping area. If the triangle lies entirely within the clipping
     * area, false is returned. The clipping area must duplicate the first vertex at the end of the vertices list. */
    clip(x1, y1, x2, y2, x3, y3, clippingArea, output) {
      let originalOutput = output;
      let clipped = false;
      let input;
      if (clippingArea.length % 4 >= 2) {
        input = output;
        output = this.scratch;
      } else
        input = this.scratch;
      input.length = 0;
      input.push(x1);
      input.push(y1);
      input.push(x2);
      input.push(y2);
      input.push(x3);
      input.push(y3);
      input.push(x1);
      input.push(y1);
      output.length = 0;
      let clippingVerticesLast = clippingArea.length - 4;
      let clippingVertices = clippingArea;
      for (let i = 0; ; i += 2) {
        let edgeX = clippingVertices[i], edgeY = clippingVertices[i + 1];
        let ex = edgeX - clippingVertices[i + 2], ey = edgeY - clippingVertices[i + 3];
        let outputStart = output.length;
        let inputVertices = input;
        for (let ii = 0, nn = input.length - 2; ii < nn; ) {
          let inputX = inputVertices[ii], inputY = inputVertices[ii + 1];
          ii += 2;
          let inputX2 = inputVertices[ii], inputY2 = inputVertices[ii + 1];
          let s2 = ey * (edgeX - inputX2) > ex * (edgeY - inputY2);
          let s1 = ey * (edgeX - inputX) - ex * (edgeY - inputY);
          if (s1 > 0) {
            if (s2) {
              output.push(inputX2);
              output.push(inputY2);
              continue;
            }
            let ix = inputX2 - inputX, iy = inputY2 - inputY, t = s1 / (ix * ey - iy * ex);
            if (t >= 0 && t <= 1) {
              output.push(inputX + ix * t);
              output.push(inputY + iy * t);
            } else {
              output.push(inputX2);
              output.push(inputY2);
              continue;
            }
          } else if (s2) {
            let ix = inputX2 - inputX, iy = inputY2 - inputY, t = s1 / (ix * ey - iy * ex);
            if (t >= 0 && t <= 1) {
              output.push(inputX + ix * t);
              output.push(inputY + iy * t);
              output.push(inputX2);
              output.push(inputY2);
            } else {
              output.push(inputX2);
              output.push(inputY2);
              continue;
            }
          }
          clipped = true;
        }
        if (outputStart == output.length) {
          originalOutput.length = 0;
          return true;
        }
        output.push(output[0]);
        output.push(output[1]);
        if (i == clippingVerticesLast) break;
        let temp = output;
        output = input;
        output.length = 0;
        input = temp;
      }
      if (originalOutput != output) {
        originalOutput.length = 0;
        for (let i = 0, n = output.length - 2; i < n; i++)
          originalOutput[i] = output[i];
      } else
        originalOutput.length = originalOutput.length - 2;
      return clipped;
    }
    static makeClockwise(polygon) {
      let vertices = polygon;
      let verticeslength = polygon.length;
      let area = vertices[verticeslength - 2] * vertices[1] - vertices[0] * vertices[verticeslength - 1], p1x = 0, p1y = 0, p2x = 0, p2y = 0;
      for (let i = 0, n = verticeslength - 3; i < n; i += 2) {
        p1x = vertices[i];
        p1y = vertices[i + 1];
        p2x = vertices[i + 2];
        p2y = vertices[i + 3];
        area += p1x * p2y - p2x * p1y;
      }
      if (area < 0) return;
      for (let i = 0, lastX = verticeslength - 2, n = verticeslength >> 1; i < n; i += 2) {
        let x = vertices[i], y = vertices[i + 1];
        let other = lastX - i;
        vertices[i] = vertices[other];
        vertices[i + 1] = vertices[other + 1];
        vertices[other] = x;
        vertices[other + 1] = y;
      }
    }
  };

  // spine-core/src/SkeletonJson.ts
  var SkeletonJson = class {
    attachmentLoader;
    /** Scales bone positions, image sizes, and translations as they are loaded. This allows different size images to be used at
     * runtime than were used in Spine.
     *
     * See [Scaling](http://esotericsoftware.com/spine-loading-skeleton-data#Scaling) in the Spine Runtimes Guide. */
    scale = 1;
    linkedMeshes = new Array();
    constructor(attachmentLoader) {
      this.attachmentLoader = attachmentLoader;
    }
    readSkeletonData(json) {
      let scale = this.scale;
      let skeletonData = new SkeletonData();
      let root = typeof json === "string" ? JSON.parse(json) : json;
      let skeletonMap = root.skeleton;
      if (skeletonMap) {
        skeletonData.hash = skeletonMap.hash;
        skeletonData.version = skeletonMap.spine;
        skeletonData.x = skeletonMap.x;
        skeletonData.y = skeletonMap.y;
        skeletonData.width = skeletonMap.width;
        skeletonData.height = skeletonMap.height;
        skeletonData.referenceScale = getValue(skeletonMap, "referenceScale", 100) * scale;
        skeletonData.fps = skeletonMap.fps;
        skeletonData.imagesPath = skeletonMap.images ?? null;
        skeletonData.audioPath = skeletonMap.audio ?? null;
      }
      if (root.bones) {
        for (let i = 0; i < root.bones.length; i++) {
          let boneMap = root.bones[i];
          let parent = null;
          let parentName = getValue(boneMap, "parent", null);
          if (parentName) parent = skeletonData.findBone(parentName);
          let data = new BoneData(skeletonData.bones.length, boneMap.name, parent);
          data.length = getValue(boneMap, "length", 0) * scale;
          data.x = getValue(boneMap, "x", 0) * scale;
          data.y = getValue(boneMap, "y", 0) * scale;
          data.rotation = getValue(boneMap, "rotation", 0);
          data.scaleX = getValue(boneMap, "scaleX", 1);
          data.scaleY = getValue(boneMap, "scaleY", 1);
          data.shearX = getValue(boneMap, "shearX", 0);
          data.shearY = getValue(boneMap, "shearY", 0);
          data.inherit = Utils.enumValue(Inherit, getValue(boneMap, "inherit", "Normal"));
          data.skinRequired = getValue(boneMap, "skin", false);
          let color = getValue(boneMap, "color", null);
          if (color) data.color.setFromString(color);
          skeletonData.bones.push(data);
        }
      }
      if (root.slots) {
        for (let i = 0; i < root.slots.length; i++) {
          let slotMap = root.slots[i];
          let slotName = slotMap.name;
          let boneData = skeletonData.findBone(slotMap.bone);
          if (!boneData) throw new Error(`Couldn't find bone ${slotMap.bone} for slot ${slotName}`);
          let data = new SlotData(skeletonData.slots.length, slotName, boneData);
          let color = getValue(slotMap, "color", null);
          if (color) data.color.setFromString(color);
          let dark = getValue(slotMap, "dark", null);
          if (dark) data.darkColor = Color.fromString(dark);
          data.attachmentName = getValue(slotMap, "attachment", null);
          data.blendMode = Utils.enumValue(BlendMode, getValue(slotMap, "blend", "normal"));
          data.visible = getValue(slotMap, "visible", true);
          skeletonData.slots.push(data);
        }
      }
      if (root.ik) {
        for (let i = 0; i < root.ik.length; i++) {
          let constraintMap = root.ik[i];
          let data = new IkConstraintData(constraintMap.name);
          data.order = getValue(constraintMap, "order", 0);
          data.skinRequired = getValue(constraintMap, "skin", false);
          for (let ii = 0; ii < constraintMap.bones.length; ii++) {
            let bone = skeletonData.findBone(constraintMap.bones[ii]);
            if (!bone) throw new Error(`Couldn't find bone ${constraintMap.bones[ii]} for IK constraint ${constraintMap.name}.`);
            data.bones.push(bone);
          }
          let target = skeletonData.findBone(constraintMap.target);
          ;
          if (!target) throw new Error(`Couldn't find target bone ${constraintMap.target} for IK constraint ${constraintMap.name}.`);
          data.target = target;
          data.mix = getValue(constraintMap, "mix", 1);
          data.softness = getValue(constraintMap, "softness", 0) * scale;
          data.bendDirection = getValue(constraintMap, "bendPositive", true) ? 1 : -1;
          data.compress = getValue(constraintMap, "compress", false);
          data.stretch = getValue(constraintMap, "stretch", false);
          data.uniform = getValue(constraintMap, "uniform", false);
          skeletonData.ikConstraints.push(data);
        }
      }
      if (root.transform) {
        for (let i = 0; i < root.transform.length; i++) {
          let constraintMap = root.transform[i];
          let data = new TransformConstraintData(constraintMap.name);
          data.order = getValue(constraintMap, "order", 0);
          data.skinRequired = getValue(constraintMap, "skin", false);
          for (let ii = 0; ii < constraintMap.bones.length; ii++) {
            let boneName = constraintMap.bones[ii];
            let bone = skeletonData.findBone(boneName);
            if (!bone) throw new Error(`Couldn't find bone ${boneName} for transform constraint ${constraintMap.name}.`);
            data.bones.push(bone);
          }
          let targetName = constraintMap.target;
          let target = skeletonData.findBone(targetName);
          if (!target) throw new Error(`Couldn't find target bone ${targetName} for transform constraint ${constraintMap.name}.`);
          data.target = target;
          data.local = getValue(constraintMap, "local", false);
          data.relative = getValue(constraintMap, "relative", false);
          data.offsetRotation = getValue(constraintMap, "rotation", 0);
          data.offsetX = getValue(constraintMap, "x", 0) * scale;
          data.offsetY = getValue(constraintMap, "y", 0) * scale;
          data.offsetScaleX = getValue(constraintMap, "scaleX", 0);
          data.offsetScaleY = getValue(constraintMap, "scaleY", 0);
          data.offsetShearY = getValue(constraintMap, "shearY", 0);
          data.mixRotate = getValue(constraintMap, "mixRotate", 1);
          data.mixX = getValue(constraintMap, "mixX", 1);
          data.mixY = getValue(constraintMap, "mixY", data.mixX);
          data.mixScaleX = getValue(constraintMap, "mixScaleX", 1);
          data.mixScaleY = getValue(constraintMap, "mixScaleY", data.mixScaleX);
          data.mixShearY = getValue(constraintMap, "mixShearY", 1);
          skeletonData.transformConstraints.push(data);
        }
      }
      if (root.path) {
        for (let i = 0; i < root.path.length; i++) {
          let constraintMap = root.path[i];
          let data = new PathConstraintData(constraintMap.name);
          data.order = getValue(constraintMap, "order", 0);
          data.skinRequired = getValue(constraintMap, "skin", false);
          for (let ii = 0; ii < constraintMap.bones.length; ii++) {
            let boneName = constraintMap.bones[ii];
            let bone = skeletonData.findBone(boneName);
            if (!bone) throw new Error(`Couldn't find bone ${boneName} for path constraint ${constraintMap.name}.`);
            data.bones.push(bone);
          }
          let targetName = constraintMap.target;
          let target = skeletonData.findSlot(targetName);
          if (!target) throw new Error(`Couldn't find target slot ${targetName} for path constraint ${constraintMap.name}.`);
          data.target = target;
          data.positionMode = Utils.enumValue(PositionMode, getValue(constraintMap, "positionMode", "Percent"));
          data.spacingMode = Utils.enumValue(SpacingMode, getValue(constraintMap, "spacingMode", "Length"));
          data.rotateMode = Utils.enumValue(RotateMode, getValue(constraintMap, "rotateMode", "Tangent"));
          data.offsetRotation = getValue(constraintMap, "rotation", 0);
          data.position = getValue(constraintMap, "position", 0);
          if (data.positionMode == 0 /* Fixed */) data.position *= scale;
          data.spacing = getValue(constraintMap, "spacing", 0);
          if (data.spacingMode == 0 /* Length */ || data.spacingMode == 1 /* Fixed */) data.spacing *= scale;
          data.mixRotate = getValue(constraintMap, "mixRotate", 1);
          data.mixX = getValue(constraintMap, "mixX", 1);
          data.mixY = getValue(constraintMap, "mixY", data.mixX);
          skeletonData.pathConstraints.push(data);
        }
      }
      if (root.physics) {
        for (let i = 0; i < root.physics.length; i++) {
          const constraintMap = root.physics[i];
          const data = new PhysicsConstraintData(constraintMap.name);
          data.order = getValue(constraintMap, "order", 0);
          data.skinRequired = getValue(constraintMap, "skin", false);
          const boneName = constraintMap.bone;
          const bone = skeletonData.findBone(boneName);
          if (bone == null) throw new Error("Physics bone not found: " + boneName);
          data.bone = bone;
          data.x = getValue(constraintMap, "x", 0);
          data.y = getValue(constraintMap, "y", 0);
          data.rotate = getValue(constraintMap, "rotate", 0);
          data.scaleX = getValue(constraintMap, "scaleX", 0);
          data.shearX = getValue(constraintMap, "shearX", 0);
          data.limit = getValue(constraintMap, "limit", 5e3) * scale;
          data.step = 1 / getValue(constraintMap, "fps", 60);
          data.inertia = getValue(constraintMap, "inertia", 1);
          data.strength = getValue(constraintMap, "strength", 100);
          data.damping = getValue(constraintMap, "damping", 1);
          data.massInverse = 1 / getValue(constraintMap, "mass", 1);
          data.wind = getValue(constraintMap, "wind", 0);
          data.gravity = getValue(constraintMap, "gravity", 0);
          data.mix = getValue(constraintMap, "mix", 1);
          data.inertiaGlobal = getValue(constraintMap, "inertiaGlobal", false);
          data.strengthGlobal = getValue(constraintMap, "strengthGlobal", false);
          data.dampingGlobal = getValue(constraintMap, "dampingGlobal", false);
          data.massGlobal = getValue(constraintMap, "massGlobal", false);
          data.windGlobal = getValue(constraintMap, "windGlobal", false);
          data.gravityGlobal = getValue(constraintMap, "gravityGlobal", false);
          data.mixGlobal = getValue(constraintMap, "mixGlobal", false);
          skeletonData.physicsConstraints.push(data);
        }
      }
      if (root.skins) {
        for (let i = 0; i < root.skins.length; i++) {
          let skinMap = root.skins[i];
          let skin = new Skin(skinMap.name);
          if (skinMap.bones) {
            for (let ii = 0; ii < skinMap.bones.length; ii++) {
              let boneName = skinMap.bones[ii];
              let bone = skeletonData.findBone(boneName);
              if (!bone) throw new Error(`Couldn't find bone ${boneName} for skin ${skinMap.name}.`);
              skin.bones.push(bone);
            }
          }
          if (skinMap.ik) {
            for (let ii = 0; ii < skinMap.ik.length; ii++) {
              let constraintName = skinMap.ik[ii];
              let constraint = skeletonData.findIkConstraint(constraintName);
              if (!constraint) throw new Error(`Couldn't find IK constraint ${constraintName} for skin ${skinMap.name}.`);
              skin.constraints.push(constraint);
            }
          }
          if (skinMap.transform) {
            for (let ii = 0; ii < skinMap.transform.length; ii++) {
              let constraintName = skinMap.transform[ii];
              let constraint = skeletonData.findTransformConstraint(constraintName);
              if (!constraint) throw new Error(`Couldn't find transform constraint ${constraintName} for skin ${skinMap.name}.`);
              skin.constraints.push(constraint);
            }
          }
          if (skinMap.path) {
            for (let ii = 0; ii < skinMap.path.length; ii++) {
              let constraintName = skinMap.path[ii];
              let constraint = skeletonData.findPathConstraint(constraintName);
              if (!constraint) throw new Error(`Couldn't find path constraint ${constraintName} for skin ${skinMap.name}.`);
              skin.constraints.push(constraint);
            }
          }
          if (skinMap.physics) {
            for (let ii = 0; ii < skinMap.physics.length; ii++) {
              let constraintName = skinMap.physics[ii];
              let constraint = skeletonData.findPhysicsConstraint(constraintName);
              if (!constraint) throw new Error(`Couldn't find physics constraint ${constraintName} for skin ${skinMap.name}.`);
              skin.constraints.push(constraint);
            }
          }
          for (let slotName in skinMap.attachments) {
            let slot = skeletonData.findSlot(slotName);
            if (!slot) throw new Error(`Couldn't find slot ${slotName} for skin ${skinMap.name}.`);
            let slotMap = skinMap.attachments[slotName];
            for (let entryName in slotMap) {
              let attachment = this.readAttachment(slotMap[entryName], skin, slot.index, entryName, skeletonData);
              if (attachment) skin.setAttachment(slot.index, entryName, attachment);
            }
          }
          skeletonData.skins.push(skin);
          if (skin.name == "default") skeletonData.defaultSkin = skin;
        }
      }
      for (let i = 0, n = this.linkedMeshes.length; i < n; i++) {
        let linkedMesh = this.linkedMeshes[i];
        let skin = !linkedMesh.skin ? skeletonData.defaultSkin : skeletonData.findSkin(linkedMesh.skin);
        if (!skin) throw new Error(`Skin not found: ${linkedMesh.skin}`);
        let parent = skin.getAttachment(linkedMesh.slotIndex, linkedMesh.parent);
        if (!parent) throw new Error(`Parent mesh not found: ${linkedMesh.parent}`);
        linkedMesh.mesh.timelineAttachment = linkedMesh.inheritTimeline ? parent : linkedMesh.mesh;
        linkedMesh.mesh.setParentMesh(parent);
        if (linkedMesh.mesh.region != null) linkedMesh.mesh.updateRegion();
      }
      this.linkedMeshes.length = 0;
      if (root.events) {
        for (let eventName in root.events) {
          let eventMap = root.events[eventName];
          let data = new EventData(eventName);
          data.intValue = getValue(eventMap, "int", 0);
          data.floatValue = getValue(eventMap, "float", 0);
          data.stringValue = getValue(eventMap, "string", "");
          data.audioPath = getValue(eventMap, "audio", null);
          if (data.audioPath) {
            data.volume = getValue(eventMap, "volume", 1);
            data.balance = getValue(eventMap, "balance", 0);
          }
          skeletonData.events.push(data);
        }
      }
      if (root.animations) {
        for (let animationName in root.animations) {
          let animationMap = root.animations[animationName];
          this.readAnimation(animationMap, animationName, skeletonData);
        }
      }
      return skeletonData;
    }
    readAttachment(map, skin, slotIndex, name, skeletonData) {
      let scale = this.scale;
      name = getValue(map, "name", name);
      switch (getValue(map, "type", "region")) {
        case "region": {
          let path = getValue(map, "path", name);
          let sequence = this.readSequence(getValue(map, "sequence", null));
          let region = this.attachmentLoader.newRegionAttachment(skin, name, path, sequence);
          if (!region) return null;
          region.path = path;
          region.x = getValue(map, "x", 0) * scale;
          region.y = getValue(map, "y", 0) * scale;
          region.scaleX = getValue(map, "scaleX", 1);
          region.scaleY = getValue(map, "scaleY", 1);
          region.rotation = getValue(map, "rotation", 0);
          region.width = map.width * scale;
          region.height = map.height * scale;
          region.sequence = sequence;
          let color = getValue(map, "color", null);
          if (color) region.color.setFromString(color);
          if (region.region != null) region.updateRegion();
          return region;
        }
        case "boundingbox": {
          let box = this.attachmentLoader.newBoundingBoxAttachment(skin, name);
          if (!box) return null;
          this.readVertices(map, box, map.vertexCount << 1);
          let color = getValue(map, "color", null);
          if (color) box.color.setFromString(color);
          return box;
        }
        case "mesh":
        case "linkedmesh": {
          let path = getValue(map, "path", name);
          let sequence = this.readSequence(getValue(map, "sequence", null));
          let mesh = this.attachmentLoader.newMeshAttachment(skin, name, path, sequence);
          if (!mesh) return null;
          mesh.path = path;
          let color = getValue(map, "color", null);
          if (color) mesh.color.setFromString(color);
          mesh.width = getValue(map, "width", 0) * scale;
          mesh.height = getValue(map, "height", 0) * scale;
          mesh.sequence = sequence;
          let parent = getValue(map, "parent", null);
          if (parent) {
            this.linkedMeshes.push(new LinkedMesh2(mesh, getValue(map, "skin", null), slotIndex, parent, getValue(map, "timelines", true)));
            return mesh;
          }
          let uvs = map.uvs;
          this.readVertices(map, mesh, uvs.length);
          mesh.triangles = map.triangles;
          mesh.regionUVs = uvs;
          if (mesh.region != null) mesh.updateRegion();
          mesh.edges = getValue(map, "edges", null);
          mesh.hullLength = getValue(map, "hull", 0) * 2;
          return mesh;
        }
        case "path": {
          let path = this.attachmentLoader.newPathAttachment(skin, name);
          if (!path) return null;
          path.closed = getValue(map, "closed", false);
          path.constantSpeed = getValue(map, "constantSpeed", true);
          let vertexCount = map.vertexCount;
          this.readVertices(map, path, vertexCount << 1);
          let lengths = Utils.newArray(vertexCount / 3, 0);
          for (let i = 0; i < map.lengths.length; i++)
            lengths[i] = map.lengths[i] * scale;
          path.lengths = lengths;
          let color = getValue(map, "color", null);
          if (color) path.color.setFromString(color);
          return path;
        }
        case "point": {
          let point = this.attachmentLoader.newPointAttachment(skin, name);
          if (!point) return null;
          point.x = getValue(map, "x", 0) * scale;
          point.y = getValue(map, "y", 0) * scale;
          point.rotation = getValue(map, "rotation", 0);
          let color = getValue(map, "color", null);
          if (color) point.color.setFromString(color);
          return point;
        }
        case "clipping": {
          let clip = this.attachmentLoader.newClippingAttachment(skin, name);
          if (!clip) return null;
          let end = getValue(map, "end", null);
          if (end) clip.endSlot = skeletonData.findSlot(end);
          let vertexCount = map.vertexCount;
          this.readVertices(map, clip, vertexCount << 1);
          let color = getValue(map, "color", null);
          if (color) clip.color.setFromString(color);
          return clip;
        }
      }
      return null;
    }
    readSequence(map) {
      if (map == null) return null;
      let sequence = new Sequence(getValue(map, "count", 0));
      sequence.start = getValue(map, "start", 1);
      sequence.digits = getValue(map, "digits", 0);
      sequence.setupIndex = getValue(map, "setup", 0);
      return sequence;
    }
    readVertices(map, attachment, verticesLength) {
      let scale = this.scale;
      attachment.worldVerticesLength = verticesLength;
      let vertices = map.vertices;
      if (verticesLength == vertices.length) {
        let scaledVertices = Utils.toFloatArray(vertices);
        if (scale != 1) {
          for (let i = 0, n = vertices.length; i < n; i++)
            scaledVertices[i] *= scale;
        }
        attachment.vertices = scaledVertices;
        return;
      }
      let weights = new Array();
      let bones = new Array();
      for (let i = 0, n = vertices.length; i < n; ) {
        let boneCount = vertices[i++];
        bones.push(boneCount);
        for (let nn = i + boneCount * 4; i < nn; i += 4) {
          bones.push(vertices[i]);
          weights.push(vertices[i + 1] * scale);
          weights.push(vertices[i + 2] * scale);
          weights.push(vertices[i + 3]);
        }
      }
      attachment.bones = bones;
      attachment.vertices = Utils.toFloatArray(weights);
    }
    readAnimation(map, name, skeletonData) {
      let scale = this.scale;
      let timelines = new Array();
      if (map.slots) {
        for (let slotName in map.slots) {
          let slotMap = map.slots[slotName];
          let slot = skeletonData.findSlot(slotName);
          if (!slot) throw new Error("Slot not found: " + slotName);
          let slotIndex = slot.index;
          for (let timelineName in slotMap) {
            let timelineMap = slotMap[timelineName];
            if (!timelineMap) continue;
            let frames = timelineMap.length;
            if (timelineName == "attachment") {
              let timeline = new AttachmentTimeline(frames, slotIndex);
              for (let frame = 0; frame < frames; frame++) {
                let keyMap = timelineMap[frame];
                timeline.setFrame(frame, getValue(keyMap, "time", 0), getValue(keyMap, "name", null));
              }
              timelines.push(timeline);
            } else if (timelineName == "rgba") {
              let timeline = new RGBATimeline(frames, frames << 2, slotIndex);
              let keyMap = timelineMap[0];
              let time = getValue(keyMap, "time", 0);
              let color = Color.fromString(keyMap.color);
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, color.r, color.g, color.b, color.a);
                let nextMap = timelineMap[frame + 1];
                if (!nextMap) {
                  timeline.shrink(bezier);
                  break;
                }
                let time2 = getValue(nextMap, "time", 0);
                let newColor = Color.fromString(nextMap.color);
                let curve = keyMap.curve;
                if (curve) {
                  bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, color.r, newColor.r, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, color.g, newColor.g, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, color.b, newColor.b, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 3, time, time2, color.a, newColor.a, 1);
                }
                time = time2;
                color = newColor;
                keyMap = nextMap;
              }
              timelines.push(timeline);
            } else if (timelineName == "rgb") {
              let timeline = new RGBTimeline(frames, frames * 3, slotIndex);
              let keyMap = timelineMap[0];
              let time = getValue(keyMap, "time", 0);
              let color = Color.fromString(keyMap.color);
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, color.r, color.g, color.b);
                let nextMap = timelineMap[frame + 1];
                if (!nextMap) {
                  timeline.shrink(bezier);
                  break;
                }
                let time2 = getValue(nextMap, "time", 0);
                let newColor = Color.fromString(nextMap.color);
                let curve = keyMap.curve;
                if (curve) {
                  bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, color.r, newColor.r, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, color.g, newColor.g, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, color.b, newColor.b, 1);
                }
                time = time2;
                color = newColor;
                keyMap = nextMap;
              }
              timelines.push(timeline);
            } else if (timelineName == "alpha") {
              timelines.push(readTimeline12(timelineMap, new AlphaTimeline(frames, frames, slotIndex), 0, 1));
            } else if (timelineName == "rgba2") {
              let timeline = new RGBA2Timeline(frames, frames * 7, slotIndex);
              let keyMap = timelineMap[0];
              let time = getValue(keyMap, "time", 0);
              let color = Color.fromString(keyMap.light);
              let color2 = Color.fromString(keyMap.dark);
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, color.r, color.g, color.b, color.a, color2.r, color2.g, color2.b);
                let nextMap = timelineMap[frame + 1];
                if (!nextMap) {
                  timeline.shrink(bezier);
                  break;
                }
                let time2 = getValue(nextMap, "time", 0);
                let newColor = Color.fromString(nextMap.light);
                let newColor2 = Color.fromString(nextMap.dark);
                let curve = keyMap.curve;
                if (curve) {
                  bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, color.r, newColor.r, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, color.g, newColor.g, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, color.b, newColor.b, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 3, time, time2, color.a, newColor.a, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 4, time, time2, color2.r, newColor2.r, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 5, time, time2, color2.g, newColor2.g, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 6, time, time2, color2.b, newColor2.b, 1);
                }
                time = time2;
                color = newColor;
                color2 = newColor2;
                keyMap = nextMap;
              }
              timelines.push(timeline);
            } else if (timelineName == "rgb2") {
              let timeline = new RGB2Timeline(frames, frames * 6, slotIndex);
              let keyMap = timelineMap[0];
              let time = getValue(keyMap, "time", 0);
              let color = Color.fromString(keyMap.light);
              let color2 = Color.fromString(keyMap.dark);
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, color.r, color.g, color.b, color2.r, color2.g, color2.b);
                let nextMap = timelineMap[frame + 1];
                if (!nextMap) {
                  timeline.shrink(bezier);
                  break;
                }
                let time2 = getValue(nextMap, "time", 0);
                let newColor = Color.fromString(nextMap.light);
                let newColor2 = Color.fromString(nextMap.dark);
                let curve = keyMap.curve;
                if (curve) {
                  bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, color.r, newColor.r, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, color.g, newColor.g, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, color.b, newColor.b, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 3, time, time2, color2.r, newColor2.r, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 4, time, time2, color2.g, newColor2.g, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 5, time, time2, color2.b, newColor2.b, 1);
                }
                time = time2;
                color = newColor;
                color2 = newColor2;
                keyMap = nextMap;
              }
              timelines.push(timeline);
            }
          }
        }
      }
      if (map.bones) {
        for (let boneName in map.bones) {
          let boneMap = map.bones[boneName];
          let bone = skeletonData.findBone(boneName);
          if (!bone) throw new Error("Bone not found: " + boneName);
          let boneIndex = bone.index;
          for (let timelineName in boneMap) {
            let timelineMap = boneMap[timelineName];
            let frames = timelineMap.length;
            if (frames == 0) continue;
            if (timelineName === "rotate") {
              timelines.push(readTimeline12(timelineMap, new RotateTimeline(frames, frames, boneIndex), 0, 1));
            } else if (timelineName === "translate") {
              let timeline = new TranslateTimeline(frames, frames << 1, boneIndex);
              timelines.push(readTimeline22(timelineMap, timeline, "x", "y", 0, scale));
            } else if (timelineName === "translatex") {
              let timeline = new TranslateXTimeline(frames, frames, boneIndex);
              timelines.push(readTimeline12(timelineMap, timeline, 0, scale));
            } else if (timelineName === "translatey") {
              let timeline = new TranslateYTimeline(frames, frames, boneIndex);
              timelines.push(readTimeline12(timelineMap, timeline, 0, scale));
            } else if (timelineName === "scale") {
              let timeline = new ScaleTimeline(frames, frames << 1, boneIndex);
              timelines.push(readTimeline22(timelineMap, timeline, "x", "y", 1, 1));
            } else if (timelineName === "scalex") {
              let timeline = new ScaleXTimeline(frames, frames, boneIndex);
              timelines.push(readTimeline12(timelineMap, timeline, 1, 1));
            } else if (timelineName === "scaley") {
              let timeline = new ScaleYTimeline(frames, frames, boneIndex);
              timelines.push(readTimeline12(timelineMap, timeline, 1, 1));
            } else if (timelineName === "shear") {
              let timeline = new ShearTimeline(frames, frames << 1, boneIndex);
              timelines.push(readTimeline22(timelineMap, timeline, "x", "y", 0, 1));
            } else if (timelineName === "shearx") {
              let timeline = new ShearXTimeline(frames, frames, boneIndex);
              timelines.push(readTimeline12(timelineMap, timeline, 0, 1));
            } else if (timelineName === "sheary") {
              let timeline = new ShearYTimeline(frames, frames, boneIndex);
              timelines.push(readTimeline12(timelineMap, timeline, 0, 1));
            } else if (timelineName === "inherit") {
              let timeline = new InheritTimeline(frames, bone.index);
              for (let frame = 0; frame < timelineMap.length; frame++) {
                let aFrame = timelineMap[frame];
                timeline.setFrame(frame, getValue(aFrame, "time", 0), Utils.enumValue(Inherit, getValue(aFrame, "inherit", "Normal")));
              }
              timelines.push(timeline);
            }
          }
        }
      }
      if (map.ik) {
        for (let constraintName in map.ik) {
          let constraintMap = map.ik[constraintName];
          let keyMap = constraintMap[0];
          if (!keyMap) continue;
          let constraint = skeletonData.findIkConstraint(constraintName);
          if (!constraint) throw new Error("IK Constraint not found: " + constraintName);
          let constraintIndex = skeletonData.ikConstraints.indexOf(constraint);
          let timeline = new IkConstraintTimeline(constraintMap.length, constraintMap.length << 1, constraintIndex);
          let time = getValue(keyMap, "time", 0);
          let mix = getValue(keyMap, "mix", 1);
          let softness = getValue(keyMap, "softness", 0) * scale;
          for (let frame = 0, bezier = 0; ; frame++) {
            timeline.setFrame(frame, time, mix, softness, getValue(keyMap, "bendPositive", true) ? 1 : -1, getValue(keyMap, "compress", false), getValue(keyMap, "stretch", false));
            let nextMap = constraintMap[frame + 1];
            if (!nextMap) {
              timeline.shrink(bezier);
              break;
            }
            let time2 = getValue(nextMap, "time", 0);
            let mix2 = getValue(nextMap, "mix", 1);
            let softness2 = getValue(nextMap, "softness", 0) * scale;
            let curve = keyMap.curve;
            if (curve) {
              bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, mix, mix2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, softness, softness2, scale);
            }
            time = time2;
            mix = mix2;
            softness = softness2;
            keyMap = nextMap;
          }
          timelines.push(timeline);
        }
      }
      if (map.transform) {
        for (let constraintName in map.transform) {
          let timelineMap = map.transform[constraintName];
          let keyMap = timelineMap[0];
          if (!keyMap) continue;
          let constraint = skeletonData.findTransformConstraint(constraintName);
          if (!constraint) throw new Error("Transform constraint not found: " + constraintName);
          let constraintIndex = skeletonData.transformConstraints.indexOf(constraint);
          let timeline = new TransformConstraintTimeline(timelineMap.length, timelineMap.length * 6, constraintIndex);
          let time = getValue(keyMap, "time", 0);
          let mixRotate = getValue(keyMap, "mixRotate", 1);
          let mixX = getValue(keyMap, "mixX", 1);
          let mixY = getValue(keyMap, "mixY", mixX);
          let mixScaleX = getValue(keyMap, "mixScaleX", 1);
          let mixScaleY = getValue(keyMap, "mixScaleY", mixScaleX);
          let mixShearY = getValue(keyMap, "mixShearY", 1);
          for (let frame = 0, bezier = 0; ; frame++) {
            timeline.setFrame(frame, time, mixRotate, mixX, mixY, mixScaleX, mixScaleY, mixShearY);
            let nextMap = timelineMap[frame + 1];
            if (!nextMap) {
              timeline.shrink(bezier);
              break;
            }
            let time2 = getValue(nextMap, "time", 0);
            let mixRotate2 = getValue(nextMap, "mixRotate", 1);
            let mixX2 = getValue(nextMap, "mixX", 1);
            let mixY2 = getValue(nextMap, "mixY", mixX2);
            let mixScaleX2 = getValue(nextMap, "mixScaleX", 1);
            let mixScaleY2 = getValue(nextMap, "mixScaleY", mixScaleX2);
            let mixShearY2 = getValue(nextMap, "mixShearY", 1);
            let curve = keyMap.curve;
            if (curve) {
              bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, mixRotate, mixRotate2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, mixX, mixX2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, mixY, mixY2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 3, time, time2, mixScaleX, mixScaleX2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 4, time, time2, mixScaleY, mixScaleY2, 1);
              bezier = readCurve(curve, timeline, bezier, frame, 5, time, time2, mixShearY, mixShearY2, 1);
            }
            time = time2;
            mixRotate = mixRotate2;
            mixX = mixX2;
            mixY = mixY2;
            mixScaleX = mixScaleX2;
            mixScaleY = mixScaleY2;
            mixScaleX = mixScaleX2;
            keyMap = nextMap;
          }
          timelines.push(timeline);
        }
      }
      if (map.path) {
        for (let constraintName in map.path) {
          let constraintMap = map.path[constraintName];
          let constraint = skeletonData.findPathConstraint(constraintName);
          if (!constraint) throw new Error("Path constraint not found: " + constraintName);
          let constraintIndex = skeletonData.pathConstraints.indexOf(constraint);
          for (let timelineName in constraintMap) {
            let timelineMap = constraintMap[timelineName];
            let keyMap = timelineMap[0];
            if (!keyMap) continue;
            let frames = timelineMap.length;
            if (timelineName === "position") {
              let timeline = new PathConstraintPositionTimeline(frames, frames, constraintIndex);
              timelines.push(readTimeline12(timelineMap, timeline, 0, constraint.positionMode == 0 /* Fixed */ ? scale : 1));
            } else if (timelineName === "spacing") {
              let timeline = new PathConstraintSpacingTimeline(frames, frames, constraintIndex);
              timelines.push(readTimeline12(timelineMap, timeline, 0, constraint.spacingMode == 0 /* Length */ || constraint.spacingMode == 1 /* Fixed */ ? scale : 1));
            } else if (timelineName === "mix") {
              let timeline = new PathConstraintMixTimeline(frames, frames * 3, constraintIndex);
              let time = getValue(keyMap, "time", 0);
              let mixRotate = getValue(keyMap, "mixRotate", 1);
              let mixX = getValue(keyMap, "mixX", 1);
              let mixY = getValue(keyMap, "mixY", mixX);
              for (let frame = 0, bezier = 0; ; frame++) {
                timeline.setFrame(frame, time, mixRotate, mixX, mixY);
                let nextMap = timelineMap[frame + 1];
                if (!nextMap) {
                  timeline.shrink(bezier);
                  break;
                }
                let time2 = getValue(nextMap, "time", 0);
                let mixRotate2 = getValue(nextMap, "mixRotate", 1);
                let mixX2 = getValue(nextMap, "mixX", 1);
                let mixY2 = getValue(nextMap, "mixY", mixX2);
                let curve = keyMap.curve;
                if (curve) {
                  bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, mixRotate, mixRotate2, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, mixX, mixX2, 1);
                  bezier = readCurve(curve, timeline, bezier, frame, 2, time, time2, mixY, mixY2, 1);
                }
                time = time2;
                mixRotate = mixRotate2;
                mixX = mixX2;
                mixY = mixY2;
                keyMap = nextMap;
              }
              timelines.push(timeline);
            }
          }
        }
      }
      if (map.physics) {
        for (let constraintName in map.physics) {
          let constraintMap = map.physics[constraintName];
          let constraintIndex = -1;
          if (constraintName.length > 0) {
            let constraint = skeletonData.findPhysicsConstraint(constraintName);
            if (!constraint) throw new Error("Physics constraint not found: " + constraintName);
            constraintIndex = skeletonData.physicsConstraints.indexOf(constraint);
          }
          for (let timelineName in constraintMap) {
            let timelineMap = constraintMap[timelineName];
            let keyMap = timelineMap[0];
            if (!keyMap) continue;
            let frames = timelineMap.length;
            if (timelineName == "reset") {
              const timeline2 = new PhysicsConstraintResetTimeline(frames, constraintIndex);
              for (let frame = 0; keyMap != null; keyMap = timelineMap[frame + 1], frame++)
                timeline2.setFrame(frame, getValue(keyMap, "time", 0));
              timelines.push(timeline2);
              continue;
            }
            let timeline;
            if (timelineName == "inertia")
              timeline = new PhysicsConstraintInertiaTimeline(frames, frames, constraintIndex);
            else if (timelineName == "strength")
              timeline = new PhysicsConstraintStrengthTimeline(frames, frames, constraintIndex);
            else if (timelineName == "damping")
              timeline = new PhysicsConstraintDampingTimeline(frames, frames, constraintIndex);
            else if (timelineName == "mass")
              timeline = new PhysicsConstraintMassTimeline(frames, frames, constraintIndex);
            else if (timelineName == "wind")
              timeline = new PhysicsConstraintWindTimeline(frames, frames, constraintIndex);
            else if (timelineName == "gravity")
              timeline = new PhysicsConstraintGravityTimeline(frames, frames, constraintIndex);
            else if (timelineName == "mix")
              timeline = new PhysicsConstraintMixTimeline(frames, frames, constraintIndex);
            else
              continue;
            timelines.push(readTimeline12(timelineMap, timeline, 0, 1));
          }
        }
      }
      if (map.attachments) {
        for (let attachmentsName in map.attachments) {
          let attachmentsMap = map.attachments[attachmentsName];
          let skin = skeletonData.findSkin(attachmentsName);
          if (!skin) throw new Error("Skin not found: " + attachmentsName);
          for (let slotMapName in attachmentsMap) {
            let slotMap = attachmentsMap[slotMapName];
            let slot = skeletonData.findSlot(slotMapName);
            if (!slot) throw new Error("Slot not found: " + slotMapName);
            let slotIndex = slot.index;
            for (let attachmentMapName in slotMap) {
              let attachmentMap = slotMap[attachmentMapName];
              let attachment = skin.getAttachment(slotIndex, attachmentMapName);
              for (let timelineMapName in attachmentMap) {
                let timelineMap = attachmentMap[timelineMapName];
                let keyMap = timelineMap[0];
                if (!keyMap) continue;
                if (timelineMapName == "deform") {
                  let weighted = attachment.bones;
                  let vertices = attachment.vertices;
                  let deformLength = weighted ? vertices.length / 3 * 2 : vertices.length;
                  let timeline = new DeformTimeline(timelineMap.length, timelineMap.length, slotIndex, attachment);
                  let time = getValue(keyMap, "time", 0);
                  for (let frame = 0, bezier = 0; ; frame++) {
                    let deform;
                    let verticesValue = getValue(keyMap, "vertices", null);
                    if (!verticesValue)
                      deform = weighted ? Utils.newFloatArray(deformLength) : vertices;
                    else {
                      deform = Utils.newFloatArray(deformLength);
                      let start = getValue(keyMap, "offset", 0);
                      Utils.arrayCopy(verticesValue, 0, deform, start, verticesValue.length);
                      if (scale != 1) {
                        for (let i = start, n = i + verticesValue.length; i < n; i++)
                          deform[i] *= scale;
                      }
                      if (!weighted) {
                        for (let i = 0; i < deformLength; i++)
                          deform[i] += vertices[i];
                      }
                    }
                    timeline.setFrame(frame, time, deform);
                    let nextMap = timelineMap[frame + 1];
                    if (!nextMap) {
                      timeline.shrink(bezier);
                      break;
                    }
                    let time2 = getValue(nextMap, "time", 0);
                    let curve = keyMap.curve;
                    if (curve) bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, 0, 1, 1);
                    time = time2;
                    keyMap = nextMap;
                  }
                  timelines.push(timeline);
                } else if (timelineMapName == "sequence") {
                  let timeline = new SequenceTimeline(timelineMap.length, slotIndex, attachment);
                  let lastDelay = 0;
                  for (let frame = 0; frame < timelineMap.length; frame++) {
                    let delay = getValue(keyMap, "delay", lastDelay);
                    let time = getValue(keyMap, "time", 0);
                    let mode = SequenceMode[getValue(keyMap, "mode", "hold")];
                    let index = getValue(keyMap, "index", 0);
                    timeline.setFrame(frame, time, mode, index, delay);
                    lastDelay = delay;
                    keyMap = timelineMap[frame + 1];
                  }
                  timelines.push(timeline);
                }
              }
            }
          }
        }
      }
      if (map.drawOrder) {
        let timeline = new DrawOrderTimeline(map.drawOrder.length);
        let slotCount = skeletonData.slots.length;
        let frame = 0;
        for (let i = 0; i < map.drawOrder.length; i++, frame++) {
          let drawOrderMap = map.drawOrder[i];
          let drawOrder = null;
          let offsets = getValue(drawOrderMap, "offsets", null);
          if (offsets) {
            drawOrder = Utils.newArray(slotCount, -1);
            let unchanged = Utils.newArray(slotCount - offsets.length, 0);
            let originalIndex = 0, unchangedIndex = 0;
            for (let ii = 0; ii < offsets.length; ii++) {
              let offsetMap = offsets[ii];
              let slot = skeletonData.findSlot(offsetMap.slot);
              if (!slot) throw new Error("Slot not found: " + slot);
              let slotIndex = slot.index;
              while (originalIndex != slotIndex)
                unchanged[unchangedIndex++] = originalIndex++;
              drawOrder[originalIndex + offsetMap.offset] = originalIndex++;
            }
            while (originalIndex < slotCount)
              unchanged[unchangedIndex++] = originalIndex++;
            for (let ii = slotCount - 1; ii >= 0; ii--)
              if (drawOrder[ii] == -1) drawOrder[ii] = unchanged[--unchangedIndex];
          }
          timeline.setFrame(frame, getValue(drawOrderMap, "time", 0), drawOrder);
        }
        timelines.push(timeline);
      }
      if (map.events) {
        let timeline = new EventTimeline(map.events.length);
        let frame = 0;
        for (let i = 0; i < map.events.length; i++, frame++) {
          let eventMap = map.events[i];
          let eventData = skeletonData.findEvent(eventMap.name);
          if (!eventData) throw new Error("Event not found: " + eventMap.name);
          let event = new Event(Utils.toSinglePrecision(getValue(eventMap, "time", 0)), eventData);
          event.intValue = getValue(eventMap, "int", eventData.intValue);
          event.floatValue = getValue(eventMap, "float", eventData.floatValue);
          event.stringValue = getValue(eventMap, "string", eventData.stringValue);
          if (event.data.audioPath) {
            event.volume = getValue(eventMap, "volume", 1);
            event.balance = getValue(eventMap, "balance", 0);
          }
          timeline.setFrame(frame, event);
        }
        timelines.push(timeline);
      }
      let duration = 0;
      for (let i = 0, n = timelines.length; i < n; i++)
        duration = Math.max(duration, timelines[i].getDuration());
      skeletonData.animations.push(new Animation(name, timelines, duration));
    }
  };
  var LinkedMesh2 = class {
    parent;
    skin;
    slotIndex;
    mesh;
    inheritTimeline;
    constructor(mesh, skin, slotIndex, parent, inheritDeform) {
      this.mesh = mesh;
      this.skin = skin;
      this.slotIndex = slotIndex;
      this.parent = parent;
      this.inheritTimeline = inheritDeform;
    }
  };
  function readTimeline12(keys, timeline, defaultValue, scale) {
    let keyMap = keys[0];
    let time = getValue(keyMap, "time", 0);
    let value = getValue(keyMap, "value", defaultValue) * scale;
    let bezier = 0;
    for (let frame = 0; ; frame++) {
      timeline.setFrame(frame, time, value);
      let nextMap = keys[frame + 1];
      if (!nextMap) {
        timeline.shrink(bezier);
        return timeline;
      }
      let time2 = getValue(nextMap, "time", 0);
      let value2 = getValue(nextMap, "value", defaultValue) * scale;
      if (keyMap.curve) bezier = readCurve(keyMap.curve, timeline, bezier, frame, 0, time, time2, value, value2, scale);
      time = time2;
      value = value2;
      keyMap = nextMap;
    }
  }
  function readTimeline22(keys, timeline, name1, name2, defaultValue, scale) {
    let keyMap = keys[0];
    let time = getValue(keyMap, "time", 0);
    let value1 = getValue(keyMap, name1, defaultValue) * scale;
    let value2 = getValue(keyMap, name2, defaultValue) * scale;
    let bezier = 0;
    for (let frame = 0; ; frame++) {
      timeline.setFrame(frame, time, value1, value2);
      let nextMap = keys[frame + 1];
      if (!nextMap) {
        timeline.shrink(bezier);
        return timeline;
      }
      let time2 = getValue(nextMap, "time", 0);
      let nvalue1 = getValue(nextMap, name1, defaultValue) * scale;
      let nvalue2 = getValue(nextMap, name2, defaultValue) * scale;
      let curve = keyMap.curve;
      if (curve) {
        bezier = readCurve(curve, timeline, bezier, frame, 0, time, time2, value1, nvalue1, scale);
        bezier = readCurve(curve, timeline, bezier, frame, 1, time, time2, value2, nvalue2, scale);
      }
      time = time2;
      value1 = nvalue1;
      value2 = nvalue2;
      keyMap = nextMap;
    }
  }
  function readCurve(curve, timeline, bezier, frame, value, time1, time2, value1, value2, scale) {
    if (curve == "stepped") {
      timeline.setStepped(frame);
      return bezier;
    }
    let i = value << 2;
    let cx1 = curve[i];
    let cy1 = curve[i + 1] * scale;
    let cx2 = curve[i + 2];
    let cy2 = curve[i + 3] * scale;
    timeline.setBezier(bezier, frame, value, time1, value1, cx1, cy1, cx2, cy2, time2, value2);
    return bezier + 1;
  }
  function getValue(map, property, defaultValue) {
    return map[property] !== void 0 ? map[property] : defaultValue;
  }

  // spine-core/src/polyfills.ts
  (() => {
    if (typeof Math.fround === "undefined") {
      Math.fround = /* @__PURE__ */ function(array) {
        return function(x) {
          return array[0] = x, array[0];
        };
      }(new Float32Array(1));
    }
  })();

  // spine-webgl/src/WebGL.ts
  var ManagedWebGLRenderingContext = class {
    canvas;
    gl;
    restorables = new Array();
    constructor(canvasOrContext, contextConfig = { alpha: "true" }) {
      if (!(canvasOrContext instanceof WebGLRenderingContext || typeof WebGL2RenderingContext !== "undefined" && canvasOrContext instanceof WebGL2RenderingContext)) {
        let canvas = canvasOrContext;
        this.gl = canvas.getContext("webgl2", contextConfig) || canvas.getContext("webgl", contextConfig);
        this.canvas = canvas;
        canvas.addEventListener("webglcontextlost", (e) => {
          let event = e;
          if (e) e.preventDefault();
        });
        canvas.addEventListener("webglcontextrestored", (e) => {
          for (let i = 0, n = this.restorables.length; i < n; i++)
            this.restorables[i].restore();
        });
      } else {
        this.gl = canvasOrContext;
        this.canvas = this.gl.canvas;
      }
    }
    addRestorable(restorable) {
      this.restorables.push(restorable);
    }
    removeRestorable(restorable) {
      let index = this.restorables.indexOf(restorable);
      if (index > -1) this.restorables.splice(index, 1);
    }
  };

  // spine-webgl/src/GLTexture.ts
  var GLTexture = class _GLTexture extends Texture {
    context;
    texture = null;
    boundUnit = 0;
    useMipMaps = false;
    static DISABLE_UNPACK_PREMULTIPLIED_ALPHA_WEBGL = false;
    constructor(context, image, useMipMaps = false) {
      super(image);
      this.context = context instanceof ManagedWebGLRenderingContext ? context : new ManagedWebGLRenderingContext(context);
      this.useMipMaps = useMipMaps;
      this.restore();
      this.context.addRestorable(this);
    }
    setFilters(minFilter, magFilter) {
      let gl = this.context.gl;
      this.bind();
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, _GLTexture.validateMagFilter(magFilter));
      this.useMipMaps = _GLTexture.usesMipMaps(minFilter);
      if (this.useMipMaps) gl.generateMipmap(gl.TEXTURE_2D);
    }
    static validateMagFilter(magFilter) {
      switch (magFilter) {
        case 9987 /* MipMapLinearLinear */:
        case 9985 /* MipMapLinearNearest */:
        case 9986 /* MipMapNearestLinear */:
        case 9984 /* MipMapNearestNearest */:
          return 9729 /* Linear */;
        default:
          return magFilter;
      }
    }
    static usesMipMaps(filter) {
      switch (filter) {
        case 9987 /* MipMapLinearLinear */:
        case 9985 /* MipMapLinearNearest */:
        case 9986 /* MipMapNearestLinear */:
        case 9984 /* MipMapNearestNearest */:
          return true;
        default:
          return false;
      }
    }
    setWraps(uWrap, vWrap) {
      let gl = this.context.gl;
      this.bind();
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, uWrap);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, vWrap);
    }
    update(useMipMaps) {
      let gl = this.context.gl;
      if (!this.texture) this.texture = this.context.gl.createTexture();
      this.bind();
      if (_GLTexture.DISABLE_UNPACK_PREMULTIPLIED_ALPHA_WEBGL) gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, this._image);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, useMipMaps ? gl.LINEAR_MIPMAP_LINEAR : gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      if (useMipMaps) gl.generateMipmap(gl.TEXTURE_2D);
    }
    restore() {
      this.texture = null;
      this.update(this.useMipMaps);
    }
    bind(unit = 0) {
      let gl = this.context.gl;
      this.boundUnit = unit;
      gl.activeTexture(gl.TEXTURE0 + unit);
      gl.bindTexture(gl.TEXTURE_2D, this.texture);
    }
    unbind() {
      let gl = this.context.gl;
      gl.activeTexture(gl.TEXTURE0 + this.boundUnit);
      gl.bindTexture(gl.TEXTURE_2D, null);
    }
    dispose() {
      this.context.removeRestorable(this);
      let gl = this.context.gl;
      gl.deleteTexture(this.texture);
    }
  };

  // spine-webgl/src/AssetManager.ts
  var AssetManager = class extends AssetManagerBase {
    constructor(context, pathPrefix = "", downloader = new Downloader()) {
      super((image) => {
        return new GLTexture(context, image);
      }, pathPrefix, downloader);
    }
  };

  // spine-webgl/src/Vector3.ts
  var Vector3 = class {
    x = 0;
    y = 0;
    z = 0;
    constructor(x = 0, y = 0, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    setFrom(v) {
      this.x = v.x;
      this.y = v.y;
      this.z = v.z;
      return this;
    }
    set(x, y, z) {
      this.x = x;
      this.y = y;
      this.z = z;
      return this;
    }
    add(v) {
      this.x += v.x;
      this.y += v.y;
      this.z += v.z;
      return this;
    }
    sub(v) {
      this.x -= v.x;
      this.y -= v.y;
      this.z -= v.z;
      return this;
    }
    scale(s) {
      this.x *= s;
      this.y *= s;
      this.z *= s;
      return this;
    }
    normalize() {
      let len = this.length();
      if (len == 0) return this;
      len = 1 / len;
      this.x *= len;
      this.y *= len;
      this.z *= len;
      return this;
    }
    cross(v) {
      return this.set(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
    }
    multiply(matrix) {
      let l_mat = matrix.values;
      return this.set(
        this.x * l_mat[M00] + this.y * l_mat[M01] + this.z * l_mat[M02] + l_mat[M03],
        this.x * l_mat[M10] + this.y * l_mat[M11] + this.z * l_mat[M12] + l_mat[M13],
        this.x * l_mat[M20] + this.y * l_mat[M21] + this.z * l_mat[M22] + l_mat[M23]
      );
    }
    project(matrix) {
      let l_mat = matrix.values;
      let l_w = 1 / (this.x * l_mat[M30] + this.y * l_mat[M31] + this.z * l_mat[M32] + l_mat[M33]);
      return this.set(
        (this.x * l_mat[M00] + this.y * l_mat[M01] + this.z * l_mat[M02] + l_mat[M03]) * l_w,
        (this.x * l_mat[M10] + this.y * l_mat[M11] + this.z * l_mat[M12] + l_mat[M13]) * l_w,
        (this.x * l_mat[M20] + this.y * l_mat[M21] + this.z * l_mat[M22] + l_mat[M23]) * l_w
      );
    }
    dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }
    length() {
      return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }
    distance(v) {
      let a = v.x - this.x;
      let b = v.y - this.y;
      let c = v.z - this.z;
      return Math.sqrt(a * a + b * b + c * c);
    }
  };

  // spine-webgl/src/Matrix4.ts
  var M00 = 0;
  var M01 = 4;
  var M02 = 8;
  var M03 = 12;
  var M10 = 1;
  var M11 = 5;
  var M12 = 9;
  var M13 = 13;
  var M20 = 2;
  var M21 = 6;
  var M22 = 10;
  var M23 = 14;
  var M30 = 3;
  var M31 = 7;
  var M32 = 11;
  var M33 = 15;
  var Matrix42 = class _Matrix4 {
    temp = new Float32Array(16);
    values = new Float32Array(16);
    static xAxis = new Vector3();
    static yAxis = new Vector3();
    static zAxis = new Vector3();
    static tmpMatrix = new _Matrix4();
    constructor() {
      let v = this.values;
      v[M00] = 1;
      v[M11] = 1;
      v[M22] = 1;
      v[M33] = 1;
    }
    set(values) {
      this.values.set(values);
      return this;
    }
    transpose() {
      let t = this.temp;
      let v = this.values;
      t[M00] = v[M00];
      t[M01] = v[M10];
      t[M02] = v[M20];
      t[M03] = v[M30];
      t[M10] = v[M01];
      t[M11] = v[M11];
      t[M12] = v[M21];
      t[M13] = v[M31];
      t[M20] = v[M02];
      t[M21] = v[M12];
      t[M22] = v[M22];
      t[M23] = v[M32];
      t[M30] = v[M03];
      t[M31] = v[M13];
      t[M32] = v[M23];
      t[M33] = v[M33];
      return this.set(t);
    }
    identity() {
      let v = this.values;
      v[M00] = 1;
      v[M01] = 0;
      v[M02] = 0;
      v[M03] = 0;
      v[M10] = 0;
      v[M11] = 1;
      v[M12] = 0;
      v[M13] = 0;
      v[M20] = 0;
      v[M21] = 0;
      v[M22] = 1;
      v[M23] = 0;
      v[M30] = 0;
      v[M31] = 0;
      v[M32] = 0;
      v[M33] = 1;
      return this;
    }
    invert() {
      let v = this.values;
      let t = this.temp;
      let l_det = v[M30] * v[M21] * v[M12] * v[M03] - v[M20] * v[M31] * v[M12] * v[M03] - v[M30] * v[M11] * v[M22] * v[M03] + v[M10] * v[M31] * v[M22] * v[M03] + v[M20] * v[M11] * v[M32] * v[M03] - v[M10] * v[M21] * v[M32] * v[M03] - v[M30] * v[M21] * v[M02] * v[M13] + v[M20] * v[M31] * v[M02] * v[M13] + v[M30] * v[M01] * v[M22] * v[M13] - v[M00] * v[M31] * v[M22] * v[M13] - v[M20] * v[M01] * v[M32] * v[M13] + v[M00] * v[M21] * v[M32] * v[M13] + v[M30] * v[M11] * v[M02] * v[M23] - v[M10] * v[M31] * v[M02] * v[M23] - v[M30] * v[M01] * v[M12] * v[M23] + v[M00] * v[M31] * v[M12] * v[M23] + v[M10] * v[M01] * v[M32] * v[M23] - v[M00] * v[M11] * v[M32] * v[M23] - v[M20] * v[M11] * v[M02] * v[M33] + v[M10] * v[M21] * v[M02] * v[M33] + v[M20] * v[M01] * v[M12] * v[M33] - v[M00] * v[M21] * v[M12] * v[M33] - v[M10] * v[M01] * v[M22] * v[M33] + v[M00] * v[M11] * v[M22] * v[M33];
      if (l_det == 0) throw new Error("non-invertible matrix");
      let inv_det = 1 / l_det;
      t[M00] = v[M12] * v[M23] * v[M31] - v[M13] * v[M22] * v[M31] + v[M13] * v[M21] * v[M32] - v[M11] * v[M23] * v[M32] - v[M12] * v[M21] * v[M33] + v[M11] * v[M22] * v[M33];
      t[M01] = v[M03] * v[M22] * v[M31] - v[M02] * v[M23] * v[M31] - v[M03] * v[M21] * v[M32] + v[M01] * v[M23] * v[M32] + v[M02] * v[M21] * v[M33] - v[M01] * v[M22] * v[M33];
      t[M02] = v[M02] * v[M13] * v[M31] - v[M03] * v[M12] * v[M31] + v[M03] * v[M11] * v[M32] - v[M01] * v[M13] * v[M32] - v[M02] * v[M11] * v[M33] + v[M01] * v[M12] * v[M33];
      t[M03] = v[M03] * v[M12] * v[M21] - v[M02] * v[M13] * v[M21] - v[M03] * v[M11] * v[M22] + v[M01] * v[M13] * v[M22] + v[M02] * v[M11] * v[M23] - v[M01] * v[M12] * v[M23];
      t[M10] = v[M13] * v[M22] * v[M30] - v[M12] * v[M23] * v[M30] - v[M13] * v[M20] * v[M32] + v[M10] * v[M23] * v[M32] + v[M12] * v[M20] * v[M33] - v[M10] * v[M22] * v[M33];
      t[M11] = v[M02] * v[M23] * v[M30] - v[M03] * v[M22] * v[M30] + v[M03] * v[M20] * v[M32] - v[M00] * v[M23] * v[M32] - v[M02] * v[M20] * v[M33] + v[M00] * v[M22] * v[M33];
      t[M12] = v[M03] * v[M12] * v[M30] - v[M02] * v[M13] * v[M30] - v[M03] * v[M10] * v[M32] + v[M00] * v[M13] * v[M32] + v[M02] * v[M10] * v[M33] - v[M00] * v[M12] * v[M33];
      t[M13] = v[M02] * v[M13] * v[M20] - v[M03] * v[M12] * v[M20] + v[M03] * v[M10] * v[M22] - v[M00] * v[M13] * v[M22] - v[M02] * v[M10] * v[M23] + v[M00] * v[M12] * v[M23];
      t[M20] = v[M11] * v[M23] * v[M30] - v[M13] * v[M21] * v[M30] + v[M13] * v[M20] * v[M31] - v[M10] * v[M23] * v[M31] - v[M11] * v[M20] * v[M33] + v[M10] * v[M21] * v[M33];
      t[M21] = v[M03] * v[M21] * v[M30] - v[M01] * v[M23] * v[M30] - v[M03] * v[M20] * v[M31] + v[M00] * v[M23] * v[M31] + v[M01] * v[M20] * v[M33] - v[M00] * v[M21] * v[M33];
      t[M22] = v[M01] * v[M13] * v[M30] - v[M03] * v[M11] * v[M30] + v[M03] * v[M10] * v[M31] - v[M00] * v[M13] * v[M31] - v[M01] * v[M10] * v[M33] + v[M00] * v[M11] * v[M33];
      t[M23] = v[M03] * v[M11] * v[M20] - v[M01] * v[M13] * v[M20] - v[M03] * v[M10] * v[M21] + v[M00] * v[M13] * v[M21] + v[M01] * v[M10] * v[M23] - v[M00] * v[M11] * v[M23];
      t[M30] = v[M12] * v[M21] * v[M30] - v[M11] * v[M22] * v[M30] - v[M12] * v[M20] * v[M31] + v[M10] * v[M22] * v[M31] + v[M11] * v[M20] * v[M32] - v[M10] * v[M21] * v[M32];
      t[M31] = v[M01] * v[M22] * v[M30] - v[M02] * v[M21] * v[M30] + v[M02] * v[M20] * v[M31] - v[M00] * v[M22] * v[M31] - v[M01] * v[M20] * v[M32] + v[M00] * v[M21] * v[M32];
      t[M32] = v[M02] * v[M11] * v[M30] - v[M01] * v[M12] * v[M30] - v[M02] * v[M10] * v[M31] + v[M00] * v[M12] * v[M31] + v[M01] * v[M10] * v[M32] - v[M00] * v[M11] * v[M32];
      t[M33] = v[M01] * v[M12] * v[M20] - v[M02] * v[M11] * v[M20] + v[M02] * v[M10] * v[M21] - v[M00] * v[M12] * v[M21] - v[M01] * v[M10] * v[M22] + v[M00] * v[M11] * v[M22];
      v[M00] = t[M00] * inv_det;
      v[M01] = t[M01] * inv_det;
      v[M02] = t[M02] * inv_det;
      v[M03] = t[M03] * inv_det;
      v[M10] = t[M10] * inv_det;
      v[M11] = t[M11] * inv_det;
      v[M12] = t[M12] * inv_det;
      v[M13] = t[M13] * inv_det;
      v[M20] = t[M20] * inv_det;
      v[M21] = t[M21] * inv_det;
      v[M22] = t[M22] * inv_det;
      v[M23] = t[M23] * inv_det;
      v[M30] = t[M30] * inv_det;
      v[M31] = t[M31] * inv_det;
      v[M32] = t[M32] * inv_det;
      v[M33] = t[M33] * inv_det;
      return this;
    }
    determinant() {
      let v = this.values;
      return v[M30] * v[M21] * v[M12] * v[M03] - v[M20] * v[M31] * v[M12] * v[M03] - v[M30] * v[M11] * v[M22] * v[M03] + v[M10] * v[M31] * v[M22] * v[M03] + v[M20] * v[M11] * v[M32] * v[M03] - v[M10] * v[M21] * v[M32] * v[M03] - v[M30] * v[M21] * v[M02] * v[M13] + v[M20] * v[M31] * v[M02] * v[M13] + v[M30] * v[M01] * v[M22] * v[M13] - v[M00] * v[M31] * v[M22] * v[M13] - v[M20] * v[M01] * v[M32] * v[M13] + v[M00] * v[M21] * v[M32] * v[M13] + v[M30] * v[M11] * v[M02] * v[M23] - v[M10] * v[M31] * v[M02] * v[M23] - v[M30] * v[M01] * v[M12] * v[M23] + v[M00] * v[M31] * v[M12] * v[M23] + v[M10] * v[M01] * v[M32] * v[M23] - v[M00] * v[M11] * v[M32] * v[M23] - v[M20] * v[M11] * v[M02] * v[M33] + v[M10] * v[M21] * v[M02] * v[M33] + v[M20] * v[M01] * v[M12] * v[M33] - v[M00] * v[M21] * v[M12] * v[M33] - v[M10] * v[M01] * v[M22] * v[M33] + v[M00] * v[M11] * v[M22] * v[M33];
    }
    translate(x, y, z) {
      let v = this.values;
      v[M03] += x;
      v[M13] += y;
      v[M23] += z;
      return this;
    }
    copy() {
      return new _Matrix4().set(this.values);
    }
    projection(near, far, fovy, aspectRatio) {
      this.identity();
      let l_fd = 1 / Math.tan(fovy * (Math.PI / 180) / 2);
      let l_a1 = (far + near) / (near - far);
      let l_a2 = 2 * far * near / (near - far);
      let v = this.values;
      v[M00] = l_fd / aspectRatio;
      v[M10] = 0;
      v[M20] = 0;
      v[M30] = 0;
      v[M01] = 0;
      v[M11] = l_fd;
      v[M21] = 0;
      v[M31] = 0;
      v[M02] = 0;
      v[M12] = 0;
      v[M22] = l_a1;
      v[M32] = -1;
      v[M03] = 0;
      v[M13] = 0;
      v[M23] = l_a2;
      v[M33] = 0;
      return this;
    }
    ortho2d(x, y, width, height) {
      return this.ortho(x, x + width, y, y + height, 0, 1);
    }
    ortho(left, right, bottom, top, near, far) {
      this.identity();
      let x_orth = 2 / (right - left);
      let y_orth = 2 / (top - bottom);
      let z_orth = -2 / (far - near);
      let tx = -(right + left) / (right - left);
      let ty = -(top + bottom) / (top - bottom);
      let tz = -(far + near) / (far - near);
      let v = this.values;
      v[M00] = x_orth;
      v[M10] = 0;
      v[M20] = 0;
      v[M30] = 0;
      v[M01] = 0;
      v[M11] = y_orth;
      v[M21] = 0;
      v[M31] = 0;
      v[M02] = 0;
      v[M12] = 0;
      v[M22] = z_orth;
      v[M32] = 0;
      v[M03] = tx;
      v[M13] = ty;
      v[M23] = tz;
      v[M33] = 1;
      return this;
    }
    multiply(matrix) {
      let t = this.temp;
      let v = this.values;
      let m = matrix.values;
      t[M00] = v[M00] * m[M00] + v[M01] * m[M10] + v[M02] * m[M20] + v[M03] * m[M30];
      t[M01] = v[M00] * m[M01] + v[M01] * m[M11] + v[M02] * m[M21] + v[M03] * m[M31];
      t[M02] = v[M00] * m[M02] + v[M01] * m[M12] + v[M02] * m[M22] + v[M03] * m[M32];
      t[M03] = v[M00] * m[M03] + v[M01] * m[M13] + v[M02] * m[M23] + v[M03] * m[M33];
      t[M10] = v[M10] * m[M00] + v[M11] * m[M10] + v[M12] * m[M20] + v[M13] * m[M30];
      t[M11] = v[M10] * m[M01] + v[M11] * m[M11] + v[M12] * m[M21] + v[M13] * m[M31];
      t[M12] = v[M10] * m[M02] + v[M11] * m[M12] + v[M12] * m[M22] + v[M13] * m[M32];
      t[M13] = v[M10] * m[M03] + v[M11] * m[M13] + v[M12] * m[M23] + v[M13] * m[M33];
      t[M20] = v[M20] * m[M00] + v[M21] * m[M10] + v[M22] * m[M20] + v[M23] * m[M30];
      t[M21] = v[M20] * m[M01] + v[M21] * m[M11] + v[M22] * m[M21] + v[M23] * m[M31];
      t[M22] = v[M20] * m[M02] + v[M21] * m[M12] + v[M22] * m[M22] + v[M23] * m[M32];
      t[M23] = v[M20] * m[M03] + v[M21] * m[M13] + v[M22] * m[M23] + v[M23] * m[M33];
      t[M30] = v[M30] * m[M00] + v[M31] * m[M10] + v[M32] * m[M20] + v[M33] * m[M30];
      t[M31] = v[M30] * m[M01] + v[M31] * m[M11] + v[M32] * m[M21] + v[M33] * m[M31];
      t[M32] = v[M30] * m[M02] + v[M31] * m[M12] + v[M32] * m[M22] + v[M33] * m[M32];
      t[M33] = v[M30] * m[M03] + v[M31] * m[M13] + v[M32] * m[M23] + v[M33] * m[M33];
      return this.set(this.temp);
    }
    multiplyLeft(matrix) {
      let t = this.temp;
      let v = this.values;
      let m = matrix.values;
      t[M00] = m[M00] * v[M00] + m[M01] * v[M10] + m[M02] * v[M20] + m[M03] * v[M30];
      t[M01] = m[M00] * v[M01] + m[M01] * v[M11] + m[M02] * v[M21] + m[M03] * v[M31];
      t[M02] = m[M00] * v[M02] + m[M01] * v[M12] + m[M02] * v[M22] + m[M03] * v[M32];
      t[M03] = m[M00] * v[M03] + m[M01] * v[M13] + m[M02] * v[M23] + m[M03] * v[M33];
      t[M10] = m[M10] * v[M00] + m[M11] * v[M10] + m[M12] * v[M20] + m[M13] * v[M30];
      t[M11] = m[M10] * v[M01] + m[M11] * v[M11] + m[M12] * v[M21] + m[M13] * v[M31];
      t[M12] = m[M10] * v[M02] + m[M11] * v[M12] + m[M12] * v[M22] + m[M13] * v[M32];
      t[M13] = m[M10] * v[M03] + m[M11] * v[M13] + m[M12] * v[M23] + m[M13] * v[M33];
      t[M20] = m[M20] * v[M00] + m[M21] * v[M10] + m[M22] * v[M20] + m[M23] * v[M30];
      t[M21] = m[M20] * v[M01] + m[M21] * v[M11] + m[M22] * v[M21] + m[M23] * v[M31];
      t[M22] = m[M20] * v[M02] + m[M21] * v[M12] + m[M22] * v[M22] + m[M23] * v[M32];
      t[M23] = m[M20] * v[M03] + m[M21] * v[M13] + m[M22] * v[M23] + m[M23] * v[M33];
      t[M30] = m[M30] * v[M00] + m[M31] * v[M10] + m[M32] * v[M20] + m[M33] * v[M30];
      t[M31] = m[M30] * v[M01] + m[M31] * v[M11] + m[M32] * v[M21] + m[M33] * v[M31];
      t[M32] = m[M30] * v[M02] + m[M31] * v[M12] + m[M32] * v[M22] + m[M33] * v[M32];
      t[M33] = m[M30] * v[M03] + m[M31] * v[M13] + m[M32] * v[M23] + m[M33] * v[M33];
      return this.set(this.temp);
    }
    lookAt(position, direction, up) {
      let xAxis = _Matrix4.xAxis, yAxis = _Matrix4.yAxis, zAxis = _Matrix4.zAxis;
      zAxis.setFrom(direction).normalize();
      xAxis.setFrom(direction).normalize();
      xAxis.cross(up).normalize();
      yAxis.setFrom(xAxis).cross(zAxis).normalize();
      this.identity();
      let val = this.values;
      val[M00] = xAxis.x;
      val[M01] = xAxis.y;
      val[M02] = xAxis.z;
      val[M10] = yAxis.x;
      val[M11] = yAxis.y;
      val[M12] = yAxis.z;
      val[M20] = -zAxis.x;
      val[M21] = -zAxis.y;
      val[M22] = -zAxis.z;
      _Matrix4.tmpMatrix.identity();
      _Matrix4.tmpMatrix.values[M03] = -position.x;
      _Matrix4.tmpMatrix.values[M13] = -position.y;
      _Matrix4.tmpMatrix.values[M23] = -position.z;
      this.multiply(_Matrix4.tmpMatrix);
      return this;
    }
  };

  // spine-webgl/src/Camera.ts
  var OrthoCamera = class {
    position = new Vector3(0, 0, 0);
    direction = new Vector3(0, 0, -1);
    up = new Vector3(0, 1, 0);
    near = 0;
    far = 100;
    zoom = 1;
    viewportWidth = 0;
    viewportHeight = 0;
    projectionView = new Matrix42();
    inverseProjectionView = new Matrix42();
    projection = new Matrix42();
    view = new Matrix42();
    constructor(viewportWidth, viewportHeight) {
      this.viewportWidth = viewportWidth;
      this.viewportHeight = viewportHeight;
      this.update();
    }
    update() {
      let projection = this.projection;
      let view = this.view;
      let projectionView = this.projectionView;
      let inverseProjectionView = this.inverseProjectionView;
      let zoom = this.zoom, viewportWidth = this.viewportWidth, viewportHeight = this.viewportHeight;
      projection.ortho(
        zoom * (-viewportWidth / 2),
        zoom * (viewportWidth / 2),
        zoom * (-viewportHeight / 2),
        zoom * (viewportHeight / 2),
        this.near,
        this.far
      );
      view.lookAt(this.position, this.direction, this.up);
      projectionView.set(projection.values);
      projectionView.multiply(view);
      inverseProjectionView.set(projectionView.values).invert();
    }
    screenToWorld(screenCoords, screenWidth, screenHeight) {
      let x = screenCoords.x, y = screenHeight - screenCoords.y - 1;
      screenCoords.x = 2 * x / screenWidth - 1;
      screenCoords.y = 2 * y / screenHeight - 1;
      screenCoords.z = 2 * screenCoords.z - 1;
      screenCoords.project(this.inverseProjectionView);
      return screenCoords;
    }
    worldToScreen(worldCoords, screenWidth, screenHeight) {
      worldCoords.project(this.projectionView);
      worldCoords.x = screenWidth * (worldCoords.x + 1) / 2;
      worldCoords.y = screenHeight * (worldCoords.y + 1) / 2;
      worldCoords.z = (worldCoords.z + 1) / 2;
      return worldCoords;
    }
    setViewport(viewportWidth, viewportHeight) {
      this.viewportWidth = viewportWidth;
      this.viewportHeight = viewportHeight;
    }
  };

  // spine-webgl/src/Input.ts
  var Input = class {
    element;
    mouseX = 0;
    mouseY = 0;
    buttonDown = false;
    touch0 = null;
    touch1 = null;
    initialPinchDistance = 0;
    listeners = new Array();
    autoPreventDefault;
    // this is needed because browsers sends mousedown-mousemove-mousesup after a touch sequence, unless touch end preventDefault
    // but preventing default will result in preventing interaction with the page.
    isTouch = false;
    callbacks;
    constructor(element, autoPreventDefault = true) {
      this.element = element;
      this.autoPreventDefault = autoPreventDefault;
      this.callbacks = this.setupCallbacks(element);
    }
    setupCallbacks(element) {
      const mouseDown = (ev) => {
        if (ev instanceof MouseEvent && !this.isTouch) {
          let rect = element.getBoundingClientRect();
          this.mouseX = ev.clientX - rect.left;
          this.mouseY = ev.clientY - rect.top;
          this.buttonDown = true;
          this.listeners.map((listener) => {
            if (listener.down) listener.down(this.mouseX, this.mouseY, ev);
          });
        }
      };
      const mouseMove = (ev) => {
        if (ev instanceof MouseEvent && !this.isTouch) {
          let rect = element.getBoundingClientRect();
          this.mouseX = ev.clientX - rect.left;
          this.mouseY = ev.clientY - rect.top;
          this.listeners.map((listener) => {
            if (this.buttonDown) {
              if (listener.dragged) listener.dragged(this.mouseX, this.mouseY, ev);
            } else {
              if (listener.moved) listener.moved(this.mouseX, this.mouseY, ev);
            }
          });
        }
      };
      const mouseUp = (ev) => {
        if (ev instanceof MouseEvent && !this.isTouch) {
          let rect = element.getBoundingClientRect();
          this.mouseX = ev.clientX - rect.left;
          ;
          this.mouseY = ev.clientY - rect.top;
          this.buttonDown = false;
          this.listeners.map((listener) => {
            if (listener.up) listener.up(this.mouseX, this.mouseY, ev);
          });
        }
      };
      const mouseWheel = (ev) => {
        if (this.autoPreventDefault) ev.preventDefault();
        let deltaY = ev.deltaY;
        if (ev.deltaMode == WheelEvent.DOM_DELTA_LINE) deltaY *= 8;
        if (ev.deltaMode == WheelEvent.DOM_DELTA_PAGE) deltaY *= 24;
        this.listeners.map((listener) => {
          if (listener.wheel) listener.wheel(ev.deltaY, ev);
        });
      };
      const touchStart = (ev) => {
        this.isTouch = true;
        if (!this.touch0 || !this.touch1) {
          var touches = ev.changedTouches;
          let nativeTouch = touches.item(0);
          if (!nativeTouch) return;
          let rect = element.getBoundingClientRect();
          let x = nativeTouch.clientX - rect.left;
          let y = nativeTouch.clientY - rect.top;
          let touch = new Touch(nativeTouch.identifier, x, y);
          this.mouseX = x;
          this.mouseY = y;
          this.buttonDown = true;
          if (!this.touch0) {
            this.touch0 = touch;
            this.listeners.map((listener) => {
              if (listener.down) listener.down(touch.x, touch.y, ev);
            });
          } else if (!this.touch1) {
            this.touch1 = touch;
            let dx = this.touch1.x - this.touch0.x;
            let dy = this.touch1.x - this.touch0.x;
            this.initialPinchDistance = Math.sqrt(dx * dx + dy * dy);
            this.listeners.map((listener) => {
              if (listener.zoom) listener.zoom(this.initialPinchDistance, this.initialPinchDistance, ev);
            });
          }
        }
        if (this.autoPreventDefault) ev.preventDefault();
      };
      const touchMove = (ev) => {
        this.isTouch = true;
        if (this.touch0) {
          var touches = ev.changedTouches;
          let rect = element.getBoundingClientRect();
          for (var i = 0; i < touches.length; i++) {
            var nativeTouch = touches[i];
            let x = nativeTouch.clientX - rect.left;
            let y = nativeTouch.clientY - rect.top;
            if (this.touch0.identifier === nativeTouch.identifier) {
              this.touch0.x = this.mouseX = x;
              this.touch0.y = this.mouseY = y;
              this.listeners.map((listener) => {
                if (listener.dragged) listener.dragged(x, y, ev);
              });
            }
            if (this.touch1 && this.touch1.identifier === nativeTouch.identifier) {
              this.touch1.x = this.mouseX = x;
              this.touch1.y = this.mouseY = y;
            }
          }
          if (this.touch0 && this.touch1) {
            let dx = this.touch1.x - this.touch0.x;
            let dy = this.touch1.x - this.touch0.x;
            let distance = Math.sqrt(dx * dx + dy * dy);
            this.listeners.map((listener) => {
              if (listener.zoom) listener.zoom(this.initialPinchDistance, distance, ev);
            });
          }
        }
        if (this.autoPreventDefault) ev.preventDefault();
      };
      const touchEnd = (ev) => {
        this.isTouch = true;
        if (this.touch0) {
          var touches = ev.changedTouches;
          let rect = element.getBoundingClientRect();
          for (var i = 0; i < touches.length; i++) {
            var nativeTouch = touches[i];
            let x = nativeTouch.clientX - rect.left;
            let y = nativeTouch.clientY - rect.top;
            if (this.touch0.identifier === nativeTouch.identifier) {
              this.touch0 = null;
              this.mouseX = x;
              this.mouseY = y;
              this.listeners.map((listener) => {
                if (listener.up) listener.up(x, y, ev);
              });
              if (!this.touch1) {
                this.buttonDown = false;
                break;
              } else {
                this.touch0 = this.touch1;
                this.touch1 = null;
                this.mouseX = this.touch0.x;
                this.mouseX = this.touch0.x;
                this.buttonDown = true;
                this.listeners.map((listener) => {
                  if (listener.down) listener.down(this.touch0.x, this.touch0.y, ev);
                });
              }
            }
            if (this.touch1 && this.touch1.identifier) {
              this.touch1 = null;
            }
          }
        }
        if (this.autoPreventDefault) ev.preventDefault();
      };
      element.addEventListener("mousedown", mouseDown, true);
      element.addEventListener("mousemove", mouseMove, true);
      element.addEventListener("mouseup", mouseUp, true);
      element.addEventListener("wheel", mouseWheel, true);
      element.addEventListener("touchstart", touchStart, { passive: false, capture: false });
      element.addEventListener("touchmove", touchMove, { passive: false, capture: false });
      element.addEventListener("touchend", touchEnd, { passive: false, capture: false });
      element.addEventListener("touchcancel", touchEnd);
      return {
        mouseDown,
        mouseMove,
        mouseUp,
        mouseWheel,
        touchStart,
        touchMove,
        touchEnd
      };
    }
    dispose() {
      const element = this.element;
      element.removeEventListener("mousedown", this.callbacks.mouseDown, true);
      element.removeEventListener("mousemove", this.callbacks.mouseMove, true);
      element.removeEventListener("mouseup", this.callbacks.mouseUp, true);
      element.removeEventListener("wheel", this.callbacks.mouseWheel, true);
      element.removeEventListener("touchstart", this.callbacks.touchStart, { capture: false });
      element.removeEventListener("touchmove", this.callbacks.touchMove, { capture: false });
      element.removeEventListener("touchend", this.callbacks.touchEnd, { capture: false });
      element.removeEventListener("touchcancel", this.callbacks.touchEnd);
      this.listeners.length = 0;
    }
    addListener(listener) {
      this.listeners.push(listener);
    }
    removeListener(listener) {
      let idx = this.listeners.indexOf(listener);
      if (idx > -1) {
        this.listeners.splice(idx, 1);
      }
    }
  };
  var Touch = class {
    constructor(identifier, x, y) {
      this.identifier = identifier;
      this.x = x;
      this.y = y;
    }
  };

  // spine-webgl/src/CameraController.ts
  var CameraController = class {
    constructor(canvas, camera) {
      this.canvas = canvas;
      this.camera = camera;
      let cameraX = 0, cameraY = 0, cameraZoom = 0;
      let mouseX = 0, mouseY = 0;
      let lastX = 0, lastY = 0;
      let initialZoom = 0;
      new Input(canvas).addListener({
        down: (x, y) => {
          cameraX = camera.position.x;
          cameraY = camera.position.y;
          mouseX = lastX = x;
          mouseY = lastY = y;
          initialZoom = camera.zoom;
        },
        dragged: (x, y) => {
          let deltaX = x - mouseX;
          let deltaY = y - mouseY;
          let originWorld = camera.screenToWorld(new Vector3(0, 0), canvas.clientWidth, canvas.clientHeight);
          let deltaWorld = camera.screenToWorld(new Vector3(deltaX, deltaY), canvas.clientWidth, canvas.clientHeight).sub(originWorld);
          camera.position.set(cameraX - deltaWorld.x, cameraY - deltaWorld.y, 0);
          camera.update();
          lastX = x;
          lastY = y;
        },
        wheel: (delta) => {
          let zoomAmount = delta / 200 * camera.zoom;
          let newZoom = camera.zoom + zoomAmount;
          if (newZoom > 0) {
            let x = 0, y = 0;
            if (delta < 0) {
              x = lastX;
              y = lastY;
            } else {
              let viewCenter = new Vector3(canvas.clientWidth / 2 + 15, canvas.clientHeight / 2);
              let mouseToCenterX = lastX - viewCenter.x;
              let mouseToCenterY = canvas.clientHeight - 1 - lastY - viewCenter.y;
              x = viewCenter.x - mouseToCenterX;
              y = canvas.clientHeight - 1 - viewCenter.y + mouseToCenterY;
            }
            let oldDistance = camera.screenToWorld(new Vector3(x, y), canvas.clientWidth, canvas.clientHeight);
            camera.zoom = newZoom;
            camera.update();
            let newDistance = camera.screenToWorld(new Vector3(x, y), canvas.clientWidth, canvas.clientHeight);
            camera.position.add(oldDistance.sub(newDistance));
            camera.update();
          }
        },
        zoom: (initialDistance, distance) => {
          let newZoom = initialDistance / distance;
          camera.zoom = initialZoom * newZoom;
        },
        up: (x, y) => {
          lastX = x;
          lastY = y;
        },
        moved: (x, y) => {
          lastX = x;
          lastY = y;
        }
      });
    }
  };

  // spine-webgl/src/Shader.ts
  var Shader = class _Shader {
    constructor(context, vertexShader, fragmentShader) {
      this.vertexShader = vertexShader;
      this.fragmentShader = fragmentShader;
      this.vsSource = vertexShader;
      this.fsSource = fragmentShader;
      this.context = context instanceof ManagedWebGLRenderingContext ? context : new ManagedWebGLRenderingContext(context);
      this.context.addRestorable(this);
      this.compile();
    }
    static MVP_MATRIX = "u_projTrans";
    static POSITION = "a_position";
    static COLOR = "a_color";
    static COLOR2 = "a_color2";
    static TEXCOORDS = "a_texCoords";
    static SAMPLER = "u_texture";
    context;
    vs = null;
    vsSource;
    fs = null;
    fsSource;
    program = null;
    tmp2x2 = new Float32Array(2 * 2);
    tmp3x3 = new Float32Array(3 * 3);
    tmp4x4 = new Float32Array(4 * 4);
    getProgram() {
      return this.program;
    }
    getVertexShader() {
      return this.vertexShader;
    }
    getFragmentShader() {
      return this.fragmentShader;
    }
    getVertexShaderSource() {
      return this.vsSource;
    }
    getFragmentSource() {
      return this.fsSource;
    }
    compile() {
      let gl = this.context.gl;
      try {
        this.vs = this.compileShader(gl.VERTEX_SHADER, this.vertexShader);
        if (!this.vs) throw new Error("Couldn't compile vertex shader.");
        this.fs = this.compileShader(gl.FRAGMENT_SHADER, this.fragmentShader);
        if (!this.fs) throw new Error("Couldn#t compile fragment shader.");
        this.program = this.compileProgram(this.vs, this.fs);
      } catch (e) {
        this.dispose();
        throw e;
      }
    }
    compileShader(type, source) {
      let gl = this.context.gl;
      let shader = gl.createShader(type);
      if (!shader) throw new Error("Couldn't create shader.");
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        let error = "Couldn't compile shader: " + gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        if (!gl.isContextLost()) throw new Error(error);
      }
      return shader;
    }
    compileProgram(vs, fs) {
      let gl = this.context.gl;
      let program = gl.createProgram();
      if (!program) throw new Error("Couldn't compile program.");
      gl.attachShader(program, vs);
      gl.attachShader(program, fs);
      gl.linkProgram(program);
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        let error = "Couldn't compile shader program: " + gl.getProgramInfoLog(program);
        gl.deleteProgram(program);
        if (!gl.isContextLost()) throw new Error(error);
      }
      return program;
    }
    restore() {
      this.compile();
    }
    bind() {
      this.context.gl.useProgram(this.program);
    }
    unbind() {
      this.context.gl.useProgram(null);
    }
    setUniformi(uniform, value) {
      this.context.gl.uniform1i(this.getUniformLocation(uniform), value);
    }
    setUniformf(uniform, value) {
      this.context.gl.uniform1f(this.getUniformLocation(uniform), value);
    }
    setUniform2f(uniform, value, value2) {
      this.context.gl.uniform2f(this.getUniformLocation(uniform), value, value2);
    }
    setUniform3f(uniform, value, value2, value3) {
      this.context.gl.uniform3f(this.getUniformLocation(uniform), value, value2, value3);
    }
    setUniform4f(uniform, value, value2, value3, value4) {
      this.context.gl.uniform4f(this.getUniformLocation(uniform), value, value2, value3, value4);
    }
    setUniform2x2f(uniform, value) {
      let gl = this.context.gl;
      this.tmp2x2.set(value);
      gl.uniformMatrix2fv(this.getUniformLocation(uniform), false, this.tmp2x2);
    }
    setUniform3x3f(uniform, value) {
      let gl = this.context.gl;
      this.tmp3x3.set(value);
      gl.uniformMatrix3fv(this.getUniformLocation(uniform), false, this.tmp3x3);
    }
    setUniform4x4f(uniform, value) {
      let gl = this.context.gl;
      this.tmp4x4.set(value);
      gl.uniformMatrix4fv(this.getUniformLocation(uniform), false, this.tmp4x4);
    }
    getUniformLocation(uniform) {
      let gl = this.context.gl;
      if (!this.program) throw new Error("Shader not compiled.");
      let location = gl.getUniformLocation(this.program, uniform);
      if (!location && !gl.isContextLost()) throw new Error(`Couldn't find location for uniform ${uniform}`);
      return location;
    }
    getAttributeLocation(attribute) {
      let gl = this.context.gl;
      if (!this.program) throw new Error("Shader not compiled.");
      let location = gl.getAttribLocation(this.program, attribute);
      if (location == -1 && !gl.isContextLost()) throw new Error(`Couldn't find location for attribute ${attribute}`);
      return location;
    }
    dispose() {
      this.context.removeRestorable(this);
      let gl = this.context.gl;
      if (this.vs) {
        gl.deleteShader(this.vs);
        this.vs = null;
      }
      if (this.fs) {
        gl.deleteShader(this.fs);
        this.fs = null;
      }
      if (this.program) {
        gl.deleteProgram(this.program);
        this.program = null;
      }
    }
    static newColoredTextured(context) {
      let vs = `
attribute vec4 ${_Shader.POSITION};
attribute vec4 ${_Shader.COLOR};
attribute vec2 ${_Shader.TEXCOORDS};
uniform mat4 ${_Shader.MVP_MATRIX};
varying vec4 v_color;
varying vec2 v_texCoords;

void main () {
	v_color = ${_Shader.COLOR};
	v_texCoords = ${_Shader.TEXCOORDS};
	gl_Position = ${_Shader.MVP_MATRIX} * ${_Shader.POSITION};
}
`;
      let fs = `
#ifdef GL_ES
	#define LOWP lowp
	precision mediump float;
#else
	#define LOWP
#endif
varying LOWP vec4 v_color;
varying vec2 v_texCoords;
uniform sampler2D u_texture;

void main () {
	gl_FragColor = v_color * texture2D(u_texture, v_texCoords);
}
`;
      return new _Shader(context, vs, fs);
    }
    static newTwoColoredTextured(context) {
      let vs = `
attribute vec4 ${_Shader.POSITION};
attribute vec4 ${_Shader.COLOR};
attribute vec4 ${_Shader.COLOR2};
attribute vec2 ${_Shader.TEXCOORDS};
uniform mat4 ${_Shader.MVP_MATRIX};
varying vec4 v_light;
varying vec4 v_dark;
varying vec2 v_texCoords;

void main () {
	v_light = ${_Shader.COLOR};
	v_dark = ${_Shader.COLOR2};
	v_texCoords = ${_Shader.TEXCOORDS};
	gl_Position = ${_Shader.MVP_MATRIX} * ${_Shader.POSITION};
}
`;
      let fs = `
#ifdef GL_ES
	#define LOWP lowp
	precision mediump float;
#else
	#define LOWP
#endif
varying LOWP vec4 v_light;
varying LOWP vec4 v_dark;
varying vec2 v_texCoords;
uniform sampler2D u_texture;

void main () {
	vec4 texColor = texture2D(u_texture, v_texCoords);
	gl_FragColor.a = texColor.a * v_light.a;
	gl_FragColor.rgb = ((texColor.a - 1.0) * v_dark.a + 1.0 - texColor.rgb) * v_dark.rgb + texColor.rgb * v_light.rgb;
}
`;
      return new _Shader(context, vs, fs);
    }
    static newColored(context) {
      let vs = `
attribute vec4 ${_Shader.POSITION};
attribute vec4 ${_Shader.COLOR};
uniform mat4 ${_Shader.MVP_MATRIX};
varying vec4 v_color;

void main () {
	v_color = ${_Shader.COLOR};
	gl_Position = ${_Shader.MVP_MATRIX} * ${_Shader.POSITION};
}
`;
      let fs = `
#ifdef GL_ES
	#define LOWP lowp
	precision mediump float;
#else
	#define LOWP
#endif
varying LOWP vec4 v_color;

void main () {
	gl_FragColor = v_color;
}
`;
      return new _Shader(context, vs, fs);
    }
  };

  // spine-webgl/src/Mesh.ts
  var Mesh = class {
    constructor(context, attributes, maxVertices, maxIndices) {
      this.attributes = attributes;
      this.context = context instanceof ManagedWebGLRenderingContext ? context : new ManagedWebGLRenderingContext(context);
      this.elementsPerVertex = 0;
      for (let i = 0; i < attributes.length; i++) {
        this.elementsPerVertex += attributes[i].numElements;
      }
      this.vertices = new Float32Array(maxVertices * this.elementsPerVertex);
      this.indices = new Uint16Array(maxIndices);
      this.context.addRestorable(this);
    }
    context;
    vertices;
    verticesBuffer = null;
    verticesLength = 0;
    dirtyVertices = false;
    indices;
    indicesBuffer = null;
    indicesLength = 0;
    dirtyIndices = false;
    elementsPerVertex = 0;
    getAttributes() {
      return this.attributes;
    }
    maxVertices() {
      return this.vertices.length / this.elementsPerVertex;
    }
    numVertices() {
      return this.verticesLength / this.elementsPerVertex;
    }
    setVerticesLength(length) {
      this.dirtyVertices = true;
      this.verticesLength = length;
    }
    getVertices() {
      return this.vertices;
    }
    maxIndices() {
      return this.indices.length;
    }
    numIndices() {
      return this.indicesLength;
    }
    setIndicesLength(length) {
      this.dirtyIndices = true;
      this.indicesLength = length;
    }
    getIndices() {
      return this.indices;
    }
    getVertexSizeInFloats() {
      let size = 0;
      for (var i = 0; i < this.attributes.length; i++) {
        let attribute = this.attributes[i];
        size += attribute.numElements;
      }
      return size;
    }
    setVertices(vertices) {
      this.dirtyVertices = true;
      if (vertices.length > this.vertices.length) throw Error("Mesh can't store more than " + this.maxVertices() + " vertices");
      this.vertices.set(vertices, 0);
      this.verticesLength = vertices.length;
    }
    setIndices(indices) {
      this.dirtyIndices = true;
      if (indices.length > this.indices.length) throw Error("Mesh can't store more than " + this.maxIndices() + " indices");
      this.indices.set(indices, 0);
      this.indicesLength = indices.length;
    }
    draw(shader, primitiveType) {
      this.drawWithOffset(shader, primitiveType, 0, this.indicesLength > 0 ? this.indicesLength : this.verticesLength / this.elementsPerVertex);
    }
    drawWithOffset(shader, primitiveType, offset, count) {
      let gl = this.context.gl;
      if (this.dirtyVertices || this.dirtyIndices) this.update();
      this.bind(shader);
      if (this.indicesLength > 0) {
        gl.drawElements(primitiveType, count, gl.UNSIGNED_SHORT, offset * 2);
      } else {
        gl.drawArrays(primitiveType, offset, count);
      }
      this.unbind(shader);
    }
    bind(shader) {
      let gl = this.context.gl;
      gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesBuffer);
      let offset = 0;
      for (let i = 0; i < this.attributes.length; i++) {
        let attrib = this.attributes[i];
        let location = shader.getAttributeLocation(attrib.name);
        gl.enableVertexAttribArray(location);
        gl.vertexAttribPointer(location, attrib.numElements, gl.FLOAT, false, this.elementsPerVertex * 4, offset * 4);
        offset += attrib.numElements;
      }
      if (this.indicesLength > 0) gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
    }
    unbind(shader) {
      let gl = this.context.gl;
      for (let i = 0; i < this.attributes.length; i++) {
        let attrib = this.attributes[i];
        let location = shader.getAttributeLocation(attrib.name);
        gl.disableVertexAttribArray(location);
      }
      gl.bindBuffer(gl.ARRAY_BUFFER, null);
      if (this.indicesLength > 0) gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, null);
    }
    update() {
      let gl = this.context.gl;
      if (this.dirtyVertices) {
        if (!this.verticesBuffer) {
          this.verticesBuffer = gl.createBuffer();
        }
        gl.bindBuffer(gl.ARRAY_BUFFER, this.verticesBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.vertices.subarray(0, this.verticesLength), gl.DYNAMIC_DRAW);
        this.dirtyVertices = false;
      }
      if (this.dirtyIndices) {
        if (!this.indicesBuffer) {
          this.indicesBuffer = gl.createBuffer();
        }
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indicesBuffer);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices.subarray(0, this.indicesLength), gl.DYNAMIC_DRAW);
        this.dirtyIndices = false;
      }
    }
    restore() {
      this.verticesBuffer = null;
      this.indicesBuffer = null;
      this.update();
    }
    dispose() {
      this.context.removeRestorable(this);
      let gl = this.context.gl;
      gl.deleteBuffer(this.verticesBuffer);
      gl.deleteBuffer(this.indicesBuffer);
    }
  };
  var VertexAttribute = class {
    constructor(name, type, numElements) {
      this.name = name;
      this.type = type;
      this.numElements = numElements;
    }
  };
  var Position2Attribute = class extends VertexAttribute {
    constructor() {
      super(Shader.POSITION, 0 /* Float */, 2);
    }
  };
  var Position3Attribute = class extends VertexAttribute {
    constructor() {
      super(Shader.POSITION, 0 /* Float */, 3);
    }
  };
  var TexCoordAttribute = class extends VertexAttribute {
    constructor(unit = 0) {
      super(Shader.TEXCOORDS + (unit == 0 ? "" : unit), 0 /* Float */, 2);
    }
  };
  var ColorAttribute = class extends VertexAttribute {
    constructor() {
      super(Shader.COLOR, 0 /* Float */, 4);
    }
  };
  var Color2Attribute = class extends VertexAttribute {
    constructor() {
      super(Shader.COLOR2, 0 /* Float */, 4);
    }
  };
  var VertexAttributeType = /* @__PURE__ */ ((VertexAttributeType2) => {
    VertexAttributeType2[VertexAttributeType2["Float"] = 0] = "Float";
    return VertexAttributeType2;
  })(VertexAttributeType || {});

  // spine-webgl/src/PolygonBatcher.ts
  var GL_ONE = 1;
  var GL_ONE_MINUS_SRC_COLOR = 769;
  var GL_SRC_ALPHA = 770;
  var GL_ONE_MINUS_SRC_ALPHA = 771;
  var GL_DST_COLOR = 774;
  var PolygonBatcher = class _PolygonBatcher {
    static disableCulling = false;
    context;
    drawCalls = 0;
    static globalDrawCalls = 0;
    isDrawing = false;
    mesh;
    shader = null;
    lastTexture = null;
    verticesLength = 0;
    indicesLength = 0;
    srcColorBlend;
    srcAlphaBlend;
    dstBlend;
    cullWasEnabled = false;
    constructor(context, twoColorTint = true, maxVertices = 10920) {
      if (maxVertices > 10920) throw new Error("Can't have more than 10920 triangles per batch: " + maxVertices);
      this.context = context instanceof ManagedWebGLRenderingContext ? context : new ManagedWebGLRenderingContext(context);
      let attributes = twoColorTint ? [new Position2Attribute(), new ColorAttribute(), new TexCoordAttribute(), new Color2Attribute()] : [new Position2Attribute(), new ColorAttribute(), new TexCoordAttribute()];
      this.mesh = new Mesh(context, attributes, maxVertices, maxVertices * 3);
      let gl = this.context.gl;
      this.srcColorBlend = gl.SRC_ALPHA;
      this.srcAlphaBlend = gl.ONE;
      this.dstBlend = gl.ONE_MINUS_SRC_ALPHA;
    }
    begin(shader) {
      if (this.isDrawing) throw new Error("PolygonBatch is already drawing. Call PolygonBatch.end() before calling PolygonBatch.begin()");
      this.drawCalls = 0;
      this.shader = shader;
      this.lastTexture = null;
      this.isDrawing = true;
      let gl = this.context.gl;
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(this.srcColorBlend, this.dstBlend, this.srcAlphaBlend, this.dstBlend);
      if (_PolygonBatcher.disableCulling) {
        this.cullWasEnabled = gl.isEnabled(gl.CULL_FACE);
        if (this.cullWasEnabled) gl.disable(gl.CULL_FACE);
      }
    }
    static blendModesGL = [
      { srcRgb: GL_SRC_ALPHA, srcRgbPma: GL_ONE, dstRgb: GL_ONE_MINUS_SRC_ALPHA, srcAlpha: GL_ONE },
      { srcRgb: GL_SRC_ALPHA, srcRgbPma: GL_ONE, dstRgb: GL_ONE, srcAlpha: GL_ONE },
      { srcRgb: GL_DST_COLOR, srcRgbPma: GL_DST_COLOR, dstRgb: GL_ONE_MINUS_SRC_ALPHA, srcAlpha: GL_ONE },
      { srcRgb: GL_ONE, srcRgbPma: GL_ONE, dstRgb: GL_ONE_MINUS_SRC_COLOR, srcAlpha: GL_ONE }
    ];
    setBlendMode(blendMode, premultipliedAlpha) {
      const blendModeGL = _PolygonBatcher.blendModesGL[blendMode];
      const srcColorBlend = premultipliedAlpha ? blendModeGL.srcRgbPma : blendModeGL.srcRgb;
      const srcAlphaBlend = blendModeGL.srcAlpha;
      const dstBlend = blendModeGL.dstRgb;
      if (this.srcColorBlend == srcColorBlend && this.srcAlphaBlend == srcAlphaBlend && this.dstBlend == dstBlend) return;
      this.srcColorBlend = srcColorBlend;
      this.srcAlphaBlend = srcAlphaBlend;
      this.dstBlend = dstBlend;
      if (this.isDrawing) {
        this.flush();
      }
      let gl = this.context.gl;
      gl.blendFuncSeparate(srcColorBlend, dstBlend, srcAlphaBlend, dstBlend);
    }
    draw(texture, vertices, indices) {
      if (texture != this.lastTexture) {
        this.flush();
        this.lastTexture = texture;
      } else if (this.verticesLength + vertices.length > this.mesh.getVertices().length || this.indicesLength + indices.length > this.mesh.getIndices().length) {
        this.flush();
      }
      let indexStart = this.mesh.numVertices();
      this.mesh.getVertices().set(vertices, this.verticesLength);
      this.verticesLength += vertices.length;
      this.mesh.setVerticesLength(this.verticesLength);
      let indicesArray = this.mesh.getIndices();
      for (let i = this.indicesLength, j = 0; j < indices.length; i++, j++)
        indicesArray[i] = indices[j] + indexStart;
      this.indicesLength += indices.length;
      this.mesh.setIndicesLength(this.indicesLength);
    }
    flush() {
      if (this.verticesLength == 0) return;
      if (!this.lastTexture) throw new Error("No texture set.");
      if (!this.shader) throw new Error("No shader set.");
      this.lastTexture.bind();
      this.mesh.draw(this.shader, this.context.gl.TRIANGLES);
      this.verticesLength = 0;
      this.indicesLength = 0;
      this.mesh.setVerticesLength(0);
      this.mesh.setIndicesLength(0);
      this.drawCalls++;
      _PolygonBatcher.globalDrawCalls++;
    }
    end() {
      if (!this.isDrawing) throw new Error("PolygonBatch is not drawing. Call PolygonBatch.begin() before calling PolygonBatch.end()");
      if (this.verticesLength > 0 || this.indicesLength > 0) this.flush();
      this.shader = null;
      this.lastTexture = null;
      this.isDrawing = false;
      let gl = this.context.gl;
      gl.disable(gl.BLEND);
      if (_PolygonBatcher.disableCulling) {
        if (this.cullWasEnabled) gl.enable(gl.CULL_FACE);
      }
    }
    getDrawCalls() {
      return this.drawCalls;
    }
    static getAndResetGlobalDrawCalls() {
      let result = _PolygonBatcher.globalDrawCalls;
      _PolygonBatcher.globalDrawCalls = 0;
      return result;
    }
    dispose() {
      this.mesh.dispose();
    }
  };

  // spine-webgl/src/ShapeRenderer.ts
  var ShapeRenderer = class {
    context;
    isDrawing = false;
    mesh;
    shapeType = 4 /* Filled */;
    color = new Color(1, 1, 1, 1);
    shader = null;
    vertexIndex = 0;
    tmp = new Vector2();
    srcColorBlend;
    srcAlphaBlend;
    dstBlend;
    constructor(context, maxVertices = 10920) {
      if (maxVertices > 10920) throw new Error("Can't have more than 10920 triangles per batch: " + maxVertices);
      this.context = context instanceof ManagedWebGLRenderingContext ? context : new ManagedWebGLRenderingContext(context);
      this.mesh = new Mesh(context, [new Position2Attribute(), new ColorAttribute()], maxVertices, 0);
      let gl = this.context.gl;
      this.srcColorBlend = gl.SRC_ALPHA;
      this.srcAlphaBlend = gl.ONE;
      this.dstBlend = gl.ONE_MINUS_SRC_ALPHA;
    }
    begin(shader) {
      if (this.isDrawing) throw new Error("ShapeRenderer.begin() has already been called");
      this.shader = shader;
      this.vertexIndex = 0;
      this.isDrawing = true;
      let gl = this.context.gl;
      gl.enable(gl.BLEND);
      gl.blendFuncSeparate(this.srcColorBlend, this.dstBlend, this.srcAlphaBlend, this.dstBlend);
    }
    setBlendMode(srcColorBlend, srcAlphaBlend, dstBlend) {
      this.srcColorBlend = srcColorBlend;
      this.srcAlphaBlend = srcAlphaBlend;
      this.dstBlend = dstBlend;
      if (this.isDrawing) {
        this.flush();
        let gl = this.context.gl;
        gl.blendFuncSeparate(srcColorBlend, dstBlend, srcAlphaBlend, dstBlend);
      }
    }
    setColor(color) {
      this.color.setFromColor(color);
    }
    setColorWith(r, g, b, a) {
      this.color.set(r, g, b, a);
    }
    point(x, y, color) {
      this.check(0 /* Point */, 1);
      if (!color) color = this.color;
      this.vertex(x, y, color);
    }
    line(x, y, x2, y2, color) {
      this.check(1 /* Line */, 2);
      let vertices = this.mesh.getVertices();
      let idx = this.vertexIndex;
      if (!color) color = this.color;
      this.vertex(x, y, color);
      this.vertex(x2, y2, color);
    }
    triangle(filled, x, y, x2, y2, x3, y3, color, color2, color3) {
      this.check(filled ? 4 /* Filled */ : 1 /* Line */, 3);
      let vertices = this.mesh.getVertices();
      let idx = this.vertexIndex;
      if (!color) color = this.color;
      if (!color2) color2 = this.color;
      if (!color3) color3 = this.color;
      if (filled) {
        this.vertex(x, y, color);
        this.vertex(x2, y2, color2);
        this.vertex(x3, y3, color3);
      } else {
        this.vertex(x, y, color);
        this.vertex(x2, y2, color2);
        this.vertex(x2, y2, color);
        this.vertex(x3, y3, color2);
        this.vertex(x3, y3, color);
        this.vertex(x, y, color2);
      }
    }
    quad(filled, x, y, x2, y2, x3, y3, x4, y4, color, color2, color3, color4) {
      this.check(filled ? 4 /* Filled */ : 1 /* Line */, 3);
      let vertices = this.mesh.getVertices();
      let idx = this.vertexIndex;
      if (!color) color = this.color;
      if (!color2) color2 = this.color;
      if (!color3) color3 = this.color;
      if (!color4) color4 = this.color;
      if (filled) {
        this.vertex(x, y, color);
        this.vertex(x2, y2, color2);
        this.vertex(x3, y3, color3);
        this.vertex(x3, y3, color3);
        this.vertex(x4, y4, color4);
        this.vertex(x, y, color);
      } else {
        this.vertex(x, y, color);
        this.vertex(x2, y2, color2);
        this.vertex(x2, y2, color2);
        this.vertex(x3, y3, color3);
        this.vertex(x3, y3, color3);
        this.vertex(x4, y4, color4);
        this.vertex(x4, y4, color4);
        this.vertex(x, y, color);
      }
    }
    rect(filled, x, y, width, height, color) {
      this.quad(filled, x, y, x + width, y, x + width, y + height, x, y + height, color, color, color, color);
    }
    rectLine(filled, x1, y1, x2, y2, width, color) {
      this.check(filled ? 4 /* Filled */ : 1 /* Line */, 8);
      if (!color) color = this.color;
      let t = this.tmp.set(y2 - y1, x1 - x2);
      t.normalize();
      width *= 0.5;
      let tx = t.x * width;
      let ty = t.y * width;
      if (!filled) {
        this.vertex(x1 + tx, y1 + ty, color);
        this.vertex(x1 - tx, y1 - ty, color);
        this.vertex(x2 + tx, y2 + ty, color);
        this.vertex(x2 - tx, y2 - ty, color);
        this.vertex(x2 + tx, y2 + ty, color);
        this.vertex(x1 + tx, y1 + ty, color);
        this.vertex(x2 - tx, y2 - ty, color);
        this.vertex(x1 - tx, y1 - ty, color);
      } else {
        this.vertex(x1 + tx, y1 + ty, color);
        this.vertex(x1 - tx, y1 - ty, color);
        this.vertex(x2 + tx, y2 + ty, color);
        this.vertex(x2 - tx, y2 - ty, color);
        this.vertex(x2 + tx, y2 + ty, color);
        this.vertex(x1 - tx, y1 - ty, color);
      }
    }
    x(x, y, size) {
      this.line(x - size, y - size, x + size, y + size);
      this.line(x - size, y + size, x + size, y - size);
    }
    polygon(polygonVertices, offset, count, color) {
      if (count < 3) throw new Error("Polygon must contain at least 3 vertices");
      this.check(1 /* Line */, count * 2);
      if (!color) color = this.color;
      let vertices = this.mesh.getVertices();
      let idx = this.vertexIndex;
      offset <<= 1;
      count <<= 1;
      let firstX = polygonVertices[offset];
      let firstY = polygonVertices[offset + 1];
      let last = offset + count;
      for (let i = offset, n = offset + count - 2; i < n; i += 2) {
        let x1 = polygonVertices[i];
        let y1 = polygonVertices[i + 1];
        let x2 = 0;
        let y2 = 0;
        if (i + 2 >= last) {
          x2 = firstX;
          y2 = firstY;
        } else {
          x2 = polygonVertices[i + 2];
          y2 = polygonVertices[i + 3];
        }
        this.vertex(x1, y1, color);
        this.vertex(x2, y2, color);
      }
    }
    circle(filled, x, y, radius, color, segments = 0) {
      if (segments == 0) segments = Math.max(1, 6 * MathUtils.cbrt(radius) | 0);
      if (segments <= 0) throw new Error("segments must be > 0.");
      if (!color) color = this.color;
      let angle = 2 * MathUtils.PI / segments;
      let cos = Math.cos(angle);
      let sin = Math.sin(angle);
      let cx = radius, cy = 0;
      if (!filled) {
        this.check(1 /* Line */, segments * 2 + 2);
        for (let i = 0; i < segments; i++) {
          this.vertex(x + cx, y + cy, color);
          let temp2 = cx;
          cx = cos * cx - sin * cy;
          cy = sin * temp2 + cos * cy;
          this.vertex(x + cx, y + cy, color);
        }
        this.vertex(x + cx, y + cy, color);
      } else {
        this.check(4 /* Filled */, segments * 3 + 3);
        segments--;
        for (let i = 0; i < segments; i++) {
          this.vertex(x, y, color);
          this.vertex(x + cx, y + cy, color);
          let temp2 = cx;
          cx = cos * cx - sin * cy;
          cy = sin * temp2 + cos * cy;
          this.vertex(x + cx, y + cy, color);
        }
        this.vertex(x, y, color);
        this.vertex(x + cx, y + cy, color);
      }
      let temp = cx;
      cx = radius;
      cy = 0;
      this.vertex(x + cx, y + cy, color);
    }
    curve(x1, y1, cx1, cy1, cx2, cy2, x2, y2, segments, color) {
      this.check(1 /* Line */, segments * 2 + 2);
      if (!color) color = this.color;
      let subdiv_step = 1 / segments;
      let subdiv_step2 = subdiv_step * subdiv_step;
      let subdiv_step3 = subdiv_step * subdiv_step * subdiv_step;
      let pre1 = 3 * subdiv_step;
      let pre2 = 3 * subdiv_step2;
      let pre4 = 6 * subdiv_step2;
      let pre5 = 6 * subdiv_step3;
      let tmp1x = x1 - cx1 * 2 + cx2;
      let tmp1y = y1 - cy1 * 2 + cy2;
      let tmp2x = (cx1 - cx2) * 3 - x1 + x2;
      let tmp2y = (cy1 - cy2) * 3 - y1 + y2;
      let fx = x1;
      let fy = y1;
      let dfx = (cx1 - x1) * pre1 + tmp1x * pre2 + tmp2x * subdiv_step3;
      let dfy = (cy1 - y1) * pre1 + tmp1y * pre2 + tmp2y * subdiv_step3;
      let ddfx = tmp1x * pre4 + tmp2x * pre5;
      let ddfy = tmp1y * pre4 + tmp2y * pre5;
      let dddfx = tmp2x * pre5;
      let dddfy = tmp2y * pre5;
      while (segments-- > 0) {
        this.vertex(fx, fy, color);
        fx += dfx;
        fy += dfy;
        dfx += ddfx;
        dfy += ddfy;
        ddfx += dddfx;
        ddfy += dddfy;
        this.vertex(fx, fy, color);
      }
      this.vertex(fx, fy, color);
      this.vertex(x2, y2, color);
    }
    vertex(x, y, color) {
      let idx = this.vertexIndex;
      let vertices = this.mesh.getVertices();
      vertices[idx++] = x;
      vertices[idx++] = y;
      vertices[idx++] = color.r;
      vertices[idx++] = color.g;
      vertices[idx++] = color.b;
      vertices[idx++] = color.a;
      this.vertexIndex = idx;
    }
    end() {
      if (!this.isDrawing) throw new Error("ShapeRenderer.begin() has not been called");
      this.flush();
      let gl = this.context.gl;
      gl.disable(gl.BLEND);
      this.isDrawing = false;
    }
    flush() {
      if (this.vertexIndex == 0) return;
      if (!this.shader) throw new Error("No shader set.");
      this.mesh.setVerticesLength(this.vertexIndex);
      this.mesh.draw(this.shader, this.shapeType);
      this.vertexIndex = 0;
    }
    check(shapeType, numVertices) {
      if (!this.isDrawing) throw new Error("ShapeRenderer.begin() has not been called");
      if (this.shapeType == shapeType) {
        if (this.mesh.maxVertices() - this.mesh.numVertices() < numVertices) this.flush();
        else return;
      } else {
        this.flush();
        this.shapeType = shapeType;
      }
    }
    dispose() {
      this.mesh.dispose();
    }
  };
  var ShapeType = /* @__PURE__ */ ((ShapeType2) => {
    ShapeType2[ShapeType2["Point"] = 0] = "Point";
    ShapeType2[ShapeType2["Line"] = 1] = "Line";
    ShapeType2[ShapeType2["Filled"] = 4] = "Filled";
    return ShapeType2;
  })(ShapeType || {});

  // spine-webgl/src/SkeletonDebugRenderer.ts
  var SkeletonDebugRenderer = class _SkeletonDebugRenderer {
    boneLineColor = new Color(1, 0, 0, 1);
    boneOriginColor = new Color(0, 1, 0, 1);
    attachmentLineColor = new Color(0, 0, 1, 0.5);
    triangleLineColor = new Color(1, 0.64, 0, 0.5);
    pathColor = new Color().setFromString("FF7F00");
    clipColor = new Color(0.8, 0, 0, 2);
    aabbColor = new Color(0, 1, 0, 0.5);
    drawBones = true;
    drawRegionAttachments = true;
    drawBoundingBoxes = true;
    drawMeshHull = true;
    drawMeshTriangles = true;
    drawPaths = true;
    drawSkeletonXY = false;
    drawClipping = true;
    premultipliedAlpha = false;
    scale = 1;
    boneWidth = 2;
    context;
    bounds = new SkeletonBounds();
    temp = new Array();
    vertices = Utils.newFloatArray(2 * 1024);
    static LIGHT_GRAY = new Color(192 / 255, 192 / 255, 192 / 255, 1);
    static GREEN = new Color(0, 1, 0, 1);
    constructor(context) {
      this.context = context instanceof ManagedWebGLRenderingContext ? context : new ManagedWebGLRenderingContext(context);
    }
    draw(shapes, skeleton, ignoredBones) {
      let skeletonX = skeleton.x;
      let skeletonY = skeleton.y;
      let gl = this.context.gl;
      let srcFunc = this.premultipliedAlpha ? gl.ONE : gl.SRC_ALPHA;
      shapes.setBlendMode(srcFunc, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      let bones = skeleton.bones;
      if (this.drawBones) {
        shapes.setColor(this.boneLineColor);
        for (let i = 0, n = bones.length; i < n; i++) {
          let bone = bones[i];
          if (ignoredBones && ignoredBones.indexOf(bone.data.name) > -1) continue;
          if (!bone.parent) continue;
          let x = bone.data.length * bone.a + bone.worldX;
          let y = bone.data.length * bone.c + bone.worldY;
          shapes.rectLine(true, bone.worldX, bone.worldY, x, y, this.boneWidth * this.scale);
        }
        if (this.drawSkeletonXY) shapes.x(skeletonX, skeletonY, 4 * this.scale);
      }
      if (this.drawRegionAttachments) {
        shapes.setColor(this.attachmentLineColor);
        let slots = skeleton.slots;
        for (let i = 0, n = slots.length; i < n; i++) {
          let slot = slots[i];
          let attachment = slot.getAttachment();
          if (attachment instanceof RegionAttachment) {
            let regionAttachment = attachment;
            let vertices = this.vertices;
            regionAttachment.computeWorldVertices(slot, vertices, 0, 2);
            shapes.line(vertices[0], vertices[1], vertices[2], vertices[3]);
            shapes.line(vertices[2], vertices[3], vertices[4], vertices[5]);
            shapes.line(vertices[4], vertices[5], vertices[6], vertices[7]);
            shapes.line(vertices[6], vertices[7], vertices[0], vertices[1]);
          }
        }
      }
      if (this.drawMeshHull || this.drawMeshTriangles) {
        let slots = skeleton.slots;
        for (let i = 0, n = slots.length; i < n; i++) {
          let slot = slots[i];
          if (!slot.bone.active) continue;
          let attachment = slot.getAttachment();
          if (!(attachment instanceof MeshAttachment)) continue;
          let mesh = attachment;
          let vertices = this.vertices;
          mesh.computeWorldVertices(slot, 0, mesh.worldVerticesLength, vertices, 0, 2);
          let triangles = mesh.triangles;
          let hullLength = mesh.hullLength;
          if (this.drawMeshTriangles) {
            shapes.setColor(this.triangleLineColor);
            for (let ii = 0, nn = triangles.length; ii < nn; ii += 3) {
              let v1 = triangles[ii] * 2, v2 = triangles[ii + 1] * 2, v3 = triangles[ii + 2] * 2;
              shapes.triangle(
                false,
                vertices[v1],
                vertices[v1 + 1],
                //
                vertices[v2],
                vertices[v2 + 1],
                //
                vertices[v3],
                vertices[v3 + 1]
                //
              );
            }
          }
          if (this.drawMeshHull && hullLength > 0) {
            shapes.setColor(this.attachmentLineColor);
            hullLength = (hullLength >> 1) * 2;
            let lastX = vertices[hullLength - 2], lastY = vertices[hullLength - 1];
            for (let ii = 0, nn = hullLength; ii < nn; ii += 2) {
              let x = vertices[ii], y = vertices[ii + 1];
              shapes.line(x, y, lastX, lastY);
              lastX = x;
              lastY = y;
            }
          }
        }
      }
      if (this.drawBoundingBoxes) {
        let bounds = this.bounds;
        bounds.update(skeleton, true);
        shapes.setColor(this.aabbColor);
        shapes.rect(false, bounds.minX, bounds.minY, bounds.getWidth(), bounds.getHeight());
        let polygons = bounds.polygons;
        let boxes = bounds.boundingBoxes;
        for (let i = 0, n = polygons.length; i < n; i++) {
          let polygon = polygons[i];
          shapes.setColor(boxes[i].color);
          shapes.polygon(polygon, 0, polygon.length);
        }
      }
      if (this.drawPaths) {
        let slots = skeleton.slots;
        for (let i = 0, n = slots.length; i < n; i++) {
          let slot = slots[i];
          if (!slot.bone.active) continue;
          let attachment = slot.getAttachment();
          if (!(attachment instanceof PathAttachment)) continue;
          let path = attachment;
          let nn = path.worldVerticesLength;
          let world = this.temp = Utils.setArraySize(this.temp, nn, 0);
          path.computeWorldVertices(slot, 0, nn, world, 0, 2);
          let color = this.pathColor;
          let x1 = world[2], y1 = world[3], x2 = 0, y2 = 0;
          if (path.closed) {
            shapes.setColor(color);
            let cx1 = world[0], cy1 = world[1], cx2 = world[nn - 2], cy2 = world[nn - 1];
            x2 = world[nn - 4];
            y2 = world[nn - 3];
            shapes.curve(x1, y1, cx1, cy1, cx2, cy2, x2, y2, 32);
            shapes.setColor(_SkeletonDebugRenderer.LIGHT_GRAY);
            shapes.line(x1, y1, cx1, cy1);
            shapes.line(x2, y2, cx2, cy2);
          }
          nn -= 4;
          for (let ii = 4; ii < nn; ii += 6) {
            let cx1 = world[ii], cy1 = world[ii + 1], cx2 = world[ii + 2], cy2 = world[ii + 3];
            x2 = world[ii + 4];
            y2 = world[ii + 5];
            shapes.setColor(color);
            shapes.curve(x1, y1, cx1, cy1, cx2, cy2, x2, y2, 32);
            shapes.setColor(_SkeletonDebugRenderer.LIGHT_GRAY);
            shapes.line(x1, y1, cx1, cy1);
            shapes.line(x2, y2, cx2, cy2);
            x1 = x2;
            y1 = y2;
          }
        }
      }
      if (this.drawBones) {
        shapes.setColor(this.boneOriginColor);
        for (let i = 0, n = bones.length; i < n; i++) {
          let bone = bones[i];
          if (ignoredBones && ignoredBones.indexOf(bone.data.name) > -1) continue;
          shapes.circle(true, bone.worldX, bone.worldY, 3 * this.scale, this.boneOriginColor, 8);
        }
      }
      if (this.drawClipping) {
        let slots = skeleton.slots;
        shapes.setColor(this.clipColor);
        for (let i = 0, n = slots.length; i < n; i++) {
          let slot = slots[i];
          if (!slot.bone.active) continue;
          let attachment = slot.getAttachment();
          if (!(attachment instanceof ClippingAttachment)) continue;
          let clip = attachment;
          let nn = clip.worldVerticesLength;
          let world = this.temp = Utils.setArraySize(this.temp, nn, 0);
          clip.computeWorldVertices(slot, 0, nn, world, 0, 2);
          for (let i2 = 0, n2 = world.length; i2 < n2; i2 += 2) {
            let x = world[i2];
            let y = world[i2 + 1];
            let x2 = world[(i2 + 2) % world.length];
            let y2 = world[(i2 + 3) % world.length];
            shapes.line(x, y, x2, y2);
          }
        }
      }
    }
    dispose() {
    }
  };

  // spine-webgl/src/SkeletonRenderer.ts
  var Renderable = class {
    constructor(vertices, numVertices, numFloats) {
      this.vertices = vertices;
      this.numVertices = numVertices;
      this.numFloats = numFloats;
    }
  };
  var SkeletonRenderer = class _SkeletonRenderer {
    static QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
    premultipliedAlpha = false;
    tempColor = new Color();
    tempColor2 = new Color();
    vertices;
    vertexSize = 2 + 2 + 4;
    twoColorTint = false;
    renderable = new Renderable([], 0, 0);
    clipper = new SkeletonClipping();
    temp = new Vector2();
    temp2 = new Vector2();
    temp3 = new Color();
    temp4 = new Color();
    constructor(context, twoColorTint = true) {
      this.twoColorTint = twoColorTint;
      if (twoColorTint)
        this.vertexSize += 4;
      this.vertices = Utils.newFloatArray(this.vertexSize * 1024);
    }
    draw(batcher, skeleton, slotRangeStart = -1, slotRangeEnd = -1, transformer = null) {
      let clipper = this.clipper;
      let premultipliedAlpha = this.premultipliedAlpha;
      let twoColorTint = this.twoColorTint;
      let blendMode = null;
      let renderable = this.renderable;
      let uvs;
      let triangles;
      let drawOrder = skeleton.drawOrder;
      let attachmentColor;
      let skeletonColor = skeleton.color;
      let vertexSize = twoColorTint ? 12 : 8;
      let inRange = false;
      if (slotRangeStart == -1) inRange = true;
      for (let i = 0, n = drawOrder.length; i < n; i++) {
        let clippedVertexSize = clipper.isClipping() ? 2 : vertexSize;
        let slot = drawOrder[i];
        if (!slot.bone.active) {
          clipper.clipEndWithSlot(slot);
          continue;
        }
        if (slotRangeStart >= 0 && slotRangeStart == slot.data.index) {
          inRange = true;
        }
        if (!inRange) {
          clipper.clipEndWithSlot(slot);
          continue;
        }
        if (slotRangeEnd >= 0 && slotRangeEnd == slot.data.index) {
          inRange = false;
        }
        let attachment = slot.getAttachment();
        let texture;
        if (attachment instanceof RegionAttachment) {
          let region = attachment;
          renderable.vertices = this.vertices;
          renderable.numVertices = 4;
          renderable.numFloats = clippedVertexSize << 2;
          region.computeWorldVertices(slot, renderable.vertices, 0, clippedVertexSize);
          triangles = _SkeletonRenderer.QUAD_TRIANGLES;
          uvs = region.uvs;
          texture = region.region.texture;
          attachmentColor = region.color;
        } else if (attachment instanceof MeshAttachment) {
          let mesh = attachment;
          renderable.vertices = this.vertices;
          renderable.numVertices = mesh.worldVerticesLength >> 1;
          renderable.numFloats = renderable.numVertices * clippedVertexSize;
          if (renderable.numFloats > renderable.vertices.length) {
            renderable.vertices = this.vertices = Utils.newFloatArray(renderable.numFloats);
          }
          mesh.computeWorldVertices(slot, 0, mesh.worldVerticesLength, renderable.vertices, 0, clippedVertexSize);
          triangles = mesh.triangles;
          texture = mesh.region.texture;
          uvs = mesh.uvs;
          attachmentColor = mesh.color;
        } else if (attachment instanceof ClippingAttachment) {
          let clip = attachment;
          clipper.clipStart(slot, clip);
          continue;
        } else {
          clipper.clipEndWithSlot(slot);
          continue;
        }
        if (texture) {
          let slotColor = slot.color;
          let finalColor = this.tempColor;
          finalColor.r = skeletonColor.r * slotColor.r * attachmentColor.r;
          finalColor.g = skeletonColor.g * slotColor.g * attachmentColor.g;
          finalColor.b = skeletonColor.b * slotColor.b * attachmentColor.b;
          finalColor.a = skeletonColor.a * slotColor.a * attachmentColor.a;
          if (premultipliedAlpha) {
            finalColor.r *= finalColor.a;
            finalColor.g *= finalColor.a;
            finalColor.b *= finalColor.a;
          }
          let darkColor = this.tempColor2;
          if (!slot.darkColor)
            darkColor.set(0, 0, 0, 1);
          else {
            if (premultipliedAlpha) {
              darkColor.r = slot.darkColor.r * finalColor.a;
              darkColor.g = slot.darkColor.g * finalColor.a;
              darkColor.b = slot.darkColor.b * finalColor.a;
            } else {
              darkColor.setFromColor(slot.darkColor);
            }
            darkColor.a = premultipliedAlpha ? 1 : 0;
          }
          let slotBlendMode = slot.data.blendMode;
          if (slotBlendMode != blendMode) {
            blendMode = slotBlendMode;
            batcher.setBlendMode(blendMode, premultipliedAlpha);
          }
          if (clipper.isClipping()) {
            clipper.clipTriangles(renderable.vertices, triangles, triangles.length, uvs, finalColor, darkColor, twoColorTint);
            let clippedVertices = new Float32Array(clipper.clippedVertices);
            let clippedTriangles = clipper.clippedTriangles;
            if (transformer) transformer(clippedVertices, clippedVertices.length, vertexSize);
            batcher.draw(texture, clippedVertices, clippedTriangles);
          } else {
            let verts = renderable.vertices;
            if (!twoColorTint) {
              for (let v = 2, u = 0, n2 = renderable.numFloats; v < n2; v += vertexSize, u += 2) {
                verts[v] = finalColor.r;
                verts[v + 1] = finalColor.g;
                verts[v + 2] = finalColor.b;
                verts[v + 3] = finalColor.a;
                verts[v + 4] = uvs[u];
                verts[v + 5] = uvs[u + 1];
              }
            } else {
              for (let v = 2, u = 0, n2 = renderable.numFloats; v < n2; v += vertexSize, u += 2) {
                verts[v] = finalColor.r;
                verts[v + 1] = finalColor.g;
                verts[v + 2] = finalColor.b;
                verts[v + 3] = finalColor.a;
                verts[v + 4] = uvs[u];
                verts[v + 5] = uvs[u + 1];
                verts[v + 6] = darkColor.r;
                verts[v + 7] = darkColor.g;
                verts[v + 8] = darkColor.b;
                verts[v + 9] = darkColor.a;
              }
            }
            let view = renderable.vertices.subarray(0, renderable.numFloats);
            if (transformer) transformer(renderable.vertices, renderable.numFloats, vertexSize);
            batcher.draw(texture, view, triangles);
          }
        }
        clipper.clipEndWithSlot(slot);
      }
      clipper.clipEnd();
    }
    /** Returns the {@link SkeletonClipping} used by this renderer for use with e.g. {@link Skeleton.getBounds} **/
    getSkeletonClipping() {
      return this.clipper;
    }
  };

  // spine-webgl/src/SceneRenderer.ts
  var quad = [
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0
  ];
  var QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
  var WHITE = new Color(1, 1, 1, 1);
  var SceneRenderer = class {
    context;
    canvas;
    camera;
    batcher;
    twoColorTint = false;
    batcherShader;
    shapes;
    shapesShader;
    activeRenderer = null;
    skeletonRenderer;
    skeletonDebugRenderer;
    constructor(canvas, context, twoColorTint = true) {
      this.canvas = canvas;
      this.context = context instanceof ManagedWebGLRenderingContext ? context : new ManagedWebGLRenderingContext(context);
      this.twoColorTint = twoColorTint;
      this.camera = new OrthoCamera(canvas.width, canvas.height);
      this.batcherShader = twoColorTint ? Shader.newTwoColoredTextured(this.context) : Shader.newColoredTextured(this.context);
      this.batcher = new PolygonBatcher(this.context, twoColorTint);
      this.shapesShader = Shader.newColored(this.context);
      this.shapes = new ShapeRenderer(this.context);
      this.skeletonRenderer = new SkeletonRenderer(this.context, twoColorTint);
      this.skeletonDebugRenderer = new SkeletonDebugRenderer(this.context);
    }
    dispose() {
      this.batcher.dispose();
      this.batcherShader.dispose();
      this.shapes.dispose();
      this.shapesShader.dispose();
      this.skeletonDebugRenderer.dispose();
    }
    begin() {
      this.camera.update();
      this.enableRenderer(this.batcher);
    }
    drawSkeleton(skeleton, premultipliedAlpha = false, slotRangeStart = -1, slotRangeEnd = -1, transform = null) {
      this.enableRenderer(this.batcher);
      this.skeletonRenderer.premultipliedAlpha = premultipliedAlpha;
      this.skeletonRenderer.draw(this.batcher, skeleton, slotRangeStart, slotRangeEnd, transform);
    }
    drawSkeletonDebug(skeleton, premultipliedAlpha = false, ignoredBones) {
      this.enableRenderer(this.shapes);
      this.skeletonDebugRenderer.premultipliedAlpha = premultipliedAlpha;
      this.skeletonDebugRenderer.draw(this.shapes, skeleton, ignoredBones);
    }
    drawTexture(texture, x, y, width, height, color) {
      this.enableRenderer(this.batcher);
      if (!color) color = WHITE;
      var i = 0;
      quad[i++] = x;
      quad[i++] = y;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = 0;
      quad[i++] = 1;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x + width;
      quad[i++] = y;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = 1;
      quad[i++] = 1;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x + width;
      quad[i++] = y + height;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = 1;
      quad[i++] = 0;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x;
      quad[i++] = y + height;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = 0;
      quad[i++] = 0;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i] = 0;
      }
      this.batcher.draw(texture, quad, QUAD_TRIANGLES);
    }
    drawTextureUV(texture, x, y, width, height, u, v, u2, v2, color) {
      this.enableRenderer(this.batcher);
      if (!color) color = WHITE;
      var i = 0;
      quad[i++] = x;
      quad[i++] = y;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = u;
      quad[i++] = v;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x + width;
      quad[i++] = y;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = u2;
      quad[i++] = v;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x + width;
      quad[i++] = y + height;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = u2;
      quad[i++] = v2;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x;
      quad[i++] = y + height;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = u;
      quad[i++] = v2;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i] = 0;
      }
      this.batcher.draw(texture, quad, QUAD_TRIANGLES);
    }
    drawTextureRotated(texture, x, y, width, height, pivotX, pivotY, angle, color) {
      this.enableRenderer(this.batcher);
      if (!color) color = WHITE;
      let worldOriginX = x + pivotX;
      let worldOriginY = y + pivotY;
      let fx = -pivotX;
      let fy = -pivotY;
      let fx2 = width - pivotX;
      let fy2 = height - pivotY;
      let p1x = fx;
      let p1y = fy;
      let p2x = fx;
      let p2y = fy2;
      let p3x = fx2;
      let p3y = fy2;
      let p4x = fx2;
      let p4y = fy;
      let x1 = 0;
      let y1 = 0;
      let x2 = 0;
      let y2 = 0;
      let x3 = 0;
      let y3 = 0;
      let x4 = 0;
      let y4 = 0;
      if (angle != 0) {
        let cos = MathUtils.cosDeg(angle);
        let sin = MathUtils.sinDeg(angle);
        x1 = cos * p1x - sin * p1y;
        y1 = sin * p1x + cos * p1y;
        x4 = cos * p2x - sin * p2y;
        y4 = sin * p2x + cos * p2y;
        x3 = cos * p3x - sin * p3y;
        y3 = sin * p3x + cos * p3y;
        x2 = x3 + (x1 - x4);
        y2 = y3 + (y1 - y4);
      } else {
        x1 = p1x;
        y1 = p1y;
        x4 = p2x;
        y4 = p2y;
        x3 = p3x;
        y3 = p3y;
        x2 = p4x;
        y2 = p4y;
      }
      x1 += worldOriginX;
      y1 += worldOriginY;
      x2 += worldOriginX;
      y2 += worldOriginY;
      x3 += worldOriginX;
      y3 += worldOriginY;
      x4 += worldOriginX;
      y4 += worldOriginY;
      var i = 0;
      quad[i++] = x1;
      quad[i++] = y1;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = 0;
      quad[i++] = 1;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x2;
      quad[i++] = y2;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = 1;
      quad[i++] = 1;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x3;
      quad[i++] = y3;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = 1;
      quad[i++] = 0;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x4;
      quad[i++] = y4;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = 0;
      quad[i++] = 0;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i] = 0;
      }
      this.batcher.draw(texture, quad, QUAD_TRIANGLES);
    }
    drawRegion(region, x, y, width, height, color) {
      this.enableRenderer(this.batcher);
      if (!color) color = WHITE;
      var i = 0;
      quad[i++] = x;
      quad[i++] = y;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = region.u;
      quad[i++] = region.v2;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x + width;
      quad[i++] = y;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = region.u2;
      quad[i++] = region.v2;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x + width;
      quad[i++] = y + height;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = region.u2;
      quad[i++] = region.v;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
      }
      quad[i++] = x;
      quad[i++] = y + height;
      quad[i++] = color.r;
      quad[i++] = color.g;
      quad[i++] = color.b;
      quad[i++] = color.a;
      quad[i++] = region.u;
      quad[i++] = region.v;
      if (this.twoColorTint) {
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i++] = 0;
        quad[i] = 0;
      }
      this.batcher.draw(region.page.texture, quad, QUAD_TRIANGLES);
    }
    line(x, y, x2, y2, color, color2) {
      this.enableRenderer(this.shapes);
      this.shapes.line(x, y, x2, y2, color);
    }
    triangle(filled, x, y, x2, y2, x3, y3, color, color2, color3) {
      this.enableRenderer(this.shapes);
      this.shapes.triangle(filled, x, y, x2, y2, x3, y3, color, color2, color3);
    }
    quad(filled, x, y, x2, y2, x3, y3, x4, y4, color, color2, color3, color4) {
      this.enableRenderer(this.shapes);
      this.shapes.quad(filled, x, y, x2, y2, x3, y3, x4, y4, color, color2, color3, color4);
    }
    rect(filled, x, y, width, height, color) {
      this.enableRenderer(this.shapes);
      this.shapes.rect(filled, x, y, width, height, color);
    }
    rectLine(filled, x1, y1, x2, y2, width, color) {
      this.enableRenderer(this.shapes);
      this.shapes.rectLine(filled, x1, y1, x2, y2, width, color);
    }
    polygon(polygonVertices, offset, count, color) {
      this.enableRenderer(this.shapes);
      this.shapes.polygon(polygonVertices, offset, count, color);
    }
    circle(filled, x, y, radius, color, segments = 0) {
      this.enableRenderer(this.shapes);
      this.shapes.circle(filled, x, y, radius, color, segments);
    }
    curve(x1, y1, cx1, cy1, cx2, cy2, x2, y2, segments, color) {
      this.enableRenderer(this.shapes);
      this.shapes.curve(x1, y1, cx1, cy1, cx2, cy2, x2, y2, segments, color);
    }
    end() {
      if (this.activeRenderer === this.batcher) this.batcher.end();
      else if (this.activeRenderer === this.shapes) this.shapes.end();
      this.activeRenderer = null;
    }
    resize(resizeMode) {
      let canvas = this.canvas;
      var dpr = window.devicePixelRatio || 1;
      var w = Math.round(canvas.clientWidth * dpr);
      var h = Math.round(canvas.clientHeight * dpr);
      if (canvas.width != w || canvas.height != h) {
        canvas.width = w;
        canvas.height = h;
      }
      this.context.gl.viewport(0, 0, canvas.width, canvas.height);
      if (resizeMode === 1 /* Expand */)
        this.camera.setViewport(w, h);
      else if (resizeMode === 2 /* Fit */) {
        let sourceWidth = canvas.width, sourceHeight = canvas.height;
        let targetWidth = this.camera.viewportWidth, targetHeight = this.camera.viewportHeight;
        let targetRatio = targetHeight / targetWidth;
        let sourceRatio = sourceHeight / sourceWidth;
        let scale = targetRatio < sourceRatio ? targetWidth / sourceWidth : targetHeight / sourceHeight;
        this.camera.setViewport(sourceWidth * scale, sourceHeight * scale);
      }
      this.camera.update();
    }
    enableRenderer(renderer) {
      if (this.activeRenderer === renderer) return;
      this.end();
      if (renderer instanceof PolygonBatcher) {
        this.batcherShader.bind();
        this.batcherShader.setUniform4x4f(Shader.MVP_MATRIX, this.camera.projectionView.values);
        this.batcherShader.setUniformi("u_texture", 0);
        this.batcher.begin(this.batcherShader);
        this.activeRenderer = this.batcher;
      } else if (renderer instanceof ShapeRenderer) {
        this.shapesShader.bind();
        this.shapesShader.setUniform4x4f(Shader.MVP_MATRIX, this.camera.projectionView.values);
        this.shapes.begin(this.shapesShader);
        this.activeRenderer = this.shapes;
      } else
        this.activeRenderer = this.skeletonDebugRenderer;
    }
  };
  var ResizeMode = /* @__PURE__ */ ((ResizeMode2) => {
    ResizeMode2[ResizeMode2["Stretch"] = 0] = "Stretch";
    ResizeMode2[ResizeMode2["Expand"] = 1] = "Expand";
    ResizeMode2[ResizeMode2["Fit"] = 2] = "Fit";
    return ResizeMode2;
  })(ResizeMode || {});

  // spine-webgl/src/LoadingScreen.ts
  var spinnerImage;
  var logoImage;
  var loaded = 0;
  var FADE_IN = 1;
  var FADE_OUT = 1;
  var logoWidth = 165;
  var logoHeight = 108;
  var spinnerSize = 163;
  var LoadingScreen = class {
    renderer;
    logo = null;
    spinner = null;
    angle = 0;
    fadeOut = 0;
    fadeIn = 0;
    timeKeeper = new TimeKeeper();
    backgroundColor = new Color(0.135, 0.135, 0.135, 1);
    tempColor = new Color();
    constructor(renderer) {
      this.renderer = renderer;
      this.timeKeeper.maxDelta = 9;
      if (!logoImage) {
        let isSafari = navigator.userAgent.indexOf("Safari") > -1;
        let onload = () => loaded++;
        logoImage = new Image();
        logoImage.src = SPINE_LOGO_DATA;
        if (!isSafari) logoImage.crossOrigin = "anonymous";
        logoImage.onload = onload;
        spinnerImage = new Image();
        spinnerImage.src = SPINNER_DATA;
        if (!isSafari) spinnerImage.crossOrigin = "anonymous";
        spinnerImage.onload = onload;
      }
    }
    dispose() {
      this.logo?.dispose();
      this.spinner?.dispose();
    }
    draw(complete = false) {
      if (loaded < 2 || complete && this.fadeOut > FADE_OUT) return;
      this.timeKeeper.update();
      let a = Math.abs(Math.sin(this.timeKeeper.totalTime + 0.25));
      this.angle -= this.timeKeeper.delta * 200 * (1 + 1.5 * Math.pow(a, 5));
      let tempColor = this.tempColor;
      let renderer = this.renderer;
      let canvas = renderer.canvas;
      let gl = renderer.context.gl;
      renderer.resize(1 /* Expand */);
      renderer.camera.position.set(canvas.width / 2, canvas.height / 2, 0);
      renderer.batcher.setBlendMode(0 /* Normal */, true);
      if (complete) {
        this.fadeOut += this.timeKeeper.delta * (this.timeKeeper.totalTime < 1 ? 2 : 1);
        if (this.fadeOut > FADE_OUT) return;
        tempColor.setFromColor(this.backgroundColor);
        a = 1 - this.fadeOut / FADE_OUT;
        a = 1 - (a - 1) * (a - 1);
        tempColor.a *= a;
        if (tempColor.a > 0) {
          renderer.camera.zoom = 1;
          renderer.begin();
          renderer.quad(
            true,
            0,
            0,
            canvas.width,
            0,
            canvas.width,
            canvas.height,
            0,
            canvas.height,
            tempColor,
            tempColor,
            tempColor,
            tempColor
          );
          renderer.end();
        }
      } else {
        this.fadeIn += this.timeKeeper.delta;
        if (this.backgroundColor.a > 0) {
          gl.clearColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a);
          gl.clear(gl.COLOR_BUFFER_BIT);
        }
        a = 1;
      }
      a *= Math.min(this.fadeIn / FADE_IN, 1);
      tempColor.set(a, a, a, a);
      if (!this.logo) {
        this.logo = new GLTexture(renderer.context, logoImage);
        this.spinner = new GLTexture(renderer.context, spinnerImage);
      }
      renderer.camera.zoom = Math.max(1, spinnerSize / canvas.height);
      renderer.begin();
      renderer.drawTexture(this.logo, (canvas.width - logoWidth) / 2, (canvas.height - logoHeight) / 2, logoWidth, logoHeight, tempColor);
      if (this.spinner) renderer.drawTextureRotated(this.spinner, (canvas.width - spinnerSize) / 2, (canvas.height - spinnerSize) / 2, spinnerSize, spinnerSize, spinnerSize / 2, spinnerSize / 2, this.angle, tempColor);
      renderer.end();
    }
    drawInCoordinates(x, y) {
      if (loaded < 2) return;
      this.timeKeeper.update();
      let renderer = this.renderer;
      renderer.batcher.setBlendMode(0 /* Normal */, true);
      if (!this.logo) {
        this.logo = new GLTexture(renderer.context, logoImage);
        this.spinner = new GLTexture(renderer.context, spinnerImage);
      }
      const shiftedX = x - logoWidth / 2;
      const shiftedY = y - logoHeight / 2;
      renderer.drawTexture(this.logo, shiftedX, shiftedY, logoWidth, logoHeight);
      this.angle -= this.timeKeeper.delta * 500;
      if (this.spinner) renderer.drawTextureRotated(this.spinner, shiftedX, shiftedY - 25, spinnerSize, spinnerSize, spinnerSize / 2, spinnerSize / 2, this.angle);
    }
  };
  var SPINNER_DATA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKMAAACjCAYAAADmbK6AAAALKElEQVR42u2de2iW5R/GPzuqcwfnnKfNmafl5tTNHWzqNi3DEMQykcAoJSsySkspjSIk0iD/07Kf4R+FnVBDUTshZGpWUEJaaiWFgZlUFmXmIe3HNXthyebeZ77P9H13ffBG8Y8H7ut7vff93N/7fu4vGGPiFZiez/Qtw9lytJajfzfw9z/j+efPOv7cV8W+lUNY2a8T/ayTCRsWFLJA5rtUO1LLkV5p9LJeJizQiHeqnlOtmVFtdTGrrZkJCxYXsTgaI6r9MY4/UpNItW4mFDaXsTlaM6qVZlBq3UwofFrJp0HMWJ9DvXUzobCznJ1BzFjWlTLrZkJh/TDWBzFjTgo51s2EgnKI0Rrx+FiOWzNzVaym91Syx5qZsGBWb2ZFa0ZN6dbMhAWTcpkUrRmXD2K5NTNhgVbH0Zpxbl/mWjMTFvRIo0e0ZpzcncnWzISKtvmiMWNRJ4qslwmVXRXsas2Ix8ZwzFqZsGFREYtaM+Oaa1ljrUzYkJ9G/ok6TlzKjJWZVFor0y7c1Zu7WjLiqiGsskamXdHopyT4vALmzS9k/t19uHtKHlOSIMn6xAtARjIZ1sFcUSZ0Y4La+G6M18hS2IlCn4a+WoC0JNL0d/dUupdnUj40g6EJ2VEdMnhrOG/p5f/jUXz8SgmvaGU6KpNRNsLVQV0OdXf24s63h/P2gWoOrBjMCr2GJFQnnxnIM3q5P1PPmaYv+4ev4/C6UtbpV2gzXCkgL5W8Bwt48OIc6ul6Tp+s4+SyASxLiI4+PYCn1bHzDZxvaQW6vZzto7MYnQIpNkf7kp5EuozYUroqEjcNKHHd0Tl9mBPN1pk+hFeieGBnBtog7UXjsj9pWg+m6duecw2cay1OC/uxMC47KmP9OIYfoz1YoC20J/rzRG4quTZK2EAyJGs20qwUbYw0aNRmUxtvfUW/uEtNzc1NB1/X8LVyd15hh82F43AvD+VlXcsSJEZa1CQ3ejleAO7oxR3RDP0XN91X4+NXYb8nkv7UNTwV7e0YTdu7I3g33t7tuaEbNwSZpps2fSyvs4M2Tjhot+jb0Xzbltj8r5j/xVt/6Z1Ob93U1ZYO691EhhzchcHeXosVjcNZysyezLw4xRZt05R+fTeuj8vOj+zKyG0j2aZcVVs6v+QalnjrMFZASQYl2nBoSyz06e3j/Xk8rgWYmMvEICu2pm1HOTuc7okV8FgRj0XukwzanhvCc/F+72TjoQjdObN1OFuDLmh0xP+WHtxiI10ukJlCprb4guiv1fP+avZrS1C7NAkliHZjDtZwMMgqbukAltpMlwuMy2FcEBPqvfLLar5Uqi0hBdEwryy+Mv5n6zkbjTBa+dlMlwvUZFETZKGiFM7tvbhdJ3gSVRO0wzIjnxmvl/J6a6JsGMYGrahtpssFeqbR841S3mhN80OjOaSDEdqd6SjaMKgzgzRK7q1ib3PT9sYyNo7JZoyNFNvRcVMZmy7WOvIuryv/Zvdmdt90+nY0bRp3AvROohFwdwW7dTG7RFlbwlqdrbOBYg005NAQmZU0HWt1rXMBH1Xw0dQ8pmqzoaPmdhun7bHZjNVe9qP9eFQfO1VkUmHjhAVUZ1GtnKFSbjrkrPfy4i4UW5t/6ZxM54J0CqxFe81KpGsQyE4h23oYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjLna+bdOy+IiFquIpGq16Pb79cNYv3IIK/X/ugx+Ui6TVKvYVU9Nc8gX8od8Ir/IN/KPfCQ/yVfyl/6/pfJvLChkQdD6wyqntquCXYuKWJSfRr6D0dEAxV3xlw/khyD+kd/ku/88cHo+09tS3LBpO1HHCVUqcIA6CqB4K+6X6x35L/JM2loXurlWmUmlA5XogOIcK8/If5HncrSWo7F6cKIWPjT/RXGOlWfkv8hzaWsN4uaaysE6WIkOKM6x8oz8F3kusXqo2vxC5jtYiQ4ozrH0TeS5qIZcrB7qkrwdA8U5Vp6R/yLPZV8V+2L14Cl5THGwEh1QnGPlGfkv8lyUlIzFQ1cNYVVHrcjZ0VCcFe9Y+Eb+izy3ceclUl43aFN52DXXssYpnY6a4qFS8ZcP2uIf+e7inRh6pdFrdTGrm8uiHx/L8T2V7NGWzvJBLJ/bl7mTuzO5qBNFDoiJID/IF/KHfCK/yDfyT3O7d/KbfNfS80hNIrU0g9L6HOq1x5iTQo6FNpeLfCQ/yVfyl3xmXYwxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHGGGOMMcYYY4wxxhhjjDHNk9z4JwJ0SqKTdQkbyEwhU393T6V7zzR6pieR3tE1ITeVXImhe6BXDGZFdRbVeank2TBhcaEMr0rwbixj49IBLL2/L/ffmMuNHfqO9tFZjJYBd1ewO3Lx+IcVfKhqna5nHZYR6XFPH+5R3eeI5t9fx/fvjeC9Jdew5OKZKqFR/RDVKL6vL/f9PJafmyvHsL+a/ff24V6NmjZQbGchVbY6UM2BluqHv1rCqzVZ1KQlkZboepCdQvacPsz5bjTfXao+yMEaDt7Wk9tSIMVGig3TejCtJSM2bSpkPjWPqd1S6Zao+lORSYWmgkOjORRNwZqd5ezMSiHLRooNr5XwWjS6/1XHX9vL2T67N7M1iyXa9JCrYjVrS1gbpJyw6hBfsmiNCYT0P9/A+Wj1/6qGr5YNYFlJBiWJogEzezLz/ZG8/9s4fgtSyuvNYbyp1IONFBtu7sHNv4/j9yAxUHWrdaWsG9+N8XHd+YxkMpSy+aySz841cC5oXbmHCnnI74yxAgZ3YbDeB4PEQCOpBpFNZWwa2ZWRcdnxLsl00crtRB0n2lLg8JNRfDKoM4NsolgBSmw/UMADba1+qpmqfyf6x1u/0a/og3I+aEunP6/i86osqmygcGarF4p54dex/Bo0LqfqOfVwIQ/HW5/RSkwV1oN2WLlHTc82TljAwM4M1O5LWwYKZTjibYXNS0N5KcjKTe10PadfLObFuJwK4ozp+UzXDBTUjL+M5ZcBnRkQV53dMIwNQTu6bSTbVEzbi5awuVByd2E/FgaN0Tc1fKOzBHHV2aAdVSdv6s5NNkp7cSH/++xAng2yyHx+CM/H21YhfdPp+0U1X0TbSZnXx8faG9Aop0MS0cToh1p+iLcpOkLj9t/JOk5eqoPHxnDsyf486an5yqCDK7XZ1O4oZ4dWyy3FSXHUAYq47uyYbMZoGmhpG3DlEFb6uNiVBhpyaHhnBO8oJmfqOROJjzIiP43hJ8UxITqqX56S2Hur2KsOnq3nrE6PPNKPRwrSKbAZrjTQNZmuE7oxYXMZmxWbw9dxWFu4W4ezVedOE6qzI7oyYkY+M7TPeWsPbk2UX1qioSN+E3OZqOR2cReKE+qQRFN0Pi7y73g/UawU1KzezJpXwLz5hczX1ueUPKYkNb6GJQZ+j7/aAfRZREsv+quGsMoamXZBW2Gt5eU0alorEzYsKmJRa/m4NdeyxlqZsCGa84DKnVorEzboC7podis69DfIJmwufHMc7famvvmxZiYsKOtKWbRm1OcW1syEBboSJFozLh/EcmtmwgIluaM14/phrLdmJixYXMTiaM24p5I91syEBTphFOR7Y2tmwgJNvUFOr+tov3UzoaAv44KYUatv62ZCoemdhtG0+hzqrZsJBR08DWLG0gxKrZu50qvpxos3U5NItW4mFPp1ot+lPlpq2lYXs9qamVBZUMiC1ox4pJYjvlfStAu6GmTLcLboMtPIV4/6im5fFfuUi9QIap2MiWP+D96R1vPmsD/fAAAAAElFTkSuQmCC";
  var SPINE_LOGO_DATA = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKUAAABsCAYAAAALzHKmAAAQ7klEQVR42u3da4xdVRUA4D0zd2Y6nZY59DVtZ1puS9+lzC0YAi2UQ8AAQczFpPgA9VIeIQbirRqJ0cBUBVGjDr/QCKSNRSMmpuODxAdxqhgwxkhFjf6Sxh/+UUNVNGJCzR7uTvas7LXX2q9zzp3em6y0gTN3Zu75utZe5+yztxC9V+/Ve5X9En1Vjd7J6SFbLNF7naPw+l2jh7YHMBWssqMHtlsRdim4qsLtIawaPiHEQOLoNrA9iIkQDnRrVA1qD2LZ8ISoxYqKo13sQAtBWBayQWZUAXGRQM9JjCngDVY0UqJNDbQrMcaGmArdUKpIjbYiQLsCZCyIMQBy8QwnilR4Q5AuCpxFYvRFmBLbEiwKwpsSaWycVQGZBKMrwBjA9BhxDe57u2L2hOoKNCbOrgAZitEVYUxoKSMErQvSxYIzCkguRg5EF4AUhqUlhy/YUKSxcRaKsioYOQhD4I0yYxkR3PcJBcuFysmgsXAWBTMJyBCMIQh9kGGxXIXvexCQXbHGAMrBWTbM2CCpMSMLIxehC77lSJwXGth7M0FzoVJIXXDWQnGmhOkL0ic7YhhtWdGGkAuPAjUWGoF4faCmwBkbZmyUqUCyMqMLRA4+E6IsdTjidUHKBYrh9CnpRcH0ypKxsyOGEYNIIeTCOz91OIJ1QYoB5eAMyZo+MFNnyVTZ0YiRC9EGEMOyAgshxErHsL2XK1gOUgwohtM1a5YNM7Rsu4K0ZkcbRm4mpPBRwFZ5hg9eCqkrUB+csWGGogzNkqEgrdnRhpGLkINudaLgwvVB6oqzCjCTZElb2Y4B0gUjBtEG0ARnDRLjjoG9DwcshtQGlIPTljVjwUySLWNkyRCQVHa0ZUUTRAwgF91a33BEy0VKAcVwwqwZC2bqbOlUurllOxQkJzNyINoAYqjWhYYjWg5SCiiG05Q1U8FMjTIoS8YE6YORi1BHtJ4KIcQEEtTXUWAxpK44YVlPBdO1jCdFWTZIE8bVGEYMIRPcZGBw4HKQcoBiOE1ZMzbMgVQwU6JMAdKEEcuIJogUvg1YCCE2gsCO42DlIIVAKZwpYJaSLVNnSU6XjYHUmxhTmXaFaMO3EYkLqMC+FsLlIoVAKZzMrEnBhJeLfLNlKMrYWRIDCbOkFSSVHbHM6AKRC6/ODUewNqQ+OLlZkxpjUmV8MBbMUJSxyzY3Q1IgTRgxiBRCHdem0KDAUkBh9sRwwjEnAXMMgTnKhFlUtiwkS5rGka4g9SaGgxFmRC7AzTCEEBcyA36dDSsXqAtOLkysjGMwY5XxVChjZ0kuSCo7YlkRQsQQYtDEFsegsLoCxUp7Kpgps2UslFGzJGccSYHUmxhOZqwzEZqAbfUMCisHKIZzgsCpl3MTzMwTpi1bYp2477gyFKUxS7qWbdjY2EBS2dGE0QQRA7gNCyHEdhjE8RhUDlBT9tzgmjWZMFNlSy+Urk1OzCyJlW0XkK4YOQh1cDtcgwBrQmoDWkdgboBZE8mYsJSHlnFbJ+5bwmOPJ7lZkirbC8aRsMvmgtTHjBhGE0QbwJ2egUE1ITVlUC5OmDVdYNrKuN70xM6WoShjlW4464dbtiFIWK6x7GjESEHUUe0iYncnbMdQSE0Z1ITTNOb0hRmjjLtmS9dmJ2rp1jtuKktyyrb6YLEMCUHq2dGG0QQRQ7f72kzc+cJecerne8Wvv7JNPHPvenEkz8Sh3UtFc92QyGt9Yko/HgOLAIUZlItTz5ouMF3KuE+2jFLCQ1D6lm6fLMkBacuOJowYRBUXyfjuHjF3NhdnsfjvAfH6E9vFt9XxKgikEKgJZyyYalzOLeMu2bLbULI6bh+QGwmQ+rgRlumdGEQAao+K56bEL2woVUwOiev0r8OAUjiJrMmFCbvykGxZRAmPitK1dHM7bohyMsuyi/I8f0+e57fJYIKEZXpXo9E4mOf5XTKyLLvCBLETF8uY2SKepkC+dpX4T02Ivepr4HvZcOZ5fmee54fyPL+DmTUhzAs6n4n8bN5dr9f3YdkSg8nsxG0lPBVKVpNjG0/aGhzfLDmRZdnumZmZp8+c+cdZPV555fSr7Xb7s0jJ3i5Pcue4MxKkPPkvvXTqz/B92u32l0wYOzG1fkhcd/py8Rcbyq/vFM/KY1WA95h/3zzP71bfU6JsNpsfgj+P/FlbrdaDGExYyuXvLz8H+DudODH700ajcSM3W6Yu4alQ1spCOTd38jcKocTZbh9+9NixY99XJ8AEUkcpo9W64yH197m5k7+bnZ19QT+J09NHntQhwji/Jg58qi6++ofLxJ8gSFneVw2Ka4QQDfh1Ok4dZavVmtZ/nrm5k7/Vf55O1tRhboUw5+ZOvqyOl5+R/FyOHj32PYVU/tloNG5IXcKrhJIzngwp3fNjomazea/64BuNxts646f50lWv169utw9/DmtqdJQyZFaSJVuV6nq9fqMEof5/vV6/CYBqgJDlee+yAbF/+4i4ZWqZeNfaIfHWzn+Hx0KcEuU9+s8jv3ej0bhVlXOZydX/k0iRMeb8P0D5e6tj8zy/Xb9UJIc56h/yqVOnXul8lmuZ2bJslKmbHG7XrbpCmCXFRLvdfqQD6jTS3Jiy5I4OykM6ADV+1Eu1DmV6evopBORexzDi1L+X/HnGxsb2w3Hm9PSRJ9QxWPOTZdmlKht2hi+w6dkox5bqffI8fye3hDteGqKaHVsHXihKl0tB+h0cY+lute54AGRKDCW89LNTRynHb7ChUWVVjetOnJh9EYBUyPZeNCoOtsbFQwdXi4/esELcd+tq8cCHJ8UXp+viy9efLz7AgamjlKXc1AA1m83DoIRDlFubzeb96hhZLVTlgJ24gttutx+ONa50bHZKRenaeTs1OfpAfnr6yOOdE7EZdNwmlKocntXLNkA5JTGq47Ds+Lf94lWsyfnXleLfnIwJUN4DOnNYwuUxh2A3Ln9XULrfK8t3J27Tu3BVwiOjXJqoAy8UZej1yclGo3GTLN+gu3w+z/P3YaWbQqk3Ne12e4ZC+c8rxWsYytcPiP9RpZxCqWDKnxOiBNlyAUpOnGsoh4tA2Rm8X9xqtT6md5wyZmYe+0YRKL+1S/wYQ3n8zctBl5SBUv5djivfjMOPduIzcizeiYfr9foVvUwZG+XCuzibZKnSceZ5/v4QlKp8y7ElhnJlTeTP7BI/kllRYfzrfvHqFy4UX1vaL/aVlSmROzwbwdS29T2UcEwZF+V8ozM2lu1VY812u/15akypGh3TmFJesJbHHD167IdUxz3YJy5bNySuX1mbvy55CbMLtzU6tjGlsdFptVqfUMc0Go23F4wy1l2dSnbfvpMwVPe9WWVLDsrOJaF9MFu2Wq1PqmNkGce67xiXhTjdNwdlvV6/BgxfbPfBfVCetxi6b9/rlCup65QzM48dl2OjLMv26CibzeZ96sTIzEFdpwQXz9U1yrtVlpR/Zll2Fec65Y6l4pbbx8XHH9kknvzJlPjlHy8Tp29eKT5ou0aJoIT3w3dBlLDzVpfAJEZ1XOdaJZxnOSlvPMjPzxFljIvng914RwebsjYO7uhMyHu46sOfnf3Oz2TXDW6vvYxdFoIXz3Wc8J5zs9n8iOn2IrxTc2BM3Glqdp7dI553uaOjxrhwcob+MyuUpjs6WZZdon8OcigjPx8V+u+GTWFTSWEx3WYcdJ225jNDSE4q0GHCzlueHOyujn6bUWYgeb9ZZUaQPe+GzQ+Gc8+oOGhC+c1d4gfI16n3XDAhQ7+9qE9l01E2Go132GYKyXE1NiFDTcpoNpv3LOYJGWXNErJNW9sEp63p2RKiVPMn1bS1DgxsyhoGdGpmizj+xtXiDYnx7/vFmce3iWdW1cTVGEY4hQ2ZW0nNq8Qm/M6XbXm3S100lwGedFybuvNOibLI+ZS2ceU4eAxiEuvCkfmU8ycToDxETe6FgCBQHeqyAbFvfEhcO7BwDuXFCEbTZF840XeHK0jYcbs2OIGle0mVJ/mmnClEPQqxyTY5I8/zFhif7fSZee4bnrPOU4AssnRXHaVTCTd14dRDY3UbTIiSeFhsN/aMjgnqthFx880rxX3yATL5p3y4LPXzOaBkUyBjZMlYpbtQlIOBD475ZEusjMNSvkXe6VEoJVDkeZ2dzIfIFsRzU+JF2OyM9M9fTC/6SUYOyFQPjQ2nWiUjxnPfw5EeHqMWIqAeIFsAU847lJM2JM6xsewt1OIDLs99P7ZFHNdB/upS8XtPiD7PfLuCXJNolYyyFiNI/Zit65ItrOVafFbHcFohY7hPTN21Tjz4uc3iqfsnxKdX1MTl1OoYRFaMsToGB6Trw2JFP/OdZC2hJZ7ZkrMoAbbSGmelDJ91hFKuJeS7jlBMkJnrAqqJlgMUZS/dArPlGHNdSg5M3xXXtvquuEatvIYtDRhpxbUJuIgqsU5lGWtUploK0KuEU9mSW8YpmFQ556xNuYW7NiW13B+FkMiKHIy+C6eGgBxJvMR0oSv5hi6+z4HJyZoU0M2RVvDlrOQbcxVfX5AhZbuqy0v7ZstYMLHlAVlLTF9ALLbvu9Y5Zylpn/XOsd0ibIvxr2KCLHpp6SCUIdnSZSF+WzfOhem6GD+1KwR3Z4jNjrtDpNoZwmWd8yrupZN6Hx3fbMmFSe0Swdq2ZIPjxk1112Duo8OBGLrBkw/IoncdK2XHsdC9dHz204m50xh3tzFq1zFqtzHXrfCw7OgDsqyNnZLszVijsmXgrmNcmGtS78lIoMX2aJz03fKO2sDJddPQSCDPiQ1DfWBycY6XtXstc2PQKuxgG2McmXTPb9/9vmuJYXKyJrWjbeg+3xPM4O73nWqvbyw7xgZZSJbEUBa157cNJjdr2vb+5iA1YV3HxYscj30PDCEHIgcjtfm8K8hSsmRotkwFk5s1TTghUAopB6xrjHMBBkI0YYTZ0dZlxwLpkiWDULpmy5gwqayZgZNkA7oKQQCxctByYg0XIIEQQuRitGVHblMTA2ShKGPDpC6wu+DEgJqg2rDGDBtAF4Q6RAojp1xXGmSMbImVcR+YWNY04eQCtUG1ofUJ2/uvcETIgUhhdAE5GAlkKShjwHTNmhhODKgJqQ2sC14uOgyfD0IbRF+MlQaZAiZWyn2yJsTJATqGnHQO2Jhh+xlsACFCG0QbRtdyzQFZCZSxYPpmTS7Q5cjJHYNBYIkZpu99HoUQ/o4QIYSIZUZfjJ4ZMjZI32wZBDMU5yhy8pZTULl4XYP5fagMyEVoy4oupTpGduwnkloSlKEwY+AcQU4MhRTD6ovXBRwFzwWgCSEF0QVjJUGmgEllTS5OLlCIlIN1mS9mx/cZ5eLDALpCTI2RAhkTZQqYoTgpoCPECbaBHQ2ETL3PUl98ECAXYijG0OyYAmQoTG7W5ODkAF1CnVgm2JQx4okPA+gCMTbGskBGgRmaOblAh5GTORIrfKFx4VH4EIAxIXIxlg2SBbMvECY3e7oApbDaIgQu5/2HmeEKEINYiwSRi7EQkLFgumZOCuggctKGI4ULZN/vMeSLj0AYMytWEqMLzFg4fYDaoKaC6wvOFR4FkIPQFaILxrJAOsHsc/zlfYDWXE8qF22s8Pz5KHxcgEVALBtjJXBSSEOwFhk1Zgy4hitCT4hVw+gFs8/zwxqIBbUgyK7fcyA0PD9XX4iVxhiC0xdof6STWCsoBmKF7+cVCWFXQYyBMxRpf+STX1b0x45AhN0OMSrOGEirhrY/dfQAdjvS7oy+WCF6r1RIFxXWvlTRg1YVqFWBmxZbD99ig9pt0YPQw9rD1nstVri9V+/Ve3XrS/wfim4P5fIFxLoAAAAASUVORK5CYII=";

  // spine-webgl/src/SpineCanvas.ts
  var SpineCanvas = class {
    /** Constructs a new spine canvas, rendering to the provided HTML canvas. */
    constructor(canvas, config) {
      this.config = config;
      if (!config.pathPrefix) config.pathPrefix = "";
      if (!config.app) config.app = {
        loadAssets: () => {
        },
        initialize: () => {
        },
        update: () => {
        },
        render: () => {
        },
        error: () => {
        },
        dispose: () => {
        }
      };
      if (!config.webglConfig) config.webglConfig = { alpha: true };
      this.htmlCanvas = canvas;
      this.context = new ManagedWebGLRenderingContext(canvas, config.webglConfig);
      this.renderer = new SceneRenderer(canvas, this.context);
      this.gl = this.context.gl;
      this.assetManager = new AssetManager(this.context, config.pathPrefix);
      this.input = new Input(canvas);
      if (config.app.loadAssets) config.app.loadAssets(this);
      let loop = () => {
        if (this.disposed) return;
        requestAnimationFrame(loop);
        this.time.update();
        if (config.app.update) config.app.update(this, this.time.delta);
        if (config.app.render) config.app.render(this);
      };
      let waitForAssets = () => {
        if (this.disposed) return;
        if (this.assetManager.isLoadingComplete()) {
          if (this.assetManager.hasErrors()) {
            if (config.app.error) config.app.error(this, this.assetManager.getErrors());
          } else {
            if (config.app.initialize) config.app.initialize(this);
            loop();
          }
          return;
        }
        requestAnimationFrame(waitForAssets);
      };
      requestAnimationFrame(waitForAssets);
    }
    context;
    /** Tracks the current time, delta, and other time related statistics. */
    time = new TimeKeeper();
    /** The HTML canvas to render to. */
    htmlCanvas;
    /** The WebGL rendering context. */
    gl;
    /** The scene renderer for easy drawing of skeletons, shapes, and images. */
    renderer;
    /** The asset manager to load assets with. */
    assetManager;
    /** The input processor used to listen to mouse, touch, and keyboard events. */
    input;
    disposed = false;
    /** Clears the canvas with the given color. The color values are given in the range [0,1]. */
    clear(r, g, b, a) {
      this.gl.clearColor(r, g, b, a);
      this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }
    /** Disposes the app, so the update() and render() functions are no longer called. Calls the dispose() callback.*/
    dispose() {
      if (this.config.app.dispose) this.config.app.dispose(this);
      this.disposed = true;
    }
  };

  // spine-phaser-v4/src/mixins.ts
  var components = Phaser.GameObjects.Components;
  var ComputedSize = components.ComputedSize;
  var Depth = components.Depth;
  var Flip = components.Flip;
  var ScrollFactor = components.ScrollFactor;
  var Transform = components.Transform;
  var Visible = components.Visible;
  var Origin = components.Origin;
  var Alpha = components.Alpha;
  function createMixin(...component) {
    return (BaseGameObject) => {
      Phaser.Class.mixin(BaseGameObject, component);
      return BaseGameObject;
    };
  }
  var ComputedSizeMixin = createMixin(ComputedSize);
  var DepthMixin = createMixin(Depth);
  var FlipMixin = createMixin(Flip);
  var ScrollFactorMixin = createMixin(ScrollFactor);
  var TransformMixin = createMixin(Transform);
  var VisibleMixin = createMixin(Visible);
  var OriginMixin = createMixin(Origin);
  var AlphaMixin = createMixin(Alpha);

  // spine-phaser-v4/src/SpineGameObject.ts
  var BaseSpineGameObject = class extends Phaser.GameObjects.GameObject {
    constructor(scene, type) {
      super(scene, type);
    }
  };
  var AABBRectangleBoundsProvider = class {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
    calculateBounds() {
      return { x: this.x, y: this.y, width: this.width, height: this.height };
    }
  };
  var SetupPoseBoundsProvider = class {
    /**
     * @param clipping If true, clipping attachments are used to compute the bounds. False, by default.
     */
    constructor(clipping = false) {
      this.clipping = clipping;
    }
    calculateBounds(gameObject) {
      if (!gameObject.skeleton) return { x: 0, y: 0, width: 0, height: 0 };
      const skeleton = new Skeleton(gameObject.skeleton.data);
      skeleton.setToSetupPose();
      skeleton.updateWorldTransform(2 /* update */);
      const bounds = skeleton.getBoundsRect(this.clipping ? new SkeletonClipping() : void 0);
      return bounds.width == Number.NEGATIVE_INFINITY ? { x: 0, y: 0, width: 0, height: 0 } : bounds;
    }
  };
  var SkinsAndAnimationBoundsProvider = class {
    /**
     * @param animation The animation to use for calculating the bounds. If null, the setup pose is used.
     * @param skins The skins to use for calculating the bounds. If empty, the default skin is used.
     * @param timeStep The time step to use for calculating the bounds. A smaller time step means more precision, but slower calculation.
     * @param clipping If true, clipping attachments are used to compute the bounds. False, by default.
     */
    constructor(animation, skins = [], timeStep = 0.05, clipping = false) {
      this.animation = animation;
      this.skins = skins;
      this.timeStep = timeStep;
      this.clipping = clipping;
    }
    calculateBounds(gameObject) {
      if (!gameObject.skeleton || !gameObject.animationState)
        return { x: 0, y: 0, width: 0, height: 0 };
      const animationState = new AnimationState(gameObject.animationState.data);
      const skeleton = new Skeleton(gameObject.skeleton.data);
      const clipper = this.clipping ? new SkeletonClipping() : void 0;
      const data = skeleton.data;
      if (this.skins.length > 0) {
        let customSkin = new Skin("custom-skin");
        for (const skinName of this.skins) {
          const skin = data.findSkin(skinName);
          if (skin == null) continue;
          customSkin.addSkin(skin);
        }
        skeleton.setSkin(customSkin);
      }
      skeleton.setToSetupPose();
      const animation = this.animation != null ? data.findAnimation(this.animation) : null;
      if (animation == null) {
        skeleton.updateWorldTransform(2 /* update */);
        const bounds = skeleton.getBoundsRect(clipper);
        return bounds.width == Number.NEGATIVE_INFINITY ? { x: 0, y: 0, width: 0, height: 0 } : bounds;
      } else {
        let minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY;
        animationState.clearTracks();
        animationState.setAnimationWith(0, animation, false);
        const steps = Math.max(animation.duration / this.timeStep, 1);
        for (let i = 0; i < steps; i++) {
          const delta = i > 0 ? this.timeStep : 0;
          animationState.update(delta);
          animationState.apply(skeleton);
          skeleton.update(delta);
          skeleton.updateWorldTransform(2 /* update */);
          const bounds2 = skeleton.getBoundsRect(clipper);
          minX = Math.min(minX, bounds2.x);
          minY = Math.min(minY, bounds2.y);
          maxX = Math.max(maxX, bounds2.x + bounds2.width);
          maxY = Math.max(maxY, bounds2.y + bounds2.height);
        }
        const bounds = {
          x: minX,
          y: minY,
          width: maxX - minX,
          height: maxY - minY
        };
        return bounds.width == Number.NEGATIVE_INFINITY ? { x: 0, y: 0, width: 0, height: 0 } : bounds;
      }
    }
  };
  var SpineGameObject = class extends DepthMixin(
    OriginMixin(
      ComputedSizeMixin(
        FlipMixin(
          ScrollFactorMixin(
            TransformMixin(VisibleMixin(AlphaMixin(BaseSpineGameObject)))
          )
        )
      )
    )
  ) {
    constructor(scene, plugin, x, y, dataKey, atlasKey, boundsProvider = new SetupPoseBoundsProvider()) {
      super(scene, window.SPINE_GAME_OBJECT_TYPE ? window.SPINE_GAME_OBJECT_TYPE : SPINE_GAME_OBJECT_TYPE);
      this.plugin = plugin;
      this.boundsProvider = boundsProvider;
      this.setPosition(x, y);
      this.premultipliedAlpha = this.plugin.isAtlasPremultiplied(atlasKey);
      this.skeleton = this.plugin.createSkeleton(dataKey, atlasKey);
      this.animationStateData = new AnimationStateData(this.skeleton.data);
      this.animationState = new AnimationState(this.animationStateData);
      this.skeleton.updateWorldTransform(2 /* update */);
      this.updateSize();
    }
    blendMode = -1;
    skeleton;
    animationStateData;
    animationState;
    beforeUpdateWorldTransforms = () => {
    };
    afterUpdateWorldTransforms = () => {
    };
    premultipliedAlpha = false;
    offsetX = 0;
    offsetY = 0;
    updateSize() {
      if (!this.skeleton) return;
      let bounds = this.boundsProvider.calculateBounds(this);
      this.width = bounds.width;
      this.height = bounds.height;
      this.setDisplayOrigin(-bounds.x, -bounds.y);
      this.offsetX = -bounds.x;
      this.offsetY = -bounds.y;
    }
    /** Converts a point from the skeleton coordinate system to the Phaser world coordinate system. */
    skeletonToPhaserWorldCoordinates(point) {
      let transform = this.getWorldTransformMatrix();
      let a = transform.a, b = transform.b, c = transform.c, d = transform.d, tx = transform.tx, ty = transform.ty;
      let x = point.x;
      let y = point.y;
      point.x = x * a + y * c + tx;
      point.y = x * b + y * d + ty;
    }
    /** Converts a point from the Phaser world coordinate system to the skeleton coordinate system. */
    phaserWorldCoordinatesToSkeleton(point) {
      let transform = this.getWorldTransformMatrix();
      transform = transform.invert();
      let a = transform.a, b = transform.b, c = transform.c, d = transform.d, tx = transform.tx, ty = transform.ty;
      let x = point.x;
      let y = point.y;
      point.x = x * a + y * c + tx;
      point.y = x * b + y * d + ty;
    }
    /** Converts a point from the Phaser world coordinate system to the bone's local coordinate system. */
    phaserWorldCoordinatesToBone(point, bone) {
      this.phaserWorldCoordinatesToSkeleton(point);
      if (bone.parent) {
        bone.parent.worldToLocal(point);
      } else {
        bone.worldToLocal(point);
      }
    }
    /**
     * Updates the {@link AnimationState}, applies it to the {@link Skeleton}, then updates the world transforms of all bones.
     * @param delta The time delta in milliseconds
     */
    updatePose(delta) {
      this.animationState.update(delta / 1e3);
      this.animationState.apply(this.skeleton);
      this.beforeUpdateWorldTransforms(this);
      this.skeleton.update(delta / 1e3);
      this.skeleton.updateWorldTransform(2 /* update */);
      this.afterUpdateWorldTransforms(this);
    }
    preUpdate(time, delta) {
      if (!this.skeleton || !this.animationState) return;
      this.updatePose(delta);
    }
    preDestroy() {
    }
    willRender(camera) {
      var GameObjectRenderMask = 15;
      var result = !this.skeleton || !(GameObjectRenderMask !== this.renderFlags || this.cameraFilter !== 0 && this.cameraFilter & camera.id);
      if (!this.visible) result = false;
      if (!result && this.parentContainer && this.plugin.webGLRenderer) {
        var sceneRenderer = this.plugin.webGLRenderer;
        if (this.plugin.gl && this.plugin.phaserRenderer instanceof Phaser.Renderer.WebGL.WebGLRenderer && sceneRenderer.batcher.isDrawing) {
          sceneRenderer.end();
          this.plugin.phaserRenderer.renderNodes.getNode("RebindContext")?.run();
        }
      }
      return result;
    }
    renderWebGL(renderer, src, drawingContext, parentMatrix, renderStep, displayList, displayListIndex) {
      const camera = drawingContext.camera;
      if (!camera || !src.skeleton || !src.animationState || !src.plugin.webGLRenderer)
        return;
      let sceneRenderer = src.plugin.webGLRenderer;
      const previousGameObject = displayList[displayListIndex - 1];
      const nextGameObject = displayList[displayListIndex + 1];
      const newType = !previousGameObject || previousGameObject.type !== src.type;
      const nextTypeMatch = nextGameObject && nextGameObject.type === src.type;
      if (newType) {
        if (drawingContext.renderer.renderNodes.currentBatchDrawingContext !== drawingContext) {
          drawingContext.use();
          drawingContext.beginDraw();
        }
        renderer.renderNodes.getNode("YieldContext")?.run(drawingContext);
        sceneRenderer.begin();
      }
      camera.addToRenderList(src);
      let transform = Phaser.GameObjects.GetCalcMatrix(
        src,
        camera,
        parentMatrix
      ).calc;
      let a = transform.a, b = transform.b, c = transform.c, d = transform.d, tx = transform.tx, ty = transform.ty;
      let offsetX = src.offsetX - src.displayOriginX;
      let offsetY = src.offsetY - src.displayOriginY;
      sceneRenderer.drawSkeleton(
        src.skeleton,
        src.premultipliedAlpha,
        -1,
        -1,
        (vertices, numVertices, stride) => {
          for (let i = 0; i < numVertices; i += stride) {
            let vx = vertices[i] + offsetX;
            let vy = vertices[i + 1] + offsetY;
            vertices[i] = vx * a + vy * c + tx;
            vertices[i + 1] = vx * b + vy * d + ty;
          }
        }
      );
      if (!nextTypeMatch) {
        sceneRenderer.end();
        renderer.renderNodes.getNode("RebindContext")?.run(drawingContext);
      }
    }
    renderCanvas(renderer, src, camera, parentMatrix) {
      if (!this.skeleton || !this.animationState || !this.plugin.canvasRenderer)
        return;
      let context = renderer.currentContext;
      let skeletonRenderer = this.plugin.canvasRenderer;
      skeletonRenderer.ctx = context;
      camera.addToRenderList(src);
      let transform = Phaser.GameObjects.GetCalcMatrix(
        src,
        camera,
        parentMatrix
      ).calc;
      let skeleton = this.skeleton;
      skeleton.x = transform.tx;
      skeleton.y = transform.ty;
      skeleton.scaleX = transform.scaleX;
      skeleton.scaleY = transform.scaleY;
      let root = skeleton.getRootBone();
      root.rotation = -MathUtils.radiansToDegrees * transform.rotationNormalized;
      this.skeleton.updateWorldTransform(2 /* update */);
      context.save();
      skeletonRenderer.draw(skeleton);
      context.restore();
    }
  };

  // spine-canvas/src/CanvasTexture.ts
  var CanvasTexture = class extends Texture {
    constructor(image) {
      super(image);
    }
    setFilters(minFilter, magFilter) {
    }
    setWraps(uWrap, vWrap) {
    }
    dispose() {
    }
  };

  // spine-canvas/src/SkeletonRenderer.ts
  var worldVertices = Utils.newFloatArray(8);
  var SkeletonRenderer2 = class _SkeletonRenderer {
    static QUAD_TRIANGLES = [0, 1, 2, 2, 3, 0];
    static VERTEX_SIZE = 2 + 2 + 4;
    ctx;
    triangleRendering = false;
    debugRendering = false;
    vertices = Utils.newFloatArray(8 * 1024);
    tempColor = new Color();
    constructor(context) {
      this.ctx = context;
    }
    draw(skeleton) {
      if (this.triangleRendering) this.drawTriangles(skeleton);
      else this.drawImages(skeleton);
    }
    drawImages(skeleton) {
      let ctx = this.ctx;
      let color = this.tempColor;
      let skeletonColor = skeleton.color;
      let drawOrder = skeleton.drawOrder;
      if (this.debugRendering) ctx.strokeStyle = "green";
      for (let i = 0, n = drawOrder.length; i < n; i++) {
        let slot = drawOrder[i];
        let bone = slot.bone;
        if (!bone.active) continue;
        let attachment = slot.getAttachment();
        if (!(attachment instanceof RegionAttachment)) continue;
        attachment.computeWorldVertices(slot, worldVertices, 0, 2);
        let region = attachment.region;
        let image = region.texture.getImage();
        let slotColor = slot.color;
        let regionColor = attachment.color;
        color.set(
          skeletonColor.r * slotColor.r * regionColor.r,
          skeletonColor.g * slotColor.g * regionColor.g,
          skeletonColor.b * slotColor.b * regionColor.b,
          skeletonColor.a * slotColor.a * regionColor.a
        );
        ctx.save();
        ctx.transform(bone.a, bone.c, bone.b, bone.d, bone.worldX, bone.worldY);
        ctx.translate(attachment.offset[0], attachment.offset[1]);
        ctx.rotate(attachment.rotation * Math.PI / 180);
        let atlasScale = attachment.width / region.originalWidth;
        ctx.scale(atlasScale * attachment.scaleX, atlasScale * attachment.scaleY);
        let w = region.width, h = region.height;
        ctx.translate(w / 2, h / 2);
        if (attachment.region.degrees == 90) {
          let t = w;
          w = h;
          h = t;
          ctx.rotate(-Math.PI / 2);
        }
        ctx.scale(1, -1);
        ctx.translate(-w / 2, -h / 2);
        ctx.globalAlpha = color.a;
        ctx.drawImage(image, image.width * region.u, image.height * region.v, w, h, 0, 0, w, h);
        if (this.debugRendering) ctx.strokeRect(0, 0, w, h);
        ctx.restore();
      }
    }
    drawTriangles(skeleton) {
      let ctx = this.ctx;
      let color = this.tempColor;
      let skeletonColor = skeleton.color;
      let drawOrder = skeleton.drawOrder;
      let blendMode = null;
      let vertices = this.vertices;
      let triangles = null;
      for (let i = 0, n = drawOrder.length; i < n; i++) {
        let slot = drawOrder[i];
        let attachment = slot.getAttachment();
        let texture;
        let region;
        if (attachment instanceof RegionAttachment) {
          let regionAttachment = attachment;
          vertices = this.computeRegionVertices(slot, regionAttachment, false);
          triangles = _SkeletonRenderer.QUAD_TRIANGLES;
          texture = regionAttachment.region.texture.getImage();
        } else if (attachment instanceof MeshAttachment) {
          let mesh = attachment;
          vertices = this.computeMeshVertices(slot, mesh, false);
          triangles = mesh.triangles;
          texture = mesh.region.texture.getImage();
        } else
          continue;
        if (texture) {
          if (slot.data.blendMode != blendMode) blendMode = slot.data.blendMode;
          let slotColor = slot.color;
          let attachmentColor = attachment.color;
          color.set(
            skeletonColor.r * slotColor.r * attachmentColor.r,
            skeletonColor.g * slotColor.g * attachmentColor.g,
            skeletonColor.b * slotColor.b * attachmentColor.b,
            skeletonColor.a * slotColor.a * attachmentColor.a
          );
          ctx.globalAlpha = color.a;
          for (var j = 0; j < triangles.length; j += 3) {
            let t1 = triangles[j] * 8, t2 = triangles[j + 1] * 8, t3 = triangles[j + 2] * 8;
            let x0 = vertices[t1], y0 = vertices[t1 + 1], u0 = vertices[t1 + 6], v0 = vertices[t1 + 7];
            let x1 = vertices[t2], y1 = vertices[t2 + 1], u1 = vertices[t2 + 6], v1 = vertices[t2 + 7];
            let x2 = vertices[t3], y2 = vertices[t3 + 1], u2 = vertices[t3 + 6], v2 = vertices[t3 + 7];
            this.drawTriangle(texture, x0, y0, u0, v0, x1, y1, u1, v1, x2, y2, u2, v2);
            if (this.debugRendering) {
              ctx.strokeStyle = "green";
              ctx.beginPath();
              ctx.moveTo(x0, y0);
              ctx.lineTo(x1, y1);
              ctx.lineTo(x2, y2);
              ctx.lineTo(x0, y0);
              ctx.stroke();
            }
          }
        }
      }
      this.ctx.globalAlpha = 1;
    }
    // Adapted from http://extremelysatisfactorytotalitarianism.com/blog/?p=2120
    // Apache 2 licensed
    drawTriangle(img, x0, y0, u0, v0, x1, y1, u1, v1, x2, y2, u2, v2) {
      let ctx = this.ctx;
      const width = img.width - 1;
      const height = img.height - 1;
      u0 *= width;
      v0 *= height;
      u1 *= width;
      v1 *= height;
      u2 *= width;
      v2 *= height;
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.closePath();
      x1 -= x0;
      y1 -= y0;
      x2 -= x0;
      y2 -= y0;
      u1 -= u0;
      v1 -= v0;
      u2 -= u0;
      v2 -= v0;
      let det = u1 * v2 - u2 * v1;
      if (det == 0) return;
      det = 1 / det;
      const a = (v2 * x1 - v1 * x2) * det;
      const b = (v2 * y1 - v1 * y2) * det;
      const c = (u1 * x2 - u2 * x1) * det;
      const d = (u1 * y2 - u2 * y1) * det;
      const e = x0 - a * u0 - c * v0;
      const f = y0 - b * u0 - d * v0;
      ctx.save();
      ctx.transform(a, b, c, d, e, f);
      ctx.clip();
      ctx.drawImage(img, 0, 0);
      ctx.restore();
    }
    computeRegionVertices(slot, region, pma) {
      let skeletonColor = slot.bone.skeleton.color;
      let slotColor = slot.color;
      let regionColor = region.color;
      let alpha = skeletonColor.a * slotColor.a * regionColor.a;
      let multiplier = pma ? alpha : 1;
      let color = this.tempColor;
      color.set(
        skeletonColor.r * slotColor.r * regionColor.r * multiplier,
        skeletonColor.g * slotColor.g * regionColor.g * multiplier,
        skeletonColor.b * slotColor.b * regionColor.b * multiplier,
        alpha
      );
      region.computeWorldVertices(slot, this.vertices, 0, _SkeletonRenderer.VERTEX_SIZE);
      let vertices = this.vertices;
      let uvs = region.uvs;
      vertices[RegionAttachment.C1R] = color.r;
      vertices[RegionAttachment.C1G] = color.g;
      vertices[RegionAttachment.C1B] = color.b;
      vertices[RegionAttachment.C1A] = color.a;
      vertices[RegionAttachment.U1] = uvs[0];
      vertices[RegionAttachment.V1] = uvs[1];
      vertices[RegionAttachment.C2R] = color.r;
      vertices[RegionAttachment.C2G] = color.g;
      vertices[RegionAttachment.C2B] = color.b;
      vertices[RegionAttachment.C2A] = color.a;
      vertices[RegionAttachment.U2] = uvs[2];
      vertices[RegionAttachment.V2] = uvs[3];
      vertices[RegionAttachment.C3R] = color.r;
      vertices[RegionAttachment.C3G] = color.g;
      vertices[RegionAttachment.C3B] = color.b;
      vertices[RegionAttachment.C3A] = color.a;
      vertices[RegionAttachment.U3] = uvs[4];
      vertices[RegionAttachment.V3] = uvs[5];
      vertices[RegionAttachment.C4R] = color.r;
      vertices[RegionAttachment.C4G] = color.g;
      vertices[RegionAttachment.C4B] = color.b;
      vertices[RegionAttachment.C4A] = color.a;
      vertices[RegionAttachment.U4] = uvs[6];
      vertices[RegionAttachment.V4] = uvs[7];
      return vertices;
    }
    computeMeshVertices(slot, mesh, pma) {
      let skeletonColor = slot.bone.skeleton.color;
      let slotColor = slot.color;
      let regionColor = mesh.color;
      let alpha = skeletonColor.a * slotColor.a * regionColor.a;
      let multiplier = pma ? alpha : 1;
      let color = this.tempColor;
      color.set(
        skeletonColor.r * slotColor.r * regionColor.r * multiplier,
        skeletonColor.g * slotColor.g * regionColor.g * multiplier,
        skeletonColor.b * slotColor.b * regionColor.b * multiplier,
        alpha
      );
      let vertexCount = mesh.worldVerticesLength / 2;
      let vertices = this.vertices;
      if (vertices.length < mesh.worldVerticesLength) this.vertices = vertices = Utils.newFloatArray(mesh.worldVerticesLength);
      mesh.computeWorldVertices(slot, 0, mesh.worldVerticesLength, vertices, 0, _SkeletonRenderer.VERTEX_SIZE);
      let uvs = mesh.uvs;
      for (let i = 0, u = 0, v = 2; i < vertexCount; i++) {
        vertices[v++] = color.r;
        vertices[v++] = color.g;
        vertices[v++] = color.b;
        vertices[v++] = color.a;
        vertices[v++] = uvs[u++];
        vertices[v++] = uvs[u++];
        v += 2;
      }
      return vertices;
    }
  };

  // spine-phaser-v4/src/SpinePlugin.ts
  var SpinePlugin = class extends Phaser2.Plugins.ScenePlugin {
    game;
    isWebGL;
    gl;
    gameWebGLRenderer = null;
    get webGLRenderer() {
      return this.gameWebGLRenderer;
    }
    canvasRenderer;
    phaserRenderer;
    skeletonDataCache;
    atlasCache;
    constructor(scene, pluginManager, pluginKey) {
      super(scene, pluginManager, pluginKey);
      this.game = pluginManager.game;
      this.isWebGL = this.game.config.renderType === 2;
      this.gl = this.isWebGL ? this.game.renderer.gl : null;
      this.phaserRenderer = this.game.renderer;
      this.canvasRenderer = null;
      this.skeletonDataCache = this.game.cache.addCustom(SPINE_SKELETON_FILE_CACHE_KEY);
      this.atlasCache = this.game.cache.addCustom(SPINE_ATLAS_CACHE_KEY);
      let skeletonJsonFileCallback = function(key, url, xhrSettings) {
        let file = new SpineSkeletonDataFile(this, key, url, 0 /* json */, xhrSettings);
        this.addFile(file.files);
        return this;
      };
      pluginManager.registerFileType("spineJson", skeletonJsonFileCallback, scene);
      let skeletonBinaryFileCallback = function(key, url, xhrSettings) {
        let file = new SpineSkeletonDataFile(this, key, url, 1 /* binary */, xhrSettings);
        this.addFile(file.files);
        return this;
      };
      pluginManager.registerFileType("spineBinary", skeletonBinaryFileCallback, scene);
      let atlasFileCallback = function(key, url, premultipliedAlpha, xhrSettings) {
        let file = new SpineAtlasFile(this, key, url, premultipliedAlpha, xhrSettings);
        this.addFile(file.files);
        return this;
      };
      pluginManager.registerFileType("spineAtlas", atlasFileCallback, scene);
      let addSpineGameObject = function(x, y, dataKey, atlasKey, boundsProvider) {
        const spinePlugin = this.scene.sys[pluginKey];
        let gameObject = new SpineGameObject(this.scene, spinePlugin, x, y, dataKey, atlasKey, boundsProvider);
        this.displayList.add(gameObject);
        this.updateList.add(gameObject);
        return gameObject;
      };
      let makeSpineGameObject = function(config, addToScene = false) {
        let x = config.x ? config.x : 0;
        let y = config.y ? config.y : 0;
        let boundsProvider = config.boundsProvider ? config.boundsProvider : void 0;
        const spinePlugin = this.scene.sys[pluginKey];
        let gameObject = new SpineGameObject(this.scene, spinePlugin, x, y, config.dataKey, config.atlasKey, boundsProvider);
        if (addToScene !== void 0) {
          config.add = addToScene;
        }
        return Phaser2.GameObjects.BuildGameObject(this.scene, gameObject, config);
      };
      pluginManager.registerGameObject(window.SPINE_GAME_OBJECT_TYPE ? window.SPINE_GAME_OBJECT_TYPE : SPINE_GAME_OBJECT_TYPE, addSpineGameObject, makeSpineGameObject);
    }
    static rendererId = 0;
    boot() {
      Skeleton.yDown = true;
      if (this.isWebGL) {
        if (!this.gameWebGLRenderer) {
          this.gameWebGLRenderer = new SceneRenderer(this.game.renderer.canvas, this.gl, true);
        }
        this.onResize();
        this.game.scale.on(Phaser2.Scale.Events.RESIZE, this.onResize, this);
      } else {
        if (!this.canvasRenderer) {
          this.canvasRenderer = new SkeletonRenderer2(this.scene.sys.context);
        }
      }
      var eventEmitter = this.systems.events;
      eventEmitter.once("shutdown", this.shutdown, this);
      eventEmitter.once("destroy", this.destroy, this);
      this.game.events.once("destroy", this.gameDestroy, this);
    }
    onResize() {
      var phaserRenderer = this.game.renderer;
      var sceneRenderer = this.webGLRenderer;
      if (phaserRenderer && sceneRenderer) {
        var viewportWidth = phaserRenderer.width;
        var viewportHeight = phaserRenderer.height;
        sceneRenderer.camera.position.x = viewportWidth / 2;
        sceneRenderer.camera.position.y = viewportHeight / 2;
        sceneRenderer.camera.up.y = -1;
        sceneRenderer.camera.direction.z = 1;
        sceneRenderer.camera.setViewport(viewportWidth, viewportHeight);
      }
    }
    shutdown() {
      this.systems.events.off("shutdown", this.shutdown, this);
      if (this.isWebGL) {
        this.game.scale.off(Phaser2.Scale.Events.RESIZE, this.onResize, this);
      }
    }
    destroy() {
      this.shutdown();
    }
    gameDestroy() {
      this.pluginManager.removeGameObject(window.SPINE_GAME_OBJECT_TYPE ? window.SPINE_GAME_OBJECT_TYPE : SPINE_GAME_OBJECT_TYPE, true, true);
      if (this.webGLRenderer) this.webGLRenderer.dispose();
      this.gameWebGLRenderer = null;
    }
    /** Returns the TextureAtlas instance for the given key */
    getAtlas(atlasKey) {
      let atlas;
      if (this.atlasCache.exists(atlasKey)) {
        atlas = this.atlasCache.get(atlasKey);
      } else {
        let atlasFile = this.game.cache.text.get(atlasKey);
        atlas = new TextureAtlas(atlasFile.data);
        if (this.isWebGL) {
          let gl = this.gl;
          const phaserUnpackPmaValue = gl.getParameter(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL);
          if (phaserUnpackPmaValue) gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, false);
          for (let atlasPage of atlas.pages) {
            atlasPage.setTexture(new GLTexture(gl, this.game.textures.get(atlasKey + "!" + atlasPage.name).getSourceImage(), false));
          }
          if (phaserUnpackPmaValue) gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, true);
        } else {
          for (let atlasPage of atlas.pages) {
            atlasPage.setTexture(new CanvasTexture(this.game.textures.get(atlasKey + "!" + atlasPage.name).getSourceImage()));
          }
        }
        this.atlasCache.add(atlasKey, atlas);
      }
      return atlas;
    }
    /** Returns whether the TextureAtlas uses premultiplied alpha */
    isAtlasPremultiplied(atlasKey) {
      let atlasFile = this.game.cache.text.get(atlasKey);
      if (!atlasFile) return false;
      return atlasFile.premultipliedAlpha;
    }
    /** Returns the SkeletonData instance for the given data and atlas key */
    getSkeletonData(dataKey, atlasKey) {
      const atlas = this.getAtlas(atlasKey);
      const combinedKey = dataKey + atlasKey;
      let skeletonData;
      if (this.skeletonDataCache.exists(combinedKey)) {
        skeletonData = this.skeletonDataCache.get(combinedKey);
      } else {
        if (this.game.cache.json.exists(dataKey)) {
          let jsonFile = this.game.cache.json.get(dataKey);
          let json = new SkeletonJson(new AtlasAttachmentLoader(atlas));
          skeletonData = json.readSkeletonData(jsonFile);
        } else {
          let binaryFile = this.game.cache.binary.get(dataKey);
          let binary = new SkeletonBinary(new AtlasAttachmentLoader(atlas));
          skeletonData = binary.readSkeletonData(new Uint8Array(binaryFile));
        }
        this.skeletonDataCache.add(combinedKey, skeletonData);
      }
      return skeletonData;
    }
    /** Creates a new Skeleton instance from the data and atlas. */
    createSkeleton(dataKey, atlasKey) {
      if (this.isWebGL) {
        const renderer = this.phaserRenderer;
        renderer.glWrapper.updateTexturingFlipY({ texturing: { flipY: false } });
        renderer.renderNodes.getNode("YieldContext")?.run();
      }
      const skeleton = new Skeleton(this.getSkeletonData(dataKey, atlasKey));
      if (this.isWebGL) {
        const renderer = this.phaserRenderer;
        renderer.renderNodes.getNode("RebindContext")?.run();
      }
      return skeleton;
    }
  };
  var SpineSkeletonDataFile = class extends Phaser2.Loader.MultiFile {
    constructor(loader, key, url, fileType, xhrSettings) {
      if (typeof key !== "string") {
        const config = key;
        key = config.key;
        url = config.url;
        fileType = config.type === "spineJson" ? 0 /* json */ : 1 /* binary */;
        xhrSettings = config.xhrSettings;
      }
      let file = null;
      let isJson = fileType == 0 /* json */;
      if (isJson) {
        file = new Phaser2.Loader.FileTypes.JSONFile(loader, {
          key,
          url,
          extension: "json",
          xhrSettings
        });
      } else {
        file = new Phaser2.Loader.FileTypes.BinaryFile(loader, {
          key,
          url,
          extension: "skel",
          xhrSettings
        });
      }
      super(loader, SPINE_SKELETON_DATA_FILE_TYPE, key, [file]);
      this.fileType = fileType;
    }
    onFileComplete(file) {
      this.pending--;
    }
    addToCache() {
      if (this.isReadyToProcess()) this.files[0].addToCache();
    }
  };
  var SpineAtlasFile = class extends Phaser2.Loader.MultiFile {
    constructor(loader, key, url, premultipliedAlpha, xhrSettings) {
      if (typeof key !== "string") {
        const config = key;
        key = config.key;
        url = config.url;
        premultipliedAlpha = config.premultipliedAlpha;
        xhrSettings = config.xhrSettings;
      }
      super(loader, SPINE_ATLAS_FILE_TYPE, key, [
        new Phaser2.Loader.FileTypes.TextFile(loader, {
          key,
          url,
          xhrSettings,
          extension: "atlas"
        })
      ]);
      this.premultipliedAlpha = premultipliedAlpha;
    }
    onFileComplete(file) {
      if (this.files.indexOf(file) != -1) {
        this.pending--;
        if (file.type == "text") {
          var lines = file.data.split(/\r\n|\r|\n/);
          let textures = [];
          textures.push(lines[0]);
          for (var t = 1; t < lines.length; t++) {
            var line = lines[t];
            if (line.trim() === "" && t < lines.length - 1) {
              line = lines[t + 1];
              textures.push(line);
            }
          }
          let basePath = (file.src.match(/^.*\//) ?? "").toString();
          if (this.loader.path && this.loader.path.length > 0 && basePath.startsWith(this.loader.path))
            basePath = basePath.slice(this.loader.path.length);
          for (var i = 0; i < textures.length; i++) {
            var url = basePath + textures[i];
            var key = file.key + "!" + textures[i];
            var image = new Phaser2.Loader.FileTypes.ImageFile(this.loader, key, url);
            if (!this.loader.keyExists(image)) {
              this.addToMultiFile(image);
              this.loader.addFile(image);
            }
          }
        }
      }
    }
    addToCache() {
      if (this.isReadyToProcess()) {
        let textureManager = this.loader.textureManager;
        for (let file of this.files) {
          if (file.type == "image") {
            if (!textureManager.exists(file.key)) {
              textureManager.addImage(file.key, file.data);
            }
          } else {
            this.premultipliedAlpha = this.premultipliedAlpha ?? (file.data.indexOf("pma: true") >= 0 || file.data.indexOf("pma:true") >= 0);
            file.data = {
              data: file.data,
              premultipliedAlpha: this.premultipliedAlpha
            };
            file.addToCache();
          }
        }
      }
    }
  };

  // spine-phaser-v4/src/index.ts
  window.spine = { SpinePlugin };
  window["spine.SpinePlugin"] = SpinePlugin;
  return __toCommonJS(index_exports);
})();
//# sourceMappingURL=spine-phaser-v4.js.map
