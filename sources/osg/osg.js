'use strict';

var AutoTransform = require('osg/AutoTransform');
var BillboardAttribute = require('osg/BillboardAttribute');
var BlendColor = require('osg/BlendColor');
var BlendFunc = require('osg/BlendFunc');
var BoundingBox = require('osg/BoundingBox');
var BoundingSphere = require('osg/BoundingSphere');
var BufferArray = require('osg/BufferArray');
var Camera = require('osg/Camera');
var ColorMask = require('osg/ColorMask');
var ComputeBoundsVisitor = require('osg/ComputeBoundsVisitor');
var ComputeMatrixFromNodePath = require('osg/computeMatrixFromNodePath');
var CullFace = require('osg/CullFace');
var CullingSet = require('osg/CullingSet');
var CullSettings = require('osg/CullSettings');
var CullStack = require('osg/CullStack');
var CullVisitor = require('osg/CullVisitor');
var Depth = require('osg/Depth');
var DrawArrayLengths = require('osg/DrawArrayLengths');
var DrawArrays = require('osg/DrawArrays');
var DrawElements = require('osg/DrawElements');
var EllipsoidModel = require('osg/EllipsoidModel');
var FrameBufferObject = require('osg/FrameBufferObject');
var FrameStamp = require('osg/FrameStamp');
var Geometry = require('osg/Geometry');
var GLObject = require('osg/GLObject');
var Image = require('osg/Image');
var ImageStream = require('osg/ImageStream');
var KdTree = require('osg/KdTree');
var KdTreeBuilder = require('osg/KdTreeBuilder');
var Light = require('osg/Light');
var LightSource = require('osg/LightSource');
var LineWidth = require('osg/LineWidth');
var Lod = require('osg/Lod');
var Material = require('osg/Material');
var osgjsMath = require('osg/math');
var MatrixTransform = require('osg/MatrixTransform');
var PooledResource = require('osg/PooledResource');
var PooledArray = require('osg/PooledArray');
var PooledMap = require('osg/PooledMap');
var Node = require('osg/Node');
var NodeVisitor = require('osg/NodeVisitor');
var Notify = require('osg/notify');
var Object = require('osg/Object');
var Options = require('osg/Options');
var PagedLOD = require('osg/PagedLOD');
var Polytope = require('osg/Polytope');
var PointSizeAttribute = require('osg/PointSizeAttribute');
var Plane = require('osg/Plane');
var PrimitiveFunctor = require('osg/PrimitiveFunctor');
var PrimitiveIndexFunctor = require('osg/PrimitiveIndexFunctor');
var primitiveSet = require('osg/primitiveSet');
var Program = require('osg/Program');
var Projection = require('osg/Projection');
var RenderBin = require('osg/RenderBin');
var RenderLeaf = require('osg/RenderLeaf');
var RenderStage = require('osg/RenderStage');
var Shader = require('osg/Shader');
var Shape = require('osg/shape');
var StackObjectPairPool = require('osg/StackObjectPairPool');
var State = require('osg/State');
var StateAttribute = require('osg/StateAttribute');
var StateGraph = require('osg/StateGraph');
var StateSet = require('osg/StateSet');
var Switch = require('osg/Switch');
var Texture = require('osg/Texture');
var TextureCubeMap = require('osg/TextureCubeMap');
var Transform = require('osg/Transform');
var TriangleIndexFunctor = require('osg/TriangleIndexFunctor');
var Uniform = require('osg/Uniform');
var UpdateVisitor = require('osg/UpdateVisitor');
var MACROUTILS = require('osg/Utils');
var Viewport = require('osg/Viewport');
var Scissor = require('osg/Scissor');
var TransformEnums = require('osg/transformEnums');
var Timer = require('osg/Timer');
var TimerGPU = require('osg/TimerGPU');
var WebGLCaps = require('osg/WebGLCaps');

