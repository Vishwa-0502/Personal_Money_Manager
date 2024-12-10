import { useState } from "react";
import { Input } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import toast from "react-hot-toast";
import Chart from "./Chart";

const apiUrl = import.meta.env.VITE_API_URL;

const NetWorthCalculator = () => {
  const [formData, setFormData] = useState({
    realEstate: "",
    checkingAccounts: "",
    savingsAccounts: "",
    retirementAccounts: "",
    autos: "",
    otherAssets: "",
    mortgages: "",
    consumerDebt: "",
    personalLoans: "",
    studentLoans: "",
    autoLoans: "",
    otherDebt: "",
  });
  const [netWorth, setNetWorth] = useState(0);
  const [totalAssets, setTotalAssets] = useState(0);
  const [totalLiabilities, setTotalLiabilities] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const allFieldsFilled = Object.values(formData).every(
      (field) => field.trim() !== ""
    );

    if (!allFieldsFilled) {
      toast.error("All fields are mandatory!");
      return;
    }

    const token = localStorage.getItem("token");
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.id;

    const assets = {
      realEstate: parseFloat(formData.realEstate) || 0,
      checkingAccounts: parseFloat(formData.checkingAccounts) || 0,
      savingsAccounts: parseFloat(formData.savingsAccounts) || 0,
      retirementAccounts: parseFloat(formData.retirementAccounts) || 0,
      autos: parseFloat(formData.autos) || 0,
      otherAssets: parseFloat(formData.otherAssets) || 0,
    };
    const liabilities = {
      mortgages: parseFloat(formData.mortgages) || 0,
      consumerDebt: parseFloat(formData.consumerDebt) || 0,
      personalLoans: parseFloat(formData.personalLoans) || 0,
      studentLoans: parseFloat(formData.studentLoans) || 0,
      autoLoans: parseFloat(formData.autoLoans) || 0,
      otherDebt: parseFloat(formData.otherDebt) || 0,
    };

    const totalAssetsValue = Object.values(assets).reduce(
      (total, value) => total + value,
      0
    );
    const totalLiabilitiesValue = Object.values(liabilities).reduce(
      (total, value) => total + value,
      0
    );
    const calculatedNetWorth = totalAssetsValue - totalLiabilitiesValue;

    try {
      const response = await axios.post(`${apiUrl}/api/networth`, {
        userId,
        assets,
        liabilities,
      });

      setTotalAssets(totalAssetsValue);
      setTotalLiabilities(totalLiabilitiesValue);
      setNetWorth(calculatedNetWorth);
      setShowResults(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="flex flex-col min-h-[100dvh] bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-16">
          <div className="container px-4 md:px-6">
            <div className="shadow-md rounded-lg p-6 w-full max-w-4xl mx-auto bg-background">
              <h1 className="text-3xl font-bold text-center mb-16">Net Worth Calculator</h1>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-4">
                  {/* Input Fields for Assets (Left Column) */}
                  {["realEstate", "checkingAccounts", "savingsAccounts", "retirementAccounts", "autos", "otherAssets"].map((field) => (
                    <div className="w-full md:w-1/2 px-4 mt-6" key={field}>
                      <label htmlFor={field} className="block text-lg font-semibold">
                        {field.split(/(?=[A-Z])/).join(" ")}
                      </label>
                      <Input
                        id={field}
                        name={field}
                        type="number"
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                        placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                      />
                    </div>
                  ))}

                  {/* Input Fields for Liabilities (Right Column) */}
                  {["mortgages", "consumerDebt", "personalLoans", "studentLoans", "autoLoans", "otherDebt"].map((field) => (
                    <div className="w-full md:w-1/2 px-4 mt-6" key={field}>
                      <label htmlFor={field} className="block text-lg font-semibold">
                        {field.split(/(?=[A-Z])/).join(" ")}
                      </label>
                      <Input
                        id={field}
                        name={field}
                        type="number"
                        value={formData[field]}
                        onChange={handleChange}
                        className="w-full p-3 mt-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
                        placeholder={`Enter ${field.replace(/([A-Z])/g, ' $1').toLowerCase()}`}
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground text-2xl font-bold p-3 rounded-md hover:bg-primary/90 transition"
                  >
                    Calculate Net Worth
                  </button>
                </div>
              </form>

              <Transition
                show={showResults}
                enter="transition-opacity duration-500"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-500"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="mt-6 space-y-4 text-center">
                  <div className="bg-gray-800 text-white p-4 rounded-lg">
                    <h3 className="text-xl font-semibold mb-2">Results</h3>
                    <div className="space-y-2">
                      <p className="text-lg font-semibold text-blue-400">
                        Total Assets: ₹{totalAssets.toLocaleString()}
                      </p>
                      <p className="text-lg font-semibold text-red-400">
                        Total Liabilities: ₹{totalLiabilities.toLocaleString()}
                      </p>
                      <p className="text-2xl font-bold text-green-400 border p-2">
                        Your Net Worth is: ₹{netWorth.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <Chart
                    totalAssets={totalAssets}
                    totalLiabilities={totalLiabilities}
                    netWorth={netWorth}
                  />
                </div>
              </Transition>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NetWorthCalculator;
