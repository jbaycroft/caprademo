class Hazard < ActiveRecord::Base
  belongs_to :task

  attr_accessible :access_change_yes_no,
					:access_change_comment,
					:access_description_hazard,
					:access_description_control,
					:access_question_1_yes_no,
					:access_question_1_severity,
					:access_question_2_yes_no,
					:access_question_2_severity,
					:access_question_3_yes_no,
					:access_question_3_severity,
					:access_question_4_yes_no,
					:access_question_4_severity,
					:access_question_5_yes_no,
					:access_question_5_severity,
					:access_question_6_yes_no,
					:access_question_6_severity,
					:access_question_7_yes_no,
					:access_question_7_severity,
					:access_question_8_yes_no,
					:access_question_8_severity,
					:access_question_9_yes_no,
					:access_question_9_severity,
					:access_question_10_yes_no,
					:access_question_10_severity,
					:access_frequency_often,
					:access_frequency_time,
					:access_risk_severity,
					:access_risk_frequency,
					:access_risk_mastery,
					:access_risk_total,
					:access_risk_comment,
					:access_control_eliminate_yes_no,
					:access_control_eliminate_comment,
					:access_control_substitute_yes_no,
					:access_control_substitute_comment,
					:access_control_engineer_yes_no,
					:access_control_engineer_comment,
					:access_control_admin_yes_no,
					:access_control_admin_comment,
					:access_control_ppe_yes_no,
					:access_control_ppe_comment,
					:access_new_frequency_often,
					:access_new_frequency_time,
					:access_new_risk_severity,
					:access_new_risk_frequency,
					:access_new_risk_mastery,
					:access_new_risk_total,
					:access_new_risk_comment,
					:biohaz_change_yes_no,
					:biohaz_change_comment,
					:biohaz_description_hazard,
					:biohaz_description_control,
					:biohaz_question_1_yes_no,
					:biohaz_question_1_severity,
					:biohaz_question_2_yes_no,
					:biohaz_question_2_severity,
					:biohaz_question_3_yes_no,
					:biohaz_question_3_severity,
					:biohaz_question_4_yes_no,
					:biohaz_question_4_severity,
					:biohaz_question_5_yes_no,
					:biohaz_question_5_severity,
					:biohaz_question_6_yes_no,
					:biohaz_question_6_severity,
					:biohaz_question_7_yes_no,
					:biohaz_question_7_severity,
					:biohaz_question_8_yes_no,
					:biohaz_question_8_severity,
					:biohaz_question_9_yes_no,
					:biohaz_question_9_severity,
					:biohaz_question_10_yes_no,
					:biohaz_question_10_severity,
					:biohaz_frequency_often,
					:biohaz_frequency_time,
					:biohaz_risk_severity,
					:biohaz_risk_frequency,
					:biohaz_risk_mastery,
					:biohaz_risk_total,
					:biohaz_risk_comment,
					:biohaz_control_eliminate_yes_no,
					:biohaz_control_eliminate_comment,
					:biohaz_control_substitute_yes_no,
					:biohaz_control_substitute_comment,
					:biohaz_control_engineer_yes_no,
					:biohaz_control_engineer_comment,
					:biohaz_control_admin_yes_no,
					:biohaz_control_admin_comment,
					:biohaz_control_ppe_yes_no,
					:biohaz_control_ppe_comment,
					:biohaz_new_frequency_often,
					:biohaz_new_frequency_time,
					:biohaz_new_risk_severity,
					:biohaz_new_risk_frequency,
					:biohaz_new_risk_mastery,
					:biohaz_new_risk_total,
					:biohaz_new_risk_comment,
					:cowrk_change_yes_no,
					:cowrk_change_comment,
					:cowrk_description_hazard,
					:cowrk_description_control,
					:cowrk_question_1_yes_no,
					:cowrk_question_1_severity,
					:cowrk_question_2_yes_no,
					:cowrk_question_2_severity,
					:cowrk_question_3_yes_no,
					:cowrk_question_3_severity,
					:cowrk_question_4_yes_no,
					:cowrk_question_4_severity,
					:cowrk_question_5_yes_no,
					:cowrk_question_5_severity,
					:cowrk_question_6_yes_no,
					:cowrk_question_6_severity,
					:cowrk_question_7_yes_no,
					:cowrk_question_7_severity,
					:cowrk_question_8_yes_no,
					:cowrk_question_8_severity,
					:cowrk_question_9_yes_no,
					:cowrk_question_9_severity,
					:cowrk_question_10_yes_no,
					:cowrk_question_10_severity,
					:cowrk_frequency_often,
					:cowrk_frequency_time,
					:cowrk_risk_severity,
					:cowrk_risk_frequency,
					:cowrk_risk_mastery,
					:cowrk_risk_total,
					:cowrk_risk_comment,
					:cowrk_control_eliminate_yes_no,
					:cowrk_control_eliminate_comment,
					:cowrk_control_substitute_yes_no,
					:cowrk_control_substitute_comment,
					:cowrk_control_engineer_yes_no,
					:cowrk_control_engineer_comment,
					:cowrk_control_admin_yes_no,
					:cowrk_control_admin_comment,
					:cowrk_control_ppe_yes_no,
					:cowrk_control_ppe_comment,
					:cowrk_new_frequency_often,
					:cowrk_new_frequency_time,
					:cowrk_new_risk_severity,
					:cowrk_new_risk_frequency,
					:cowrk_new_risk_mastery,
					:cowrk_new_risk_total,
					:cowrk_new_risk_comment,
					:cut_change_yes_no,
					:cut_change_comment,
					:cut_description_hazard,
					:cut_description_control,
					:cut_question_1_yes_no,
					:cut_question_1_severity,
					:cut_question_2_yes_no,
					:cut_question_2_severity,
					:cut_question_3_yes_no,
					:cut_question_3_severity,
					:cut_question_4_yes_no,
					:cut_question_4_severity,
					:cut_question_5_yes_no,
					:cut_question_5_severity,
					:cut_question_6_yes_no,
					:cut_question_6_severity,
					:cut_question_7_yes_no,
					:cut_question_7_severity,
					:cut_question_8_yes_no,
					:cut_question_8_severity,
					:cut_question_9_yes_no,
					:cut_question_9_severity,
					:cut_question_10_yes_no,
					:cut_question_10_severity,
					:cut_frequency_often,
					:cut_frequency_time,
					:cut_risk_severity,
					:cut_risk_frequency,
					:cut_risk_mastery,
					:cut_risk_total,
					:cut_risk_comment,
					:cut_control_eliminate_yes_no,
					:cut_control_eliminate_comment,
					:cut_control_substitute_yes_no,
					:cut_control_substitute_comment,
					:cut_control_engineer_yes_no,
					:cut_control_engineer_comment,
					:cut_control_admin_yes_no,
					:cut_control_admin_comment,
					:cut_control_ppe_yes_no,
					:cut_control_ppe_comment,
					:cut_new_frequency_often,
					:cut_new_frequency_time,
					:cut_new_risk_severity,
					:cut_new_risk_frequency,
					:cut_new_risk_mastery,
					:cut_new_risk_total,
					:cut_new_risk_comment,
					:ergo_change_yes_no,
					:ergo_change_comment,
					:ergo_description_hazard,
					:ergo_description_control,
					:ergo_question_1_yes_no,
					:ergo_question_1_severity,
					:ergo_question_2_yes_no,
					:ergo_question_2_severity,
					:ergo_question_3_yes_no,
					:ergo_question_3_severity,
					:ergo_question_4_yes_no,
					:ergo_question_4_severity,
					:ergo_question_5_yes_no,
					:ergo_question_5_severity,
					:ergo_question_6_yes_no,
					:ergo_question_6_severity,
					:ergo_question_7_yes_no,
					:ergo_question_7_severity,
					:ergo_question_8_yes_no,
					:ergo_question_8_severity,
					:ergo_question_9_yes_no,
					:ergo_question_9_severity,
					:ergo_question_10_yes_no,
					:ergo_question_10_severity,
					:ergo_frequency_often,
					:ergo_frequency_time,
					:ergo_risk_severity,
					:ergo_risk_frequency,
					:ergo_risk_mastery,
					:ergo_risk_total,
					:ergo_risk_comment,
					:ergo_control_eliminate_yes_no,
					:ergo_control_eliminate_comment,
					:ergo_control_substitute_yes_no,
					:ergo_control_substitute_comment,
					:ergo_control_engineer_yes_no,
					:ergo_control_engineer_comment,
					:ergo_control_admin_yes_no,
					:ergo_control_admin_comment,
					:ergo_control_ppe_yes_no,
					:ergo_control_ppe_comment,
					:ergo_new_frequency_often,
					:ergo_new_frequency_time,
					:ergo_new_risk_severity,
					:ergo_new_risk_frequency,
					:ergo_new_risk_mastery,
					:ergo_new_risk_total,
					:ergo_new_risk_comment,
					:ergo_describe1,
					:ergo_describe2,
					:ergo_describe3,
					:ergo_weightdur1,
					:ergo_weightdur2,
					:ergo_weightdur3,
					:ergo_prevdur1,
					:ergo_prevdur2,
					:ergo_prevdur3,
					:fall_change_yes_no,
					:fall_change_comment,
					:fall_description_hazard,
					:fall_description_control,
					:fall_question_1_yes_no,
					:fall_question_1_severity,
					:fall_question_2_yes_no,
					:fall_question_2_severity,
					:fall_question_3_yes_no,
					:fall_question_3_severity,
					:fall_question_4_yes_no,
					:fall_question_4_severity,
					:fall_question_5_yes_no,
					:fall_question_5_severity,
					:fall_question_6_yes_no,
					:fall_question_6_severity,
					:fall_question_7_yes_no,
					:fall_question_7_severity,
					:fall_question_8_yes_no,
					:fall_question_8_severity,
					:fall_question_9_yes_no,
					:fall_question_9_severity,
					:fall_question_10_yes_no,
					:fall_question_10_severity,
					:fall_frequency_often,
					:fall_frequency_time,
					:fall_risk_severity,
					:fall_risk_frequency,
					:fall_risk_mastery,
					:fall_risk_total,
					:fall_risk_comment,
					:fall_control_eliminate_yes_no,
					:fall_control_eliminate_comment,
					:fall_control_substitute_yes_no,
					:fall_control_substitute_comment,
					:fall_control_engineer_yes_no,
					:fall_control_engineer_comment,
					:fall_control_admin_yes_no,
					:fall_control_admin_comment,
					:fall_control_ppe_yes_no,
					:fall_control_ppe_comment,
					:fall_new_frequency_often,
					:fall_new_frequency_time,
					:fall_new_risk_severity,
					:fall_new_risk_frequency,
					:fall_new_risk_mastery,
					:fall_new_risk_total,
					:fall_new_risk_comment,
					:fire_change_yes_no,
					:fire_change_comment,
					:fire_description_hazard,
					:fire_description_control,
					:fire_question_1_yes_no,
					:fire_question_1_severity,
					:fire_question_2_yes_no,
					:fire_question_2_severity,
					:fire_question_3_yes_no,
					:fire_question_3_severity,
					:fire_question_4_yes_no,
					:fire_question_4_severity,
					:fire_question_5_yes_no,
					:fire_question_5_severity,
					:fire_question_6_yes_no,
					:fire_question_6_severity,
					:fire_question_7_yes_no,
					:fire_question_7_severity,
					:fire_question_8_yes_no,
					:fire_question_8_severity,
					:fire_question_9_yes_no,
					:fire_question_9_severity,
					:fire_question_10_yes_no,
					:fire_question_10_severity,
					:fire_frequency_often,
					:fire_frequency_time,
					:fire_risk_severity,
					:fire_risk_frequency,
					:fire_risk_mastery,
					:fire_risk_total,
					:fire_risk_comment,
					:fire_control_eliminate_yes_no,
					:fire_control_eliminate_comment,
					:fire_control_substitute_yes_no,
					:fire_control_substitute_comment,
					:fire_control_engineer_yes_no,
					:fire_control_engineer_comment,
					:fire_control_admin_yes_no,
					:fire_control_admin_comment,
					:fire_control_ppe_yes_no,
					:fire_control_ppe_comment,
					:fire_new_frequency_often,
					:fire_new_frequency_time,
					:fire_new_risk_severity,
					:fire_new_risk_frequency,
					:fire_new_risk_mastery,
					:fire_new_risk_total,
					:fire_new_risk_comment,
					:fire_highflamm,
					:fire_flamm,
					:fire_explosive,
					:fire_combustible,
					:fire_produse1,
					:fire_produse2,
					:fire_produse3,
					:fire_produse4,
					:fire_amt1,
					:fire_amt2,
					:fire_amt3,
					:fire_amt4,
					:hazatm_change_yes_no,
					:hazatm_change_comment,
					:hazatm_description_hazard,
					:hazatm_description_control,
					:hazatm_question_1_yes_no,
					:hazatm_question_1_severity,
					:hazatm_question_2_yes_no,
					:hazatm_question_2_severity,
					:hazatm_question_3_yes_no,
					:hazatm_question_3_severity,
					:hazatm_question_4_yes_no,
					:hazatm_question_4_severity,
					:hazatm_question_5_yes_no,
					:hazatm_question_5_severity,
					:hazatm_question_6_yes_no,
					:hazatm_question_6_severity,
					:hazatm_question_7_yes_no,
					:hazatm_question_7_severity,
					:hazatm_question_8_yes_no,
					:hazatm_question_8_severity,
					:hazatm_question_9_yes_no,
					:hazatm_question_9_severity,
					:hazatm_question_10_yes_no,
					:hazatm_question_10_severity,
					:hazatm_frequency_often,
					:hazatm_frequency_time,
					:hazatm_risk_severity,
					:hazatm_risk_frequency,
					:hazatm_risk_mastery,
					:hazatm_risk_total,
					:hazatm_risk_comment,
					:hazatm_control_eliminate_yes_no,
					:hazatm_control_eliminate_comment,
					:hazatm_control_substitute_yes_no,
					:hazatm_control_substitute_comment,
					:hazatm_control_engineer_yes_no,
					:hazatm_control_engineer_comment,
					:hazatm_control_admin_yes_no,
					:hazatm_control_admin_comment,
					:hazatm_control_ppe_yes_no,
					:hazatm_control_ppe_comment,
					:hazatm_new_frequency_often,
					:hazatm_new_frequency_time,
					:hazatm_new_risk_severity,
					:hazatm_new_risk_frequency,
					:hazatm_new_risk_mastery,
					:hazatm_new_risk_total,
					:hazatm_new_risk_comment,
					:hazengy_change_yes_no,
					:hazengy_change_comment,
					:hazengy_description_hazard,
					:hazengy_description_control,
					:hazengy_question_1_yes_no,
					:hazengy_question_1_severity,
					:hazengy_question_2_yes_no,
					:hazengy_question_2_severity,
					:hazengy_question_3_yes_no,
					:hazengy_question_3_severity,
					:hazengy_question_4_yes_no,
					:hazengy_question_4_severity,
					:hazengy_question_5_yes_no,
					:hazengy_question_5_severity,
					:hazengy_question_6_yes_no,
					:hazengy_question_6_severity,
					:hazengy_question_7_yes_no,
					:hazengy_question_7_severity,
					:hazengy_question_8_yes_no,
					:hazengy_question_8_severity,
					:hazengy_question_9_yes_no,
					:hazengy_question_9_severity,
					:hazengy_question_10_yes_no,
					:hazengy_question_10_severity,
					:hazengy_frequency_often,
					:hazengy_frequency_time,
					:hazengy_risk_severity,
					:hazengy_risk_frequency,
					:hazengy_risk_mastery,
					:hazengy_risk_total,
					:hazengy_risk_comment,
					:hazengy_control_eliminate_yes_no,
					:hazengy_control_eliminate_comment,
					:hazengy_control_substitute_yes_no,
					:hazengy_control_substitute_comment,
					:hazengy_control_engineer_yes_no,
					:hazengy_control_engineer_comment,
					:hazengy_control_admin_yes_no,
					:hazengy_control_admin_comment,
					:hazengy_control_ppe_yes_no,
					:hazengy_control_ppe_comment,
					:hazengy_new_frequency_often,
					:hazengy_new_frequency_time,
					:hazengy_new_risk_severity,
					:hazengy_new_risk_frequency,
					:hazengy_new_risk_mastery,
					:hazengy_new_risk_total,
					:hazengy_new_risk_comment,
					:hazmat_change_yes_no,
					:hazmat_change_comment,
					:hazmat_description_hazard,
					:hazmat_description_control,
					:hazmat_question_1_yes_no,
					:hazmat_question_1_severity,
					:hazmat_question_2_yes_no,
					:hazmat_question_2_severity,
					:hazmat_question_3_yes_no,
					:hazmat_question_3_severity,
					:hazmat_question_4_yes_no,
					:hazmat_question_4_severity,
					:hazmat_question_5_yes_no,
					:hazmat_question_5_severity,
					:hazmat_question_6_yes_no,
					:hazmat_question_6_severity,
					:hazmat_question_7_yes_no,
					:hazmat_question_7_severity,
					:hazmat_question_8_yes_no,
					:hazmat_question_8_severity,
					:hazmat_question_9_yes_no,
					:hazmat_question_9_severity,
					:hazmat_question_10_yes_no,
					:hazmat_question_10_severity,
					:hazmat_frequency_often,
					:hazmat_frequency_time,
					:hazmat_risk_severity,
					:hazmat_risk_frequency,
					:hazmat_risk_mastery,
					:hazmat_risk_total,
					:hazmat_risk_comment,
					:hazmat_control_eliminate_yes_no,
					:hazmat_control_eliminate_comment,
					:hazmat_control_substitute_yes_no,
					:hazmat_control_substitute_comment,
					:hazmat_control_engineer_yes_no,
					:hazmat_control_engineer_comment,
					:hazmat_control_admin_yes_no,
					:hazmat_control_admin_comment,
					:hazmat_control_ppe_yes_no,
					:hazmat_control_ppe_comment,
					:hazmat_new_frequency_often,
					:hazmat_new_frequency_time,
					:hazmat_new_risk_severity,
					:hazmat_new_risk_frequency,
					:hazmat_new_risk_mastery,
					:hazmat_new_risk_total,
					:hazmat_new_risk_comment,
					:hazmat_boo1,
					:hazmat_boo2,
					:hazmat_boo3,
					:hazmat_boo4,
					:hazmat_boo5,
					:hazmat_boo6,
					:hazmat_boo7,
					:hazmat_boo8,
					:hazmat_boo9,
					:hazmat_boo10,
					:hazmat_boo11,
					:hazmat_boo12,
					:hazmat_boo13,
					:hazmat_boo14,
					:hazmat_boo15,
					:hazmat_boo16,
					:hazmat_boo17,
					:hazmat_boo18,
					:hazmat_boo19,
					:hazmat_boo20,
					:hazmat_boo21,
					:hazmat_boo22,
					:hazmat_boo23,
					:hazmat_boo24,
					:hazmat_boo25,
					:hazmat_boo26,
					:hazmat_boo27,
					:hazmat_boo28,
					:hazmat_boo29,
					:hazmat_boo30,
					:hazmat_boo31,
					:hazmat_boo32,
					:hazmat_boo33,
					:hazmat_boo34,
					:hazmat_boo35,
					:hazmat_boo36,
					:hazmat_boo37,
					:hazmat_boo38,
					:hazmat_boo39,
					:hazmat_boo40,
					:hazmat_text1,
					:hazmat_text2,
					:hazmat_text3,
					:hazmat_text4,
					:hazmat_text5,
					:hazmat_text6,
					:hazmat_text7,
					:hazmat_text8,
					:hazmat_text9,
					:laz_change_yes_no,
					:laz_change_comment,
					:laz_description_hazard,
					:laz_description_control,
					:laz_question_1_yes_no,
					:laz_question_1_severity,
					:laz_question_2_yes_no,
					:laz_question_2_severity,
					:laz_question_3_yes_no,
					:laz_question_3_severity,
					:laz_question_4_yes_no,
					:laz_question_4_severity,
					:laz_question_5_yes_no,
					:laz_question_5_severity,
					:laz_question_6_yes_no,
					:laz_question_6_severity,
					:laz_question_7_yes_no,
					:laz_question_7_severity,
					:laz_question_8_yes_no,
					:laz_question_8_severity,
					:laz_question_9_yes_no,
					:laz_question_9_severity,
					:laz_question_10_yes_no,
					:laz_question_10_severity,
					:laz_frequency_often,
					:laz_frequency_time,
					:laz_risk_severity,
					:laz_risk_frequency,
					:laz_risk_mastery,
					:laz_risk_total,
					:laz_risk_comment,
					:laz_control_eliminate_yes_no,
					:laz_control_eliminate_comment,
					:laz_control_substitute_yes_no,
					:laz_control_substitute_comment,
					:laz_control_engineer_yes_no,
					:laz_control_engineer_comment,
					:laz_control_admin_yes_no,
					:laz_control_admin_comment,
					:laz_control_ppe_yes_no,
					:laz_control_ppe_comment,
					:laz_new_frequency_often,
					:laz_new_frequency_time,
					:laz_new_risk_severity,
					:laz_new_risk_frequency,
					:laz_new_risk_mastery,
					:laz_new_risk_total,
					:laz_new_risk_comment,
					:lonewrk_change_yes_no,
					:lonewrk_change_comment,
					:lonewrk_description_hazard,
					:lonewrk_description_control,
					:lonewrk_question_1_yes_no,
					:lonewrk_question_1_severity,
					:lonewrk_question_2_yes_no,
					:lonewrk_question_2_severity,
					:lonewrk_question_3_yes_no,
					:lonewrk_question_3_severity,
					:lonewrk_question_4_yes_no,
					:lonewrk_question_4_severity,
					:lonewrk_question_5_yes_no,
					:lonewrk_question_5_severity,
					:lonewrk_question_6_yes_no,
					:lonewrk_question_6_severity,
					:lonewrk_question_7_yes_no,
					:lonewrk_question_7_severity,
					:lonewrk_question_8_yes_no,
					:lonewrk_question_8_severity,
					:lonewrk_question_9_yes_no,
					:lonewrk_question_9_severity,
					:lonewrk_question_10_yes_no,
					:lonewrk_question_10_severity,
					:lonewrk_frequency_often,
					:lonewrk_frequency_time,
					:lonewrk_risk_severity,
					:lonewrk_risk_frequency,
					:lonewrk_risk_mastery,
					:lonewrk_risk_total,
					:lonewrk_risk_comment,
					:lonewrk_control_eliminate_yes_no,
					:lonewrk_control_eliminate_comment,
					:lonewrk_control_substitute_yes_no,
					:lonewrk_control_substitute_comment,
					:lonewrk_control_engineer_yes_no,
					:lonewrk_control_engineer_comment,
					:lonewrk_control_admin_yes_no,
					:lonewrk_control_admin_comment,
					:lonewrk_control_ppe_yes_no,
					:lonewrk_control_ppe_comment,
					:lonewrk_new_frequency_often,
					:lonewrk_new_frequency_time,
					:lonewrk_new_risk_severity,
					:lonewrk_new_risk_frequency,
					:lonewrk_new_risk_mastery,
					:lonewrk_new_risk_total,
					:lonewrk_new_risk_comment,
					:mag_change_yes_no,
					:mag_change_comment,
					:mag_description_hazard,
					:mag_description_control,
					:mag_question_1_yes_no,
					:mag_question_1_severity,
					:mag_question_2_yes_no,
					:mag_question_2_severity,
					:mag_question_3_yes_no,
					:mag_question_3_severity,
					:mag_question_4_yes_no,
					:mag_question_4_severity,
					:mag_question_5_yes_no,
					:mag_question_5_severity,
					:mag_question_6_yes_no,
					:mag_question_6_severity,
					:mag_question_7_yes_no,
					:mag_question_7_severity,
					:mag_question_8_yes_no,
					:mag_question_8_severity,
					:mag_question_9_yes_no,
					:mag_question_9_severity,
					:mag_question_10_yes_no,
					:mag_question_10_severity,
					:mag_frequency_often,
					:mag_frequency_time,
					:mag_risk_severity,
					:mag_risk_frequency,
					:mag_risk_mastery,
					:mag_risk_total,
					:mag_risk_comment,
					:mag_control_eliminate_yes_no,
					:mag_control_eliminate_comment,
					:mag_control_substitute_yes_no,
					:mag_control_substitute_comment,
					:mag_control_engineer_yes_no,
					:mag_control_engineer_comment,
					:mag_control_admin_yes_no,
					:mag_control_admin_comment,
					:mag_control_ppe_yes_no,
					:mag_control_ppe_comment,
					:mag_new_frequency_often,
					:mag_new_frequency_time,
					:mag_new_risk_severity,
					:mag_new_risk_frequency,
					:mag_new_risk_mastery,
					:mag_new_risk_total,
					:mag_new_risk_comment,
					:mechand_change_yes_no,
					:mechand_change_comment,
					:mechand_description_hazard,
					:mechand_description_control,
					:mechand_question_1_yes_no,
					:mechand_question_1_severity,
					:mechand_question_2_yes_no,
					:mechand_question_2_severity,
					:mechand_question_3_yes_no,
					:mechand_question_3_severity,
					:mechand_question_4_yes_no,
					:mechand_question_4_severity,
					:mechand_question_5_yes_no,
					:mechand_question_5_severity,
					:mechand_question_6_yes_no,
					:mechand_question_6_severity,
					:mechand_question_7_yes_no,
					:mechand_question_7_severity,
					:mechand_question_8_yes_no,
					:mechand_question_8_severity,
					:mechand_question_9_yes_no,
					:mechand_question_9_severity,
					:mechand_question_10_yes_no,
					:mechand_question_10_severity,
					:mechand_frequency_often,
					:mechand_frequency_time,
					:mechand_risk_severity,
					:mechand_risk_frequency,
					:mechand_risk_mastery,
					:mechand_risk_total,
					:mechand_risk_comment,
					:mechand_control_eliminate_yes_no,
					:mechand_control_eliminate_comment,
					:mechand_control_substitute_yes_no,
					:mechand_control_substitute_comment,
					:mechand_control_engineer_yes_no,
					:mechand_control_engineer_comment,
					:mechand_control_admin_yes_no,
					:mechand_control_admin_comment,
					:mechand_control_ppe_yes_no,
					:mechand_control_ppe_comment,
					:mechand_new_frequency_often,
					:mechand_new_frequency_time,
					:mechand_new_risk_severity,
					:mechand_new_risk_frequency,
					:mechand_new_risk_mastery,
					:mechand_new_risk_total,
					:mechand_new_risk_comment,
					:noise_change_yes_no,
					:noise_change_comment,
					:noise_description_hazard,
					:noise_description_control,
					:noise_question_1_yes_no,
					:noise_question_1_severity,
					:noise_question_2_yes_no,
					:noise_question_2_severity,
					:noise_question_3_yes_no,
					:noise_question_3_severity,
					:noise_question_4_yes_no,
					:noise_question_4_severity,
					:noise_question_5_yes_no,
					:noise_question_5_severity,
					:noise_question_6_yes_no,
					:noise_question_6_severity,
					:noise_question_7_yes_no,
					:noise_question_7_severity,
					:noise_question_8_yes_no,
					:noise_question_8_severity,
					:noise_question_9_yes_no,
					:noise_question_9_severity,
					:noise_question_10_yes_no,
					:noise_question_10_severity,
					:noise_frequency_often,
					:noise_frequency_time,
					:noise_risk_severity,
					:noise_risk_frequency,
					:noise_risk_mastery,
					:noise_risk_total,
					:noise_risk_comment,
					:noise_control_eliminate_yes_no,
					:noise_control_eliminate_comment,
					:noise_control_substitute_yes_no,
					:noise_control_substitute_comment,
					:noise_control_engineer_yes_no,
					:noise_control_engineer_comment,
					:noise_control_admin_yes_no,
					:noise_control_admin_comment,
					:noise_control_ppe_yes_no,
					:noise_control_ppe_comment,
					:noise_new_frequency_often,
					:noise_new_frequency_time,
					:noise_new_risk_severity,
					:noise_new_risk_frequency,
					:noise_new_risk_mastery,
					:noise_new_risk_total,
					:noise_new_risk_comment,
					:ovrhead_change_yes_no,
					:ovrhead_change_comment,
					:ovrhead_description_hazard,
					:ovrhead_description_control,
					:ovrhead_question_1_yes_no,
					:ovrhead_question_1_severity,
					:ovrhead_question_2_yes_no,
					:ovrhead_question_2_severity,
					:ovrhead_question_3_yes_no,
					:ovrhead_question_3_severity,
					:ovrhead_question_4_yes_no,
					:ovrhead_question_4_severity,
					:ovrhead_question_5_yes_no,
					:ovrhead_question_5_severity,
					:ovrhead_question_6_yes_no,
					:ovrhead_question_6_severity,
					:ovrhead_question_7_yes_no,
					:ovrhead_question_7_severity,
					:ovrhead_question_8_yes_no,
					:ovrhead_question_8_severity,
					:ovrhead_question_9_yes_no,
					:ovrhead_question_9_severity,
					:ovrhead_question_10_yes_no,
					:ovrhead_question_10_severity,
					:ovrhead_frequency_often,
					:ovrhead_frequency_time,
					:ovrhead_risk_severity,
					:ovrhead_risk_frequency,
					:ovrhead_risk_mastery,
					:ovrhead_risk_total,
					:ovrhead_risk_comment,
					:ovrhead_control_eliminate_yes_no,
					:ovrhead_control_eliminate_comment,
					:ovrhead_control_substitute_yes_no,
					:ovrhead_control_substitute_comment,
					:ovrhead_control_engineer_yes_no,
					:ovrhead_control_engineer_comment,
					:ovrhead_control_admin_yes_no,
					:ovrhead_control_admin_comment,
					:ovrhead_control_ppe_yes_no,
					:ovrhead_control_ppe_comment,
					:ovrhead_new_frequency_often,
					:ovrhead_new_frequency_time,
					:ovrhead_new_risk_severity,
					:ovrhead_new_risk_frequency,
					:ovrhead_new_risk_mastery,
					:ovrhead_new_risk_total,
					:ovrhead_new_risk_comment,
					:rad_change_yes_no,
					:rad_change_comment,
					:rad_description_hazard,
					:rad_description_control,
					:rad_question_1_yes_no,
					:rad_question_1_severity,
					:rad_question_2_yes_no,
					:rad_question_2_severity,
					:rad_question_3_yes_no,
					:rad_question_3_severity,
					:rad_question_4_yes_no,
					:rad_question_4_severity,
					:rad_question_5_yes_no,
					:rad_question_5_severity,
					:rad_question_6_yes_no,
					:rad_question_6_severity,
					:rad_question_7_yes_no,
					:rad_question_7_severity,
					:rad_question_8_yes_no,
					:rad_question_8_severity,
					:rad_question_9_yes_no,
					:rad_question_9_severity,
					:rad_question_10_yes_no,
					:rad_question_10_severity,
					:rad_frequency_often,
					:rad_frequency_time,
					:rad_risk_severity,
					:rad_risk_frequency,
					:rad_risk_mastery,
					:rad_risk_total,
					:rad_risk_comment,
					:rad_control_eliminate_yes_no,
					:rad_control_eliminate_comment,
					:rad_control_substitute_yes_no,
					:rad_control_substitute_comment,
					:rad_control_engineer_yes_no,
					:rad_control_engineer_comment,
					:rad_control_admin_yes_no,
					:rad_control_admin_comment,
					:rad_control_ppe_yes_no,
					:rad_control_ppe_comment,
					:rad_new_frequency_often,
					:rad_new_frequency_time,
					:rad_new_risk_severity,
					:rad_new_risk_frequency,
					:rad_new_risk_mastery,
					:rad_new_risk_total,
					:rad_new_risk_comment,
					:road_change_yes_no,
					:road_change_comment,
					:road_description_hazard,
					:road_description_control,
					:road_question_1_yes_no,
					:road_question_1_severity,
					:road_question_2_yes_no,
					:road_question_2_severity,
					:road_question_3_yes_no,
					:road_question_3_severity,
					:road_question_4_yes_no,
					:road_question_4_severity,
					:road_question_5_yes_no,
					:road_question_5_severity,
					:road_question_6_yes_no,
					:road_question_6_severity,
					:road_question_7_yes_no,
					:road_question_7_severity,
					:road_question_8_yes_no,
					:road_question_8_severity,
					:road_question_9_yes_no,
					:road_question_9_severity,
					:road_question_10_yes_no,
					:road_question_10_severity,
					:road_frequency_often,
					:road_frequency_time,
					:road_risk_severity,
					:road_risk_frequency,
					:road_risk_mastery,
					:road_risk_total,
					:road_risk_comment,
					:road_control_eliminate_yes_no,
					:road_control_eliminate_comment,
					:road_control_substitute_yes_no,
					:road_control_substitute_comment,
					:road_control_engineer_yes_no,
					:road_control_engineer_comment,
					:road_control_admin_yes_no,
					:road_control_admin_comment,
					:road_control_ppe_yes_no,
					:road_control_ppe_comment,
					:road_new_frequency_often,
					:road_new_frequency_time,
					:road_new_risk_severity,
					:road_new_risk_frequency,
					:road_new_risk_mastery,
					:road_new_risk_total,
					:road_new_risk_comment,
					:temp_change_yes_no,
					:temp_change_comment,
					:temp_description_hazard,
					:temp_description_control,
					:temp_question_1_yes_no,
					:temp_question_1_severity,
					:temp_question_2_yes_no,
					:temp_question_2_severity,
					:temp_question_3_yes_no,
					:temp_question_3_severity,
					:temp_question_4_yes_no,
					:temp_question_4_severity,
					:temp_question_5_yes_no,
					:temp_question_5_severity,
					:temp_question_6_yes_no,
					:temp_question_6_severity,
					:temp_question_7_yes_no,
					:temp_question_7_severity,
					:temp_question_8_yes_no,
					:temp_question_8_severity,
					:temp_question_9_yes_no,
					:temp_question_9_severity,
					:temp_question_10_yes_no,
					:temp_question_10_severity,
					:temp_frequency_often,
					:temp_frequency_time,
					:temp_risk_severity,
					:temp_risk_frequency,
					:temp_risk_mastery,
					:temp_risk_total,
					:temp_risk_comment,
					:temp_control_eliminate_yes_no,
					:temp_control_eliminate_comment,
					:temp_control_substitute_yes_no,
					:temp_control_substitute_comment,
					:temp_control_engineer_yes_no,
					:temp_control_engineer_comment,
					:temp_control_admin_yes_no,
					:temp_control_admin_comment,
					:temp_control_ppe_yes_no,
					:temp_control_ppe_comment,
					:temp_new_frequency_often,
					:temp_new_frequency_time,
					:temp_new_risk_severity,
					:temp_new_risk_frequency,
					:temp_new_risk_mastery,
					:temp_new_risk_total,
					:temp_new_risk_comment,
					:tool_change_yes_no,
					:tool_change_comment,
					:tool_description_hazard,
					:tool_description_control,
					:tool_question_1_yes_no,
					:tool_question_1_severity,
					:tool_question_2_yes_no,
					:tool_question_2_severity,
					:tool_question_3_yes_no,
					:tool_question_3_severity,
					:tool_question_4_yes_no,
					:tool_question_4_severity,
					:tool_question_5_yes_no,
					:tool_question_5_severity,
					:tool_question_6_yes_no,
					:tool_question_6_severity,
					:tool_question_7_yes_no,
					:tool_question_7_severity,
					:tool_question_8_yes_no,
					:tool_question_8_severity,
					:tool_question_9_yes_no,
					:tool_question_9_severity,
					:tool_question_10_yes_no,
					:tool_question_10_severity,
					:tool_frequency_often,
					:tool_frequency_time,
					:tool_risk_severity,
					:tool_risk_frequency,
					:tool_risk_mastery,
					:tool_risk_total,
					:tool_risk_comment,
					:tool_control_eliminate_yes_no,
					:tool_control_eliminate_comment,
					:tool_control_substitute_yes_no,
					:tool_control_substitute_comment,
					:tool_control_engineer_yes_no,
					:tool_control_engineer_comment,
					:tool_control_admin_yes_no,
					:tool_control_admin_comment,
					:tool_control_ppe_yes_no,
					:tool_control_ppe_comment,
					:tool_new_frequency_often,
					:tool_new_frequency_time,
					:tool_new_risk_severity,
					:tool_new_risk_frequency,
					:tool_new_risk_mastery,
					:tool_new_risk_total,
					:tool_new_risk_comment
