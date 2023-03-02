import { createTheme, Slider, ThemeProvider } from "@mui/material";

const ThuthfulnessSlider = ({
  initialScore,
  interactive = false,
  onChange,
}: {
  initialScore: number;
  interactive?: boolean;
  onChange?: (score: number) => void;
}) => {
  return (
    <>
      <div
        css={{
          width: "100%",
          height: "fit-content",
          display: "flex",
          gap: "1px",
          position: "relative",
          ".part": {
            width: "100%",
            height: "14px",
            position: "relative",

            "&:nth-of-type(1)": {
              borderRadius: "6px 0 0 6px",
              background: "#595959",
            },

            "&:nth-of-type(2)": {
              background: "#7F7F7F",
            },

            "&:nth-of-type(3)": {
              background: "#A5A5A5",
            },

            "&:nth-of-type(4)": {
              background: "#BFBFBF",
            },

            "&:nth-of-type(5)": {
              borderRadius: "0 6px 6px 0",
              background: "#D8D8D8",
            },

            "> label": {
              fontSize: "10px",
              position: "absolute",
              top: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              // don't break line
              whiteSpace: "nowrap",
            },
          },
        }}
      >
        <div className="part 1">
          <label>Fake</label>
        </div>
        <div className="part 2">
          <label>Rather fake</label>
        </div>
        <div className="part 3">
          <label>Neutral</label>
        </div>
        <div className="part 4">
          <label>Rather true</label>
        </div>
        <div className="part 5">
          <label>True</label>
        </div>
        <div
          css={{
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ThemeProvider
            theme={createTheme({
              palette: {
                primary: {
                  main: "#19B394",
                },
              },
            })}
          >
            <Slider
              value={initialScore}
              valueLabelDisplay="on"
              color="primary"
              valueLabelFormat={(value) => {
                return `${value}%`;
              }}
              css={{
                "& .MuiSlider-rail": {
                  color: "transparent",
                },
                "& .MuiSlider-track": {
                  color: "transparent",
                },
                "& .MuiSlider-valueLabel": {
                  top: "-8px",
                  backgroundColor: interactive ? "#19B394" : "#757575",
                },
              }}
              disabled={!interactive}
              onChange={(e, value) => {
                onChange && onChange(value as number);
              }}
            />
          </ThemeProvider>
        </div>
      </div>
    </>
  );
};

export default ThuthfulnessSlider;
