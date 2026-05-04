/**
 * Copyright © 2024 650 Industries.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Babel preset for DOM components. Based on the default (Hermes V0) transform profile
 * with additional downlevel transforms for older Android factory WebView environments
 * (e.g. Android 9 / Chromium 66).
 */
export interface WebviewConfigOptions {
    dev?: boolean;
}