#before_save :calculate_frequency
#before_save :calculate_new_frequency
#before_save :calculate_risk
#before_save :calculate_risk_new
#
#  def calculate_risk
#    self.access_risk_total = [self.access_risk_severity,self.access_risk_frequency,self.access_risk_mastery].compact.inject(:*)
#	self.biohaz_risk_total = [self.biohaz_risk_severity,self.biohaz_risk_frequency,self.biohaz_risk_mastery].compact.inject(:*)
#	self.cowrk_risk_total = [self.cowrk_risk_severity,self.cowrk_risk_frequency,self.cowrk_risk_mastery].compact.inject(:*)
#	self.cut_risk_total = [self.cut_risk_severity,self.cut_risk_frequency,self.cut_risk_mastery].compact.inject(:*)
#	self.ergo_risk_total = [self.ergo_risk_severity,self.ergo_risk_frequency,self.ergo_risk_mastery].compact.inject(:*)
#	self.fall_risk_total = [self.fall_risk_severity,self.fall_risk_frequency,self.fall_risk_mastery].compact.inject(:*)
#	self.fire_risk_total = [self.fire_risk_severity,self.fire_risk_frequency,self.fire_risk_mastery].compact.inject(:*)
#	self.hazatm_risk_total = [self.hazatm_risk_severity,self.hazatm_risk_frequency,self.hazatm_risk_mastery].compact.inject(:*)
#	self.hazengy_risk_total = [self.hazengy_risk_severity,self.hazengy_risk_frequency,self.hazengy_risk_mastery].compact.inject(:*)
#	self.hazmat_risk_total = [self.hazmat_risk_severity,self.hazmat_risk_frequency,self.hazmat_risk_mastery].compact.inject(:*)
#	self.laz_risk_total = [self.laz_risk_severity,self.laz_risk_frequency,self.laz_risk_mastery].compact.inject(:*)
#	self.lonewrk_risk_total = [self.lonewrk_risk_severity,self.lonewrk_risk_frequency,self.lonewrk_risk_mastery].compact.inject(:*)
#	self.mag_risk_total = [self.mag_risk_severity,self.mag_risk_frequency,self.mag_risk_mastery].compact.inject(:*)
#	self.mechand_risk_total = [self.mechand_risk_severity,self.mechand_risk_frequency,self.mechand_risk_mastery].compact.inject(:*)
#	self.noise_risk_total = [self.noise_risk_severity,self.noise_risk_frequency,self.noise_risk_mastery].compact.inject(:*)
#	self.ovrhead_risk_total = [self.ovrhead_risk_severity,self.ovrhead_risk_frequency,self.ovrhead_risk_mastery].compact.inject(:*)
#	self.rad_risk_total = [self.rad_risk_severity,self.rad_risk_frequency,self.rad_risk_mastery].compact.inject(:*)
#	self.road_risk_total = [self.road_risk_severity,self.road_risk_frequency,self.road_risk_mastery].compact.inject(:*)
#	self.temp_risk_total = [self.temp_risk_severity,self.temp_risk_frequency,self.temp_risk_mastery].compact.inject(:*)
#	self.tool_risk_total = [self.tool_risk_severity,self.tool_risk_frequency,self.tool_risk_mastery].compact.inject(:*)
#  end
#  def calculate_risk_new
#    self.access_new_risk_total = [self.access_new_risk_severity,self.access_new_risk_frequency,self.access_new_risk_mastery].compact.inject(:*)
#	self.biohaz_new_risk_total = [self.biohaz_new_risk_severity,self.biohaz_new_risk_frequency,self.biohaz_new_risk_mastery].compact.inject(:*)
#	self.cowrk_new_risk_total = [self.cowrk_new_risk_severity,self.cowrk_new_risk_frequency,self.cowrk_new_risk_mastery].compact.inject(:*)
#	self.cut_new_risk_total = [self.cut_new_risk_severity,self.cut_new_risk_frequency,self.cut_new_risk_mastery].compact.inject(:*)
#	self.ergo_new_risk_total = [self.ergo_new_risk_severity,self.ergo_new_risk_frequency,self.ergo_new_risk_mastery].compact.inject(:*)
#	self.fall_new_risk_total = [self.fall_new_risk_severity,self.fall_new_risk_frequency,self.fall_new_risk_mastery].compact.inject(:*)
#	self.fire_new_risk_total = [self.fire_new_risk_severity,self.fire_new_risk_frequency,self.fire_new_risk_mastery].compact.inject(:*)
#	self.hazatm_new_risk_total = [self.hazatm_new_risk_severity,self.hazatm_new_risk_frequency,self.hazatm_new_risk_mastery].compact.inject(:*)
#	self.hazengy_new_risk_total = [self.hazengy_new_risk_severity,self.hazengy_new_risk_frequency,self.hazengy_new_risk_mastery].compact.inject(:*)
#	self.hazmat_new_risk_total = [self.hazmat_new_risk_severity,self.hazmat_new_risk_frequency,self.hazmat_new_risk_mastery].compact.inject(:*)
#	self.laz_new_risk_total = [self.laz_new_risk_severity,self.laz_new_risk_frequency,self.laz_new_risk_mastery].compact.inject(:*)
#	self.lonewrk_new_risk_total = [self.lonewrk_new_risk_severity,self.lonewrk_new_risk_frequency,self.lonewrk_new_risk_mastery].compact.inject(:*)
#	self.mag_new_risk_total = [self.mag_new_risk_severity,self.mag_new_risk_frequency,self.mag_new_risk_mastery].compact.inject(:*)
#	self.mechand_new_risk_total = [self.mechand_new_risk_severity,self.mechand_new_risk_frequency,self.mechand_new_risk_mastery].compact.inject(:*)
#	self.noise_new_risk_total = [self.noise_new_risk_severity,self.noise_new_risk_frequency,self.noise_new_risk_mastery].compact.inject(:*)
#	self.ovrhead_new_risk_total = [self.ovrhead_new_risk_severity,self.ovrhead_new_risk_frequency,self.ovrhead_new_risk_mastery].compact.inject(:*)
#	self.rad_new_risk_total = [self.rad_new_risk_severity,self.rad_new_risk_frequency,self.rad_new_risk_mastery].compact.inject(:*)
#	self.road_new_risk_total = [self.road_new_risk_severity,self.road_new_risk_frequency,self.road_new_risk_mastery].compact.inject(:*)
#	self.temp_new_risk_total = [self.temp_new_risk_severity,self.temp_new_risk_frequency,self.temp_new_risk_mastery].compact.inject(:*)
#	self.tool_new_risk_total = [self.tool_new_risk_severity,self.tool_new_risk_frequency,self.tool_new_risk_mastery].compact.inject(:*)
#  end 
#  #calculate frequency for initial rating
#  def calculate_frequency
#  	#Access Frequency Calculations
#  	haz1 = [self.access_frequency_often,self.access_frequency_time].compact.inject(:*)
#  	haz2 = [self.biohaz_frequency_often,self.biohaz_frequency_time].compact.inject(:*)
#  	haz3 = [self.cowrk_frequency_often,self.cowrk_frequency_time].compact.inject(:*)
#  	haz4 = [self.cut_frequency_often,self.cut_frequency_time].compact.inject(:*)
#  	haz5 = [self.ergo_frequency_often,self.ergo_frequency_time].compact.inject(:*)
#  	haz6 = [self.fall_frequency_often,self.fall_frequency_time].compact.inject(:*)
#  	haz7 = [self.fire_frequency_often,self.fire_frequency_time].compact.inject(:*)
#  	haz8 = [self.hazatm_frequency_often,self.hazatm_frequency_time].compact.inject(:*)
#  	haz9 = [self.hazengy_frequency_often,self.hazengy_frequency_time].compact.inject(:*)
#  	haz10 = [self.hazmat_frequency_often,self.hazmat_frequency_time].compact.inject(:*)
#  	haz11 = [self.laz_frequency_often,self.laz_frequency_time].compact.inject(:*)
#  	haz12 = [self.lonewrk_frequency_often,self.lonewrk_frequency_time].compact.inject(:*)
#  	haz13 = [self.mag_frequency_often,self.mag_frequency_time].compact.inject(:*)
#  	haz14 = [self.mechand_frequency_often,self.mechand_frequency_time].compact.inject(:*)
#  	haz15 = [self.noise_frequency_often,self.noise_frequency_time].compact.inject(:*)
#  	haz16 = [self.ovrhead_frequency_often,self.ovrhead_frequency_time].compact.inject(:*)
#  	haz17 = [self.rad_frequency_often,self.rad_frequency_time].compact.inject(:*)
#  	haz18 = [self.road_frequency_often,self.road_frequency_time].compact.inject(:*)
#  	haz19 = [self.temp_frequency_often,self.temp_frequency_time].compact.inject(:*)
#  	haz20 = [self.tool_frequency_often,self.tool_frequency_time].compact.inject(:*)
#  	unless haz1.nil?
#	    if haz1 == 0
#	      self.access_risk_frequency = 0
#	    elsif haz1 <= 2
#	      self.access_risk_frequency = 1
#	    elsif haz1 <= 4
#	      self.access_risk_frequency = 3
#	    elsif haz1 <= 9
#	      self.access_risk_frequency = 6
#	    elsif haz1 <= 16 
#	      self.access_risk_frequency = 10
#	    else
#	      self.access_risk_frequency = 1001
#	    end
#	end
#    #Biohaz Frequency Calculation
#    unless haz2.nil?
#	    if haz2 == 0
#	      self.biohaz_risk_frequency = 0
#	    elsif haz2 <= 2
#	      self.biohaz_risk_frequency = 1
#	    elsif haz2 <= 4
#	      self.biohaz_risk_frequency = 3
#	    elsif haz2 <= 9
#	      self.biohaz_risk_frequency = 6
#	    elsif haz2 <= 16 
#	      self.biohaz_risk_frequency = 10
#	    else
#	      self.biohaz_risk_frequency = 1001
#	    end
#	end
#    #Cowrk Frequency Calculation
#    unless haz3.nil?
#	    if haz3 == 0
#	      self.cowrk_risk_frequency = 0
#	    elsif haz3 <= 2
#	      self.cowrk_risk_frequency = 1
#	    elsif haz3 <= 4
#	      self.cowrk_risk_frequency = 3
#	    elsif haz3 <= 9
#	      self.cowrk_risk_frequency = 6
#	    elsif haz3 <= 16 
#	      self.cowrk_risk_frequency = 10
#	    else
#	      self.cowrk_risk_frequency = 1001
#	    end
#	end
#    #Cut Frequency Calculation
#    unless haz4.nil?
#	    if haz4 == 0
#	      self.cut_risk_frequency = 0
#	    elsif haz4 <= 2
#	      self.cut_risk_frequency = 1
#	    elsif haz4 <= 4
#	      self.cut_risk_frequency = 3
#	    elsif haz4 <= 9
#	      self.cut_risk_frequency = 6
#	    elsif haz4 <= 16 
#	      self.cut_risk_frequency = 10
#	    else
#	      self.cut_risk_frequency = 1001
#	    end
#	end
#    #Ergo Frequency Calculation
#    unless haz5.nil?
#	    if haz5 == 0
#	      self.ergo_risk_frequency = 0
#	    elsif haz5 <= 2
#	      self.ergo_risk_frequency = 1
#	    elsif haz5 <= 4
#	      self.ergo_risk_frequency = 3
#	    elsif haz5 <= 9
#	      self.ergo_risk_frequency = 6
#	    elsif haz5 <= 16 
#	      self.ergo_risk_frequency = 10
#	    else
#	      self.ergo_risk_frequency = 1001
#	    end
#	end
#    #Fall Frequency Calculation
#    unless haz6.nil?
#	    if haz6 == 0
#	      self.fall_risk_frequency = 0
#	    elsif haz6 <= 2
#	      self.fall_risk_frequency = 1
#	    elsif haz6 <= 4
#	      self.fall_risk_frequency = 3
#	    elsif haz6 <= 9
#	      self.fall_risk_frequency = 6
#	    elsif haz6 <= 16 
#	      self.fall_risk_frequency = 10
#	    else
#	      self.fall_risk_frequency = 1001
#	    end
#	end
#    #Fire Frequency Calculation
#    unless haz7.nil?
#	    if haz7 == 0
#	      self.fire_risk_frequency = 0
#	    elsif haz7 <= 2
#	      self.fire_risk_frequency = 1
#	    elsif haz7 <= 4
#	      self.fire_risk_frequency = 3
#	    elsif haz7 <= 9
#	      self.fire_risk_frequency = 6
#	    elsif haz7 <= 16 
#	      self.fire_risk_frequency = 10
#	    else
#	      self.fire_risk_frequency = 1001
#	    end
#	end
#    #hazatm frequency calculation
#    unless haz8.nil?
#	    if haz8 == 0
#	      self.hazatm_risk_frequency = 0
#	    elsif haz8 <= 2
#	      self.hazatm_risk_frequency = 1
#	    elsif haz8 <= 4
#	      self.hazatm_risk_frequency = 3
#	    elsif haz8 <= 9
#	      self.hazatm_risk_frequency = 6
#	    elsif haz8 <= 16 
#	      self.hazatm_risk_frequency = 10
#	    else
#	      self.hazatm_risk_frequency = 1001
#	    end
#	end
#    #hazengy frequency calculation
#    unless haz9.nil?
#	    if haz9 == 0
#	      self.hazengy_risk_frequency = 0
#	    elsif haz9 <= 2
#	      self.hazengy_risk_frequency = 1
#	    elsif haz9 <= 4
#	      self.hazengy_risk_frequency = 3
#	    elsif haz9 <= 9
#	      self.hazengy_risk_frequency = 6
#	    elsif haz9 <= 16 
#	      self.hazengy_risk_frequency = 10
#	    else
#	      self.hazengy_risk_frequency = 1001
#	    end
#	end
#    #hazmat frequency calculation
#    unless haz10.nil?
#	    if haz10 == 0
#	      self.hazmat_risk_frequency = 0
#	    elsif haz10 <= 2
#	      self.hazmat_risk_frequency = 1
#	    elsif haz10 <= 4
#	      self.hazmat_risk_frequency = 3
#	    elsif haz10 <= 9
#	      self.hazmat_risk_frequency = 6
#	    elsif haz10 <= 16 
#	      self.hazmat_risk_frequency = 10
#	    else
#	      self.hazmat_risk_frequency = 1001
#	    end
#	end
#    #laz frequency calculation
#    unless haz11.nil?
#	    if haz11 == 0
#	      self.laz_risk_frequency = 0
#	    elsif haz11 <= 2
#	      self.laz_risk_frequency = 1
#	    elsif haz11 <= 4
#	      self.laz_risk_frequency = 3
#	    elsif haz11 <= 9
#	      self.laz_risk_frequency = 6
#	    elsif haz11 <= 16 
#	      self.laz_risk_frequency = 10
#	    else
#	      self.laz_risk_frequency = 1001
#	    end
#	end
#    #lonewrk frequency calculation
#    unless haz12.nil?
#	    if haz12 == 0
#	      self.lonewrk_risk_frequency = 0
#	    elsif haz12 <= 2
#	      self.lonewrk_risk_frequency = 1
#	    elsif haz12 <= 4
#	      self.lonewrk_risk_frequency = 3
#	    elsif haz12 <= 9
#	      self.lonewrk_risk_frequency = 6
#	    elsif haz12 <= 16 
#	      self.lonewrk_risk_frequency = 10
#	    else
#	      self.lonewrk_risk_frequency = 1001
#	    end
#	end
#    #mag frequency calculation
#    unless haz13.nil?
#	    if haz13 == 0
#	      self.mag_risk_frequency = 0
#	    elsif haz13 <= 2
#	      self.mag_risk_frequency = 1
#	    elsif haz13 <= 4
#	      self.mag_risk_frequency = 3
#	    elsif haz13 <= 9
#	      self.mag_risk_frequency = 6
#	    elsif haz13 <= 16 
#	      self.mag_risk_frequency = 10
#	    else
#	      self.mag_risk_frequency = 1001
#	    end
#	end
#    #mechand frequency calculation
#    unless haz14.nil?
#	    if haz14 == 0
#	      self.mechand_risk_frequency = 0
#	    elsif haz14 <= 2
#	      self.mechand_risk_frequency = 1
#	    elsif haz14 <= 4
#	      self.mechand_risk_frequency = 3
#	    elsif haz14 <= 9
#	      self.mechand_risk_frequency = 6
#	    elsif haz14 <= 16 
#	      self.mechand_risk_frequency = 10
#	    else
#	      self.mechand_risk_frequency = 1001
#	    end
#	end
#    #noise frequency calculation
#    unless haz15.nil?
#	    if haz15 == 0
#	      self.noise_risk_frequency = 0
#	    elsif haz15 <= 2
#	      self.noise_risk_frequency = 1
#	    elsif haz15 <= 4
#	      self.noise_risk_frequency = 3
#	    elsif haz15 <= 9
#	      self.noise_risk_frequency = 6
#	    elsif haz15 <= 16 
#	      self.noise_risk_frequency = 10
#	    else
#	      self.noise_risk_frequency = 1001
#	    end
#	end
#    #ovrhead frequency calculation
#    unless haz16.nil?
#	    if haz16 == 0
#	      self.ovrhead_risk_frequency = 0
#	    elsif haz16 <= 2
#	      self.ovrhead_risk_frequency = 1
#	    elsif haz16 <= 4
#	      self.ovrhead_risk_frequency = 3
#	    elsif haz16 <= 9
#	      self.ovrhead_risk_frequency = 6
#	    elsif haz16 <= 16 
#	      self.ovrhead_risk_frequency = 10
#	    else
#	      self.ovrhead_risk_frequency = 1001
#	    end
#	end
#    #rad frequency calculation
#    unless haz17.nil?
#	    if haz17 == 0
#	      self.rad_risk_frequency = 0
#	    elsif haz17 <= 2
#	      self.rad_risk_frequency = 1
#	    elsif haz17 <= 4
#	      self.rad_risk_frequency = 3
#	    elsif haz17 <= 9
#	      self.rad_risk_frequency = 6
#	    elsif haz17 <= 16 
#	      self.rad_risk_frequency = 10
#	    else
#	      self.rad_risk_frequency = 1001
#	    end
#	end
#    #road frequency calculation
#    unless haz18.nil?
#	    if haz18 == 0
#	      self.road_risk_frequency = 0
#	    elsif haz18 <= 2
#	      self.road_risk_frequency = 1
#	    elsif haz18 <= 4
#	      self.road_risk_frequency = 3
#	    elsif haz18 <= 9
#	      self.road_risk_frequency = 6
#	    elsif haz18 <= 16 
#	      self.road_risk_frequency = 10
#	    else
#	      self.road_risk_frequency = 1001
#	    end
#	end
#    #temp frequency calculation
#    unless haz19.nil?
#	    if haz19 == 0
#	      self.temp_risk_frequency = 0
#	    elsif haz19 <= 2
#	      self.temp_risk_frequency = 1
#	    elsif haz19 <= 4
#	      self.temp_risk_frequency = 3
#	    elsif haz19 <= 9
#	      self.temp_risk_frequency = 6
#	    elsif haz19 <= 16 
#	      self.temp_risk_frequency = 10
#	    else
#	      self.temp_risk_frequency = 1001
#	    end
#	end
#    #TOOL FREQUENCY CALCULATION
#    unless haz20.nil?
#	    if haz20 == 0
#	      self.tool_risk_frequency = 0
#	    elsif haz20 <= 2
#	      self.tool_risk_frequency = 1
#	    elsif haz20 <= 4
#	      self.tool_risk_frequency = 3
#	    elsif haz20 <= 9
#	      self.tool_risk_frequency = 6
#	    elsif haz20 <= 16 
#	      self.tool_risk_frequency = 10
#	    else
#	      self.tool_risk_frequency = 1001
#	    end
#	end
#  end
#  #Calculation frequency for new ratings
#  def calculate_new_frequency
#    #Access Frequency Calculations
#    haz1 = [self.access_new_frequency_often,self.access_new_frequency_time].compact.inject(:*)
#    haz2 = [self.biohaz_new_frequency_often,self.biohaz_new_frequency_time].compact.inject(:*)
#    haz3 = [self.cowrk_new_frequency_often,self.cowrk_new_frequency_time].compact.inject(:*)
#    haz4 = [self.cut_new_frequency_often,self.cut_new_frequency_time].compact.inject(:*)
#    haz5 = [self.ergo_new_frequency_often,self.ergo_new_frequency_time].compact.inject(:*)
#    haz6 = [self.fall_new_frequency_often,self.fall_new_frequency_time].compact.inject(:*)
#    haz7 = [self.fire_new_frequency_often,self.fire_new_frequency_time].compact.inject(:*)
#    haz8 = [self.hazatm_new_frequency_often,self.hazatm_new_frequency_time].compact.inject(:*)
#    haz9 = [self.hazengy_new_frequency_often,self.hazengy_new_frequency_time].compact.inject(:*)
#    haz10 = [self.hazmat_new_frequency_often,self.hazmat_new_frequency_time].compact.inject(:*)
#    haz11 = [self.laz_new_frequency_often,self.laz_new_frequency_time].compact.inject(:*)
#    haz12 = [self.lonewrk_new_frequency_often,self.lonewrk_new_frequency_time].compact.inject(:*)
#    haz13 = [self.mag_new_frequency_often,self.mag_new_frequency_time].compact.inject(:*)
#    haz14 = [self.mechand_new_frequency_often,self.mechand_new_frequency_time].compact.inject(:*)
#    haz15 = [self.noise_new_frequency_often,self.noise_new_frequency_time].compact.inject(:*)
#    haz16 = [self.ovrhead_new_frequency_often,self.ovrhead_new_frequency_time].compact.inject(:*)
#    haz17 = [self.rad_new_frequency_often,self.rad_new_frequency_time].compact.inject(:*)
#    haz18 = [self.road_new_frequency_often,self.road_new_frequency_time].compact.inject(:*)
#    haz19 = [self.temp_new_frequency_often,self.temp_new_frequency_time].compact.inject(:*)
#    haz20 = [self.tool_new_frequency_often,self.tool_new_frequency_time].compact.inject(:*)
#    unless haz1.nil?
#      if haz1 == 0
#        self.access_new_risk_frequency = 0
#      elsif haz1 <= 2
#        self.access_new_risk_frequency = 1
#      elsif haz1 <= 4
#        self.access_new_risk_frequency = 3
#      elsif haz1 <= 9
#        self.access_new_risk_frequency = 6
#      elsif haz1 <= 16 
#        self.access_new_risk_frequency = 10
#      else
#        self.access_new_risk_frequency = 1001
#      end
#  	end
#    #Biohaz Frequency Calculation
#    unless haz2.nil?
#      if haz2 == 0
#        self.biohaz_new_risk_frequency = 0
#      elsif haz2 <= 2
#        self.biohaz_new_risk_frequency = 1
#      elsif haz2 <= 4
#        self.biohaz_new_risk_frequency = 3
#      elsif haz2 <= 9
#        self.biohaz_new_risk_frequency = 6
#      elsif haz2 <= 16 
#        self.biohaz_new_risk_frequency = 10
#      else
#        self.biohaz_new_risk_frequency = 1001
#      end
#  	end
#    #Cowrk Frequency Calculation
#    unless haz3.nil?
#      if haz3 == 0
#        self.cowrk_new_risk_frequency = 0
#      elsif haz3 <= 2
#        self.cowrk_new_risk_frequency = 1
#      elsif haz3 <= 4
#        self.cowrk_new_risk_frequency = 3
#      elsif haz3 <= 9
#        self.cowrk_new_risk_frequency = 6
#      elsif haz3 <= 16 
#        self.cowrk_new_risk_frequency = 10
#      else
#        self.cowrk_new_risk_frequency = 1001
#      end
#  	end
#    #Cut Frequency Calculation
#    unless haz4.nil?
#      if haz4 == 0
#        self.cut_new_risk_frequency = 0
#      elsif haz4 <= 2
#        self.cut_new_risk_frequency = 1
#      elsif haz4 <= 4
#        self.cut_new_risk_frequency = 3
#      elsif haz4 <= 9
#        self.cut_new_risk_frequency = 6
#      elsif haz4 <= 16 
#        self.cut_new_risk_frequency = 10
#      else
#        self.cut_new_risk_frequency = 1001
#      end
#  	end
#    #Ergo Frequency Calculation
#    unless haz5.nil?
#      if haz5 == 0
#        self.ergo_new_risk_frequency = 0
#      elsif haz5 <= 2
#        self.ergo_new_risk_frequency = 1
#      elsif haz5 <= 4
#        self.ergo_new_risk_frequency = 3
#      elsif haz5 <= 9
#        self.ergo_new_risk_frequency = 6
#      elsif haz5 <= 16 
#        self.ergo_new_risk_frequency = 10
#      else
#        self.ergo_new_risk_frequency = 1001
#      end
#  	end
#    #Fall Frequency Calculation
#    unless haz6.nil?
#      if haz6 == 0
#        self.fall_new_risk_frequency = 0
#      elsif haz6 <= 2
#        self.fall_new_risk_frequency = 1
#      elsif haz6 <= 4
#        self.fall_new_risk_frequency = 3
#      elsif haz6 <= 9
#        self.fall_new_risk_frequency = 6
#      elsif haz6 <= 16 
#        self.fall_new_risk_frequency = 10
#      else
#        self.fall_new_risk_frequency = 1001
#      end
#  	end
#    #Fire Frequency Calculation
#    unless haz7.nil?
#      if haz7 == 0
#        self.fire_new_risk_frequency = 0
#      elsif haz7 <= 2
#        self.fire_new_risk_frequency = 1
#      elsif haz7 <= 4
#        self.fire_new_risk_frequency = 3
#      elsif haz7 <= 9
#        self.fire_new_risk_frequency = 6
#      elsif haz7 <= 16 
#        self.fire_new_risk_frequency = 10
#      else
#        self.fire_new_risk_frequency = 1001
#      end
#  	end
#    #hazatm frequency calculation
#    unless haz8.nil?
#      if haz8 == 0
#        self.hazatm_new_risk_frequency = 0
#      elsif haz8 <= 2
#        self.hazatm_new_risk_frequency = 1
#      elsif haz8 <= 4
#        self.hazatm_new_risk_frequency = 3
#      elsif haz8 <= 9
#        self.hazatm_new_risk_frequency = 6
#      elsif haz8 <= 16 
#        self.hazatm_new_risk_frequency = 10
#      else
#        self.hazatm_new_risk_frequency = 1001
#      end
#  	end
#    #hazengy frequency calculation
#    unless haz9.nil?
#      if haz9 == 0
#        self.hazengy_new_risk_frequency = 0
#      elsif haz9 <= 2
#        self.hazengy_new_risk_frequency = 1
#      elsif haz9 <= 4
#        self.hazengy_new_risk_frequency = 3
#      elsif haz9 <= 9
#        self.hazengy_new_risk_frequency = 6
#      elsif haz9 <= 16 
#        self.hazengy_new_risk_frequency = 10
#      else
#        self.hazengy_new_risk_frequency = 1001
#      end
#  	end
#    #hazmat frequency calculation
#    unless haz10.nil?
#      if haz10 == 0
#        self.hazmat_new_risk_frequency = 0
#      elsif haz10 <= 2
#        self.hazmat_new_risk_frequency = 1
#      elsif haz10 <= 4
#        self.hazmat_new_risk_frequency = 3
#      elsif haz10 <= 9
#        self.hazmat_new_risk_frequency = 6
#      elsif haz10 <= 16 
#        self.hazmat_new_risk_frequency = 10
#      else
#        self.hazmat_new_risk_frequency = 1001
#      end
#  	end
#    #laz frequency calculation
#    unless haz11.nil?
#      if haz11 == 0
#        self.laz_new_risk_frequency = 0
#      elsif haz11 <= 2
#        self.laz_new_risk_frequency = 1
#      elsif haz11 <= 4
#        self.laz_new_risk_frequency = 3
#      elsif haz11 <= 9
#        self.laz_new_risk_frequency = 6
#      elsif haz11 <= 16 
#        self.laz_new_risk_frequency = 10
#      else
#        self.laz_new_risk_frequency = 1001
#      end
#  	end
#    #lonewrk frequency calculation
#    unless haz12.nil?
#      if haz12 == 0
#        self.lonewrk_new_risk_frequency = 0
#      elsif haz12 <= 2
#        self.lonewrk_new_risk_frequency = 1
#      elsif haz12 <= 4
#        self.lonewrk_new_risk_frequency = 3
#      elsif haz12 <= 9
#        self.lonewrk_new_risk_frequency = 6
#      elsif haz12 <= 16 
#        self.lonewrk_new_risk_frequency = 10
#      else
#        self.lonewrk_new_risk_frequency = 1001
#      end
#  	end
#    #mag frequency calculation
#    unless haz13.nil?
#      if haz13 == 0
#        self.mag_new_risk_frequency = 0
#      elsif haz13 <= 2
#        self.mag_new_risk_frequency = 1
#      elsif haz13 <= 4
#        self.mag_new_risk_frequency = 3
#      elsif haz13 <= 9
#        self.mag_new_risk_frequency = 6
#      elsif haz13 <= 16 
#        self.mag_new_risk_frequency = 10
#      else
#        self.mag_new_risk_frequency = 1001
#      end
#  	end
#    #mechand frequency calculation
#    unless haz14.nil?
#      if haz14 == 0
#        self.mechand_new_risk_frequency = 0
#      elsif haz14 <= 2
#        self.mechand_new_risk_frequency = 1
#      elsif haz14 <= 4
#        self.mechand_new_risk_frequency = 3
#      elsif haz14 <= 9
#        self.mechand_new_risk_frequency = 6
#      elsif haz14 <= 16 
#        self.mechand_new_risk_frequency = 10
#      else
#        self.mechand_new_risk_frequency = 1001
#      end
#  	end
#    #noise frequency calculation
#    unless haz15.nil?
#      if haz15 == 0
#        self.noise_new_risk_frequency = 0
#      elsif haz15 <= 2
#        self.noise_new_risk_frequency = 1
#      elsif haz15 <= 4
#        self.noise_new_risk_frequency = 3
#      elsif haz15 <= 9
#        self.noise_new_risk_frequency = 6
#      elsif haz15 <= 16 
#        self.noise_new_risk_frequency = 10
#      else
#        self.noise_new_risk_frequency = 1001
#      end
#  	end
#    #ovrhead frequency calculation
#    unless haz16.nil?
#      if haz16 == 0
#        self.ovrhead_new_risk_frequency = 0
#      elsif haz16 <= 2
#        self.ovrhead_new_risk_frequency = 1
#      elsif haz16 <= 4
#        self.ovrhead_new_risk_frequency = 3
#      elsif haz16 <= 9
#        self.ovrhead_new_risk_frequency = 6
#      elsif haz16 <= 16 
#        self.ovrhead_new_risk_frequency = 10
#      else
#        self.ovrhead_new_risk_frequency = 1001
#      end
#  	end
#    #rad frequency calculation
#    unless haz17.nil?
#      if haz17 == 0
#        self.rad_new_risk_frequency = 0
#      elsif haz17 <= 2
#        self.rad_new_risk_frequency = 1
#      elsif haz17 <= 4
#        self.rad_new_risk_frequency = 3
#      elsif haz17 <= 9
#        self.rad_new_risk_frequency = 6
#      elsif haz17 <= 16 
#        self.rad_new_risk_frequency = 10
#      else
#        self.rad_new_risk_frequency = 1001
#      end
#  	end
#    #road frequency calculation
#    unless haz18.nil?
#      if haz18 == 0
#        self.road_new_risk_frequency = 0
#      elsif haz18 <= 2
#        self.road_new_risk_frequency = 1
#      elsif haz18 <= 4
#        self.road_new_risk_frequency = 3
#      elsif haz18 <= 9
#        self.road_new_risk_frequency = 6
#      elsif haz18 <= 16 
#        self.road_new_risk_frequency = 10
#      else
#        self.road_new_risk_frequency = 1001
#      end
#  	end
#    #temp frequency calculation
#    unless haz19.nil?
#      if haz19 == 0
#        self.temp_new_risk_frequency = 0
#      elsif haz19 <= 2
#        self.temp_new_risk_frequency = 1
#      elsif haz19 <= 4
#        self.temp_new_risk_frequency = 3
#      elsif haz19 <= 9
#        self.temp_new_risk_frequency = 6
#      elsif haz19 <= 16 
#        self.temp_new_risk_frequency = 10
#      else
#        self.temp_new_risk_frequency = 1001
#      end
#  	end
#    #TOOL FREQUENCY CALCULATION
#    unless haz20.nil?
#      if haz20 == 0
#        self.tool_new_risk_frequency = 0
#      elsif haz20 <= 2
#        self.tool_new_risk_frequency = 1
#      elsif haz20 <= 4
#        self.tool_new_risk_frequency = 3
#      elsif haz20 <= 9
#        self.tool_new_risk_frequency = 6
#      elsif haz20 <= 16 
#        self.tool_new_risk_frequency = 10
#      else
#        self.tool_new_risk_frequency = 1001
#      end
#  	end
#  end

end
