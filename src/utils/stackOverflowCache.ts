interface StackOverflowData {
  reputation: number;
  badge_counts: {
    gold: number;
    silver: number;
    bronze: number;
  };
}

//let cachedData: StackOverflowData | null = null;

export const getStackOverflowData =
  async (): Promise<StackOverflowData | null> => {
    // if (cachedData) {
    //   return cachedData;
    // }

    // try {
    //   const res = await fetch(
    //     "https://api.stackexchange.com/2.2/users/4084160?order=desc&sort=reputation&site=stackoverflow",
    //   );
    //   const data = await res.json();

    //   if (data.items && data.items[0]) {
    //     cachedData = data.items[0];
    //     return cachedData;
    //   }
    // } catch (error) {
    //   console.error("Error fetching StackOverflow data:", error);
    // }

    return null;
  };
