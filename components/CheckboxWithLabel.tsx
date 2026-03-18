// react imports
import { useState } from "react";
import { Platform, View } from "react-native";
// components imports
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
// types imports
import { CheckboxWithLabelProps } from "@/types/type";
// haptics imports
import * as Haptics from "expo-haptics";

function CheckboxWithLabel({
  label,
  classNameLabel,
  checked: controlledChecked,
  onCheckedChange: controlledOnCheckedChange,
  classNameContainer,
  classNameCheckBox,
  styleLabel,
}: CheckboxWithLabelProps) {
  const [internalChecked, setInternalChecked] = useState(false);
  const isControlled = controlledChecked !== undefined;
  const checked = isControlled ? controlledChecked : internalChecked;

  //==================================================
  function handleCheckedChange(value: boolean) {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
    if (isControlled) {
      controlledOnCheckedChange?.(value);
    } else {
      setInternalChecked(value);
    }
  }
  //==================================================

  return (
    <View className={`${classNameContainer} flex-row items-center gap-2`}>
      <Checkbox
        aria-labelledby="terms-checkbox"
        id="terms-checkbox"
        checked={checked}
        onCheckedChange={handleCheckedChange}
        className={`${checked && "bg-primary-600"} border-zinc-300 size-5 ${classNameCheckBox}`}
        iconClassName="text-white"
      />
      <Label
        nativeID="terms-checkbox"
        htmlFor="terms-checkbox"
        className={classNameLabel}
        style={styleLabel}
        onPress={Platform.select({
          native: () => handleCheckedChange(!checked),
        })}
      >
        {label}
      </Label>
    </View>
  );
}

export default CheckboxWithLabel;
