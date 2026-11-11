import { Badge } from "./ui/badge"
import { Card, CardHeader, CardTitle } from "./ui/card"

export function SkillCard({ nama,  level }) {
  return(
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-primary">{nama}</CardTitle>
        <Badge variant="outline">Level: {level}</Badge>
      </CardHeader>
    </Card>
  )
}