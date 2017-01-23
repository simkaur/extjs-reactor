import React from 'react';
declare class Button extends React.Component<ButtonProps, any> { }
export interface ButtonProps {
	alignOnScroll?: boolean
	alignTarget?: string
	allowDepress?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	arrowAlign?: string
	arrowCls?: string
	arrowVisible?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	baseParams?: Object
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	clickEvent?: string
	cls?: string
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	destroyMenu?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableToggle?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	handleMouseEvents?: boolean
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	href?: string
	hrefTarget?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menu?: Menu | string | Object
	menuAlign?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowText?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	params?: Object
	plugins?: any | Object[] | Object
	pressed?: boolean
	preventDefault?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeat?: boolean | Object
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scale?: string
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showEmptyMenu?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	text?: string
	textAlign?: string
	toFrontOnShow?: boolean
	toggleGroup?: string
	toggleHandler?: Function | string
	tooltip?: string | Object
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: string | number
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBeforeToggle?: Function
	onBlur?: Function
	onBoxReady?: Function
	onClick?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onMenuHide?: Function
	onMenuShow?: Function
	onMenuTriggerOut?: Function
	onMenuTriggerOver?: Function
	onMouseOut?: Function
	onMouseOver?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTextChange?: Function
	onToggle?: Function
}
declare class Cycle extends React.Component<CycleProps, any> { }
export interface CycleProps {
	alignOnScroll?: boolean
	alignTarget?: string
	allowDepress?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	arrowAlign?: string
	arrowCls?: string
	arrowHandler?: Function | string
	arrowTooltip?: string
	arrowVisible?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	baseParams?: Object
	bind?: Object | string
	border?: number | string | boolean
	changeHandler?: Function | string
	childEls?: Object | string[] | Object[]
	clickEvent?: string
	cls?: string
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	destroyMenu?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableToggle?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceGlyph?: number | string
	forceIcon?: string
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	handleMouseEvents?: boolean
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	href?: string
	hrefTarget?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menu?: Menu | string | Object
	menuAlign?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowText?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	params?: Object
	plugins?: any | Object[] | Object
	prependText?: string
	pressed?: boolean
	preventDefault?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeat?: boolean | Object
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scale?: string
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showEmptyMenu?: boolean
	showText?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	text?: string
	textAlign?: string
	toFrontOnShow?: boolean
	toggleGroup?: string
	toggleHandler?: Function | string
	tooltip?: string | Object
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: string | number
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onArrowClick?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBeforeToggle?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onClick?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onMenuHide?: Function
	onMenuShow?: Function
	onMenuTriggerOut?: Function
	onMenuTriggerOver?: Function
	onMouseOut?: Function
	onMouseOver?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTextChange?: Function
	onToggle?: Function
}
declare class SegmentedButton extends React.Component<SegmentedButtonProps, any> { }
export interface SegmentedButtonProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowDepress?: boolean
	allowMultiple?: boolean
	allowToggle?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultUI?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceSelection?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: string | number | string[] | number[]
	vertical?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onToggle?: Function
}
declare class SplitButton extends React.Component<SplitButtonProps, any> { }
export interface SplitButtonProps {
	alignOnScroll?: boolean
	alignTarget?: string
	allowDepress?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	arrowAlign?: string
	arrowCls?: string
	arrowHandler?: Function | string
	arrowTooltip?: string
	arrowVisible?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	baseParams?: Object
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	clickEvent?: string
	cls?: string
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	destroyMenu?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableToggle?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	handleMouseEvents?: boolean
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	href?: string
	hrefTarget?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menu?: Menu | string | Object
	menuAlign?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowText?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	params?: Object
	plugins?: any | Object[] | Object
	pressed?: boolean
	preventDefault?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeat?: boolean | Object
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scale?: string
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showEmptyMenu?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	text?: string
	textAlign?: string
	toFrontOnShow?: boolean
	toggleGroup?: string
	toggleHandler?: Function | string
	tooltip?: string | Object
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: string | number
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onArrowClick?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBeforeToggle?: Function
	onBlur?: Function
	onBoxReady?: Function
	onClick?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onMenuHide?: Function
	onMenuShow?: Function
	onMenuTriggerOut?: Function
	onMenuTriggerOver?: Function
	onMouseOut?: Function
	onMouseOver?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTextChange?: Function
	onToggle?: Function
}
declare class CalendarEvent extends React.Component<CalendarEventProps, any> { }
export interface CalendarEventProps {
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	defaultTitle?: string
	endDate?: any
	height?: number | string
	hidden?: boolean
	listeners?: Object
	mode?: string
	model?: any
	palette?: any
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	resize?: boolean
	session?: boolean | Object | any
	startDate?: any
	style?: string | Object
	timeFormat?: string
	title?: string
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	view?: any
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class CalendarFormAdd extends React.Component<CalendarFormAddProps, any> { }
export interface CalendarFormAddProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allDayField?: Object
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animateTarget?: string | any | Component | boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	calendarField?: Object
	cancelButton?: Object
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultEndTime?: number[]
	defaultFocus?: string | number | Component
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultStartTime?: number[]
	defaultType?: string
	descriptionField?: Object
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	dropButton?: Object
	endDateField?: Object
	endTimeField?: Object
	event?: any
	expandOnShow?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	fromContainer?: Object
	ghost?: boolean | Function
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	hideShadowOnDeactivate?: boolean
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskClickAction?: string
	maskElement?: string
	maxHeight?: number
	maximizable?: boolean
	maximized?: boolean
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minimizable?: boolean
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	monitorResize?: boolean
	onEsc?: Function
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plain?: boolean
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveButton?: Object
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: any
	startDateField?: Object
	startTimeField?: Object
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string
	titleAlign?: string
	titleCollapse?: boolean
	titleField?: Object
	titleRotation?: string | number
	toContainer?: Object
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	view?: any
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	x?: number
	y?: number
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCancel?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onDrop?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMaskClick?: Function
	onMaximize?: Function
	onMinimize?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRestore?: Function
	onSave?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class CalendarCalendarPicker extends React.Component<CalendarCalendarPickerProps, any> { }
export interface CalendarCalendarPickerProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	allQuery?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	anyMatch?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoLoadOnValue?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoSelect?: boolean
	autoSelectLast?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	caseSensitive?: boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	clearFilterOnBlur?: boolean
	cls?: string | string[]
	collapseOnSelect?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListConfig?: Object
	defaultListenerScope?: boolean
	delimiter?: string
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enableRegEx?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceSelection?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	growToLongestValue?: boolean
	height?: number | string
	hidden?: boolean
	hiddenName?: string
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listConfig?: Object
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	matchFieldWidth?: boolean
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minChars?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	multiSelect?: boolean
	name?: string
	openCls?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	pickerAlign?: string
	pickerOffset?: number[]
	pinList?: boolean
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	queryCaching?: boolean
	queryDelay?: number
	queryMode?: string
	queryParam?: string
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	selectOnTab?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store: any | string | Object[] | Object
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	transform?: string | HTMLElement | any
	transformInPlace?: boolean
	triggerAction?: string
	triggerCls?: string
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	typeAhead?: boolean
	typeAheadDelay?: number
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valueField: string
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeQuery?: Function
	onBeforeRender?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onExpand?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class CalendarFormEdit extends React.Component<CalendarFormEditProps, any> { }
export interface CalendarFormEditProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allDayField?: Object
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animateTarget?: string | any | Component | boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	calendarField?: Object
	cancelButton?: Object
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultEndTime?: number[]
	defaultFocus?: string | number | Component
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultStartTime?: number[]
	defaultType?: string
	descriptionField?: Object
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	dropButton?: Object
	endDateField?: Object
	endTimeField?: Object
	event?: any
	expandOnShow?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	fromContainer?: Object
	ghost?: boolean | Function
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	hideShadowOnDeactivate?: boolean
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskClickAction?: string
	maskElement?: string
	maxHeight?: number
	maximizable?: boolean
	maximized?: boolean
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minimizable?: boolean
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	monitorResize?: boolean
	onEsc?: Function
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plain?: boolean
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveButton?: Object
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: any
	startDateField?: Object
	startTimeField?: Object
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string
	titleAlign?: string
	titleCollapse?: boolean
	titleField?: Object
	titleRotation?: string | number
	toContainer?: Object
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	view?: any
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	x?: number
	y?: number
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCancel?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onDrop?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMaskClick?: Function
	onMaximize?: Function
	onMinimize?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRestore?: Function
	onSave?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class CalendarDaysHeader extends React.Component<CalendarDaysHeaderProps, any> { }
export interface CalendarDaysHeaderProps {
	bind?: Object | string
	border?: boolean
	cellCls?: string
	cls?: string | string[]
	compact?: boolean
	compactOptions?: Object
	controller?: string | Object | any
	defaultListenerScope?: boolean
	format?: string
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	value?: any
	viewModel?: string | Object | any
	visibleDays?: number
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class CalendarWeeksHeader extends React.Component<CalendarWeeksHeaderProps, any> { }
export interface CalendarWeeksHeaderProps {
	bind?: Object | string
	border?: boolean
	cellCls?: string
	cls?: string | string[]
	compact?: boolean
	compactOptions?: Object
	controller?: string | Object | any
	defaultListenerScope?: boolean
	format?: string
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	value?: any
	viewModel?: string | Object | any
	visibleDays?: number
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class CalendarList extends React.Component<CalendarListProps, any> { }
export interface CalendarListProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	blockRefresh?: boolean
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	deferEmptyText?: boolean
	deferInitialRefresh?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableToggle?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemCls?: string
	itemId?: string
	itemSelector: string
	itemTpl?: string | string[] | any
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	loadingCls?: string
	loadingHeight?: number
	loadingText?: string
	loadMask?: boolean | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiSelect?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overItemCls?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preserveScrollOnRefresh?: boolean
	preserveScrollOnReload?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectedItemCls?: string
	selection?: any
	selectionModel?: Object | any
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	simpleSelect?: boolean
	singleSelect?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	style?: string | Object
	tabIndex?: number
	throttledUpdate?: boolean
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl: string | string[] | any
	tplWriteMode?: string
	trackOver?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	updateDelay?: number
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeRefresh?: Function
	onBeforeRender?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusChange?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onHighlightItem?: Function
	onItemAdd?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onItemRemove?: Function
	onItemUpdate?: Function
	onMove?: Function
	onRefresh?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onUnhighlightItem?: Function
	onViewReady?: Function
}
declare class CalendarDay extends React.Component<CalendarDayProps, any> { }
export interface CalendarDayProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dayHeader?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	eventRelayers?: Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	view?: Object
	viewModel?: string | Object | any
	visibleDays?: any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeEventAdd?: Function
	onBeforeEventDragStart?: Function
	onBeforeEventResizeStart?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onEventDrop?: Function
	onEventResize?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onValidateEventDrop?: Function
	onValidateEventResize?: Function
}
declare class CalendarDays extends React.Component<CalendarDaysProps, any> { }
export interface CalendarDaysProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dayHeader?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	eventRelayers?: Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	view?: Object
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeEventAdd?: Function
	onBeforeEventDragStart?: Function
	onBeforeEventResizeStart?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onEventDrop?: Function
	onEventResize?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onValidateEventDrop?: Function
	onValidateEventResize?: Function
}
declare class CalendarMonth extends React.Component<CalendarMonthProps, any> { }
export interface CalendarMonthProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dayHeader?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	eventRelayers?: Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: any
	view?: Object
	viewModel?: string | Object | any
	visibleWeeks?: number
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeEventAdd?: Function
	onBeforeEventDragStart?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onEventDrop?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onValidateEventDrop?: Function
}
declare class Calendar extends React.Component<CalendarProps, any> { }
export interface CalendarProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	calendarList?: Object
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	compact?: boolean
	compactOptions?: Object
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	createButton?: Object
	createButtonPosition?: string
	data?: Object
	dateTitle?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	nextButton?: Object
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	previousButton?: Object
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	sideBar?: Object
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: Object | any
	style?: string | Object
	suspendLayout?: boolean
	switcherPosition?: string
	tabIndex?: number
	tbar?: Object | Object[]
	timezoneOffset?: number
	title?: string | Object
	titleAlign?: string
	titleBar?: Object
	titleCollapse?: boolean
	titleRotation?: string | number
	todayButton?: Object
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: any
	viewModel?: string | Object | any
	views?: Object
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class CalendarWeek extends React.Component<CalendarWeekProps, any> { }
export interface CalendarWeekProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dayHeader?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	eventRelayers?: Object
	expandToolText?: string
	fbar?: Object | Object[]
	firstDayOfWeek?: number
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: any
	view?: Object
	viewModel?: string | Object | any
	visibleDays?: number
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeEventAdd?: Function
	onBeforeEventDragStart?: Function
	onBeforeEventResizeStart?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onEventDrop?: Function
	onEventResize?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onValidateEventDrop?: Function
	onValidateEventResize?: Function
}
declare class CalendarWeeks extends React.Component<CalendarWeeksProps, any> { }
export interface CalendarWeeksProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dayHeader?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	eventRelayers?: Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	view?: Object
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeEventAdd?: Function
	onBeforeEventDragStart?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onEventDrop?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onValidateEventDrop?: Function
}
declare class CalendarDayView extends React.Component<CalendarDayViewProps, any> { }
export interface CalendarDayViewProps {
	addForm?: Object
	allowSelection?: boolean
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	compact?: boolean
	controller?: string | Object | any
	defaultListenerScope?: boolean
	displayOverlap?: boolean
	draggable?: boolean
	droppable?: boolean
	editForm?: Object
	endTime?: number
	eventDefaults?: Object
	gestureNavigation?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	resizeEvents?: boolean
	session?: boolean | Object | any
	showNowMarker?: boolean
	startTime?: number
	store?: Object | any
	style?: string | Object
	timeFormat?: string
	timeRenderer?: Function
	timezoneOffset?: number
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	value?: any
	viewModel?: string | Object | any
	width?: number | string
	onBeforeEventAdd?: Function
	onBeforeEventDragStart?: Function
	onBeforeEventEdit?: Function
	onBeforeEventResizeStart?: Function
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onEventAdd?: Function
	onEventDrop?: Function
	onEventEdit?: Function
	onEventResize?: Function
	onEventTap?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onValidateEventAdd?: Function
	onValidateEventDrop?: Function
	onValidateEventEdit?: Function
	onValidateEventResize?: Function
	onValueChange?: Function
	onWidthChange?: Function
}
declare class CalendarDaysView extends React.Component<CalendarDaysViewProps, any> { }
export interface CalendarDaysViewProps {
	addForm?: Object
	allowSelection?: boolean
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	compact?: boolean
	controller?: string | Object | any
	defaultListenerScope?: boolean
	displayOverlap?: boolean
	draggable?: boolean
	droppable?: boolean
	editForm?: Object
	endTime?: number
	eventDefaults?: Object
	gestureNavigation?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	resizeEvents?: boolean
	session?: boolean | Object | any
	showNowMarker?: boolean
	startTime?: number
	store?: Object | any
	style?: string | Object
	timeFormat?: string
	timeRenderer?: Function
	timezoneOffset?: number
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	value?: any
	viewModel?: string | Object | any
	visibleDays?: number
	width?: number | string
	onBeforeEventAdd?: Function
	onBeforeEventDragStart?: Function
	onBeforeEventEdit?: Function
	onBeforeEventResizeStart?: Function
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onEventAdd?: Function
	onEventDrop?: Function
	onEventEdit?: Function
	onEventResize?: Function
	onEventTap?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onValidateEventAdd?: Function
	onValidateEventDrop?: Function
	onValidateEventEdit?: Function
	onValidateEventResize?: Function
	onValueChange?: Function
	onWidthChange?: Function
}
declare class CalendarMonthView extends React.Component<CalendarMonthViewProps, any> { }
export interface CalendarMonthViewProps {
	addForm?: Object
	addOnSelect?: boolean
	allowSelection?: boolean
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	compact?: boolean
	compactOptions?: Object
	controller?: string | Object | any
	dayFormat?: string
	defaultListenerScope?: boolean
	draggable?: boolean
	droppable?: boolean
	editForm?: Object
	eventDefaults?: Object
	firstDayOfWeek?: number
	gestureNavigation?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	overflowText?: string
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	showOverflow?: string
	store?: Object | any
	style?: string | Object
	timezoneOffset?: number
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	value?: any
	viewModel?: string | Object | any
	visibleDays?: number
	visibleWeeks?: number
	weekendDays?: number[]
	width?: number | string
	onBeforeEventAdd?: Function
	onBeforeEventDragStart?: Function
	onBeforeEventEdit?: Function
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onEventAdd?: Function
	onEventDrop?: Function
	onEventEdit?: Function
	onEventTap?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSelect?: Function
	onSelectRange?: Function
	onValidateEventAdd?: Function
	onValidateEventDrop?: Function
	onValidateEventEdit?: Function
	onValueChange?: Function
	onWidthChange?: Function
}
declare class CalendarMultiView extends React.Component<CalendarMultiViewProps, any> { }
export interface CalendarMultiViewProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	compact?: boolean
	compactOptions?: Object
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultView?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: Object | any
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	timezoneOffset?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: any
	viewModel?: string | Object | any
	views?: Object
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class CalendarWeekView extends React.Component<CalendarWeekViewProps, any> { }
export interface CalendarWeekViewProps {
	addForm?: Object
	allowSelection?: boolean
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	compact?: boolean
	controller?: string | Object | any
	defaultListenerScope?: boolean
	displayOverlap?: boolean
	draggable?: boolean
	droppable?: boolean
	editForm?: Object
	endTime?: number
	eventDefaults?: Object
	firstDayOfWeek?: number
	gestureNavigation?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	resizeEvents?: boolean
	session?: boolean | Object | any
	showNowMarker?: boolean
	startTime?: number
	store?: Object | any
	style?: string | Object
	timeFormat?: string
	timeRenderer?: Function
	timezoneOffset?: number
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	value?: any
	viewModel?: string | Object | any
	visibleDays?: number
	width?: number | string
	onBeforeEventAdd?: Function
	onBeforeEventDragStart?: Function
	onBeforeEventEdit?: Function
	onBeforeEventResizeStart?: Function
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onEventAdd?: Function
	onEventDrop?: Function
	onEventEdit?: Function
	onEventResize?: Function
	onEventTap?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onValidateEventAdd?: Function
	onValidateEventDrop?: Function
	onValidateEventEdit?: Function
	onValidateEventResize?: Function
	onValueChange?: Function
	onWidthChange?: Function
}
declare class CalendarWeeksView extends React.Component<CalendarWeeksViewProps, any> { }
export interface CalendarWeeksViewProps {
	addForm?: Object
	addOnSelect?: boolean
	allowSelection?: boolean
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	compact?: boolean
	compactOptions?: Object
	controller?: string | Object | any
	dayFormat?: string
	defaultListenerScope?: boolean
	draggable?: boolean
	droppable?: boolean
	editForm?: Object
	eventDefaults?: Object
	firstDayOfWeek?: number
	gestureNavigation?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	overflowText?: string
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	showOverflow?: string
	store?: Object | any
	style?: string | Object
	timezoneOffset?: number
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	value?: any
	viewModel?: string | Object | any
	visibleDays?: number
	visibleWeeks?: number
	weekendDays?: number[]
	width?: number | string
	onBeforeEventAdd?: Function
	onBeforeEventDragStart?: Function
	onBeforeEventEdit?: Function
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onEventAdd?: Function
	onEventDrop?: Function
	onEventEdit?: Function
	onEventTap?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSelect?: Function
	onSelectRange?: Function
	onValidateEventAdd?: Function
	onValidateEventDrop?: Function
	onValidateEventEdit?: Function
	onValueChange?: Function
	onWidthChange?: Function
}
declare class Axis extends React.Component<AxisProps, any> { }
export interface AxisProps {
	adjustByMajorUnit?: boolean
	background?: Object
	fields?: Object[]
	floating?: number | Object
	grid?: Object
	hidden?: boolean
	increment?: number
	label?: Object
	labelInSpan?: boolean
	layout?: Object | any
	limits?: Object[] | Object
	linkedTo?: Axis | string | number
	listeners?: Object
	majorTickSteps?: number
	margin?: number
	maximum?: number
	maxZoom?: number
	minimum?: number
	minorTickSteps?: number
	minZoom?: number
	needHighPrecision?: boolean
	position?: string
	reconcileRange?: boolean
	renderer?: Function
	segmenter?: Object | any
	style?: Object
	title?: string | Object
	titleMargin?: number
	visibleRange?: Object[]
	onRangeChange?: Function
	onVisibleRangeChange?: Function
}
declare class Axis3D extends React.Component<Axis3DProps, any> { }
export interface Axis3DProps {
	adjustByMajorUnit?: boolean
	background?: Object
	fields?: Object[]
	floating?: number | Object
	grid?: Object
	hidden?: boolean
	increment?: number
	label?: Object
	labelInSpan?: boolean
	layout?: Object | any
	limits?: Object[] | Object
	linkedTo?: Axis | string | number
	listeners?: Object
	majorTickSteps?: number
	margin?: number
	maximum?: number
	maxZoom?: number
	minimum?: number
	minorTickSteps?: number
	minZoom?: number
	needHighPrecision?: boolean
	position?: string
	reconcileRange?: boolean
	renderer?: Function
	segmenter?: Object | any
	style?: Object
	title?: string | Object
	titleMargin?: number
	visibleRange?: Object[]
	onRangeChange?: Function
	onVisibleRangeChange?: Function
}
declare class Cartesian extends React.Component<CartesianProps, any> { }
export interface CartesianProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animation?: boolean | Object
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	axes?: Axis | Object[] | Object
	background?: Object
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	colors?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	engine?: string
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	flipXY?: boolean
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	gradients?: Object[]
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	highlightItem?: Object
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	insetPadding?: Object | number | string
	interactions?: Object[]
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	legend?: Legend | any | boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	previewAltText?: string
	previewTitleText?: string
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	series?: any | Object[]
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	sprites?: Object[]
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any | string | Object
	style?: Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	theme?: string
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRefresh?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBodyResize?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemClick?: Function
	onItemDblClick?: Function
	onItemMouseDown?: Function
	onItemMouseMove?: Function
	onItemMouseOut?: Function
	onItemMouseOver?: Function
	onItemMouseUp?: Function
	onItemTap?: Function
	onMove?: Function
	onRedraw?: Function
	onRefresh?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpriteClick?: Function
	onSpriteDblClick?: Function
	onSpriteMouseDown?: Function
	onSpriteMouseMove?: Function
	onSpriteMouseOut?: Function
	onSpriteMouseOver?: Function
	onSpriteMouseUp?: Function
	onSpriteTap?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onStoreChange?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Chart extends React.Component<ChartProps, any> { }
