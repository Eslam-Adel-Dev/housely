import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import * as Haptics from "expo-haptics";
import * as React from "react";
import { Platform, View } from "react-native";
import { CheckboxWithLabelProps } from "@/types/type";

function CheckboxWithLabel({ label, classNameLabel }: CheckboxWithLabelProps) {
  const [checked, setChecked] = React.useState(false);

  function onCheckedChange(checked: boolean) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    setChecked(checked);
  }

  return (
    <View className="flex-row items-center gap-2">
      <Checkbox
        aria-labelledby="terms-checkbox"
        id="terms-checkbox"
        checked={checked}
        onCheckedChange={onCheckedChange}
        className={`${checked && "bg-primary-600"} border-zinc-300 size-5`}
        iconClassName="text-white"
      />
      <Label
        nativeID="terms-checkbox"
        htmlFor="terms-checkbox"
        className={classNameLabel}
        onPress={Platform.select({
          native: () => {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            setChecked((prev) => !prev);
          },
        })}
      >
        {label}
      </Label>
    </View>
  );
}

export default CheckboxWithLabel;
