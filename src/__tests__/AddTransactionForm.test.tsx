import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddTransactionForm from "../pages/screens/common/businessData/components/AddTransactionForm";

// Mock the dataApi module
jest.mock("../redux/services/data/dataApi", () => ({
  useCreateBusinessHealthMutation: jest.fn(),
}));

describe("AddTransactionForm", () => {
  it("renders the form with input fields and a submit button", () => {
    render(<AddTransactionForm />);

    // Check if the form and its elements are rendered
    expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/income/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/expenses/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/debts/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/assets/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
  });

  it("submits the form with valid data", async () => {
    // Mock the dataApi module response
    const mockMutation = jest.fn();
    mockMutation.mockResolvedValueOnce({
      data: { message: "Business health created successfully!" },
    });
    jest.mock("../redux/services/data/dataApi", () => ({
      useCreateBusinessHealthMutation: jest.fn(() => [
        mockMutation,
        { data: null, error: null, isLoading: false, isSuccess: false },
      ]),
    }));

    // Set up the mock in the module
    jest
      .requireMock("../redux/services/data/dataApi")
      .useCreateBusinessHealthMutation.mockReturnValueOnce([
        mockMutation,
        { data: null, error: null, isLoading: false, isSuccess: false },
      ]);

    render(<AddTransactionForm />);

    // Fill in the form with valid data
    userEvent.type(screen.getByLabelText(/income/i), "1000");
    userEvent.type(screen.getByLabelText(/expenses/i), "500");
    userEvent.type(screen.getByLabelText(/debts/i), "200");
    userEvent.type(screen.getByLabelText(/assets/i), "1500");

    // Submit the form
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    // Wait for the success message to be displayed
    await screen.findByText(/Business health created successfully!!/i);
  });

  // Add more test cases for invalid data, error handling, etc.
});
