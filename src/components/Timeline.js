import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SchoolIcon from "@mui/icons-material/School";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import Typography from "@mui/material/Typography";

function TimelineComponent(props) {
  return (
    <TimelineItem>
      <TimelineOppositeContent
        sx={{ m: "auto 0" }}
        align="right"
        variant="body2"
        color="text.secondary"
      >
        {props.year}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineConnector />
        <TimelineDot
          sx={{
            backgroundColor: "#43A9DE",
          }}
        >
          {props.id <= 3 ? <SchoolIcon /> : <CardMembershipIcon />}
        </TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent
        sx={{
          margin: "30px 0 30px 20px",
        }}
      >
        <Typography variant="h6" component="span" sx={{ fontSize: "14px" }}>
          {props.course} {props.score ? `- ${props.score}` : ""}
        </Typography>
        <Typography>{props.institute}</Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default TimelineComponent;
