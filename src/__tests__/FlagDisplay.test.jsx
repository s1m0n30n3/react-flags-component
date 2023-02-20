import React from "react";
import renderer from "react-test-renderer";
import { describe, expect, test } from "vitest";

import { FlagDisplay } from "../components/FlagDisplay";

describe("FlagDisplay", () => {
  test("renders correctly", () => {
    const component = renderer.create(<FlagDisplay />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test("renders correctly with default css classes", () => {
    const component = renderer.create(<FlagDisplay />);

    const tree = component.toJSON();
    const className = tree.props.className;

    expect(className).toBe("fib-rectangular-AFG fib-size-md");
  });

  test("renders correctly with Italian flag (ITA - alpha 3) and with size medium (md) in a div", () => {
    const component = renderer.create(
      <FlagDisplay countryCode="ITA" size="md" />
    );

    const tree = component.toJSON();
    const {
      type,
      props: { className },
    } = tree;

    expect(className).toBe("fib-rectangular-ITA fib-size-md");
    expect(type).toBe("div");
  });

  test("renders correctly with Italian flag (ITA - alpha 3) and with size medium (md) in a div", () => {
    const component = renderer.create(
      <FlagDisplay countryCode="ITA" size="md" />
    );

    const tree = component.toJSON();
    const {
      type,
      props: { className },
    } = tree;

    expect(className).toBe("fib-rectangular-ITA fib-size-md");
    expect(type).toBe("div");
  });

  test("renders correctly with Italian flag (IT - alpha 2) and with size ultra (ultra) in a hyperlink tag (a)", () => {
    const component = renderer.create(
      <FlagDisplay as="a" countryCode="IT" size="ultra" />
    );

    const tree = component.toJSON();
    const {
      type,
      props: { className },
    } = tree;

    expect(className).toBe("fib-rectangular-IT fib-size-ultra");
    expect(type).toBe("a");
  });

  test("renders correctly with customWidth and customHeight in a div", () => {
    const component = renderer.create(
      <FlagDisplay as="a" customHeight={10} customWidth={10} countryCode="IT" />
    );

    const tree = component.toJSON();
    const {
      type,
      props: {
        className,
        style: { height, width },
      },
    } = tree;

    expect(className).toBe("fib-rectangular-IT fib-size-md");
    expect(type).toBe("a");
    expect(height).toBe(10);
    expect(width).toBe(10);
  });
});
