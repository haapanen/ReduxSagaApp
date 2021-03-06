import * as React from 'react';

// Exported from redux-devtools
import { createDevTools } from 'redux-devtools';

// Monitors are separate packages, and you can make a custom one
var LogMonitor = require("redux-devtools-log-monitor").default;
var DockMonitor = require("redux-devtools-dock-monitor").default;
// var Inspector = require('redux-devtools-inspector').default;
var Dispatcher = require('redux-devtools-dispatch').default;

// createDevTools takes a monitor and produces a DevTools component
export const DevTools = createDevTools(
    // Monitors are individually adjustable with props.
    // Consult their repositories to learn about those props.
    // Here, we put LogMonitor inside a DockMonitor.
    // Note: DockMonitor is visible by default.
    <DockMonitor toggleVisibilityKey='ctrl-h'
                 changePositionKey='ctrl-q'
                 changeMonitorKey='ctrl-m'
                 defaultIsVisible={true}>
        <LogMonitor theme='tomorrow' />
        <Dispatcher theme='tomorrow' />

    </DockMonitor>
);

