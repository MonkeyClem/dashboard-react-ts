import { Tooltip, type TooltipContentProps, type TooltipIndex } from "recharts";

type CustomTooltipChart = TooltipContentProps<number, string> & {
  complementaryDescription?: string;
  unitOfMeasurement?: string;
};

const CustomTooltip = ({
  active,
  payload,
  label,
  complementaryDescription,
  unitOfMeasurement,
}: CustomTooltipChart) => {
  const isVisible = active && payload && payload.length;
  
  return (
    <>
      {isVisible ? (
        <div
          className="custom-tooltip"
          style={{
            visibility: isVisible ? "visible" : "hidden",
            backgroundColor: "#1f1e1e",
            padding: 6,
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            width: 250,
            fontSize: 12
          }}
        >
          <p className="label">{label} : </p>
          {payload.length > 1 ? (    
            payload.map((p) => (
              <>
                <p>
                  {p.name} : {p.value}{" "}
                  {unitOfMeasurement ? unitOfMeasurement : ""}{" "}
                  {complementaryDescription}{" "}
                </p>
              </>
            ))
          ) : (
            <p>{`${payload[0].value}${unitOfMeasurement ? unitOfMeasurement : ""} ${complementaryDescription}`}</p>
          )}
        </div>
      ) : null}
    </>
  );
};

type CustomContentOfTooltipProps = {
  isAnimationActive?: boolean;
  defaultIndex?: TooltipIndex;
  complementaryDescription?: string;
  unitOfMeasurement?: string;
};
const CustomContentOfTooltip = ({
  isAnimationActive = true,
  defaultIndex,
  complementaryDescription,
  unitOfMeasurement,
}: CustomContentOfTooltipProps) => {
  return (
    <Tooltip
      content={
        <CustomTooltip
          complementaryDescription={complementaryDescription}
          unitOfMeasurement={unitOfMeasurement} 
          active={false} 
          payload={[]} 
          coordinate={undefined} 
          accessibilityLayer={false} 
          activeIndex={undefined}/>
      }
      isAnimationActive={isAnimationActive}
      defaultIndex={defaultIndex}
    />
  );
};

export default CustomContentOfTooltip;
