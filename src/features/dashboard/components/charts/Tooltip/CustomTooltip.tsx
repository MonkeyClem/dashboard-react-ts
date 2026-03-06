import { Tooltip, type TooltipContentProps, type TooltipIndex } from "recharts";
import styles from "./CustomTooltip.module.css"

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

  if (!isVisible) return null;

  const isMulti = payload.length > 1;

  return (
    <div 
      className={styles.tooltipContainer} style={{borderTop: `2px solid ${payload[0].color}`}}>
      <p className={styles.headerLabel}>
        {label}
      </p>

      {isMulti ? (
        <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
          {payload.map((p, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 16,
              }}
            >
              {/* Colored dot and name */}
              <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    backgroundColor: p.color ?? "#888",
                    flexShrink: 0,
                    boxShadow: `0 0 6px ${p.color ?? "#888"}`,
                  }}
                />
                <span style={{ color: "rgba(255,255,255,0.5)" }}>{p.name}</span>
              </span>

              {/* Valeur */}
              <span style={{ color: "#fff", fontWeight: 600 }}>
                {p.value}
                {unitOfMeasurement && (
                  <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
                    {" "}{unitOfMeasurement}
                  </span>
                )}
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
          <span style={{ color: "#fff", fontSize: 20, fontWeight: 700, lineHeight: 1 }}>
            {payload[0].value}
          </span>
          {unitOfMeasurement && (
            <span style={{ color: "rgba(255,255,255,0.45)", fontSize: 12 }}>
              {unitOfMeasurement}
            </span>
          )}
          {complementaryDescription && (
            <span style={{ color: "rgba(255,255,255,0.3)", fontSize: 10 }}>
              {" "}{complementaryDescription}
            </span>
          )}
        </div>
      )}
    </div>
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
