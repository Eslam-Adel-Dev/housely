import { TouchableOpacity, ActivityIndicator } from "react-native";
import { LocateFixed } from "lucide-react-native";

interface ExploreControlsProps {
  onRelocate: () => void;
  loading: boolean;
}

const ExploreControls = ({ onRelocate, loading }: ExploreControlsProps) => {
  return (
    <TouchableOpacity
      onPress={onRelocate}
      disabled={loading}
      className="absolute bottom-4 right-4 bg-[#fcfcfd] p-4 rounded-full shadow-lg border border-zinc-200 z-10"
    >
      {loading ? (
        <ActivityIndicator size="small" color="#6941C6" />
      ) : (
        <LocateFixed size={24} color="#6941C6" />
      )}
    </TouchableOpacity>
  );
};

export default ExploreControls;
