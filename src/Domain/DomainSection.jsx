function DomainSection() {
  return (
    <div>
      <section className="px-8 py-12 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-semibold mb-4 text-blue-600 dark:text-blue-300">
          🌐 Domain of Interest: Google – Search & Information Retrieval
        </h2>

        <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 px-4">
          I’m deeply inspired by how companies like <strong>Google</strong> use
          Data Structures and Algorithms (DSA) to organize and process the
          world’s information. From search indexing to maps routing, DSA plays a
          critical role in enabling Google to handle massive-scale data with
          speed and accuracy.
        </p>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2 px-4">
          📈 Why DSA Matters at Google:
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300 px-4">
          <li>
            <strong>Search Engine Optimization:</strong> Tries, hash maps, and
            inverted indexes power Google’s autocomplete, spell-check, and
            search ranking.
          </li>
          <li>
            <strong>Google Maps:</strong> Graph algorithms like Dijkstra's and
            A* find the fastest routes in real-time.
          </li>
          <li>
            <strong>YouTube Recommendations:</strong> Tree-based data structures
            + dynamic programming for personalized suggestions.
          </li>
          <li>
            <strong>Data Storage & Retrieval:</strong> B-trees, heaps, and
            efficient sorting for lightning-fast query performance in BigQuery
            and Google Cloud.
          </li>
        </ul>

        <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mt-8 mb-2 px-4">
          📊 Real-World Business Case Studies
        </h3>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300 px-4">
          <li>
            <strong>Google Search:</strong> Handles billions of queries per day
            using optimized trie structures, caching mechanisms, and predictive
            typing.
          </li>
          <li>
            <strong>Google Photos:</strong> Uses graphs and hashing to detect
            duplicate images, manage timelines, and organize albums smartly.
          </li>
          <li>
            <strong>Gmail Smart Suggestions:</strong> Combines NLP with dynamic
            programming to generate intelligent replies.
          </li>
          <li>
            <strong>Google Ads:</strong> Allocates billions in ad auctions using
            greedy algorithms and graph theory for cost-effective bidding.
          </li>
        </ul>

        <p className="mt-6 text-lg text-gray-800 dark:text-gray-200 italic text-center py-4 mt-12">
          “Mastering DSA doesn’t just help in interviews — it’s the backbone of
          scalable, efficient software that touches billions of lives.”
        </p>
      </section>
    </div>
  );
}

export default DomainSection;
