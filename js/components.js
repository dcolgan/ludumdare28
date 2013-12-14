// Generated by CoffeeScript 1.6.3
window.components = {
  PlayerComponent: {},
  PixelPositionComponent: {
    x: 0,
    y: 0
  },
  RotationComponent: {
    angle: 0
  },
  DirectionComponent: {
    direction: 'down'
  },
  GridPositionComponent: {
    col: 0,
    row: 0,
    gridSize: 32,
    justEntered: false
  },
  ColorComponent: {
    color: 'black'
  },
  VelocityComponent: {
    maxSpeed: 4,
    dx: 0,
    dy: 0
  },
  ShapeRendererComponent: {
    width: 32,
    height: 32,
    type: 'rectangle'
  },
  ActionInputComponent: {
    left: false,
    right: false,
    up: false,
    down: false,
    action: false,
    cancel: false,
    enabled: true
  },
  RandomArrowsInputComponent: {},
  KeyboardArrowsInputComponent: {},
  GridMovementComponent: {
    speed: 0.2
  },
  CollidableComponent: {},
  PickUpAbleComponent: {},
  IsGridMovingComponent: {
    dx: 0,
    dy: 0,
    destCol: 0,
    destRow: 0
  },
  ExitComponent: {},
  CameraComponent: {},
  CameraFollowsComponent: {},
  TweenComponent: {
    speed: 0,
    start: 0,
    current: null,
    dest: 0,
    component: null,
    attr: '',
    easingFn: null
  },
  TilemapVisibleLayerComponent: {
    tileData: null,
    tileImageUrl: '',
    tileWidth: 32,
    tileHeight: 32,
    zIndex: 0
  },
  TilemapCollisionLayerComponent: {
    tileData: null
  },
  TilemapOutdoorCollisionComponent: {},
  TilemapIndoorCollisionComponent: {},
  DialogBoxComponent: {
    visible: false,
    talkee: null
  },
  EyeHavingComponent: {
    offsetMax: 5,
    targetEntity: null,
    eyesImageUrl: ''
  },
  DialogBoxTextComponent: {
    text: ''
  },
  NPCDialogSayingComponent: {
    text: ''
  },
  StaticSpriteComponent: {
    spriteUrl: ''
  },
  AnimationComponent: {
    currentAction: 'walk-down',
    spritesheetUrl: '',
    frameWidth: 32,
    frameHeight: 32,
    offsetX: 0,
    offsetY: 0
  },
  AnimationActionComponent: {
    name: 'walk-down',
    row: 0,
    indices: [],
    frameLength: 100,
    currentFrame: 0,
    frameElapsedTime: 0
  }
};
