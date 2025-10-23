import { render, screen } from "@testing-library/react";
import HeroButton from "@/components/ui/HeroButton";
import Hero from "@/components/sentions/Home/Hero";

describe("Buttons Testing", () => {
  test("Hero Button Render Test", () => {
    render(<HeroButton />);

    const element = screen.getByText("Analyse now");

    expect(element).toBeInTheDocument();
  });
});

describe("Hero Component", () => {
  test("Heading Test", () => {
    render(<Hero />);

    expect(
      screen.getByText("Instantly Understand What Your Logs Are Saying")
    ).toBeInTheDocument();
  });

  test("Sub Heading Test", () => {
    render(<Hero />);

    expect(
      screen.getByText(
        "Gain instant insights, spot issues faster, and save hours of debugging with LogLense’s intelligent log interpretation."
      )
    ).toBeInTheDocument();
  });
});