export interface ChartProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animation?: boolean | Object
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	axes?: Axis | Object[] | Object
	background?: Object
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	colors?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	engine?: string
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	flipXY?: boolean
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	gradients?: Object[]
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	highlightItem?: Object
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	insetPadding?: Object | number | string
	interactions?: Object[]
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	legend?: Legend | any | boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	previewAltText?: string
	previewTitleText?: string
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	series?: any | Object[]
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	sprites?: Object[]
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any | string | Object
	style?: Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	theme?: string
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRefresh?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBodyResize?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemClick?: Function
	onItemDblClick?: Function
	onItemMouseDown?: Function
	onItemMouseMove?: Function
	onItemMouseOut?: Function
	onItemMouseOver?: Function
	onItemMouseUp?: Function
	onItemTap?: Function
	onMove?: Function
	onRedraw?: Function
	onRefresh?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpriteClick?: Function
	onSpriteDblClick?: Function
	onSpriteMouseDown?: Function
	onSpriteMouseMove?: Function
	onSpriteMouseOut?: Function
	onSpriteMouseOver?: Function
	onSpriteMouseUp?: Function
	onSpriteTap?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onStoreChange?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Interaction extends React.Component<InteractionProps, any> { }
export interface InteractionProps {
	chart?: any
	enabled?: boolean
	listeners?: Object
}
declare class Legend extends React.Component<LegendProps, any> { }
export interface LegendProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	bind?: Object | string
	blockRefresh?: boolean
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	deferEmptyText?: boolean
	deferInitialRefresh?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemCls?: string
	itemId?: string
	itemSelector: string
	itemTpl?: string | string[] | any
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	loadingCls?: string
	loadingHeight?: number
	loadingText?: string
	loadMask?: boolean | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiSelect?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overItemCls?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preserveScrollOnRefresh?: boolean
	preserveScrollOnReload?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectedItemCls?: string
	selection?: any
	selectionModel?: Object | any
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	simpleSelect?: boolean
	singleSelect?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	style?: string | Object
	tabIndex?: number
	throttledUpdate?: boolean
	toFrontOnShow?: boolean
	touchAction?: Object
	tplWriteMode?: string
	trackOver?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	updateDelay?: number
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeRefresh?: Function
	onBeforeRender?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusChange?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onHighlightItem?: Function
	onItemAdd?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onItemRemove?: Function
	onItemUpdate?: Function
	onMove?: Function
	onRefresh?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onUnhighlightItem?: Function
	onViewReady?: Function
}
declare class Polar extends React.Component<PolarProps, any> { }
export interface PolarProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animation?: boolean | Object
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	axes?: Axis | Object[] | Object
	background?: Object
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	center?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	colors?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	engine?: string
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	gradients?: Object[]
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	highlightItem?: Object
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	innerPadding?: number
	insetPadding?: Object | number | string
	interactions?: Object[]
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	legend?: Legend | any | boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	previewAltText?: string
	previewTitleText?: string
	publishes?: string | string[] | Object
	radius?: number
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	series?: any | Object[]
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	sprites?: Object[]
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any | string | Object
	style?: Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	theme?: string
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRefresh?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBodyResize?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemClick?: Function
	onItemDblClick?: Function
	onItemMouseDown?: Function
	onItemMouseMove?: Function
	onItemMouseOut?: Function
	onItemMouseOver?: Function
	onItemMouseUp?: Function
	onItemTap?: Function
	onMove?: Function
	onRedraw?: Function
	onRefresh?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpriteClick?: Function
	onSpriteDblClick?: Function
	onSpriteMouseDown?: Function
	onSpriteMouseMove?: Function
	onSpriteMouseOut?: Function
	onSpriteMouseOver?: Function
	onSpriteMouseUp?: Function
	onSpriteTap?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onStoreChange?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class SpaceFilling extends React.Component<SpaceFillingProps, any> { }
export interface SpaceFillingProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animation?: boolean | Object
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	axes?: Axis | Object[] | Object
	background?: Object
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	colors?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	engine?: string
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	gradients?: Object[]
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	highlightItem?: Object
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	insetPadding?: Object | number | string
	interactions?: Object[]
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	legend?: Legend | any | boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	previewAltText?: string
	previewTitleText?: string
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	series?: any | Object[]
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	sprites?: Object[]
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any | string | Object
	style?: Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	theme?: string
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRefresh?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBodyResize?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemClick?: Function
	onItemDblClick?: Function
	onItemMouseDown?: Function
	onItemMouseMove?: Function
	onItemMouseOut?: Function
	onItemMouseOver?: Function
	onItemMouseUp?: Function
	onItemTap?: Function
	onMove?: Function
	onRedraw?: Function
	onRefresh?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpriteClick?: Function
	onSpriteDblClick?: Function
	onSpriteMouseDown?: Function
	onSpriteMouseMove?: Function
	onSpriteMouseOut?: Function
	onSpriteMouseOver?: Function
	onSpriteMouseUp?: Function
	onSpriteTap?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onStoreChange?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Component extends React.Component<ComponentProps, any> { }
export interface ComponentProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Box extends React.Component<BoxProps, any> { }
export interface BoxProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ButtonGroup extends React.Component<ButtonGroupProps, any> { }
export interface ButtonGroupProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseToolText?: string
	columns?: number
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultButtonUI?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Container extends React.Component<ContainerProps, any> { }
export interface ContainerProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Viewport extends React.Component<ViewportProps, any> { }
export interface ViewportProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxUserScale?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	resizable?: boolean | Object
	resizeHandles?: string
	responsiveConfig?: Object
	responsiveFormulas?: Object
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class D3Canvas extends React.Component<D3CanvasProps, any> { }
export interface D3CanvasProps {
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	componentCls?: string
	controller?: string | Object | any
	defaultListenerScope?: boolean
	hdpi?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	size?: Object
	store?: any
	style?: string | Object
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onWidthChange?: Function
}
declare class D3HeatMap extends React.Component<D3HeatMapProps, any> { }
export interface D3HeatMapProps {
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	clipScene?: boolean
	cls?: string | string[]
	colorAxis?: any
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	labels?: Object | boolean
	legend?: any
	listeners?: Object
	padding?: Object | string | number
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	size?: Object
	store?: any
	style?: string | Object
	tiles?: Object
	tooltip?: ToolTip
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	yAxis?: any
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onSceneSetup?: Function
	onWidthChange?: Function
}
declare class D3Pack extends React.Component<D3PackProps, any> { }
export interface D3PackProps {
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	clipScene?: boolean
	clipText?: boolean
	cls?: string | string[]
	colorAxis?: any
	controller?: string | Object | any
	defaultListenerScope?: boolean
	expandEventName?: string | string[]
	height?: number | string
	hidden?: boolean
	hierarchyCls?: string
	listeners?: Object
	nodeChildren?: Function
	nodeClass?: Function
	nodeKey?: Function
	nodeText?: Function | string | string[]
	padding?: Object | string | number
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	rootVisible?: boolean
	selectEventName?: string | string[]
	selection?: any
	session?: boolean | Object | any
	size?: Object
	store?: any
	style?: string | Object
	tooltip?: ToolTip
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onSceneSetup?: Function
	onWidthChange?: Function
}
declare class D3Partition extends React.Component<D3PartitionProps, any> { }
export interface D3PartitionProps {
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	clipScene?: boolean
	cls?: string | string[]
	colorAxis?: any
	componentCls?: string
	controller?: string | Object | any
	defaultListenerScope?: boolean
	expandEventName?: string | string[]
	height?: number | string
	hidden?: boolean
	hierarchyCls?: string
	listeners?: Object
	nodeChildren?: Function
	nodeClass?: Function
	nodeKey?: Function
	nodeText?: Function | string | string[]
	nodeValue?: string | Function | number
	padding?: Object | string | number
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	rootVisible?: boolean
	selectEventName?: string | string[]
	selection?: any
	session?: boolean | Object | any
	size?: Object
	store?: any
	style?: string | Object
	tooltip?: ToolTip
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onSceneSetup?: Function
	onWidthChange?: Function
}
declare class D3Sunburst extends React.Component<D3SunburstProps, any> { }
export interface D3SunburstProps {
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	clipScene?: boolean
	cls?: string | string[]
	colorAxis?: any
	controller?: string | Object | any
	defaultListenerScope?: boolean
	expandEventName?: string | string[]
	height?: number | string
	hidden?: boolean
	hierarchyCls?: string
	listeners?: Object
	nodeChildren?: Function
	nodeClass?: Function
	nodeKey?: Function
	nodeText?: Function | string | string[]
	nodeValue?: string | Function | number
	padding?: Object | string | number
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	rootVisible?: boolean
	selectEventName?: string | string[]
	selection?: any
	session?: boolean | Object | any
	size?: Object
	store?: any
	style?: string | Object
	tooltip?: ToolTip
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onSceneSetup?: Function
	onWidthChange?: Function
}
declare class D3Tree extends React.Component<D3TreeProps, any> { }
export interface D3TreeProps {
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	clipScene?: boolean
	cls?: string | string[]
	colorAxis?: any
	controller?: string | Object | any
	defaultListenerScope?: boolean
	expandEventName?: string | string[]
	height?: number | string
	hidden?: boolean
	hierarchyCls?: string
	listeners?: Object
	nodeChildren?: Function
	nodeClass?: Function
	nodeKey?: Function
	nodeRadius?: number
	nodeSize?: number[]
	nodeText?: Function | string | string[]
	nodeValue?: string | Function | number
	padding?: Object | string | number
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	rootVisible?: boolean
	selectEventName?: string | string[]
	selection?: any
	session?: boolean | Object | any
	size?: Object
	store?: any
	style?: string | Object
	tooltip?: ToolTip
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onSceneSetup?: Function
	onWidthChange?: Function
}
declare class D3HorizontalTree extends React.Component<D3HorizontalTreeProps, any> { }
export interface D3HorizontalTreeProps {
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	clipScene?: boolean
	cls?: string | string[]
	colorAxis?: any
	controller?: string | Object | any
	defaultListenerScope?: boolean
	expandEventName?: string | string[]
	height?: number | string
	hidden?: boolean
	hierarchyCls?: string
	listeners?: Object
	nodeChildren?: Function
	nodeClass?: Function
	nodeKey?: Function
	nodeRadius?: number
	nodeSize?: number[]
	nodeText?: Function | string | string[]
	nodeValue?: string | Function | number
	padding?: Object | string | number
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	rootVisible?: boolean
	selectEventName?: string | string[]
	selection?: any
	session?: boolean | Object | any
	size?: Object
	store?: any
	style?: string | Object
	tooltip?: ToolTip
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onSceneSetup?: Function
	onWidthChange?: Function
}
declare class D3TreeMap extends React.Component<D3TreeMapProps, any> { }
export interface D3TreeMapProps {
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	busyLayoutText?: string
	clipScene?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	expandEventName?: string | string[]
	height?: number | string
	hidden?: boolean
	hierarchyCls?: string
	leafTile?: any
	listeners?: Object
	nodeChildren?: Function
	nodeClass?: Function
	nodeKey?: Function
	nodeText?: Function | string | string[]
	nodeValue?: string | Function | number
	padding?: Object | string | number
	parentTile?: any
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	rootVisible?: boolean
	selectEventName?: string | string[]
	selection?: any
	session?: boolean | Object | any
	size?: Object
	store?: any
	style?: string | Object
	tooltip?: ToolTip
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onSceneSetup?: Function
	onWidthChange?: Function
}
declare class D3SVG extends React.Component<D3SVGProps, any> { }
export interface D3SVGProps {
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	clipScene?: boolean
	cls?: string | string[]
	componentCls?: string
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	padding?: Object | string | number
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	size?: Object
	store?: any
	style?: string | Object
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onSceneSetup?: Function
	onWidthChange?: Function
}
declare class D3 extends React.Component<D3Props, any> { }
export interface D3Props {
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	clipScene?: boolean
	cls?: string | string[]
	componentCls?: string
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	padding?: Object | string | number
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	size?: Object
	store?: any
	style?: string | Object
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onSceneSetup?: Function
	onWidthChange?: Function
}
declare class DashboardColumn extends React.Component<DashboardColumnProps, any> { }
export interface DashboardColumnProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Dashboard extends React.Component<DashboardProps, any> { }
export interface DashboardProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	columnWidths?: number[]
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultContent?: Object[]
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxColumns?: number
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	parts?: Object
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeDragOver?: Function
	onBeforeDrop?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onDragOver?: Function
	onDrop?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onValidateDrop?: Function
}
declare class DashboardPanel extends React.Component<DashboardPanelProps, any> { }
export interface DashboardPanelProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class JsonPStore extends React.Component<JsonPStoreProps, any> { }
export interface JsonPStoreProps {
	asynchronousLoad?: boolean
	autoDestroy?: boolean
	autoLoad?: boolean | Object
	autoSync?: boolean
	batchUpdateMode?: string
	clearOnPageLoad?: boolean
	clearRemovedOnLoad?: boolean
	data?: Object[] | any
	fields?: Object[] | string[]
	filters?: Object[] | Function[]
	groupDir?: string
	grouper?: Object | any
	groupField?: string
	listeners?: Object
	model?: string | any
	pageSize?: number
	proxy?: string | any | Object
	remoteFilter?: boolean
	remoteSort?: boolean
	session?: any
	sorters?: any | Object[]
	sortOnLoad?: boolean
	statefulFilters?: boolean
	storeId?: string
	trackRemoved?: boolean
	onAdd?: Function
	onBeforeload?: Function
	onBeforePrefetch?: Function
	onBeforeSort?: Function
	onBeforeSync?: Function
	onBeginUpdate?: Function
	onClear?: Function
	onDataChanged?: Function
	onEndUpdate?: Function
	onFilterChange?: Function
	onGroupChange?: Function
	onLoad?: Function
	onMetaChange?: Function
	onPrefetch?: Function
	onRefresh?: Function
	onRemove?: Function
	onSort?: Function
	onUpdate?: Function
	onWrite?: Function
}
declare class Draw extends React.Component<DrawProps, any> { }
export interface DrawProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	engine?: string
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	gradients?: Object[]
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	previewAltText?: string
	previewTitleText?: string
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandler?: Function
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	sprites?: Object[]
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBodyResize?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpriteClick?: Function
	onSpriteDblClick?: Function
	onSpriteMouseDown?: Function
	onSpriteMouseMove?: Function
	onSpriteMouseOut?: Function
	onSpriteMouseOver?: Function
	onSpriteMouseUp?: Function
	onSpriteTap?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Surface extends React.Component<SurfaceProps, any> { }
