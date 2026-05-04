/**
 * Copyright © 2024 650 Industries.
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Metro module transform preset for babel-preset-expo.
 * Handles export namespace/default transforms and ES module to CommonJS conversion.
 *
 * This is a separate preset so that it runs after all other presets
 * (Babel applies presets in reverse order).
 */
export interface ModuleTransformOptions {
    enableBabelRuntime?: string | false | undefined;
    disableImportExportTransform: boolean | undefined;
    lazyImportExportTransform: unknown;
}
