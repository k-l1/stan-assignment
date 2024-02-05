import { Carousel } from "./index";

describe("Carousel", () => {
  it("renders correctly", () => {
    // Render to json and compare with snapshot
  });
  it("shows the correct number of items", () => {
    // Compare children count to items supplied in mock data
  });
  it("should move to the next item on right key press", () => {
    // Event listener on right key press expecting active element to be at position + 1
  });
  it("should navigate to the next page after the last item", () => {
    // Active page and elements should be updated on right key press after last element
  });
  it("should show the end of the list on left key press at the beginning", () => {
    // Show the last page and be active on the last element when pressing left at the beginning
  });
  it("should handle the enter press", () => {
    // Should run callback and stub is hit when enter is pressed on an active element
  });
});