export interface SurfaceProps {
	background?: Object
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	dirty?: boolean
	flipRtlText?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	rect?: Object[]
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class Editor extends React.Component<EditorProps, any> { }
export interface EditorProps {
	actions?: any
	activeItem?: string | number
	alignment?: string
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlur?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	autoSize?: boolean | Object
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	cancelOnEsc?: boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	completeOnEnter?: boolean
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	field?: any
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEl?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	ignoreNoChange?: boolean
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	offsets?: number[]
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	parentEl?: string | HTMLElement | any
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	revertInvalid?: boolean
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: boolean | string
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	swallowKeys?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	updateEl?: boolean
	userCls?: string | string[]
	value?: Object
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeComplete?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStartEdit?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCancelEdit?: Function
	onChildMove?: Function
	onComplete?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStartEdit?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Flash extends React.Component<FlashProps, any> { }
export interface FlashProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	backgroundColor?: string
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expressInstall?: boolean
	fixed?: boolean
	flashAttributes?: Object
	flashParams?: Object
	flashVars?: Object
	flashVersion?: string
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	swfHeight?: string | number
	swfWidth?: string | number
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	url: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	wmode?: string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFailure?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onSuccess?: Function
}
declare class CheckboxGroup extends React.Component<CheckboxGroupProps, any> { }
export interface CheckboxGroupProps {
	actions?: any
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	activeItem?: string | number
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: string | number | number[]
	columnWidth?: number
	combineErrors?: boolean
	combineLabels?: boolean
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldDefaults?: Object
	fieldLabel?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	invalidCls?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelConnector?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valuePublishEvent?: string[] | string
	vertical?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFieldErrorChange?: Function
	onFieldValidityChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
}
declare class Field extends React.Component<FieldProps, any> { }
export interface FieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class CheckBoxField extends React.Component<CheckBoxFieldProps, any> { }
export interface CheckBoxFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterBoxLabelTextTpl?: string | Object[] | any
	afterBoxLabelTpl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeBoxLabelTextTpl?: string | Object[] | any
	beforeBoxLabelTpl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	boxLabel?: string
	boxLabelAlign?: string
	boxLabelAttrTpl?: string | Object[] | any
	boxLabelCls?: string
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	checked?: boolean
	checkedCls?: string
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputValue?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	modelValue?: boolean | string | number
	modelValueUnchecked?: boolean | string | number
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	uncheckedValue?: string
	userCls?: string | string[]
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class Checkbox extends React.Component<CheckboxProps, any> { }
export interface CheckboxProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterBoxLabelTextTpl?: string | Object[] | any
	afterBoxLabelTpl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeBoxLabelTextTpl?: string | Object[] | any
	beforeBoxLabelTpl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	boxLabel?: string
	boxLabelAlign?: string
	boxLabelAttrTpl?: string | Object[] | any
	boxLabelCls?: string
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	checked?: boolean
	checkedCls?: string
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputValue?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	modelValue?: boolean | string | number
	modelValueUnchecked?: boolean | string | number
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	uncheckedValue?: string
	userCls?: string | string[]
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class ComboBox extends React.Component<ComboBoxProps, any> { }
export interface ComboBoxProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	allQuery?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	anyMatch?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoLoadOnValue?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoSelect?: boolean
	autoSelectLast?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	caseSensitive?: boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	clearFilterOnBlur?: boolean
	cls?: string | string[]
	collapseOnSelect?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListConfig?: Object
	defaultListenerScope?: boolean
	delimiter?: string
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enableRegEx?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceSelection?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	growToLongestValue?: boolean
	height?: number | string
	hidden?: boolean
	hiddenName?: string
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listConfig?: Object
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	matchFieldWidth?: boolean
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minChars?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	multiSelect?: boolean
	name?: string
	openCls?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	pickerAlign?: string
	pickerOffset?: number[]
	pinList?: boolean
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	queryCaching?: boolean
	queryDelay?: number
	queryMode?: string
	queryParam?: string
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	selectOnTab?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store: any | string | Object[] | Object
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	transform?: string | HTMLElement | any
	transformInPlace?: boolean
	triggerAction?: string
	triggerCls?: string
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	typeAhead?: boolean
	typeAheadDelay?: number
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valueField: string
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeQuery?: Function
	onBeforeRender?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onExpand?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class Combo extends React.Component<ComboProps, any> { }
export interface ComboProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	allQuery?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	anyMatch?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoLoadOnValue?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoSelect?: boolean
	autoSelectLast?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	caseSensitive?: boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	clearFilterOnBlur?: boolean
	cls?: string | string[]
	collapseOnSelect?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListConfig?: Object
	defaultListenerScope?: boolean
	delimiter?: string
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enableRegEx?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceSelection?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	growToLongestValue?: boolean
	height?: number | string
	hidden?: boolean
	hiddenName?: string
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listConfig?: Object
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	matchFieldWidth?: boolean
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minChars?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	multiSelect?: boolean
	name?: string
	openCls?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	pickerAlign?: string
	pickerOffset?: number[]
	pinList?: boolean
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	queryCaching?: boolean
	queryDelay?: number
	queryMode?: string
	queryParam?: string
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	selectOnTab?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store: any | string | Object[] | Object
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	transform?: string | HTMLElement | any
	transformInPlace?: boolean
	triggerAction?: string
	triggerCls?: string
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	typeAhead?: boolean
	typeAheadDelay?: number
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valueField: string
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeQuery?: Function
	onBeforeRender?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onExpand?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class DateField extends React.Component<DateFieldProps, any> { }
export interface DateFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	altFormats?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaDisabledDatesText?: string
	ariaDisabledDaysText?: string
	ariaErrorText?: string
	ariaFormat?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	ariaMaxText?: string
	ariaMinText?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disabledDates?: string[]
	disabledDatesText?: string
	disabledDays?: number[]
	disabledDaysText?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	format?: string
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	growAppend?: string
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	matchFieldWidth?: boolean
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxText?: string
	maxValue?: any | string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minText?: string
	minValue?: any | string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	openCls?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pickerAlign?: string
	pickerOffset?: number[]
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showToday?: boolean
	shrinkWrap?: boolean | number
	size?: number
	startDay?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitFormat?: string
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggerCls?: string
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	useStrict?: boolean
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onExpand?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class DisplayField extends React.Component<DisplayFieldProps, any> { }
export interface DisplayFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	htmlEncode?: boolean
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnlyCls?: string
	reference?: string
	region?: string
	renderData?: Object
	renderer?: Function | string
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnBlur?: boolean
	validation?: boolean | string
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class FileField extends React.Component<FileFieldProps, any> { }
export interface FileFieldProps {
	accept?: string
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	buttonConfig?: Object
	buttonMargin?: number
	buttonOnly?: boolean
	buttonText?: string
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	clearOnSubmit?: boolean
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggers?: Object
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class FileUploadField extends React.Component<FileUploadFieldProps, any> { }
export interface FileUploadFieldProps {
	accept?: string
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	buttonConfig?: Object
	buttonMargin?: number
	buttonOnly?: boolean
	buttonText?: string
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	clearOnSubmit?: boolean
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggers?: Object
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class FileButton extends React.Component<FileButtonProps, any> { }
export interface FileButtonProps {
	alignOnScroll?: boolean
	alignTarget?: string
	allowDepress?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	arrowAlign?: string
	arrowCls?: string
	arrowVisible?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	baseParams?: Object
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	clickEvent?: string
	cls?: string
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	destroyMenu?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableToggle?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	handleMouseEvents?: boolean
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	href?: string
	hrefTarget?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menu?: Menu | string | Object
	menuAlign?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowText?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	params?: Object
	plugins?: any | Object[] | Object
	pressed?: boolean
	preventDefault?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeat?: boolean | Object
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scale?: string
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showEmptyMenu?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	text?: string
	textAlign?: string
	toFrontOnShow?: boolean
	toggleGroup?: string
	toggleHandler?: Function | string
	tooltip?: string | Object
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: string | number
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBeforeToggle?: Function
	onBlur?: Function
	onBoxReady?: Function
	onClick?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onMenuHide?: Function
	onMenuShow?: Function
	onMenuTriggerOut?: Function
	onMenuTriggerOver?: Function
	onMouseOut?: Function
	onMouseOver?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTextChange?: Function
	onToggle?: Function
}
declare class HiddenField extends React.Component<HiddenFieldProps, any> { }
export interface HiddenFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class Hidden extends React.Component<HiddenProps, any> { }
export interface HiddenProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class HtmlEditor extends React.Component<HtmlEditorProps, any> { }
export interface HtmlEditorProps {
	actions?: any
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	activeItem?: string | number
	afterBodyEl?: string | Object[] | any
	afterIFrameTpl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	afterTextAreaTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeIFrameTpl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	beforeTextAreaTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	buttonDefaults?: Object
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	combineErrors?: boolean
	combineLabels?: boolean
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	createLinkText?: string
	data?: Object
	defaultAlign?: string
	defaultButtonUI?: string
	defaultFocus?: string
	defaultLinkValue?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultValue?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableAlignments?: boolean
	enableColors?: boolean
	enableFont?: boolean
	enableFontSize?: boolean
	enableFormat?: boolean
	enableLinks?: boolean
	enableLists?: boolean
	enableSourceEdit?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldDefaults?: Object
	fieldLabel?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusOnToFront?: boolean
	fontFamilies?: string[]
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	iframeAttrTpl?: string | Object[] | any
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelConnector?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	suspendLayout?: boolean
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforePush?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBeforeSync?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEditmodeChange?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFieldErrorChange?: Function
	onFieldValidityChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onInitialize?: Function
	onMove?: Function
	onPush?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onSync?: Function
	onValidityChange?: Function
}
declare class NumberField extends React.Component<NumberFieldProps, any> { }
export interface NumberFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowDecimals?: boolean
	allowExponential?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	autoStripChars?: boolean
	baseBodyCls?: string
	baseChars?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	decimalPrecision?: number
	decimalSeparator?: string
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	keyNavEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxText?: string
	maxValue?: number
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minText?: string
	minValue?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	mouseWheelEnabled?: boolean
	msgTarget?: string
	name?: string
	nanText?: string
	negativeText?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	spinDownEnabled?: boolean
	spinUpEnabled?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	step?: number
	style?: string | Object
	submitLocaleSeparator?: boolean
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onSpin?: Function
	onSpinDown?: Function
	onSpinEnd?: Function
	onSpinUp?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class PickerField extends React.Component<PickerFieldProps, any> { }
export interface PickerFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	matchFieldWidth?: boolean
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	openCls?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pickerAlign?: string
	pickerOffset?: number[]
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggerCls?: string
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onExpand?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class RadioField extends React.Component<RadioFieldProps, any> { }
export interface RadioFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterBoxLabelTextTpl?: string | Object[] | any
	afterBoxLabelTpl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeBoxLabelTextTpl?: string | Object[] | any
	beforeBoxLabelTpl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	boxLabel?: string
	boxLabelAlign?: string
	boxLabelAttrTpl?: string | Object[] | any
	boxLabelCls?: string
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	checked?: boolean
	checkedCls?: string
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputValue?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	modelValue?: boolean | string | number
	modelValueUnchecked?: boolean | string | number
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class Radio extends React.Component<RadioProps, any> { }
export interface RadioProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterBoxLabelTextTpl?: string | Object[] | any
	afterBoxLabelTpl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeBoxLabelTextTpl?: string | Object[] | any
	beforeBoxLabelTpl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	boxLabel?: string
	boxLabelAlign?: string
	boxLabelAttrTpl?: string | Object[] | any
	boxLabelCls?: string
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	checked?: boolean
	checkedCls?: string
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputValue?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	modelValue?: boolean | string | number
	modelValueUnchecked?: boolean | string | number
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class SpinnerField extends React.Component<SpinnerFieldProps, any> { }
export interface SpinnerFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	keyNavEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	mouseWheelEnabled?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	spinDownEnabled?: boolean
	spinUpEnabled?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onSpin?: Function
	onSpinDown?: Function
	onSpinEnd?: Function
	onSpinUp?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class TagField extends React.Component<TagFieldProps, any> { }
export interface TagFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: any
	allQuery?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	anyMatch?: boolean
	ariaAttributes?: Object
	ariaAvailableListLabel?: string
	ariaDescribedBy?: string
	ariaDeselectedText?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaHelpText?: string
	ariaHelpTextEditable?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	ariaNoneSelectedText?: string
	ariaSelectedListLabel?: string
	ariaSelectedText?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoLoadOnValue?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoSelect?: boolean
	autoSelectLast?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	caseSensitive?: boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	clearFilterOnBlur?: boolean
	clearOnBackspace?: boolean
	cls?: string | string[]
	collapseOnSelect?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	createNewOnBlur?: boolean
	createNewOnEnter?: boolean
	data?: Object
	defaultAlign?: string
	defaultListConfig?: Object
	defaultListenerScope?: boolean
	delimiter?: string
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enableRegEx?: boolean
	encodeSubmitValue?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	filterPickList?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceSelection?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: any
	growMax?: number | boolean
	growMin?: number | boolean
	growToLongestValue?: any
	height?: number | string
	hidden?: boolean
	hiddenName?: string
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelTpl?: string | any
	labelWidth?: number
	liquidLayout?: boolean
	listConfig?: Object
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	matchFieldWidth?: boolean
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minChars?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	multiSelect?: boolean
	name?: string
	openCls?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	pickerAlign?: string
	pickerOffset?: number[]
	pinList?: boolean
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	queryCaching?: boolean
	queryDelay?: number
	queryMode?: string
	queryParam?: string
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	selectOnTab?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stacked?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store: any | string | Object[] | Object
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	tipTpl?: string | any
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	transform?: string | HTMLElement | any
	transformInPlace?: boolean
	triggerAction?: string
	triggerCls?: string
	triggerOnClick?: boolean
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	typeAhead?: boolean
	typeAheadDelay?: number
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valueField: string
	valueParam?: string
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeQuery?: Function
	onBeforeRender?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onExpand?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class TextField extends React.Component<TextFieldProps, any> { }
export interface TextFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggers?: Object
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class TextAreaField extends React.Component<TextAreaFieldProps, any> { }
export interface TextAreaFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	enterIsSpecial?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	preventScrollbars?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggers?: Object
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class TextArea extends React.Component<TextAreaProps, any> { }
export interface TextAreaProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	enterIsSpecial?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	preventScrollbars?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggers?: Object
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class TimeField extends React.Component<TimeFieldProps, any> { }
export interface TimeFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	allQuery?: string
	altFormats?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	anyMatch?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoLoadOnValue?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoSelect?: boolean
	autoSelectLast?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	caseSensitive?: boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	clearFilterOnBlur?: boolean
	cls?: string | string[]
	collapseOnSelect?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListConfig?: Object
	defaultListenerScope?: boolean
	delimiter?: string
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enableRegEx?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceSelection?: boolean
	format?: string
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	growToLongestValue?: boolean
	height?: number | string
	hidden?: boolean
	hiddenName?: string
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	increment?: number
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listConfig?: Object
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	matchFieldWidth?: boolean
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxText?: string
	maxValue?: any | string
	maxWidth?: number
	minChars?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minText?: string
	minValue?: any | string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	multiSelect?: boolean
	name?: string
	openCls?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	pickerAlign?: string
	pickerMaxHeight?: number
	pickerOffset?: number[]
	pinList?: boolean
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	queryCaching?: boolean
	queryDelay?: number
	queryMode?: string
	queryParam?: string
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	selectOnTab?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	snapToIncrement?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store: any | string | Object[] | Object
	stripCharsRe?: any
	style?: string | Object
	submitFormat?: string
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	transform?: string | HTMLElement | any
	transformInPlace?: boolean
	triggerAction?: string
	triggerCls?: string
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	typeAhead?: boolean
	typeAheadDelay?: number
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valueField: string
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeQuery?: Function
	onBeforeRender?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onExpand?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class TriggerField extends React.Component<TriggerFieldProps, any> { }
export interface TriggerFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggerCls?: string
	triggers?: Object
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class Trigger extends React.Component<TriggerProps, any> { }
export interface TriggerProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggerCls?: string
	triggers?: Object
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class FieldContainer extends React.Component<FieldContainerProps, any> { }
export interface FieldContainerProps {
	actions?: any
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	activeItem?: string | number
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	combineErrors?: boolean
	combineLabels?: boolean
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldDefaults?: Object
	fieldLabel?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	invalidCls?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelConnector?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFieldErrorChange?: Function
	onFieldValidityChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class FieldSet extends React.Component<FieldSetProps, any> { }
export interface FieldSetProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	checkbox?: Object
	checkboxName?: string
	checkboxToggle?: boolean
	checkboxUI?: string
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	collapsed?: boolean
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	descriptionText?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandText?: string
	fieldDefaults?: Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	title?: string
	toFrontOnShow?: boolean
	toggleOnTitleClick?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onExpand?: Function
	onFieldErrorChange?: Function
	onFieldValidityChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Label extends React.Component<LabelProps, any> { }
export interface LabelProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forId?: string
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	text?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Form extends React.Component<FormProps, any> { }
export interface FormProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	api?: Object
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	baseParams?: Object
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorReader?: Object | any
	expandToolText?: string
	fbar?: Object | Object[]
	fieldDefaults?: Object
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	jsonSubmit?: boolean
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	method?: string
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	paramOrder?: string | string[]
	paramsAsHash?: boolean
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	pollForChanges?: boolean
	pollInterval?: number
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reader?: Object | any
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	standardSubmit?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	timeout?: number
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trackResetOnLoad?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	url?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	waitMsgTarget?: string | HTMLElement | any
	waitTitle?: string
	weight?: number
	width?: number | string
	onActionComplete?: Function
	onActionFailed?: Function
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeAction?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFieldErrorChange?: Function
	onFieldValidityChange?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onValidityChange?: Function
}
declare class RadioGroup extends React.Component<RadioGroupProps, any> { }
export interface RadioGroupProps {
	actions?: any
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	activeItem?: string | number
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: string | number | number[]
	columnWidth?: number
	combineErrors?: boolean
	combineLabels?: boolean
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldDefaults?: Object
	fieldLabel?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	invalidCls?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelConnector?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	local?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	simpleValue?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valuePublishEvent?: string[] | string
	vertical?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFieldErrorChange?: Function
	onFieldValidityChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
}
declare class ActionColumn extends React.Component<ActionColumnProps, any> { }
export interface ActionColumnProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	altText?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	cellFocusable?: boolean
	cellWrap?: boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dataIndex?: string
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultWidth?: number
	detachOnRemove?: boolean
	dirtyText?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	editor?: Object | string
	editRenderer?: Function | string
	emptyCellText?: string
	enableColumnHide?: boolean
	enableFocusableContainer?: boolean
	enableTextSelection?: boolean
	exportStyle?: any
	field?: Object | string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatter?: string
	formBind?: boolean
	frame?: boolean
	getClass?: Function
	getTip?: Function
	glyph?: number | string
	groupable?: boolean
	handler?: Function | string
	header?: string
	height?: number | string
	hidden?: boolean
	hideable?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconCls?: string
	id?: string
	ignoreExport?: boolean
	inactiveChildTabIndex?: number
	isDisabled?: Function
	itemAriaRole?: string
	itemId?: string
	itemTabIndex?: number
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockable?: boolean
	locked?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menuDisabled?: boolean
	menuText?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	producesHTML?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderer?: Function | string
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	sealed?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	sortable?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stopSelection?: boolean
	style?: string | Object
	summaryRenderer?: Function | string
	suspendLayout?: boolean
	tabIndex?: number
	tdCls?: string
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	updater?: Function | string
	userCls?: string | string[]
	variableRowHeight?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onMenuCreate?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class BooleanColumn extends React.Component<BooleanColumnProps, any> { }
export interface BooleanColumnProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	cellFocusable?: boolean
	cellWrap?: boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dataIndex?: string
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultWidth?: number
	detachOnRemove?: boolean
	dirtyText?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	editor?: Object | string
	editRenderer?: Function | string
	emptyCellText?: string
	enableColumnHide?: boolean
	enableFocusableContainer?: boolean
	enableTextSelection?: boolean
	exportStyle?: any
	falseText?: string
	field?: Object | string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatter?: string
	formBind?: boolean
	frame?: boolean
	groupable?: boolean
	header?: string
	height?: number | string
	hidden?: boolean
	hideable?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	ignoreExport?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockable?: boolean
	locked?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menuDisabled?: boolean
	menuText?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	producesHTML?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderer?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	sealed?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	sortable?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	summaryRenderer?: Function | string
	suspendLayout?: boolean
	tabIndex?: number
	tdCls?: string
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trueText?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	undefinedText?: string
	updater?: Function | string
	userCls?: string | string[]
	variableRowHeight?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onMenuCreate?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class CheckColumn extends React.Component<CheckColumnProps, any> { }
export interface CheckColumnProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	align?: any
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	cellFocusable?: boolean
	cellWrap?: boolean
	checkedTooltip?: string
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dataIndex?: string
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultWidth?: number
	detachOnRemove?: boolean
	dirtyText?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	editor?: Object | string
	editRenderer?: Function | string
	emptyCellText?: string
	enableColumnHide?: boolean
	enableFocusableContainer?: boolean
	enableTextSelection?: boolean
	exportStyle?: any
	field?: Object | string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatter?: string
	formBind?: boolean
	frame?: boolean
	groupable?: boolean
	header?: string
	headerCheckbox?: boolean
	height?: number | string
	hidden?: boolean
	hideable?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	ignoreExport?: boolean
	inactiveChildTabIndex?: number
	invert?: boolean
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockable?: boolean
	locked?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menuDisabled?: boolean
	menuText?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	producesHTML?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderer?: Function | string
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	sealed?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	sortable?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stopSelection?: boolean
	style?: string | Object
	summaryRenderer?: Function | string
	suspendLayout?: boolean
	tabIndex?: number
	tdCls?: string
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggerEvent?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	updater?: Function | string
	userCls?: string | string[]
	variableRowHeight?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeCheckChange?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHeaderCheckChange?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCheckChange?: Function
	onChildMove?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHeaderCheckChange?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onMenuCreate?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class GridColumn extends React.Component<GridColumnProps, any> { }
export interface GridColumnProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	cellFocusable?: boolean
	cellWrap?: boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dataIndex?: string
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultWidth?: number
	detachOnRemove?: boolean
	dirtyText?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	editor?: Object | string
	editRenderer?: Function | string
	emptyCellText?: string
	enableColumnHide?: boolean
	enableFocusableContainer?: boolean
	enableTextSelection?: boolean
	exportStyle?: any
	field?: Object | string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatter?: string
	formBind?: boolean
	frame?: boolean
	groupable?: boolean
	header?: string
	height?: number | string
	hidden?: boolean
	hideable?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	ignoreExport?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockable?: boolean
	locked?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menuDisabled?: boolean
	menuText?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	producesHTML?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderer?: Function | string
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	sealed?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	sortable?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	summaryRenderer?: Function | string
	suspendLayout?: boolean
	tabIndex?: number
	tdCls?: string
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	updater?: Function | string
	userCls?: string | string[]
	variableRowHeight?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onMenuCreate?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class DateColumn extends React.Component<DateColumnProps, any> { }
export interface DateColumnProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	cellFocusable?: boolean
	cellWrap?: boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dataIndex?: string
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultWidth?: number
	detachOnRemove?: boolean
	dirtyText?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	editor?: Object | string
	editRenderer?: Function | string
	emptyCellText?: string
	enableColumnHide?: boolean
	enableFocusableContainer?: boolean
	enableTextSelection?: boolean
	exportStyle?: any
	field?: Object | string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	format?: string
	formatter?: string
	formBind?: boolean
	frame?: boolean
	groupable?: boolean
	header?: string
	height?: number | string
	hidden?: boolean
	hideable?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	ignoreExport?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockable?: boolean
	locked?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menuDisabled?: boolean
	menuText?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	producesHTML?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderer?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	sealed?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	sortable?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	summaryRenderer?: Function | string
	suspendLayout?: boolean
	tabIndex?: number
	tdCls?: string
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	updater?: Function | string
	userCls?: string | string[]
	variableRowHeight?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onMenuCreate?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class NumberColumn extends React.Component<NumberColumnProps, any> { }
export interface NumberColumnProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	cellFocusable?: boolean
	cellWrap?: boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dataIndex?: string
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultWidth?: number
	detachOnRemove?: boolean
	dirtyText?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	editor?: Object | string
	editRenderer?: Function | string
	emptyCellText?: string
	enableColumnHide?: boolean
	enableFocusableContainer?: boolean
	enableTextSelection?: boolean
	exportStyle?: any
	field?: Object | string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	format?: string
	formatter?: string
	formBind?: boolean
	frame?: boolean
	groupable?: boolean
	header?: string
	height?: number | string
	hidden?: boolean
	hideable?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	ignoreExport?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockable?: boolean
	locked?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menuDisabled?: boolean
	menuText?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	producesHTML?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderer?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	sealed?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	sortable?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	summaryRenderer?: Function | string
	suspendLayout?: boolean
	tabIndex?: number
	tdCls?: string
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	updater?: Function | string
	userCls?: string | string[]
	variableRowHeight?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onMenuCreate?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class RowNumberer extends React.Component<RowNumbererProps, any> { }
export interface RowNumbererProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	cellFocusable?: boolean
	cellWrap?: boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dataIndex?: string
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultWidth?: number
	detachOnRemove?: boolean
	dirtyText?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	editor?: Object | string
	editRenderer?: Function | string
	emptyCellText?: string
	enableColumnHide?: boolean
	enableFocusableContainer?: boolean
	enableTextSelection?: boolean
	exportStyle?: any
	field?: Object | string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatter?: string
	formBind?: boolean
	frame?: boolean
	groupable?: boolean
	header?: string
	height?: number | string
	hidden?: boolean
	hideable?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	ignoreExport?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockable?: boolean
	locked?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menuDisabled?: boolean
	menuText?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	producesHTML?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderer?: Function | string
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	sealed?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	sortable?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	summaryRenderer?: Function | string
	suspendLayout?: boolean
	tabIndex?: number
	tdCls?: string
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	updater?: Function | string
	userCls?: string | string[]
	variableRowHeight?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onMenuCreate?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TemplateColumn extends React.Component<TemplateColumnProps, any> { }
export interface TemplateColumnProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	cellFocusable?: boolean
	cellWrap?: boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dataIndex?: string
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultWidth?: number
	detachOnRemove?: boolean
	dirtyText?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	editor?: Object | string
	editRenderer?: Function | string
	emptyCellText?: string
	enableColumnHide?: boolean
	enableFocusableContainer?: boolean
	enableTextSelection?: boolean
	exportStyle?: any
	field?: Object | string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatter?: string
	formBind?: boolean
	frame?: boolean
	groupable?: boolean
	header?: string
	height?: number | string
	hidden?: boolean
	hideable?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	ignoreExport?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockable?: boolean
	locked?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menuDisabled?: boolean
	menuText?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	producesHTML?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderer?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	sealed?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	sortable?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	summaryRenderer?: Function | string
	suspendLayout?: boolean
	tabIndex?: number
	tdCls?: string
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string
	tooltipType?: string
	touchAction?: Object
	tpl?: string | any
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	updater?: Function | string
	userCls?: string | string[]
	variableRowHeight?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onMenuCreate?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class WidgetColumn extends React.Component<WidgetColumnProps, any> { }
export interface WidgetColumnProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	cellFocusable?: boolean
	cellWrap?: boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dataIndex?: string
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultWidgetUI?: any
	defaultWidth?: number
	detachOnRemove?: boolean
	dirtyText?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	editor?: Object | string
	editRenderer?: Function | string
	emptyCellText?: string
	enableColumnHide?: boolean
	enableFocusableContainer?: boolean
	enableTextSelection?: boolean
	exportStyle?: any
	field?: Object | string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatter?: string
	formBind?: boolean
	frame?: boolean
	groupable?: boolean
	header?: string
	height?: number | string
	hidden?: boolean
	hideable?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	ignoreExport?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockable?: boolean
	locked?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menuDisabled?: boolean
	menuText?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	onWidgetAttach?: Function | string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	producesHTML?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderer?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	sealed?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	sortable?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stopSelection?: boolean
	style?: string | Object
	summaryRenderer?: Function | string
	suspendLayout?: boolean
	tabIndex?: number
	tdCls?: string
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	updater?: Function | string
	userCls?: string | string[]
	variableRowHeight?: boolean
	viewModel?: string | Object | any
	weight?: number
	widget?: Object
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onMenuCreate?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class HeaderContainer extends React.Component<HeaderContainerProps, any> { }
export interface HeaderContainerProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultWidth?: number
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableColumnHide?: boolean
	enableFocusableContainer?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	sealed?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	sortable?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onMenuCreate?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class GridPanel extends React.Component<GridPanelProps, any> { }
export interface GridPanelProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowDeselect?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoLoad?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	bufferedRenderer?: boolean
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnLines?: boolean
	columns: any | Object
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	deferRowRender?: boolean
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableColumnHide?: boolean
	enableColumnMove?: boolean
	enableColumnResize?: boolean
	enableLocking?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	features?: any | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceFit?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerBorders?: boolean
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideHeaders?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	leadingBufferZone?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockedGridConfig?: Object
	lockedViewConfig?: Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiColumnSort?: boolean
	multiSelect?: boolean
	normalGridConfig?: Object
	normalViewConfig?: Object
	numFromEdge?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	record?: any | number
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	reserveScrollbar?: boolean
	resizable?: boolean | Object
	resizeHandles?: string
	rowLines?: boolean
	rowViewModel?: string | Object
	saveDelay?: number
	scroll?: string | boolean
	scrollable?: boolean | string | Object
	sealedColumns?: boolean
	selection?: any
	selModel?: any | Object | string
	selType?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	simpleSelect?: boolean
	sortableColumns?: boolean
	split?: boolean | Object
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store: any | string | Object
	style?: string | Object
	subGridXType?: string
	suspendLayout?: boolean
	syncRowHeight?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trailingBufferZone?: number
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	variableRowHeight?: boolean
	view?: any
	viewConfig?: Object
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeCellClick?: Function
	onBeforeCellContextMenu?: Function
	onBeforeCellDblClick?: Function
	onBeforeCellKeyDown?: Function
	onBeforeCellMouseDown?: Function
	onBeforeCellMouseUp?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeload?: Function
	onBeforeReconfigure?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeRowBodyClick?: Function
	onBeforeRowBodyContextMenu?: Function
	onBeforeRowBodyDblClick?: Function
	onBeforeRowBodyKeyDown?: Function
	onBeforeRowBodyKeypress?: Function
	onBeforeRowBodyKeyUp?: Function
	onBeforeRowBodyLongpress?: Function
	onBeforeRowBodyMouseDown?: Function
	onBeforeRowBodyMouseUp?: Function
	onBeforeRowExit?: Function
	onBeforeSelect?: Function
	onBeforeSelectionextEnd?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCellClick?: Function
	onCellContextMenu?: Function
	onCellDblClick?: Function
	onCellKeyDown?: Function
	onCellMouseDown?: Function
	onCellMouseUp?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFilterChange?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onGroupChange?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderMenuCreate?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onLoad?: Function
	onLockColumn?: Function
	onMove?: Function
	onProcessColumns?: Function
	onReconfigure?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRowBodyClick?: Function
	onRowBodyContextMenu?: Function
	onRowBodyDblClick?: Function
	onRowBodyKeyDown?: Function
	onRowBodyKeypress?: Function
	onRowBodyKeyUp?: Function
	onRowBodyLongpress?: Function
	onRowBodyMouseDown?: Function
	onRowBodyMouseUp?: Function
	onRowClick?: Function
	onRowContextMenu?: Function
	onRowDblClick?: Function
	onRowKeyDown?: Function
	onRowMouseDown?: Function
	onRowMouseUp?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onSelectionExtenderDrag?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onUnlockColumn?: Function
	onViewReady?: Function
}
declare class Grid extends React.Component<GridProps, any> { }
export interface GridProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowDeselect?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoLoad?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	bufferedRenderer?: boolean
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnLines?: boolean
	columns: any | Object
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	deferRowRender?: boolean
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableColumnHide?: boolean
	enableColumnMove?: boolean
	enableColumnResize?: boolean
	enableLocking?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	features?: any | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceFit?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerBorders?: boolean
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideHeaders?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	leadingBufferZone?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockedGridConfig?: Object
	lockedViewConfig?: Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiColumnSort?: boolean
	multiSelect?: boolean
	normalGridConfig?: Object
	normalViewConfig?: Object
	numFromEdge?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	record?: any | number
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	reserveScrollbar?: boolean
	resizable?: boolean | Object
	resizeHandles?: string
	rowLines?: boolean
	rowViewModel?: string | Object
	saveDelay?: number
	scroll?: string | boolean
	scrollable?: boolean | string | Object
	sealedColumns?: boolean
	selection?: any
	selModel?: any | Object | string
	selType?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	simpleSelect?: boolean
	sortableColumns?: boolean
	split?: boolean | Object
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store: any | string | Object
	style?: string | Object
	subGridXType?: string
	suspendLayout?: boolean
	syncRowHeight?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trailingBufferZone?: number
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	variableRowHeight?: boolean
	view?: any
	viewConfig?: Object
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeCellClick?: Function
	onBeforeCellContextMenu?: Function
	onBeforeCellDblClick?: Function
	onBeforeCellKeyDown?: Function
	onBeforeCellMouseDown?: Function
	onBeforeCellMouseUp?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeload?: Function
	onBeforeReconfigure?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeRowBodyClick?: Function
	onBeforeRowBodyContextMenu?: Function
	onBeforeRowBodyDblClick?: Function
	onBeforeRowBodyKeyDown?: Function
	onBeforeRowBodyKeypress?: Function
	onBeforeRowBodyKeyUp?: Function
	onBeforeRowBodyLongpress?: Function
	onBeforeRowBodyMouseDown?: Function
	onBeforeRowBodyMouseUp?: Function
	onBeforeRowExit?: Function
	onBeforeSelect?: Function
	onBeforeSelectionextEnd?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCellClick?: Function
	onCellContextMenu?: Function
	onCellDblClick?: Function
	onCellKeyDown?: Function
	onCellMouseDown?: Function
	onCellMouseUp?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFilterChange?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onGroupChange?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderMenuCreate?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onLoad?: Function
	onLockColumn?: Function
	onMove?: Function
	onProcessColumns?: Function
	onReconfigure?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRowBodyClick?: Function
	onRowBodyContextMenu?: Function
	onRowBodyDblClick?: Function
	onRowBodyKeyDown?: Function
	onRowBodyKeypress?: Function
	onRowBodyKeyUp?: Function
	onRowBodyLongpress?: Function
	onRowBodyMouseDown?: Function
	onRowBodyMouseUp?: Function
	onRowClick?: Function
	onRowContextMenu?: Function
	onRowDblClick?: Function
	onRowKeyDown?: Function
	onRowMouseDown?: Function
	onRowMouseUp?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onSelectionExtenderDrag?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onUnlockColumn?: Function
	onViewReady?: Function
}
declare class PropertyGrid extends React.Component<PropertyGridProps, any> { }
export interface PropertyGridProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowDeselect?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoLoad?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	bufferedRenderer?: boolean
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnLines?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	customEditors?: Object
	customRenderers?: Object
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	deferRowRender?: boolean
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableColumnHide?: boolean
	enableColumnMove?: boolean
	enableColumnResize?: boolean
	enableLocking?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	features?: any | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceFit?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerBorders?: boolean
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideHeaders?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	inferTypes?: boolean
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	leadingBufferZone?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockedGridConfig?: Object
	lockedViewConfig?: Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiColumnSort?: boolean
	multiSelect?: boolean
	nameColumnWidth?: number | string
	nameField?: string
	normalGridConfig?: Object
	normalViewConfig?: Object
	numFromEdge?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	propertyNames?: Object
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	record?: any | number
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	reserveScrollbar?: boolean
	resizable?: boolean | Object
	resizeHandles?: string
	rowLines?: boolean
	rowViewModel?: string | Object
	saveDelay?: number
	scroll?: string | boolean
	scrollable?: boolean | string | Object
	sealedColumns?: boolean
	selection?: any
	selModel?: any | Object | string
	selType?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	simpleSelect?: boolean
	sortableColumns?: boolean
	source?: Object
	sourceConfig?: Object
	split?: boolean | Object
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	subGridXType?: string
	suspendLayout?: boolean
	syncRowHeight?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trailingBufferZone?: number
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	valueField?: string
	variableRowHeight?: boolean
	view?: any
	viewConfig?: Object
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeCellClick?: Function
	onBeforeCellContextMenu?: Function
	onBeforeCellDblClick?: Function
	onBeforeCellKeyDown?: Function
	onBeforeCellMouseDown?: Function
	onBeforeCellMouseUp?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeload?: Function
	onBeforePropertyChange?: Function
	onBeforeReconfigure?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeRowBodyClick?: Function
	onBeforeRowBodyContextMenu?: Function
	onBeforeRowBodyDblClick?: Function
	onBeforeRowBodyKeyDown?: Function
	onBeforeRowBodyKeypress?: Function
	onBeforeRowBodyKeyUp?: Function
	onBeforeRowBodyLongpress?: Function
	onBeforeRowBodyMouseDown?: Function
	onBeforeRowBodyMouseUp?: Function
	onBeforeRowExit?: Function
	onBeforeSelect?: Function
	onBeforeSelectionextEnd?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCellClick?: Function
	onCellContextMenu?: Function
	onCellDblClick?: Function
	onCellKeyDown?: Function
	onCellMouseDown?: Function
	onCellMouseUp?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFilterChange?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onGroupChange?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderMenuCreate?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onLoad?: Function
	onLockColumn?: Function
	onMove?: Function
	onProcessColumns?: Function
	onPropertyChange?: Function
	onReconfigure?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRowBodyClick?: Function
	onRowBodyContextMenu?: Function
	onRowBodyDblClick?: Function
	onRowBodyKeyDown?: Function
	onRowBodyKeypress?: Function
	onRowBodyKeyUp?: Function
	onRowBodyLongpress?: Function
	onRowBodyMouseDown?: Function
	onRowBodyMouseUp?: Function
	onRowClick?: Function
	onRowContextMenu?: Function
	onRowDblClick?: Function
	onRowKeyDown?: Function
	onRowMouseDown?: Function
	onRowMouseUp?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onSelectionExtenderDrag?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onUnlockColumn?: Function
	onViewReady?: Function
}
declare class RowEditor extends React.Component<RowEditorProps, any> { }
export interface RowEditorProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	api?: Object
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	baseParams?: Object
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorReader?: Object | any
	expandToolText?: string
	fbar?: Object | Object[]
	fieldDefaults?: Object
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	jsonSubmit?: boolean
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	method?: string
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	paramOrder?: string | string[]
	paramsAsHash?: boolean
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	pollForChanges?: boolean
	pollInterval?: number
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reader?: Object | any
	reference?: string
	referenceHolder?: boolean
	region?: string
	removeUnmodified?: boolean
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	standardSubmit?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	timeout?: number
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trackResetOnLoad?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	url?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	waitMsgTarget?: string | HTMLElement | any
	waitTitle?: string
	weight?: number
	width?: number | string
	onActionComplete?: Function
	onActionFailed?: Function
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeAction?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFieldErrorChange?: Function
	onFieldValidityChange?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onValidityChange?: Function
}
declare class RowEditorButtons extends React.Component<RowEditorButtonsProps, any> { }
export interface RowEditorButtonsProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Image extends React.Component<ImageProps, any> { }
export interface ImageProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alt?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	glyph?: number | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	imgCls?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	src?: string
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	title?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ImageComponent extends React.Component<ImageComponentProps, any> { }
export interface ImageComponentProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alt?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	glyph?: number | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	imgCls?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	src?: string
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	title?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ColumnSplitter extends React.Component<ColumnSplitterProps, any> { }
export interface ColumnSplitterProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	collapsedCls?: string
	collapseOnDblClick?: boolean
	collapseTarget?: string | Panel
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	defaultSplitMax?: number
	defaultSplitMin?: number
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	performCollapse?: boolean
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	tracker?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TreeList extends React.Component<TreeListProps, any> { }
export interface TreeListProps {
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	defaults?: Object
	height?: number | string
	hidden?: boolean
	highlightPath?: boolean
	listeners?: Object
	micro?: boolean
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class TreeListItem extends React.Component<TreeListItemProps, any> { }
export interface TreeListItemProps {
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	expandable?: boolean
	expanded?: boolean
	height?: number | string
	hidden?: boolean
	iconCls?: string
	iconClsProperty?: string
	leaf?: boolean
	listeners?: Object
	loading?: boolean
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	rowCls?: string
	rowClsProperty?: string
	selected?: boolean
	selectedParent?: boolean
	session?: boolean | Object | any
	style?: string | Object
	textProperty?: string
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onItemClick?: Function
	onWidthChange?: Function
}
declare class LoadMask extends React.Component<LoadMaskProps, any> { }
export interface LoadMaskProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msg?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	style?: string | Object
	tabIndex?: number
	target?: Component
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	useMsg?: boolean
	userCls?: string | string[]
	useTargetEl?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class MenuBar extends React.Component<MenuBarProps, any> { }
export interface MenuBarProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	allowOtherMenus?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaultMenuAlign?: string
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	enableKeyNav?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	ignoreParentClicks?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	mouseLeaveDelay?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plain?: boolean
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showSeparator?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClick?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMouseEnter?: Function
	onMouseLeave?: Function
	onMouseOver?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class MenuCheckItem extends React.Component<MenuCheckItemProps, any> { }
export interface MenuCheckItemProps {
	activeCls?: string
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	canActivate?: boolean
	checkChangeDisabled?: boolean
	checked?: boolean
	checkedCls?: string
	checkHandler?: Function | string
	childEls?: Object | string[] | Object[]
	clickHideDelay?: number
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	destroyMenu?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	group?: string
	groupCls?: string
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	hideOnClick?: boolean
	href?: string
	hrefTarget?: string
	html?: string | Object
	icon?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menu?: Menu | Object
	menuAlign?: string
	menuExpandDelay?: number
	menuHideDelay?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plain?: boolean
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submenuText?: string
	tabIndex?: number
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string | Object
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	uncheckedCls?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeCheckChange?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCheckChange?: Function
	onClick?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onIconChange?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTextChange?: Function
}
declare class ColorMenu extends React.Component<ColorMenuProps, any> { }
export interface ColorMenuProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	allowOtherMenus?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	enableKeyNav?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	hideOnClick?: boolean
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	ignoreParentClicks?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	mouseLeaveDelay?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	pickerId?: string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plain?: boolean
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showSeparator?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClick?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMouseEnter?: Function
	onMouseLeave?: Function
	onMouseOver?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class DateMenu extends React.Component<DateMenuProps, any> { }
export interface DateMenuProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	allowOtherMenus?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	enableKeyNav?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	hideOnClick?: boolean
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	ignoreParentClicks?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	mouseLeaveDelay?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	pickerCfg?: Object
	pickerId?: string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plain?: boolean
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showSeparator?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClick?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMouseEnter?: Function
	onMouseLeave?: Function
	onMouseOver?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class MenuItem extends React.Component<MenuItemProps, any> { }
export interface MenuItemProps {
	activeCls?: string
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	canActivate?: boolean
	childEls?: Object | string[] | Object[]
	clickHideDelay?: number
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	destroyMenu?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	hideOnClick?: boolean
	href?: string
	hrefTarget?: string
	html?: string | Object
	icon?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menu?: Menu | Object
	menuAlign?: string
	menuExpandDelay?: number
	menuHideDelay?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plain?: boolean
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string | Object
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onClick?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onIconChange?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTextChange?: Function
}
declare class Menu extends React.Component<MenuProps, any> { }
export interface MenuProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	allowOtherMenus?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	enableKeyNav?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	ignoreParentClicks?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	mouseLeaveDelay?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plain?: boolean
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showSeparator?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClick?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMouseEnter?: Function
	onMouseLeave?: Function
	onMouseOver?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class MenuSeparator extends React.Component<MenuSeparatorProps, any> { }
export interface MenuSeparatorProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	separatorCls?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	tooltip?: string | Object
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onClick?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onIconChange?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTextChange?: Function
}
declare class Header extends React.Component<HeaderProps, any> { }
export interface HeaderProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	inactiveChildTabIndex?: number
	itemId?: string
	itemPosition?: number
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	title?: string | Title
	titleAlign?: string
	titlePosition?: number
	titleRotation?: string | number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClick?: Function
	onDblClick?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Panel extends React.Component<PanelProps, any> { }
