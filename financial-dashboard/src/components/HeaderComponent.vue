<script type="text/javascript">
        var gk_isXlsx = false;
        var gk_xlsxFileLookup = {};
        var gk_fileData = {};
        function filledCell(cell) {
          return cell !== '' && cell != null;
        }
        function loadFileData(filename) {
        if (gk_isXlsx && gk_xlsxFileLookup[filename]) {
            try {
                var workbook = XLSX.read(gk_fileData[filename], { type: 'base64' });
                var firstSheetName = workbook.SheetNames[0];
                var worksheet = workbook.Sheets[firstSheetName];

                // Convert sheet to JSON to filter blank rows
                var jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1, blankrows: false, defval: '' });
                // Filter out blank rows (rows where all cells are empty, null, or undefined)
                var filteredData = jsonData.filter(row => row.some(filledCell));

                // Heuristic to find the header row by ignoring rows with fewer filled cells than the next row
                var headerRowIndex = filteredData.findIndex((row, index) =>
                  row.filter(filledCell).length >= filteredData[index + 1]?.filter(filledCell).length
                );
                // Fallback
                if (headerRowIndex === -1 || headerRowIndex > 25) {
                  headerRowIndex = 0;
                }

                // Convert filtered JSON back to CSV
                var csv = XLSX.utils.aoa_to_sheet(filteredData.slice(headerRowIndex)); // Create a new sheet from filtered array of arrays
                csv = XLSX.utils.sheet_to_csv(csv, { header: 1 });
                return csv;
            } catch (e) {
                console.error(e);
                return "";
            }
        }
        return gk_fileData[filename] || "";
        }
        </script><template>
  <div class="bg-gray-800 text-white p-4 rounded mb-4">
    <h1 class="text-2xl">{{ selectedInstrument?.name || 'Select an Instrument' }}</h1>
    <p>Last Price: {{ selectedInstrument?.lastPrice || '-' }}</p>
    <p :class="selectedInstrument?.tend === 'up' ? 'text-green-500' : 'text-red-500'">
      Change: {{ selectedInstrument?.pctDay || 0 }}% ({{ selectedInstrument?.performanceAbsolute || 0 }})
    </p>
  </div>
</template>

<script>
import { useInstrumentStore } from '../stores/instrument';

export default {
  setup() {
    const store = useInstrumentStore();
    return { selectedInstrument: store.selectedInstrument };
  }
};
</script>