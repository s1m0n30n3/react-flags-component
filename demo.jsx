import React, { useCallback, useState } from "react";
import { FlagDisplay } from "react-flags-component";
import "react-flags-component/dist/style.css";

import {
  ISO_3166_2_GB,
  ISO_3166_Alpha_3,
  ISO_3166_Alpha_2,
} from "./src/constants";
import "./style.css";

export const Demo = () => {
  const isoGB = Object.keys(ISO_3166_2_GB);
  const isoAlpha3 = Object.keys(ISO_3166_Alpha_3);
  const isoAlpha2 = Object.keys(ISO_3166_Alpha_2);
  const [isoMethodList, setIsoMethodList] = useState(isoAlpha2);
  const [shape, setShape] = useState("rectangular");
  const [size, setSize] = useState("jumbo");

  const array = [...isoGB, ...isoMethodList];

  const transformCountry = useCallback((code) => {
    return (
      ISO_3166_2_GB[code] ||
      ISO_3166_Alpha_2[code] ||
      ISO_3166_Alpha_3[code] ||
      ""
    ).replace(/[_]/g, " ");
  }, []);

  return (
    <div className="root">
      <div className="options">
        <div className="field">
          <label>ISO 3166</label>
          <select
            className="selector"
            defaultValue="alpha_2"
            onChange={({ target }) => {
              if (target.value === "alpha_2")
                return setIsoMethodList(isoAlpha2);
              return setIsoMethodList(isoAlpha3);
            }}
          >
            <option value="alpha_2">alpha 2</option>
            <option value="alpha_3">alpha 3</option>
          </select>
        </div>
        <div className="field">
          <label>SHAPE</label>
          <select
            defaultValue={shape}
            className="selector"
            onChange={({ target }) => setShape(target.value)}
          >
            <option value="rectangular">rectangular</option>
            <option value="rounded">rounded</option>
          </select>
        </div>

        <div className="field">
          <label>SIZE</label>
          <select
            className="selector"
            defaultValue={size}
            onChange={({ target }) => setSize(target.value)}
          >
            <option value="nano">nano</option>
            <option value="micro">micro</option>
            <option value="mini">mini</option>
            <option value="xxxs">xxxs</option>
            <option value="xxs">xxs</option>
            <option value="xs">xs</option>
            <option value="sm">sm</option>
            <option value="md">md</option>
            <option value="lg">lg</option>
            <option value="xl">xl</option>
            <option value="xxl">xxl</option>
            <option value="xxxl">xxxl</option>
            <option value="jumbo">jumbo</option>
            <option value="maxi">maxi</option>
            <option value="ultra">ultra</option>
          </select>
        </div>
      </div>

      <div className="inner-container">
        <h3>Available Flags</h3>
      </div>

      <div className="available-flags inner-container">
        {array.map((code) => (
          <div className="card" key={code}>
            <header>{transformCountry(code)}</header>
            <FlagDisplay countryCode={code} shape={shape} size={size} />
            <footer>{code}</footer>
          </div>
        ))}
      </div>
    </div>
  );
};