export interface PanelProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class TablePanel extends React.Component<TablePanelProps, any> { }
export interface TablePanelProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowDeselect?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoLoad?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	bufferedRenderer?: boolean
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnLines?: boolean
	columns?: any | Object
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	deferRowRender?: boolean
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableColumnHide?: boolean
	enableColumnMove?: boolean
	enableColumnResize?: boolean
	enableLocking?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	features?: any | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceFit?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerBorders?: boolean
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideHeaders?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	leadingBufferZone?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockedGridConfig?: Object
	lockedViewConfig?: Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiColumnSort?: boolean
	multiSelect?: boolean
	normalGridConfig?: Object
	normalViewConfig?: Object
	numFromEdge?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	record?: any | number
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	reserveScrollbar?: boolean
	resizable?: boolean | Object
	resizeHandles?: string
	rowLines?: boolean
	rowViewModel?: string | Object
	saveDelay?: number
	scroll?: string | boolean
	scrollable?: boolean | string | Object
	sealedColumns?: boolean
	selection?: any
	selModel?: any | Object | string
	selType?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	simpleSelect?: boolean
	sortableColumns?: boolean
	split?: boolean | Object
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store: any | string | Object
	style?: string | Object
	subGridXType?: string
	suspendLayout?: boolean
	syncRowHeight?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trailingBufferZone?: number
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	variableRowHeight?: boolean
	view?: any
	viewConfig?: Object
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeCellClick?: Function
	onBeforeCellContextMenu?: Function
	onBeforeCellDblClick?: Function
	onBeforeCellKeyDown?: Function
	onBeforeCellMouseDown?: Function
	onBeforeCellMouseUp?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeload?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeRowBodyClick?: Function
	onBeforeRowBodyContextMenu?: Function
	onBeforeRowBodyDblClick?: Function
	onBeforeRowBodyKeyDown?: Function
	onBeforeRowBodyKeypress?: Function
	onBeforeRowBodyKeyUp?: Function
	onBeforeRowBodyLongpress?: Function
	onBeforeRowBodyMouseDown?: Function
	onBeforeRowBodyMouseUp?: Function
	onBeforeRowExit?: Function
	onBeforeSelect?: Function
	onBeforeSelectionextEnd?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCellClick?: Function
	onCellContextMenu?: Function
	onCellDblClick?: Function
	onCellKeyDown?: Function
	onCellMouseDown?: Function
	onCellMouseUp?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFilterChange?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onGroupChange?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderMenuCreate?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onLoad?: Function
	onLockColumn?: Function
	onMove?: Function
	onProcessColumns?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRowBodyClick?: Function
	onRowBodyContextMenu?: Function
	onRowBodyDblClick?: Function
	onRowBodyKeyDown?: Function
	onRowBodyKeypress?: Function
	onRowBodyKeyUp?: Function
	onRowBodyLongpress?: Function
	onRowBodyMouseDown?: Function
	onRowBodyMouseUp?: Function
	onRowClick?: Function
	onRowContextMenu?: Function
	onRowDblClick?: Function
	onRowKeyDown?: Function
	onRowMouseDown?: Function
	onRowMouseUp?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onSelectionExtenderDrag?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onUnlockColumn?: Function
	onViewReady?: Function
}
declare class Title extends React.Component<TitleProps, any> { }
export interface TitleProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	rotation?: string | number
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	text?: string
	textAlign?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Tool extends React.Component<ToolProps, any> { }
