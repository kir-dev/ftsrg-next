/*!
 * Copyright (C) 2020  Josh Habdas <jhabdas@protonmail.com>
 *
 * This file is part of gatsby-starter-i18n-react-i18next.
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

import React from "react";
import { ChakraProvider, CSSReset } from "@chakra-ui/core";
import { Global } from "@emotion/core";

import { I18nextProvider } from "react-i18next";
import i18next from "../src/lib/i18next";

import theme from "../src/utils/theme";
import { globalStyles } from "../src/utils/styles";

export const wrapRootElement = ({ element }) => (
  <ChakraProvider theme={theme}>
    <Global styles={globalStyles} />
    <CSSReset />
    <I18nextProvider i18n={i18next}>{element}</I18nextProvider>
  </ChakraProvider>
);
