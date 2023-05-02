import matplotlib.pyplot as plt
import numpy as np
mu= int(input("Enter value"))
sigma = int(input("Enter value"))
s = np.random.normal(mu, sigma, 1000)
# Create the bins and histogram
count, bins, ignored = plt.hist(s, 20, density=True, stacked=True)
# Plot the distribution curve

plt.plot(bins, 1/(sigma * np.sqrt(2 * np.pi)) *

    np.exp( - (bins - mu)**2 / (2 * sigma**2) ), linewidth=3, color='y')

plt.show()