export interface ToolProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	callback?: Function | string
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	handler?: Function
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stopEvent?: boolean
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	toolOwner?: Component
	tooltip?: string | Object
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	type?: string
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onClick?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ColorPicker extends React.Component<ColorPickerProps, any> { }
export interface ColorPickerProps {
	alignOnScroll?: boolean
	alignTarget?: string
	allowReselect?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	clickEvent?: string
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemCls?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	selectedCls?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class DatePicker extends React.Component<DatePickerProps, any> { }
export interface DatePickerProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaDisabledDatesText?: string
	ariaDisabledDaysText?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	ariaMaxText?: string
	ariaMinText?: string
	ariaTitle?: string
	ariaTitleDateFormat?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dayNames?: string[]
	defaultAlign?: string
	defaultListenerScope?: boolean
	disableAnim?: boolean
	disabled?: boolean
	disabledCellCls?: string
	disabledCls?: string
	disabledDates?: string[]
	disabledDatesRE?: any
	disabledDatesText?: string
	disabledDays?: number[]
	disabledDaysText?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	footerButtonUI?: string
	format?: string
	formBind?: boolean
	frame?: boolean
	handler?: Function
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	keyNavConfig?: Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	longDayFormat?: string
	margin?: number | string
	maskElement?: string
	maxDate?: any
	maxHeight?: number
	maxText?: string
	maxWidth?: number
	minDate?: any
	minHeight?: number
	minText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	monthNames?: string[]
	monthYearFormat?: string
	monthYearText?: string
	nextText?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	prevText?: string
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	renderTpl?: any | string | string[]
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	selectedCls?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showToday?: boolean
	shrinkWrap?: boolean | number
	startDay?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	todayText?: string
	todayTip?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class MonthPicker extends React.Component<MonthPickerProps, any> { }
export interface MonthPickerProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	cancelText?: string
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	footerButtonUI?: string
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	okText?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectedCls?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showButtons?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: any | number[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCancelClick?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMonthClick?: Function
	onMonthDblClick?: Function
	onMove?: Function
	onOkClick?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onYearClick?: Function
	onYearDblClick?: Function
}
declare class TimePicker extends React.Component<TimePickerProps, any> { }
export interface TimePickerProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	blockRefresh?: boolean
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	deferEmptyText?: boolean
	deferInitialRefresh?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	format?: string
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	increment?: number
	itemCls?: string
	itemId?: string
	itemSelector: string
	itemTpl?: string | string[] | any
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	loadingCls?: string
	loadingHeight?: number
	loadingText?: string
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxValue?: any
	maxWidth?: number
	minHeight?: number
	minValue?: any
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiSelect?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overItemCls?: string
	padding?: number | string
	pageSize?: number
	plugins?: any | Object[] | Object
	preserveScrollOnRefresh?: boolean
	preserveScrollOnReload?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectedItemCls?: string
	selection?: any
	selectionModel?: Object | any
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	simpleSelect?: boolean
	singleSelect?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	style?: string | Object
	tabIndex?: number
	throttledUpdate?: boolean
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: string | any
	tplWriteMode?: string
	trackOver?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	updateDelay?: number
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeRefresh?: Function
	onBeforeRender?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusChange?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onHighlightItem?: Function
	onItemAdd?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onItemRemove?: Function
	onItemUpdate?: Function
	onMove?: Function
	onRefresh?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onUnhighlightItem?: Function
	onViewReady?: Function
}
declare class PivotD3Container extends React.Component<PivotD3ContainerProps, any> { }
export interface PivotD3ContainerProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	drawing?: Component
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	matrix: any
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class PivotHeatMap extends React.Component<PivotHeatMapProps, any> { }
export interface PivotHeatMapProps {
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	clipScene?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultFormatter?: string
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	labels?: Object | boolean
	listeners?: Object
	matrix?: any
	padding?: Object | string | number
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	size?: Object
	store?: any
	style?: string | Object
	tooltip?: ToolTip
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onSceneSetup?: Function
	onWidthChange?: Function
}
declare class PivotTreeMap extends React.Component<PivotTreeMapProps, any> { }
export interface PivotTreeMapProps {
	autoExpand?: boolean
	baseCls?: string | boolean
	bind?: Object | string
	border?: boolean
	busyLayoutText?: string
	clipScene?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	expandEventName?: string | string[]
	height?: number | string
	hidden?: boolean
	hierarchyCls?: string
	leafTile?: any
	listeners?: Object
	matrix?: any
	nodeChildren?: Function
	nodeClass?: Function
	nodeKey?: Function
	nodeText?: Function | string | string[]
	padding?: Object | string | number
	parentTile?: any
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	rootVisible?: boolean
	selectEventName?: string | string[]
	selection?: any
	session?: boolean | Object | any
	size?: Object
	style?: string | Object
	tooltip?: ToolTip
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onSceneResize?: Function
	onSceneSetup?: Function
	onWidthChange?: Function
}
declare class PivotGrid extends React.Component<PivotGridProps, any> { }
export interface PivotGridProps {
	actions?: any
	activeItem?: string | number
	aggregate?: any
	alignOnScroll?: boolean
	alignTarget?: string
	allowDeselect?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoLoad?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	bufferedRenderer?: boolean
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	clsGrandTotal?: string
	clsGroupTotal?: string
	colGrandTotalsPosition?: string
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	colSubTotalsPosition?: string
	columnLines?: boolean
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	deferRowRender?: boolean
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableColumnHide?: boolean
	enableColumnMove?: boolean
	enableColumnResize?: boolean
	enableColumnSort?: boolean
	enableLoadMask?: boolean
	enableLocking?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	features?: any | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceFit?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerBorders?: boolean
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideHeaders?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	leadingBufferZone?: number
	leftAxis?: any
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockedGridConfig?: Object
	lockedViewConfig?: Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	matrix: any
	matrixConfig?: Object
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiColumnSort?: boolean
	multiSelect?: boolean
	normalGridConfig?: Object
	normalViewConfig?: Object
	numFromEdge?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	record?: any | number
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	reserveScrollbar?: boolean
	resizable?: boolean | Object
	resizeHandles?: string
	rowGrandTotalsPosition?: string
	rowLines?: boolean
	rowSubTotalsPosition?: string
	rowViewModel?: string | Object
	saveDelay?: number
	scroll?: string | boolean
	scrollable?: boolean | string | Object
	sealedColumns?: boolean
	selection?: any
	selModel?: any | Object | string
	selType?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showZeroAsBlank?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	simpleSelect?: boolean
	sortableColumns?: boolean
	split?: boolean | Object
	startColGroupsCollapsed?: boolean
	startRowGroupsCollapsed?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	style?: string | Object
	subGridXType?: string
	suspendLayout?: boolean
	syncRowHeight?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	textGrandTotalTpl?: string
	textTotalTpl?: string
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	topAxis?: any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trailingBufferZone?: number
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	variableRowHeight?: boolean
	view?: any
	viewConfig?: Object
	viewLayoutType?: string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeCellClick?: Function
	onBeforeCellContextMenu?: Function
	onBeforeCellDblClick?: Function
	onBeforeCellKeyDown?: Function
	onBeforeCellMouseDown?: Function
	onBeforeCellMouseUp?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeload?: Function
	onBeforeReconfigure?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeRowBodyClick?: Function
	onBeforeRowBodyContextMenu?: Function
	onBeforeRowBodyDblClick?: Function
	onBeforeRowBodyKeyDown?: Function
	onBeforeRowBodyKeypress?: Function
	onBeforeRowBodyKeyUp?: Function
	onBeforeRowBodyLongpress?: Function
	onBeforeRowBodyMouseDown?: Function
	onBeforeRowBodyMouseUp?: Function
	onBeforeRowExit?: Function
	onBeforeSelect?: Function
	onBeforeSelectionextEnd?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCellClick?: Function
	onCellContextMenu?: Function
	onCellDblClick?: Function
	onCellKeyDown?: Function
	onCellMouseDown?: Function
	onCellMouseUp?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFilterChange?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onGroupChange?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderMenuCreate?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onLoad?: Function
	onLockColumn?: Function
	onMove?: Function
	onPivotBeforeReconfigure?: Function
	onPivotBeforeRequest?: Function
	onPivotBuildTotals?: Function
	onPivotColumnsBuilt?: Function
	onPivotDone?: Function
	onPivotGroupCellClick?: Function
	onPivotGroupCellContextMenu?: Function
	onPivotGroupCellDblClick?: Function
	onPivotGroupClick?: Function
	onPivotGroupCollapse?: Function
	onPivotGroupContextMenu?: Function
	onPivotGroupDblClick?: Function
	onPivotGroupExpand?: Function
	onPivotItemCellClick?: Function
	onPivotItemCellContextMenu?: Function
	onPivotItemCellDblClick?: Function
	onPivotItemClick?: Function
	onPivotItemContextMenu?: Function
	onPivotItemDblClick?: Function
	onPivotModelBuilt?: Function
	onPivotProgress?: Function
	onPivotReconfigure?: Function
	onPivotRecordBuilt?: Function
	onPivotRequestException?: Function
	onPivotStart?: Function
	onPivotStoreBuilt?: Function
	onPivotTotalCellClick?: Function
	onPivotTotalCellContextMenu?: Function
	onPivotTotalCellDblClick?: Function
	onPivotTotalClick?: Function
	onPivotTotalContextMenu?: Function
	onPivotTotalDblClick?: Function
	onProcessColumns?: Function
	onReconfigure?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRowBodyClick?: Function
	onRowBodyContextMenu?: Function
	onRowBodyDblClick?: Function
	onRowBodyKeyDown?: Function
	onRowBodyKeypress?: Function
	onRowBodyKeyUp?: Function
	onRowBodyLongpress?: Function
	onRowBodyMouseDown?: Function
	onRowBodyMouseUp?: Function
	onRowClick?: Function
	onRowContextMenu?: Function
	onRowDblClick?: Function
	onRowKeyDown?: Function
	onRowMouseDown?: Function
	onRowMouseUp?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onSelectionExtenderDrag?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onUnlockColumn?: Function
	onViewReady?: Function
}
declare class MZPivotGrid extends React.Component<MZPivotGridProps, any> { }
export interface MZPivotGridProps {
	actions?: any
	activeItem?: string | number
	aggregate?: any
	alignOnScroll?: boolean
	alignTarget?: string
	allowDeselect?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoLoad?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	bufferedRenderer?: boolean
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	clsGrandTotal?: string
	clsGroupTotal?: string
	colGrandTotalsPosition?: string
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	colSubTotalsPosition?: string
	columnLines?: boolean
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	deferRowRender?: boolean
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableColumnHide?: boolean
	enableColumnMove?: boolean
	enableColumnResize?: boolean
	enableColumnSort?: boolean
	enableLoadMask?: boolean
	enableLocking?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	features?: any | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceFit?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerBorders?: boolean
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideHeaders?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	leadingBufferZone?: number
	leftAxis?: any
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockedGridConfig?: Object
	lockedViewConfig?: Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	matrix: any
	matrixConfig?: Object
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiColumnSort?: boolean
	multiSelect?: boolean
	normalGridConfig?: Object
	normalViewConfig?: Object
	numFromEdge?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	record?: any | number
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	reserveScrollbar?: boolean
	resizable?: boolean | Object
	resizeHandles?: string
	rowGrandTotalsPosition?: string
	rowLines?: boolean
	rowSubTotalsPosition?: string
	rowViewModel?: string | Object
	saveDelay?: number
	scroll?: string | boolean
	scrollable?: boolean | string | Object
	sealedColumns?: boolean
	selection?: any
	selModel?: any | Object | string
	selType?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showZeroAsBlank?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	simpleSelect?: boolean
	sortableColumns?: boolean
	split?: boolean | Object
	startColGroupsCollapsed?: boolean
	startRowGroupsCollapsed?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	style?: string | Object
	subGridXType?: string
	suspendLayout?: boolean
	syncRowHeight?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	textGrandTotalTpl?: string
	textTotalTpl?: string
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	topAxis?: any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trailingBufferZone?: number
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	variableRowHeight?: boolean
	view?: any
	viewConfig?: Object
	viewLayoutType?: string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeCellClick?: Function
	onBeforeCellContextMenu?: Function
	onBeforeCellDblClick?: Function
	onBeforeCellKeyDown?: Function
	onBeforeCellMouseDown?: Function
	onBeforeCellMouseUp?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeload?: Function
	onBeforeReconfigure?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeRowBodyClick?: Function
	onBeforeRowBodyContextMenu?: Function
	onBeforeRowBodyDblClick?: Function
	onBeforeRowBodyKeyDown?: Function
	onBeforeRowBodyKeypress?: Function
	onBeforeRowBodyKeyUp?: Function
	onBeforeRowBodyLongpress?: Function
	onBeforeRowBodyMouseDown?: Function
	onBeforeRowBodyMouseUp?: Function
	onBeforeRowExit?: Function
	onBeforeSelect?: Function
	onBeforeSelectionextEnd?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCellClick?: Function
	onCellContextMenu?: Function
	onCellDblClick?: Function
	onCellKeyDown?: Function
	onCellMouseDown?: Function
	onCellMouseUp?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFilterChange?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onGroupChange?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderMenuCreate?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onLoad?: Function
	onLockColumn?: Function
	onMove?: Function
	onPivotBeforeReconfigure?: Function
	onPivotBeforeRequest?: Function
	onPivotBuildTotals?: Function
	onPivotColumnsBuilt?: Function
	onPivotDone?: Function
	onPivotGroupCellClick?: Function
	onPivotGroupCellContextMenu?: Function
	onPivotGroupCellDblClick?: Function
	onPivotGroupClick?: Function
	onPivotGroupCollapse?: Function
	onPivotGroupContextMenu?: Function
	onPivotGroupDblClick?: Function
	onPivotGroupExpand?: Function
	onPivotItemCellClick?: Function
	onPivotItemCellContextMenu?: Function
	onPivotItemCellDblClick?: Function
	onPivotItemClick?: Function
	onPivotItemContextMenu?: Function
	onPivotItemDblClick?: Function
	onPivotModelBuilt?: Function
	onPivotProgress?: Function
	onPivotReconfigure?: Function
	onPivotRecordBuilt?: Function
	onPivotRequestException?: Function
	onPivotStart?: Function
	onPivotStoreBuilt?: Function
	onPivotTotalCellClick?: Function
	onPivotTotalCellContextMenu?: Function
	onPivotTotalCellDblClick?: Function
	onPivotTotalClick?: Function
	onPivotTotalContextMenu?: Function
	onPivotTotalDblClick?: Function
	onProcessColumns?: Function
	onReconfigure?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRowBodyClick?: Function
	onRowBodyContextMenu?: Function
	onRowBodyDblClick?: Function
	onRowBodyKeyDown?: Function
	onRowBodyKeypress?: Function
	onRowBodyKeyUp?: Function
	onRowBodyLongpress?: Function
	onRowBodyMouseDown?: Function
	onRowBodyMouseUp?: Function
	onRowClick?: Function
	onRowContextMenu?: Function
	onRowDblClick?: Function
	onRowKeyDown?: Function
	onRowMouseDown?: Function
	onRowMouseUp?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onSelectionExtenderDrag?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onUnlockColumn?: Function
	onViewReady?: Function
}
declare class PivotConfigField extends React.Component<PivotConfigFieldProps, any> { }
export interface PivotConfigFieldProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	field?: any
	fieldType?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class PivotConfigContainer extends React.Component<PivotConfigContainerProps, any> { }