var osg = {};
osg.AutoTransform = AutoTransform;
osg.BillboardAttribute = BillboardAttribute;
osg.BlendColor = BlendColor;
osg.BlendFunc = BlendFunc;
osg.BoundingBox = BoundingBox;
osg.BoundingSphere = BoundingSphere;
osg.BufferArray = BufferArray;
osg.ColorMask = ColorMask;
osg.Camera = Camera;
osg.ColorMask = ColorMask;
osg.ComputeBoundsVisitor = ComputeBoundsVisitor;
MACROUTILS.objectMix(osg, ComputeMatrixFromNodePath);
osg.CullFace = CullFace;
osg.CullingSet = CullingSet;
osg.CullSettings = CullSettings;
osg.CullStack = CullStack;
osg.CullVisitor = CullVisitor;
osg.Depth = Depth;
osg.DrawArrayLengths = DrawArrayLengths;
osg.DrawArrays = DrawArrays;
osg.DrawElements = DrawElements;
osg.EllipsoidModel = EllipsoidModel;
osg.WGS_84_RADIUS_EQUATOR = EllipsoidModel.WGS_84_RADIUS_EQUATOR;
osg.WGS_84_RADIUS_POLAR = EllipsoidModel.WGS_84_RADIUS_POLAR;
osg.FrameBufferObject = FrameBufferObject;
osg.FrameStamp = FrameStamp;
osg.Geometry = Geometry;
osg.GLObject = GLObject;
osg.Image = Image;
osg.ImageStream = ImageStream;
osg.KdTree = KdTree;
osg.KdTreeBuilder = KdTreeBuilder;
osg.Light = Light;
osg.LightSource = LightSource;
osg.LineWidth = LineWidth;
osg.Lod = Lod;
osg.Material = Material;
MACROUTILS.objectMix(osg, osgjsMath);
osg.MatrixTransform = MatrixTransform;
osg.PooledResource = PooledResource;
osg.PooledArray = PooledArray;
osg.PooledMap = PooledMap;
osg.Node = Node;
osg.NodeVisitor = NodeVisitor;
MACROUTILS.objectMix(osg, Notify);
osg.Object = Object;
osg.Options = Options;
osg.PagedLOD = PagedLOD;
osg.Plane = Plane;
osg.PointSizeAttribute = PointSizeAttribute;
osg.Polytope = Polytope;
osg.primitiveSet = primitiveSet;
osg.PrimitiveFunctor = PrimitiveFunctor;
osg.PrimitiveIndexFunctor = PrimitiveIndexFunctor;
osg.Program = Program;
osg.Projection = Projection;
osg.RenderBin = RenderBin;
osg.RenderLeaf = RenderLeaf;
osg.RenderStage = RenderStage;
osg.Shader = Shader;
MACROUTILS.objectMix(osg, Shape);
osg.StackObjectPairPool = StackObjectPairPool;
osg.State = State;
osg.StateAttribute = StateAttribute;
osg.StateGraph = StateGraph;
osg.StateSet = StateSet;
osg.Scissor = Scissor;
osg.Switch = Switch;
osg.Texture = Texture;
osg.TextureCubeMap = TextureCubeMap;
osg.Transform = Transform;
osg.TriangleIndexFunctor = TriangleIndexFunctor;
osg.Uniform = Uniform;
osg.UpdateVisitor = UpdateVisitor;
MACROUTILS.objectMix(osg, MACROUTILS);
osg.Viewport = Viewport;

var glm = require('osg/glMatrix');
osg.vec2 = glm.vec2;
osg.vec3 = glm.vec3;
osg.vec4 = glm.vec4;
osg.quat = glm.quat;
osg.mat3 = glm.mat3;
osg.mat4 = glm.mat4;

osg.Transform.RELATIVE_RF = TransformEnums.RELATIVE_RF;
osg.Transform.ABSOLUTE_RF = TransformEnums.ABSOLUTE_RF;
osg.Timer = Timer;
osg.TimerGPU = TimerGPU;
osg.WebGLCaps = WebGLCaps;

module.exports = osg;
