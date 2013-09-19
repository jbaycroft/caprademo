xml.instruct! :xml, :version=>"1.0"

xml.tag!("rows") do
  @departments.each do |department|
    department.tasks.each do |task|
        task.hazards.each do |hazard|
          xml.tag!("row", {"id" => hazard.id}) do
            xml.tag!("cell") {xml.a(department.name,'href'=> department_path(department)}
            xml.tag!("cell", task.name)
            xml.tag!("cell", hazard.access_risk_total)
            xml.tag!("cell", hazard.biohaz_risk_total)
            xml.tag!("cell", hazard.cowrk_risk_total)
            xml.tag!("cell", hazard.cut_risk_total)
            xml.tag!("cell", hazard.ergo_risk_total)
            xml.tag!("cell", hazard.fall_risk_total)
            xml.tag!("cell", hazard.fire_risk_total)
            xml.tag!("cell", hazard.hazatm_risk_total)
            xml.tag!("cell", hazard.hazengy_risk_total)
            xml.tag!("cell", hazard.hazmat_risk_total)
            xml.tag!("cell", hazard.laz_risk_total)
            xml.tag!("cell", hazard.lonewrk_risk_total)
            xml.tag!("cell", hazard.mag_risk_total)
            xml.tag!("cell", hazard.mechand_risk_total)
            xml.tag!("cell", hazard.noise_risk_total)
            xml.tag!("cell", hazard.ovrhead_risk_total)
            xml.tag!("cell", hazard.rad_risk_total)
            xml.tag!("cell", hazard.road_risk_total)
            xml.tag!("cell", hazard.temp_risk_total)
            xml.tag!("cell", hazard.tool_risk_total)
            xml.tag!("cell", task.envhaz1)
            xml.tag!("cell", task.envhaz2)
            xml.tag!("cell", task.envhaz3)
            xml.tag!("cell", task.envhaz4)
            xml.tag!("cell", task.envhaz5)
            xml.tag!("cell", task.envhaz6)
            xml.tag!("cell", task.envhaz7)
            xml.tag!("cell", task.envhaz8)
        end
      end
    end
  end
end