export interface PivotConfigContainerProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fieldType?: any
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class PivotConfigPanel extends React.Component<PivotConfigPanelProps, any> { }
export interface PivotConfigPanelProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	addToText?: string
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fieldSettingsText?: string
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	moveBeginText?: string
	moveDownText?: string
	moveEndText?: string
	moveToText?: string
	moveUpText?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	panelAggFieldsText?: string
	panelAggFieldsTitle?: string
	panelAllFieldsText?: string
	panelAllFieldsTitle?: string
	panelLeftFieldsText?: string
	panelLeftFieldsTitle?: string
	panelTopFieldsText?: string
	panelTopFieldsTitle?: string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	removeFieldText?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Progress extends React.Component<ProgressProps, any> { }
export interface ProgressProps {
	animate?: boolean
	baseCls?: string
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	text?: string
	textTpl?: string | any
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	userCls?: string | string[]
	value?: number
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class ProgressBarWidget extends React.Component<ProgressBarWidgetProps, any> { }
export interface ProgressBarWidgetProps {
	animate?: boolean
	baseCls?: string
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	text?: string
	textTpl?: string | any
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	userCls?: string | string[]
	value?: number
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class ProgressBar extends React.Component<ProgressBarProps, any> { }
export interface ProgressBarProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animate?: boolean | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	text?: string
	textEl?: string | HTMLElement | any
	textTpl?: string | any
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: number
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onUpdate?: Function
}
declare class BorderSplitter extends React.Component<BorderSplitterProps, any> { }
export interface BorderSplitterProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	collapsedCls?: string
	collapseOnDblClick?: boolean
	collapseTarget?: string | Panel
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	defaultSplitMax?: number
	defaultSplitMin?: number
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	performCollapse?: boolean
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	tracker?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Splitter extends React.Component<SplitterProps, any> { }
export interface SplitterProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	collapsedCls?: string
	collapseOnDblClick?: boolean
	collapseTarget?: string | Panel
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	defaultSplitMax?: number
	defaultSplitMin?: number
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	performCollapse?: boolean
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	tracker?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class MultiSlider extends React.Component<MultiSliderProps, any> { }
export interface MultiSliderProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animate?: Object | boolean
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	clickToChange?: boolean
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainThumbs?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	decimalPrecision?: number | boolean
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	increment?: number
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyIncrement?: number
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxValue?: number
	maxWidth?: number
	minHeight?: number
	minValue?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	tipText?: Function | string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	useTips?: Object | boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	value?: number
	valuePublishEvent?: string[] | string
	values?: number[]
	vertical?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	zeroBasedSnapping?: boolean
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeChange?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChangeComplete?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onDrag?: Function
	onDragEnd?: Function
	onDragStart?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class Slider extends React.Component<SliderProps, any> { }
export interface SliderProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animate?: Object | boolean
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	clickToChange?: boolean
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainThumbs?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	decimalPrecision?: number | boolean
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	increment?: number
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyIncrement?: number
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxValue?: number
	maxWidth?: number
	minHeight?: number
	minValue?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	publishOnComplete?: boolean
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	tipText?: Function | string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	useTips?: Object | boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	value?: number
	valuePublishEvent?: string[] | string
	values?: number[]
	vertical?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	zeroBasedSnapping?: boolean
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeChange?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChangeComplete?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onDrag?: Function
	onDragEnd?: Function
	onDragStart?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class SliderField extends React.Component<SliderFieldProps, any> { }
export interface SliderFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animate?: Object | boolean
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	clickToChange?: boolean
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainThumbs?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	decimalPrecision?: number | boolean
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	increment?: number
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyIncrement?: number
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxValue?: number
	maxWidth?: number
	minHeight?: number
	minValue?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	publishOnComplete?: boolean
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	tipText?: Function | string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	useTips?: Object | boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	value?: number
	valuePublishEvent?: string[] | string
	values?: number[]
	vertical?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	zeroBasedSnapping?: boolean
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeChange?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChangeComplete?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onDrag?: Function
	onDragEnd?: Function
	onDragStart?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class SliderTip extends React.Component<SliderTipProps, any> { }
export interface SliderTipProps {
	actions?: any
	activeItem?: string | number
	align?: string
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constrainPosition?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	offsets?: Object[]
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	position?: string
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: boolean | string
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class SliderWidget extends React.Component<SliderWidgetProps, any> { }
export interface SliderWidgetProps {
	bind?: Object | string
	border?: boolean
	clickToChange?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	touchAction?: Object
	userCls?: string | string[]
	vertical?: boolean
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class SparkLineBar extends React.Component<SparkLineBarProps, any> { }
export interface SparkLineBarProps {
	barColor?: string
	barSpacing?: number
	barWidth?: number
	bind?: Object | string
	border?: boolean
	chartRangeClip?: boolean
	chartRangeMax?: number
	chartRangeMin?: number
	cls?: string | string[]
	colorMap?: any
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	negBarColor?: string
	nullColor?: string
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	stackedBarColor?: string[]
	style?: string | Object
	tipTpl?: string | any
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	values?: number[]
	viewModel?: string | Object | any
	width?: number | string
	zeroAxis?: boolean
	zeroColor?: string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class SparkLine extends React.Component<SparkLineProps, any> { }
export interface SparkLineProps {
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	tipTpl?: string | any
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	values?: number[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class SparkLineBox extends React.Component<SparkLineBoxProps, any> { }
export interface SparkLineBoxProps {
	bind?: Object | string
	border?: boolean
	boxFillColor?: string
	boxLineColor?: string
	chartRangeMax?: number
	chartRangeMin?: number
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	medianColor?: string
	outlierFillColor?: string
	outlierIQR?: number
	outlierLineColor?: string
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	raw?: boolean
	reference?: string
	session?: boolean | Object | any
	showOutliers?: boolean
	spotRadius?: number
	style?: string | Object
	target?: number
	targetColor?: string
	tipTpl?: string | any
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	values?: number[]
	viewModel?: string | Object | any
	whiskerColor?: string
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class SparkLineBullet extends React.Component<SparkLineBulletProps, any> { }
export interface SparkLineBulletProps {
	base?: number
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	performanceColor?: string
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	rangeColors?: string[]
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	targetColor?: string
	targetWidth?: number
	tipTpl?: string | any
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	values?: number[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class SparkLineDiscrete extends React.Component<SparkLineDiscreteProps, any> { }
export interface SparkLineDiscreteProps {
	bind?: Object | string
	border?: boolean
	chartRangeClip?: boolean
	chartRangeMax?: number
	chartRangeMin?: number
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	lineHeight?: number
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	thresholdColor?: string
	thresholdValue?: number
	tipTpl?: string | any
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	values?: number[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class SparkLineLine extends React.Component<SparkLineLineProps, any> { }
export interface SparkLineLineProps {
	bind?: Object | string
	border?: boolean
	chartRangeMax?: number
	chartRangeMaxX?: number
	chartRangeMin?: number
	chartRangeMinX?: number
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	drawNormalOnTop?: boolean
	fillColor?: string
	height?: number | string
	hidden?: boolean
	highlightLineColor?: string
	highlightSpotColor?: string
	lineWidth?: number
	listeners?: Object
	maxSpotColor?: string
	minSpotColor?: string
	normalRangeColor?: string
	normalRangeMax?: number
	normalRangeMin?: number
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	spotColor?: string
	spotRadius?: number
	style?: string | Object
	tipTpl?: string | any
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	values?: number[]
	valueSpots?: Object
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class SparkLinePie extends React.Component<SparkLinePieProps, any> { }
export interface SparkLinePieProps {
	bind?: Object | string
	border?: boolean
	borderColor?: string
	borderWidth?: number
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	offset?: number
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	sliceColors?: string[]
	style?: string | Object
	tipTpl?: string | any
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	values?: number[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class SparkLineTristate extends React.Component<SparkLineTristateProps, any> { }
export interface SparkLineTristateProps {
	barSpacing?: number
	barWidth?: number
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	colorMap?: Object
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	negBarColor?: string
	plugins?: Object | string | Object[] | string[]
	posBarColor?: string
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	tipTpl?: string | any
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	values?: number[]
	viewModel?: string | Object | any
	width?: number | string
	zeroBarColor?: string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class TabBar extends React.Component<TabBarProps, any> { }
export interface TabBarProps {
	actions?: any
	activateOnFocus?: boolean
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	ensureActiveVisibleOnChange?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxTabWidth?: number
	maxWidth?: number
	minHeight?: number
	minTabWidth?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plain?: boolean
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tabRotation?: string | number
	tabStretchMax?: boolean
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TabPanel extends React.Component<TabPanelProps, any> { }
export interface TabPanelProps {
	actions?: any
	activeItem?: string | number
	activeTab?: string | number | Component
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	deferredRender?: boolean
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemCls?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxTabWidth?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minTabWidth?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plain?: boolean
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	removePanelHeader?: boolean
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabBar?: Object
	tabBarHeaderPosition?: number
	tabIndex?: number
	tabPosition?: string
	tabRotation?: string | number
	tabStretchMax?: boolean
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBeforeTabChange?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTabChange?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Tab extends React.Component<TabProps, any> { }
export interface TabProps {
	alignOnScroll?: boolean
	alignTarget?: string
	allowDepress?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	arrowAlign?: string
	arrowCls?: string
	arrowVisible?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	baseParams?: Object
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	clickEvent?: string
	closable?: boolean
	closeText?: string
	cls?: string
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	destroyMenu?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableToggle?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	glyph?: number | string
	handleMouseEvents?: boolean
	handler?: Function | string
	height?: number | string
	hidden?: boolean
	hideMode?: string
	href?: string
	hrefTarget?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menu?: Menu | string | Object
	menuAlign?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowText?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	params?: Object
	plugins?: any | Object[] | Object
	pressed?: boolean
	preventDefault?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeat?: boolean | Object
	resizable?: boolean | Object
	resizeHandles?: string
	rotation?: string | number
	saveDelay?: number
	scale?: string
	scope?: Object
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showEmptyMenu?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	tabPosition?: string
	text?: string
	textAlign?: string
	toFrontOnShow?: boolean
	toggleGroup?: string
	toggleHandler?: Function | string
	tooltip?: string | Object
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: string | number
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeClose?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBeforeToggle?: Function
	onBlur?: Function
	onBoxReady?: Function
	onClick?: Function
	onClose?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onMenuHide?: Function
	onMenuShow?: Function
	onMenuTriggerOut?: Function
	onMenuTriggerOver?: Function
	onMouseOut?: Function
	onMouseOver?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTextChange?: Function
	onToggle?: Function
}
declare class QuickTip extends React.Component<QuickTipProps, any> { }
export interface QuickTipProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	anchorToTarget?: boolean
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoHide?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constrainPosition?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	delegate?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dismissDelay?: number
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fadeOutDuration?: number
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideAction?: string
	hideCollapseTool?: boolean
	hideDelay?: number
	hideMode?: string
	html?: any
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	interceptTitles?: boolean
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	mouseOffset?: number[]
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: boolean | string
	shadowOffset?: number
	shim?: boolean
	showDelay?: number
	showOnTap?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	target?: string | HTMLElement | any
	targetOffset?: number[]
	tbar?: Object | Object[]
	text?: string | Object
	title?: string | Title
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trackMouse?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Tip extends React.Component<TipProps, any> { }
export interface TipProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constrainPosition?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: boolean | string
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class ToolTip extends React.Component<ToolTipProps, any> { }
export interface ToolTipProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	anchorToTarget?: boolean
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoHide?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constrainPosition?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	delegate?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dismissDelay?: number
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fadeOutDuration?: number
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideAction?: string
	hideCollapseTool?: boolean
	hideDelay?: number
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	mouseOffset?: number[]
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: boolean | string
	shadowOffset?: number
	shim?: boolean
	showDelay?: number
	showOnTap?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	target?: HTMLElement | any | string
	targetOffset?: number[]
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trackMouse?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Breadcrumb extends React.Component<BreadcrumbProps, any> { }
export interface BreadcrumbProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	buttonUI?: string
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowHandler?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selection?: any | string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showIcons?: boolean
	showMenuIcons?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	useSplitButtons?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelectionChange?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TBFill extends React.Component<TBFillProps, any> { }
export interface TBFillProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TBItem extends React.Component<TBItemProps, any> { }
export interface TBItemProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowText?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class PagingToolbar extends React.Component<PagingToolbarProps, any> { }
export interface PagingToolbarProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	afterPageText?: string
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	beforePageText?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButtonUI?: string
	defaultFieldUI?: string
	defaultFocus?: string
	defaultFooterButtonUI?: string
	defaultFooterFieldUI?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	displayInfo?: boolean
	displayMsg?: string
	dock?: string
	draggable?: boolean | Object
	emptyMsg?: string
	enableFocusableContainer?: boolean
	enableOverflow?: boolean
	firstText?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inactiveChildTabIndex?: number
	inputItemWidth?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	lastText?: string
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	nextText?: string
	overCls?: string
	overflowHandler?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	prependButtons?: boolean
	prevText?: string
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	refreshText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any | string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	vertical?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeChange?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onOverflowChange?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TBSeparator extends React.Component<TBSeparatorProps, any> { }
export interface TBSeparatorProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowText?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TBSpacer extends React.Component<TBSpacerProps, any> { }
export interface TBSpacerProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TBText extends React.Component<TBTextProps, any> { }
export interface TBTextProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowText?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	text?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Toolbar extends React.Component<ToolbarProps, any> { }
export interface ToolbarProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButtonUI?: string
	defaultFieldUI?: string
	defaultFocus?: string
	defaultFooterButtonUI?: string
	defaultFooterFieldUI?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	enableOverflow?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowHandler?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	vertical?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onOverflowChange?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TreeColumn extends React.Component<TreeColumnProps, any> { }
export interface TreeColumnProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	cellFocusable?: boolean
	cellWrap?: boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	dataIndex?: string
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	defaultWidth?: number
	detachOnRemove?: boolean
	dirtyText?: string
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	editor?: Object | string
	editRenderer?: Function | string
	emptyCellText?: string
	enableColumnHide?: boolean
	enableFocusableContainer?: boolean
	enableTextSelection?: boolean
	exportStyle?: any
	field?: Object | string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatter?: string
	formBind?: boolean
	frame?: boolean
	groupable?: boolean
	header?: string
	height?: number | string
	hidden?: boolean
	hideable?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	ignoreExport?: boolean
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockable?: boolean
	locked?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	menuDisabled?: boolean
	menuText?: string
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	producesHTML?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderer?: Function | string
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean
	resizeHandles?: string
	saveDelay?: number
	scope?: Object
	scrollable?: boolean | string | Object
	sealed?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	sortable?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	summaryRenderer?: Function | string
	suspendLayout?: boolean
	tabIndex?: number
	tdCls?: string
	text?: string
	toFrontOnShow?: boolean
	tooltip?: string
	tooltipType?: string
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	updater?: Function | string
	userCls?: string | string[]
	variableRowHeight?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onMenuCreate?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TreePanel extends React.Component<TreePanelProps, any> { }
export interface TreePanelProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowDeselect?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animate?: boolean
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoLoad?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	bufferedRenderer?: boolean
	buttonAlign?: string
	buttons?: Object[]
	checkPropagation?: string
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnLines?: boolean
	columns?: any | Object
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	deferRowRender?: boolean
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableColumnHide?: boolean
	enableColumnMove?: boolean
	enableColumnResize?: boolean
	enableLocking?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	features?: any | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	folderSort?: boolean
	forceFit?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerBorders?: boolean
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideHeaders?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	leadingBufferZone?: number
	lines?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockedGridConfig?: Object
	lockedViewConfig?: Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiColumnSort?: boolean
	multiSelect?: boolean
	normalGridConfig?: Object
	normalViewConfig?: Object
	numFromEdge?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	record?: any | number
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	reserveScrollbar?: boolean
	resizable?: boolean | Object
	resizeHandles?: string
	root?: any | Object
	rootVisible?: boolean
	rowLines?: boolean
	rowViewModel?: string | Object
	saveDelay?: number
	scroll?: string | boolean
	scrollable?: boolean | string | Object
	sealedColumns?: boolean
	selection?: any
	selModel?: any | Object | string
	selType?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	simpleSelect?: boolean
	singleExpand?: boolean
	sortableColumns?: boolean
	split?: boolean | Object
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store: any
	style?: string | Object
	subGridXType?: string
	suspendLayout?: boolean
	syncRowHeight?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trailingBufferZone?: number
	twoWayBindable?: string | string[] | Object
	ui?: string
	useArrows?: boolean
	userCls?: string | string[]
	variableRowHeight?: boolean
	view?: any
	viewConfig?: Object
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterItemCollapse?: Function
	onAfterItemExpand?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeCellClick?: Function
	onBeforeCellContextMenu?: Function
	onBeforeCellDblClick?: Function
	onBeforeCellKeyDown?: Function
	onBeforeCellMouseDown?: Function
	onBeforeCellMouseUp?: Function
	onBeforeCheckChange?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeItemAppend?: Function
	onBeforeItemClick?: Function
	onBeforeItemCollapse?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemExpand?: Function
	onBeforeItemInsert?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeItemMove?: Function
	onBeforeItemRemove?: Function
	onBeforeload?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeRowBodyClick?: Function
	onBeforeRowBodyContextMenu?: Function
	onBeforeRowBodyDblClick?: Function
	onBeforeRowBodyKeyDown?: Function
	onBeforeRowBodyKeypress?: Function
	onBeforeRowBodyKeyUp?: Function
	onBeforeRowBodyLongpress?: Function
	onBeforeRowBodyMouseDown?: Function
	onBeforeRowBodyMouseUp?: Function
	onBeforeRowExit?: Function
	onBeforeSelect?: Function
	onBeforeSelectionextEnd?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCellClick?: Function
	onCellContextMenu?: Function
	onCellDblClick?: Function
	onCellKeyDown?: Function
	onCellMouseDown?: Function
	onCellMouseUp?: Function
	onCheckChange?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFilterChange?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onGroupChange?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderMenuCreate?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemAppend?: Function
	onItemClick?: Function
	onItemCollapse?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemExpand?: Function
	onItemInsert?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onItemMove?: Function
	onItemRemove?: Function
	onLoad?: Function
	onLockColumn?: Function
	onMove?: Function
	onProcessColumns?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRowBodyClick?: Function
	onRowBodyContextMenu?: Function
	onRowBodyDblClick?: Function
	onRowBodyKeyDown?: Function
	onRowBodyKeypress?: Function
	onRowBodyKeyUp?: Function
	onRowBodyLongpress?: Function
	onRowBodyMouseDown?: Function
	onRowBodyMouseUp?: Function
	onRowClick?: Function
	onRowContextMenu?: Function
	onRowDblClick?: Function
	onRowKeyDown?: Function
	onRowMouseDown?: Function
	onRowMouseUp?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onSelectionExtenderDrag?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onUnlockColumn?: Function
	onViewReady?: Function
}
declare class TreeView extends React.Component<TreeViewProps, any> { }
export interface TreeViewProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animate?: boolean
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	blockRefresh?: boolean
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	deferEmptyText?: boolean
	deferInitialRefresh?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableTextSelection?: boolean
	firstCls?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemCls?: string
	itemId?: string
	itemSelector: string
	itemTpl?: string | string[] | any
	keyMap?: Object
	keyMapEnabled?: boolean
	lastCls?: string
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	loadingCls?: string
	loadingHeight?: number
	loadingText?: string
	loadMask?: boolean
	margin?: number | string
	markDirty?: boolean
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiSelect?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overItemCls?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preserveScrollOnRefresh?: boolean
	preserveScrollOnReload?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	rootVisible?: boolean
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectedItemCls?: string
	selection?: any
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	simpleSelect?: boolean
	singleSelect?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	stripeRows?: boolean
	style?: string | Object
	tabIndex?: number
	throttledUpdate?: boolean
	toFrontOnShow?: boolean
	toggleOnDblClick?: boolean
	touchAction?: Object
	tplWriteMode?: string
	trackOver?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	updateDelay?: number
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterItemCollapse?: Function
	onAfterItemExpand?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeCellClick?: Function
	onBeforeCellContextMenu?: Function
	onBeforeCellDblClick?: Function
	onBeforeCellKeyDown?: Function
	onBeforeCellMouseDown?: Function
	onBeforeCellMouseUp?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeRefresh?: Function
	onBeforeRender?: Function
	onBeforeRowBodyClick?: Function
	onBeforeRowBodyContextMenu?: Function
	onBeforeRowBodyDblClick?: Function
	onBeforeRowBodyKeyDown?: Function
	onBeforeRowBodyKeypress?: Function
	onBeforeRowBodyKeyUp?: Function
	onBeforeRowBodyLongpress?: Function
	onBeforeRowBodyMouseDown?: Function
	onBeforeRowBodyMouseUp?: Function
	onBeforeRowExit?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCellClick?: Function
	onCellContextMenu?: Function
	onCellDblClick?: Function
	onCellKeyDown?: Function
	onCellMouseDown?: Function
	onCellMouseUp?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusChange?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onHighlightItem?: Function
	onItemAdd?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onItemRemove?: Function
	onItemUpdate?: Function
	onMove?: Function
	onNodeDragOver?: Function
	onRefresh?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRowBodyClick?: Function
	onRowBodyContextMenu?: Function
	onRowBodyDblClick?: Function
	onRowBodyKeyDown?: Function
	onRowBodyKeypress?: Function
	onRowBodyKeyUp?: Function
	onRowBodyLongpress?: Function
	onRowBodyMouseDown?: Function
	onRowBodyMouseUp?: Function
	onRowClick?: Function
	onRowContextMenu?: Function
	onRowDblClick?: Function
	onRowKeyDown?: Function
	onRowMouseDown?: Function
	onRowMouseUp?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onUnhighlightItem?: Function
	onViewReady?: Function
}
declare class ColorButton extends React.Component<ColorButtonProps, any> { }
export interface ColorButtonProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	format?: any
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ColorPickerColorMap extends React.Component<ColorPickerColorMapProps, any> { }
export interface ColorPickerColorMapProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ColorPickerColorPreview extends React.Component<ColorPickerColorPreviewProps, any> { }
export interface ColorPickerColorPreviewProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ColorField extends React.Component<ColorFieldProps, any> { }
export interface ColorFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	format?: any
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	matchFieldWidth?: boolean
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	openCls?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pickerAlign?: string
	pickerOffset?: number[]
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggerCls?: string
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onExpand?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class ColorSelector extends React.Component<ColorSelectorProps, any> { }
export interface ColorSelectorProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fieldPad?: number
	fieldWidth?: number
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	format?: any
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	showOkCancelButtons?: boolean
	showPreviousColor?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	value?: string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCancel?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onOk?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ColorPickerSlider extends React.Component<ColorPickerSliderProps, any> { }
export interface ColorPickerSliderProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ColorPickerSliderAlpha extends React.Component<ColorPickerSliderAlphaProps, any> { }
export interface ColorPickerSliderAlphaProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ColorPickerSliderHue extends React.Component<ColorPickerSliderHueProps, any> { }
export interface ColorPickerSliderHueProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ColorPickerSliderSaturation extends React.Component<ColorPickerSliderSaturationProps, any> { }
export interface ColorPickerSliderSaturationProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class ColorPickerSliderValue extends React.Component<ColorPickerSliderValueProps, any> { }
export interface ColorPickerSliderValueProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Desktop extends React.Component<DesktopProps, any> { }
export interface DesktopProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shortcutItemSelector?: string
	shortcuts?: Object[] | any
	shortcutTpl?: string
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	taskbarConfig?: Object
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class TaskBar extends React.Component<TaskBarProps, any> { }
export interface TaskBarProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButtonUI?: string
	defaultFieldUI?: string
	defaultFocus?: string
	defaultFooterButtonUI?: string
	defaultFooterFieldUI?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	enableFocusableContainer?: boolean
	enableOverflow?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowHandler?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	startBtnText?: string
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	vertical?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onOverflowChange?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TrayClock extends React.Component<TrayClockProps, any> { }
export interface TrayClockProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowText?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	text?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Video extends React.Component<VideoProps, any> { }
export interface VideoProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Wallpaper extends React.Component<WallpaperProps, any> { }
export interface WallpaperProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class EventRecorderManager extends React.Component<EventRecorderManagerProps, any> { }
export interface EventRecorderManagerProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Explorer extends React.Component<ExplorerProps, any> { }
export interface ExplorerProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	breadcrumb?: Object
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	contentView?: Object
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selection?: any
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	tree?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class ItemSelectorField extends React.Component<ItemSelectorFieldProps, any> { }
export interface ItemSelectorFieldProps {
	actions?: any
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	activeItem?: string | number
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	appendOnly?: string
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	bubbleEvents?: string[]
	buttons?: Object[]
	buttonsText?: Object
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	combineErrors?: boolean
	combineLabels?: boolean
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	ddReorder?: boolean
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	delimiter?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	dragGroup?: string
	dragText?: string
	dropGroup?: string
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldDefaults?: Object
	fieldLabel?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideNavIcons?: boolean
	html?: string | Object
	id?: string
	invalidCls?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelConnector?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	layout?: any | Object
	liquidLayout?: boolean
	listConfig?: Object
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxSelections?: number
	maxSelectionsText?: string
	maxWidth?: number
	minHeight?: number
	minSelections?: number
	minSelectionsText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any | Object[]
	style?: string | Object
	submitValue?: boolean
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valueField?: string
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFieldErrorChange?: Function
	onFieldValidityChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
}
declare class ItemSelector extends React.Component<ItemSelectorProps, any> { }
export interface ItemSelectorProps {
	actions?: any
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	activeItem?: string | number
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	appendOnly?: string
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	bubbleEvents?: string[]
	buttons?: Object[]
	buttonsText?: Object
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	combineErrors?: boolean
	combineLabels?: boolean
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	ddReorder?: boolean
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	delimiter?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	dragGroup?: string
	dragText?: string
	dropGroup?: string
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldDefaults?: Object
	fieldLabel?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideNavIcons?: boolean
	html?: string | Object
	id?: string
	invalidCls?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelConnector?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	layout?: any | Object
	liquidLayout?: boolean
	listConfig?: Object
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxSelections?: number
	maxSelectionsText?: string
	maxWidth?: number
	minHeight?: number
	minSelections?: number
	minSelectionsText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any | Object[]
	style?: string | Object
	submitValue?: boolean
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valueField?: string
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFieldErrorChange?: Function
	onFieldValidityChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
}
declare class MultiSelectField extends React.Component<MultiSelectFieldProps, any> { }
export interface MultiSelectFieldProps {
	actions?: any
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	activeItem?: string | number
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	appendOnly?: string
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	combineErrors?: boolean
	combineLabels?: boolean
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	ddReorder?: boolean
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	delimiter?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	dragGroup?: string
	dragText?: string
	dropGroup?: string
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldDefaults?: Object
	fieldLabel?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	invalidCls?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelConnector?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	layout?: any | Object
	liquidLayout?: boolean
	listConfig?: Object
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxSelections?: number
	maxSelectionsText?: string
	maxWidth?: number
	minHeight?: number
	minSelections?: number
	minSelectionsText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any | Object[]
	style?: string | Object
	submitValue?: boolean
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valueField?: string
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFieldErrorChange?: Function
	onFieldValidityChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
}
declare class MultiSelect extends React.Component<MultiSelectProps, any> { }
export interface MultiSelectProps {
	actions?: any
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	activeItem?: string | number
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	appendOnly?: string
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	combineErrors?: boolean
	combineLabels?: boolean
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	ddReorder?: boolean
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	delimiter?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	dragGroup?: string
	dragText?: string
	dropGroup?: string
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldDefaults?: Object
	fieldLabel?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	invalidCls?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelConnector?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	layout?: any | Object
	liquidLayout?: boolean
	listConfig?: Object
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxSelections?: number
	maxSelectionsText?: string
	maxWidth?: number
	minHeight?: number
	minSelections?: number
	minSelectionsText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pageSize?: number
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any | Object[]
	style?: string | Object
	submitValue?: boolean
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateOnChange?: boolean
	validation?: boolean | string
	value?: Object
	valueField?: string
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFieldErrorChange?: Function
	onFieldValidityChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
}
declare class SearchField extends React.Component<SearchFieldProps, any> { }
export interface SearchFieldProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggers?: Object
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class Gauge extends React.Component<GaugeProps, any> { }
export interface GaugeProps {
	animation?: Object | boolean
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	valueStyle?: Object
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class GMapPanel extends React.Component<GMapPanelProps, any> { }
export interface GMapPanelProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class GroupTabPanel extends React.Component<GroupTabPanelProps, any> { }
export interface GroupTabPanelProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeGroupChange?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBeforeTabChange?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGroupChange?: Function
	onHide?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTabChange?: Function
}
declare class UXIframe extends React.Component<UXIframeProps, any> { }
export interface UXIframeProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class Rating extends React.Component<RatingProps, any> { }
export interface RatingProps {
	animate?: boolean | Object
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	family?: string
	glyphs?: string | string[] | number[]
	height?: number | string
	hidden?: boolean
	limit?: number
	listeners?: Object
	minimum?: number
	overStyle?: string | Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	rounding?: number
	scale?: string
	selectedStyle?: string | Object
	session?: boolean | Object | any
	style?: string | Object
	tooltip?: Object | string | string[] | any | Function
	touchAction?: Object
	trackOver?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	value?: number
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class StatusBar extends React.Component<StatusBarProps, any> { }
export interface StatusBarProps {
	actions?: any
	activeChildTabIndex?: number
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	allowFocusingDisabledChildren?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoClear?: number
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	border?: number | string | boolean
	bubbleEvents?: string[]
	busyIconCls?: string
	busyText?: string
	childEls?: Object | string[] | Object[]
	cls?: string
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButtonUI?: string
	defaultFieldUI?: string
	defaultFocus?: string
	defaultFooterButtonUI?: string
	defaultFooterFieldUI?: string
	defaultIconCls?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultText?: string
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableFocusableContainer?: boolean
	enableOverflow?: boolean
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	iconCls?: string
	id?: string
	inactiveChildTabIndex?: number
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowHandler?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	publishes?: string | string[] | Object
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	statusAlign?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	text?: string
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	vertical?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onMove?: Function
	onOverflowChange?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
}
declare class TreePicker extends React.Component<TreePickerProps, any> { }
export interface TreePickerProps {
	activeError?: string
	activeErrorsTpl?: string | string[] | any
	afterBodyEl?: string | Object[] | any
	afterLabelTextTpl?: string | Object[] | any
	afterLabelTpl?: string | Object[] | any
	afterSubTpl?: string | Object[] | any
	alignOnScroll?: boolean
	alignTarget?: string
	allowBlank?: boolean
	allowOnlyWhitespace?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaErrorText?: string
	ariaHelp?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoFitErrors?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseBodyCls?: string
	baseCls?: string
	beforeBodyEl?: string | Object[] | any
	beforeLabelTextTpl?: string | Object[] | any
	beforeLabelTpl?: string | Object[] | any
	beforeSubTpl?: string | Object[] | any
	bind?: Object | string
	blankText?: string
	border?: number | string | boolean
	checkChangeBuffer?: number
	checkChangeEvents?: string[]
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columns?: Object[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	dirtyCls?: string
	disabled?: boolean
	disabledCls?: string
	disableKeyFilter?: boolean
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	editable?: boolean
	emptyCls?: string
	emptyText?: string
	enableKeyEvents?: boolean
	enforceMaxLength?: boolean
	errorMsgCls?: string
	fieldBodyCls?: string
	fieldCls?: string
	fieldLabel?: string
	fieldStyle?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formatText?: string
	formBind?: boolean
	formItemCls?: string
	frame?: boolean
	grow?: boolean
	growAppend?: string
	growMax?: number
	growMin?: number
	height?: number | string
	hidden?: boolean
	hideEmptyLabel?: boolean
	hideLabel?: boolean
	hideMode?: string
	hideTrigger?: boolean
	html?: string | Object
	id?: string
	inputAttrTpl?: string | Object[] | any
	inputId?: string
	inputType?: string
	inputWrapCls?: string
	invalidCls?: string
	invalidText?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	labelAlign?: string
	labelAttrTpl?: string | Object[] | any
	labelCls?: string
	labelClsExtra?: string
	labelPad?: number
	labelSeparator?: string
	labelStyle?: string
	labelWidth?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	margin?: number | string
	maskElement?: string
	maskRe?: any
	matchFieldWidth?: boolean
	maxHeight?: number
	maxLength?: number
	maxLengthText?: string
	maxPickerHeight?: number
	maxWidth?: number
	minHeight?: number
	minLength?: number
	minLengthText?: string
	minPickerHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	msgTarget?: string
	name?: string
	openCls?: string
	overCls?: string
	overflowX?: string
	overflowY?: string
	padding?: number | string
	pickerAlign?: string
	pickerOffset?: number[]
	plugins?: any | Object[] | Object
	preventMark?: boolean
	publishes?: string | string[] | Object
	readOnly?: boolean
	readOnlyCls?: string
	reference?: string
	regex?: any
	regexText?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	repeatTriggerClick?: boolean
	requiredCls?: string
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectOnFocus?: boolean
	selectOnTab?: boolean
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	size?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	stripCharsRe?: any
	style?: string | Object
	submitValue?: boolean
	tabIndex?: number
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	triggerCls?: string
	triggerWrapCls?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	validateBlank?: boolean
	validateOnBlur?: boolean
	validateOnChange?: boolean
	validation?: boolean | string
	validator?: Function
	value?: Object
	valuePublishEvent?: string[] | string
	viewModel?: string | Object | any
	vtype?: string
	vtypeText?: string
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onAutosize?: Function
	onBeforeActivate?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChange?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDirtyChange?: Function
	onDisable?: Function
	onEnable?: Function
	onErrorChange?: Function
	onExpand?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onKeyDown?: Function
	onKeypress?: Function
	onKeyUp?: Function
	onMove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onShow?: Function
	onSpecialKey?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onValidityChange?: Function
	onWriteableChange?: Function
}
declare class BoundList extends React.Component<BoundListProps, any> { }
export interface BoundListProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	blockRefresh?: boolean
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	deferEmptyText?: boolean
	deferInitialRefresh?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	displayField?: string
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemCls?: string
	itemId?: string
	itemSelector: string
	itemTpl?: string | string[] | any
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	loadingCls?: string
	loadingHeight?: number
	loadingText?: string
	loadMask?: boolean | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiSelect?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overItemCls?: string
	padding?: number | string
	pageSize?: number
	plugins?: any | Object[] | Object
	preserveScrollOnRefresh?: boolean
	preserveScrollOnReload?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectedItemCls?: string
	selection?: any
	selectionModel?: Object | any
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	simpleSelect?: boolean
	singleSelect?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	style?: string | Object
	tabIndex?: number
	throttledUpdate?: boolean
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl?: string | any
	tplWriteMode?: string
	trackOver?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	updateDelay?: number
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeRefresh?: Function
	onBeforeRender?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusChange?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onHighlightItem?: Function
	onItemAdd?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onItemRemove?: Function
	onItemUpdate?: Function
	onMove?: Function
	onRefresh?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onUnhighlightItem?: Function
	onViewReady?: Function
}
declare class MultiSelector extends React.Component<MultiSelectorProps, any> { }
export interface MultiSelectorProps {
	actions?: any
	activeItem?: string | number
	addToolText?: string
	alignOnScroll?: boolean
	alignTarget?: string
	allowDeselect?: boolean
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoLoad?: boolean
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	bufferedRenderer?: boolean
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnLines?: boolean
	columns: any | Object
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	deferRowRender?: boolean
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableColumnHide?: boolean
	enableColumnMove?: boolean
	enableColumnResize?: boolean
	enableLocking?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	features?: any | Object[]
	fieldName?: string
	fieldTitle?: string
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	forceFit?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerBorders?: boolean
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideHeaders?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	leadingBufferZone?: number
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	lockedGridConfig?: Object
	lockedViewConfig?: Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiColumnSort?: boolean
	multiSelect?: boolean
	normalGridConfig?: Object
	normalViewConfig?: Object
	numFromEdge?: number
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	record?: any | number
	reference?: string
	referenceHolder?: boolean
	region?: string
	removeRowText?: string
	removeRowTip?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	reserveScrollbar?: boolean
	resizable?: boolean | Object
	resizeHandles?: string
	rowLines?: boolean
	rowViewModel?: string | Object
	saveDelay?: number
	scroll?: string | boolean
	scrollable?: boolean | string | Object
	sealedColumns?: boolean
	search?: Object
	selection?: any
	selModel?: any | Object | string
	selType?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	simpleSelect?: boolean
	sortableColumns?: boolean
	split?: boolean | Object
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store: any | string | Object
	style?: string | Object
	subGridXType?: string
	suspendLayout?: boolean
	syncRowHeight?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	trailingBufferZone?: number
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	variableRowHeight?: boolean
	view?: any
	viewConfig?: Object
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeCellClick?: Function
	onBeforeCellContextMenu?: Function
	onBeforeCellDblClick?: Function
	onBeforeCellKeyDown?: Function
	onBeforeCellMouseDown?: Function
	onBeforeCellMouseUp?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeload?: Function
	onBeforeReconfigure?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeRowBodyClick?: Function
	onBeforeRowBodyContextMenu?: Function
	onBeforeRowBodyDblClick?: Function
	onBeforeRowBodyKeyDown?: Function
	onBeforeRowBodyKeypress?: Function
	onBeforeRowBodyKeyUp?: Function
	onBeforeRowBodyLongpress?: Function
	onBeforeRowBodyMouseDown?: Function
	onBeforeRowBodyMouseUp?: Function
	onBeforeRowExit?: Function
	onBeforeSelect?: Function
	onBeforeSelectionextEnd?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCellClick?: Function
	onCellContextMenu?: Function
	onCellDblClick?: Function
	onCellKeyDown?: Function
	onCellMouseDown?: Function
	onCellMouseUp?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onColumnHide?: Function
	onColumnMove?: Function
	onColumnResize?: Function
	onColumnsChanged?: Function
	onColumnShow?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFilterChange?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onGroupChange?: Function
	onHeaderClick?: Function
	onHeaderContextMenu?: Function
	onHeaderMenuCreate?: Function
	onHeaderTriggerClick?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onLoad?: Function
	onLockColumn?: Function
	onMove?: Function
	onProcessColumns?: Function
	onReconfigure?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRowBodyClick?: Function
	onRowBodyContextMenu?: Function
	onRowBodyDblClick?: Function
	onRowBodyKeyDown?: Function
	onRowBodyKeypress?: Function
	onRowBodyKeyUp?: Function
	onRowBodyLongpress?: Function
	onRowBodyMouseDown?: Function
	onRowBodyMouseUp?: Function
	onRowClick?: Function
	onRowContextMenu?: Function
	onRowDblClick?: Function
	onRowKeyDown?: Function
	onRowMouseDown?: Function
	onRowMouseUp?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onSelectionExtenderDrag?: Function
	onShow?: Function
	onSortChange?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
	onUnlockColumn?: Function
	onViewReady?: Function
}
declare class MultiSelectorSearch extends React.Component<MultiSelectorSearchProps, any> { }
export interface MultiSelectorSearchProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean | Object
	expandToolText?: string
	fbar?: Object | Object[]
	field?: string
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	searchText?: string
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any | string | Object
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class TableView extends React.Component<TableViewProps, any> { }
export interface TableViewProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	blockRefresh?: boolean
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	deferEmptyText?: boolean
	deferInitialRefresh?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableTextSelection?: boolean
	firstCls?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemCls?: string
	itemId?: string
	itemSelector: string
	itemTpl?: string | string[] | any
	keyMap?: Object
	keyMapEnabled?: boolean
	lastCls?: string
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	loadingCls?: string
	loadingHeight?: number
	loadingText?: string
	loadMask?: boolean | Object
	margin?: number | string
	markDirty?: boolean
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiSelect?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overItemCls?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preserveScrollOnRefresh?: boolean
	preserveScrollOnReload?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectedItemCls?: string
	selection?: any
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	simpleSelect?: boolean
	singleSelect?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	stripeRows?: boolean
	style?: string | Object
	tabIndex?: number
	throttledUpdate?: boolean
	toFrontOnShow?: boolean
	touchAction?: Object
	tplWriteMode?: string
	trackOver?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	updateDelay?: number
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeCellClick?: Function
	onBeforeCellContextMenu?: Function
	onBeforeCellDblClick?: Function
	onBeforeCellKeyDown?: Function
	onBeforeCellMouseDown?: Function
	onBeforeCellMouseUp?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeRefresh?: Function
	onBeforeRender?: Function
	onBeforeRowBodyClick?: Function
	onBeforeRowBodyContextMenu?: Function
	onBeforeRowBodyDblClick?: Function
	onBeforeRowBodyKeyDown?: Function
	onBeforeRowBodyKeypress?: Function
	onBeforeRowBodyKeyUp?: Function
	onBeforeRowBodyLongpress?: Function
	onBeforeRowBodyMouseDown?: Function
	onBeforeRowBodyMouseUp?: Function
	onBeforeRowExit?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCellClick?: Function
	onCellContextMenu?: Function
	onCellDblClick?: Function
	onCellKeyDown?: Function
	onCellMouseDown?: Function
	onCellMouseUp?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusChange?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onHighlightItem?: Function
	onItemAdd?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onItemRemove?: Function
	onItemUpdate?: Function
	onMove?: Function
	onRefresh?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRowBodyClick?: Function
	onRowBodyContextMenu?: Function
	onRowBodyDblClick?: Function
	onRowBodyKeyDown?: Function
	onRowBodyKeypress?: Function
	onRowBodyKeyUp?: Function
	onRowBodyLongpress?: Function
	onRowBodyMouseDown?: Function
	onRowBodyMouseUp?: Function
	onRowClick?: Function
	onRowContextMenu?: Function
	onRowDblClick?: Function
	onRowKeyDown?: Function
	onRowMouseDown?: Function
	onRowMouseUp?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onUnhighlightItem?: Function
	onViewReady?: Function
}
declare class GridView extends React.Component<GridViewProps, any> { }
export interface GridViewProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	blockRefresh?: boolean
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	deferEmptyText?: boolean
	deferInitialRefresh?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	enableTextSelection?: boolean
	firstCls?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemCls?: string
	itemId?: string
	itemSelector: string
	itemTpl?: string | string[] | any
	keyMap?: Object
	keyMapEnabled?: boolean
	lastCls?: string
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	loadingCls?: string
	loadingHeight?: number
	loadingText?: string
	loadMask?: boolean | Object
	margin?: number | string
	markDirty?: boolean
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiSelect?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overItemCls?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preserveScrollOnRefresh?: boolean
	preserveScrollOnReload?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectedItemCls?: string
	selection?: any
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	simpleSelect?: boolean
	singleSelect?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	stripeRows?: boolean
	style?: string | Object
	tabIndex?: number
	throttledUpdate?: boolean
	toFrontOnShow?: boolean
	touchAction?: Object
	tplWriteMode?: string
	trackOver?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	updateDelay?: number
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeCellClick?: Function
	onBeforeCellContextMenu?: Function
	onBeforeCellDblClick?: Function
	onBeforeCellKeyDown?: Function
	onBeforeCellMouseDown?: Function
	onBeforeCellMouseUp?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeRefresh?: Function
	onBeforeRender?: Function
	onBeforeRowBodyClick?: Function
	onBeforeRowBodyContextMenu?: Function
	onBeforeRowBodyDblClick?: Function
	onBeforeRowBodyKeyDown?: Function
	onBeforeRowBodyKeypress?: Function
	onBeforeRowBodyKeyUp?: Function
	onBeforeRowBodyLongpress?: Function
	onBeforeRowBodyMouseDown?: Function
	onBeforeRowBodyMouseUp?: Function
	onBeforeRowExit?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onCellClick?: Function
	onCellContextMenu?: Function
	onCellDblClick?: Function
	onCellKeyDown?: Function
	onCellMouseDown?: Function
	onCellMouseUp?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusChange?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onHighlightItem?: Function
	onItemAdd?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onItemRemove?: Function
	onItemUpdate?: Function
	onMove?: Function
	onRefresh?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRowBodyClick?: Function
	onRowBodyContextMenu?: Function
	onRowBodyDblClick?: Function
	onRowBodyKeyDown?: Function
	onRowBodyKeypress?: Function
	onRowBodyKeyUp?: Function
	onRowBodyLongpress?: Function
	onRowBodyMouseDown?: Function
	onRowBodyMouseUp?: Function
	onRowClick?: Function
	onRowContextMenu?: Function
	onRowDblClick?: Function
	onRowKeyDown?: Function
	onRowMouseDown?: Function
	onRowMouseUp?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onUnhighlightItem?: Function
	onViewReady?: Function
}
declare class DataView extends React.Component<DataViewProps, any> { }
export interface DataViewProps {
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	animateShadow?: boolean
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoEl?: string | Object
	autoRender?: boolean | string | HTMLElement | any
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bind?: Object | string
	blockRefresh?: boolean
	border?: number | string | boolean
	childEls?: Object | string[] | Object[]
	cls?: string | string[]
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultListenerScope?: boolean
	deferEmptyText?: boolean
	deferInitialRefresh?: boolean
	disabled?: boolean
	disabledCls?: string
	disableSelection?: boolean
	dock?: string
	draggable?: boolean | Object
	emptyText?: string
	fixed?: boolean
	flex?: number
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	height?: number | string
	hidden?: boolean
	hideMode?: string
	html?: string | Object
	id?: string
	itemCls?: string
	itemId?: string
	itemSelector: string
	itemTpl?: string | string[] | any
	keyMap?: Object
	keyMapEnabled?: boolean
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	loadingCls?: string
	loadingHeight?: number
	loadingText?: string
	loadMask?: boolean | Object
	margin?: number | string
	maskElement?: string
	maxHeight?: number
	maxWidth?: number
	minHeight?: number
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	multiSelect?: boolean
	overCls?: string
	overflowX?: string
	overflowY?: string
	overItemCls?: string
	padding?: number | string
	plugins?: any | Object[] | Object
	preserveScrollOnRefresh?: boolean
	preserveScrollOnReload?: boolean
	publishes?: string | string[] | Object
	reference?: string
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	selectedItemCls?: string
	selection?: any
	selectionModel?: Object | any
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	simpleSelect?: boolean
	singleSelect?: boolean
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	store?: any
	style?: string | Object
	tabIndex?: number
	throttledUpdate?: boolean
	toFrontOnShow?: boolean
	touchAction?: Object
	tpl: string | string[] | any
	tplWriteMode?: string
	trackOver?: boolean
	twoWayBindable?: string | string[] | Object
	ui?: string
	updateDelay?: number
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	onActivate?: Function
	onAdded?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeContainerClick?: Function
	onBeforeContainerContextMenu?: Function
	onBeforeContainerDblClick?: Function
	onBeforeContainerKeyDown?: Function
	onBeforeContainerKeypress?: Function
	onBeforeContainerKeyUp?: Function
	onBeforeContainerMouseDown?: Function
	onBeforeContainerMouseOut?: Function
	onBeforeContainerMouseOver?: Function
	onBeforeContainerMouseUp?: Function
	onBeforeDeactivate?: Function
	onBeforeDeselect?: Function
	onBeforeDestroy?: Function
	onBeforeHide?: Function
	onBeforeItemClick?: Function
	onBeforeItemContextMenu?: Function
	onBeforeItemDblClick?: Function
	onBeforeItemKeyDown?: Function
	onBeforeItemKeypress?: Function
	onBeforeItemKeyUp?: Function
	onBeforeItemLongpress?: Function
	onBeforeItemMouseDown?: Function
	onBeforeItemMouseEnter?: Function
	onBeforeItemMouseLeave?: Function
	onBeforeItemMouseUp?: Function
	onBeforeRefresh?: Function
	onBeforeRender?: Function
	onBeforeSelect?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onContainerClick?: Function
	onContainerContextMenu?: Function
	onContainerDblClick?: Function
	onContainerKeyDown?: Function
	onContainerKeypress?: Function
	onContainerKeyUp?: Function
	onContainerMouseDown?: Function
	onContainerMouseOut?: Function
	onContainerMouseOver?: Function
	onContainerMouseUp?: Function
	onDeactivate?: Function
	onDeselect?: Function
	onDestroy?: Function
	onDisable?: Function
	onEnable?: Function
	onFocus?: Function
	onFocusChange?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onHide?: Function
	onHighlightItem?: Function
	onItemAdd?: Function
	onItemClick?: Function
	onItemContextMenu?: Function
	onItemDblClick?: Function
	onItemKeyDown?: Function
	onItemKeypress?: Function
	onItemKeyUp?: Function
	onItemLongpress?: Function
	onItemMouseDown?: Function
	onItemMouseEnter?: Function
	onItemMouseLeave?: Function
	onItemMouseUp?: Function
	onItemRemove?: Function
	onItemUpdate?: Function
	onMove?: Function
	onRefresh?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onSelect?: Function
	onSelectionChange?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onUnhighlightItem?: Function
	onViewReady?: Function
}
declare class Widget extends React.Component<WidgetProps, any> { }
export interface WidgetProps {
	bind?: Object | string
	border?: boolean
	cls?: string | string[]
	controller?: string | Object | any
	defaultListenerScope?: boolean
	height?: number | string
	hidden?: boolean
	listeners?: Object
	plugins?: Object | string | Object[] | string[]
	publishes?: string | string[] | Object
	reference?: string
	session?: boolean | Object | any
	style?: string | Object
	touchAction?: Object
	twoWayBindable?: string | string[] | Object
	ui?: string | string[]
	userCls?: string | string[]
	viewModel?: string | Object | any
	width?: number | string
	onBeforeHeightChange?: Function
	onBeforeHiddenChange?: Function
	onBeforeWidthChange?: Function
	onHeightChange?: Function
	onHiddenChange?: Function
	onWidthChange?: Function
}
declare class MessageBox extends React.Component<MessageBoxProps, any> { }
export interface MessageBoxProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animateTarget?: string | any | Component | boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string | number | Component
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	expandOnShow?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	ghost?: boolean | Function
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	hideShadowOnDeactivate?: boolean
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskClickAction?: string
	maskElement?: string
	maxHeight?: number
	maximizable?: boolean
	maximized?: boolean
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minimizable?: boolean
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	monitorResize?: boolean
	onEsc?: Function
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plain?: boolean
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: any
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	x?: number
	y?: number
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMaskClick?: Function
	onMaximize?: Function
	onMinimize?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRestore?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Toast extends React.Component<ToastProps, any> { }
export interface ToastProps {
	actions?: any
	activeItem?: string | number
	align?: string
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string | Component
	anchorAlign?: string
	anchorSize?: number | Object
	animate?: boolean
	animateShadow?: boolean
	animateTarget?: string | any | Component | boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoClose?: boolean
	autoCloseDelay?: number
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeOnMouseDown?: boolean
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string | number | Component
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	expandOnShow?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	ghost?: boolean | Function
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideDuration?: number
	hideMode?: string
	hideShadowOnDeactivate?: boolean
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskClickAction?: string
	maskElement?: string
	maxHeight?: number
	maximizable?: boolean
	maximized?: boolean
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minimizable?: boolean
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	monitorResize?: boolean
	onEsc?: Function
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plain?: boolean
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: any
	slideBackAnimation?: string
	slideBackDuration?: number
	slideInAnimation?: string
	slideInDuration?: number
	spacing?: number
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	stickOnClick?: boolean
	stickWhileHover?: boolean
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	useXAxis?: boolean
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	x?: number
	y?: number
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMaskClick?: Function
	onMaximize?: Function
	onMinimize?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRestore?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}
declare class Window extends React.Component<WindowProps, any> { }
export interface WindowProps {
	actions?: any
	activeItem?: string | number
	alignOnScroll?: boolean
	alignTarget?: string
	alwaysOnTop?: boolean | number
	anchor?: string
	anchorSize?: number | Object
	animateShadow?: boolean
	animateTarget?: string | any | Component | boolean
	animCollapse?: boolean | number
	ariaAttributes?: Object
	ariaDescribedBy?: string
	ariaLabel?: string
	ariaLabelledBy?: string
	autoDestroy?: boolean
	autoEl?: string | Object
	autoRender?: boolean
	autoScroll?: boolean
	autoShow?: boolean
	baseCls?: string
	bbar?: Object | Object[]
	bind?: Object | string
	bodyBorder?: boolean
	bodyCls?: string | string[]
	bodyPadding?: number | string
	bodyStyle?: string | Object | Function
	border?: boolean
	bubbleEvents?: string[]
	buttonAlign?: string
	buttons?: Object[]
	childEls?: Object | string[] | Object[]
	closable?: boolean
	closeAction?: string
	closeToolText?: string
	cls?: string | string[]
	collapsed?: boolean
	collapsedCls?: string
	collapseDirection?: string
	collapseFirst?: boolean
	collapseMode?: string
	collapseToolText?: string
	collapsible?: boolean
	columnWidth?: number
	componentCls?: string
	componentLayout?: string | Object
	constrain?: boolean
	constrainHeader?: boolean
	constraintInsets?: Object | string
	constrainTo?: any
	contentEl?: string
	controller?: string | Object | any
	data?: Object
	defaultAlign?: string
	defaultButton?: string
	defaultButtonTarget?: string
	defaultDockWeights?: Object
	defaultFocus?: string | number | Component
	defaultListenerScope?: boolean
	defaults?: Object | Function
	defaultType?: string
	detachOnRemove?: boolean
	disabled?: boolean
	disabledCls?: string
	dock?: string
	draggable?: boolean
	expandOnShow?: boolean
	expandToolText?: string
	fbar?: Object | Object[]
	fixed?: boolean
	flex?: number
	floatable?: boolean
	floating?: boolean
	focusCls?: string
	focusOnToFront?: boolean
	formBind?: boolean
	frame?: boolean
	frameHeader?: boolean
	ghost?: boolean | Function
	glyph?: number | string
	header?: boolean | Object
	headerOverCls?: string
	headerPosition?: string
	height?: number | string
	hidden?: boolean
	hideCollapseTool?: boolean
	hideMode?: string
	hideShadowOnDeactivate?: boolean
	html?: string | Object
	icon?: string
	iconAlign?: string
	iconCls?: string
	id?: string
	itemId?: string
	keyMap?: Object
	keyMapEnabled?: boolean
	layout?: any | Object
	lbar?: Object | Object[]
	liquidLayout?: boolean
	listeners?: Object
	liveDrag?: boolean
	loader?: any | Object
	manageHeight?: boolean
	margin?: number | string
	maskClickAction?: string
	maskElement?: string
	maxHeight?: number
	maximizable?: boolean
	maximized?: boolean
	maxWidth?: number
	minButtonWidth?: number
	minHeight?: number
	minimizable?: boolean
	minWidth?: number
	modal?: boolean
	modelValidation?: boolean
	monitorResize?: boolean
	onEsc?: Function
	overCls?: string
	overflowX?: string
	overflowY?: string
	overlapHeader?: boolean
	padding?: number | string
	placeholder?: Component | Object
	placeholderCollapseHideMode?: number
	plain?: boolean
	plugins?: any | Object[] | Object
	preventHeader?: boolean
	publishes?: string | string[] | Object
	rbar?: Object | Object[]
	reference?: string
	referenceHolder?: boolean
	region?: string
	renderData?: Object
	renderSelectors?: Object
	renderTo?: string | HTMLElement | any
	resizable?: boolean | Object
	resizeHandles?: string
	saveDelay?: number
	scrollable?: boolean | string | Object
	session?: boolean | Object | any
	shadow?: string | boolean
	shadowOffset?: number
	shim?: boolean
	shrinkWrap?: boolean | number
	shrinkWrapDock?: boolean | number
	simpleDrag?: any
	stateEvents?: string[]
	stateful?: boolean | Object
	stateId?: string
	style?: string | Object
	suspendLayout?: boolean
	tabIndex?: number
	tbar?: Object | Object[]
	title?: string | Object
	titleAlign?: string
	titleCollapse?: boolean
	titleRotation?: string | number
	toFrontOnShow?: boolean
	tools?: Object[] | any
	touchAction?: Object
	tpl?: any | string | string[]
	tplWriteMode?: string
	twoWayBindable?: string | string[] | Object
	ui?: string
	userCls?: string | string[]
	viewModel?: string | Object | any
	weight?: number
	width?: number | string
	x?: number
	y?: number
	onActivate?: Function
	onAdd?: Function
	onAdded?: Function
	onAfterLayout?: Function
	onAfterLayoutAnimation?: Function
	onAfterRender?: Function
	onBeforeActivate?: Function
	onBeforeAdd?: Function
	onBeforeClose?: Function
	onBeforeCollapse?: Function
	onBeforeDeactivate?: Function
	onBeforeDestroy?: Function
	onBeforeExpand?: Function
	onBeforeHide?: Function
	onBeforeRemove?: Function
	onBeforeRender?: Function
	onBeforeShow?: Function
	onBeforeStateRestore?: Function
	onBeforeStateSave?: Function
	onBlur?: Function
	onBoxReady?: Function
	onChildMove?: Function
	onClose?: Function
	onCollapse?: Function
	onDeactivate?: Function
	onDestroy?: Function
	onDisable?: Function
	onDockedAdd?: Function
	onDockedRemove?: Function
	onEnable?: Function
	onExpand?: Function
	onFloat?: Function
	onFocus?: Function
	onFocusEnter?: Function
	onFocusLeave?: Function
	onGlyphChange?: Function
	onHide?: Function
	onIconChange?: Function
	onIconClsChange?: Function
	onMaskClick?: Function
	onMaximize?: Function
	onMinimize?: Function
	onMove?: Function
	onRemove?: Function
	onRemoved?: Function
	onRender?: Function
	onResize?: Function
	onRestore?: Function
	onShow?: Function
	onStateRestore?: Function
	onStateSave?: Function
	onTitleChange?: Function
	onUnfloat?: Function
}