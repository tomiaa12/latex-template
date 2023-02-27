export interface Option {
  // 当前路径
  imgPath?: string
  // 名称
  name?: string
  // 公式
  latex?: string
  // 分组名称
  groupName?: string
  // 宽度
  width?: string

  // 子项
  children?: Option[]
}
export const list = [
  {
    imgPath: "symbol.png",
    name: "常用符号",
    width: "60px",
    children: [
      {
        groupName: "二元运算符",
        width: "30px",
        children: [
          {
            imgPath: "symbol_1_binary_plus.svg",
            latex: "+  ",
            name: "加",
          },
          {
            imgPath: "symbol_2_binary_minus.svg",
            latex: "- ",
            name: "减",
          },
          {
            imgPath: "symbol_3_binary_times.svg",
            latex: "\\times ",
            name: "乘",
          },
          {
            imgPath: "symbol_4_binary_div.svg",
            latex: "{\\div} ",
            name: "除",
          },
          {
            imgPath: "symbol_5_binary_pm.svg",
            latex: "\\pm ",
            name: "加减",
          },
          {
            imgPath: "symbol_6_binary_mp.svg",
            latex: "\\mp ",
            name: "减加",
          },
          {
            imgPath: "symbol_7_binary_triangleleft.svg",
            latex: "\\triangleleft ",
            name: "正规子群",
          },
          {
            imgPath: "symbol_8_binary_triangleright.svg",
            latex: "\\triangleright ",
            name: "属于正规子群",
          },
          {
            imgPath: "symbol_9_binary_cdot.svg",
            latex: "\\cdot ",
            name: "点",
          },
          {
            imgPath: "symbol_10_binary_setminus.svg",
            latex: "\\setminus ",
            name: "减号集",
          },
          {
            imgPath: "symbol_11_binary_star.svg",
            latex: "\\star ",
            name: "星",
          },
          {
            imgPath: "symbol_12_binary_ast.svg",
            latex: "\\ast ",
            name: "星号",
          },
          {
            imgPath: "symbol_13_binary_cup.svg",
            latex: "\\cup ",
            name: "并集",
          },
          {
            imgPath: "symbol_14_binary_cap.svg",
            latex: "\\cap ",
            name: "交集",
          },
          {
            imgPath: "symbol_15_binary_sqcup.svg",
            latex: "\\sqcup ",
          },
          {
            imgPath: "symbol_16_binary_sqcap.svg",
            latex: "\\sqcap ",
          },
          {
            imgPath: "symbol_17_binary_vee.svg",
            latex: "\\vee ",
          },
          {
            imgPath: "symbol_18_binary_wedge.svg",
            latex: "\\wedge ",
          },
          {
            imgPath: "symbol_19_binary_circ.svg",
            latex: "\\circ ",
          },
          {
            imgPath: "symbol_20_binary_bullet.svg",
            latex: "\\bullet ",
          },
          {
            imgPath: "symbol_21_binary_oplus.svg",
            latex: "\\oplus ",
          },
          {
            imgPath: "symbol_22_binary_ominus.svg",
            latex: "\\ominus ",
          },
          {
            imgPath: "symbol_23_binary_odot.svg",
            latex: "\\odot ",
          },
          {
            imgPath: "symbol_24_binary_oslash.svg",
            latex: "\\oslash ",
          },
          {
            imgPath: "symbol_25_binary_otimes.svg",
            latex: "\\otimes ",
          },
          {
            imgPath: "symbol_26_binary_bigcirc.svg",
            latex: "\\bigcirc ",
          },
          {
            imgPath: "symbol_27_binary_diamonda.svg",
            latex: "\\diamond ",
          },
          {
            imgPath: "symbol_28_binary_uplus.svg",
            latex: "\\uplus ",
          },
          {
            imgPath: "symbol_29_binary_bigtriangleup.svg",
            latex: "\\bigtriangleup ",
          },
          {
            imgPath: "symbol_30_binary_bigtriangledown.svg",
            latex: "\\bigtriangledown ",
          },
          {
            imgPath: "symbol_31_binary_lhd.svg",
            latex: "\\lhd ",
          },
          {
            imgPath: "symbol_32_binary_rhd.svg",
            latex: "\\rhd ",
          },
          {
            imgPath: "symbol_33_binary_unlhd.svg",
            latex: "\\unlhd ",
          },
          {
            imgPath: "symbol_34_binary_unrhd.svg",
            latex: "\\unrhd ",
          },
          {
            imgPath: "symbol_35_binary_amalg.svg",
            latex: "\\amalg ",
          },
          {
            imgPath: "symbol_36_binary_wr.svg",
            latex: "\\wr ",
          },
          {
            imgPath: "symbol_37_binary_dagger.svg",
            latex: "\\dagger ",
          },
          {
            imgPath: "symbol_38_binary_ddagger.svg",
            latex: "\\ddagger ",
          },
        ],
      },
      {
        groupName: "二元关系符",
        width: "30px",
        children: [
          {
            imgPath: "symbol_39_relation_less.svg",
            latex: "< ",
          },
          {
            imgPath: "symbol_40_relation_more.svg",
            latex: "> ",
          },
          {
            imgPath: "symbol_41_relation_equal.svg",
            latex: "= ",
          },
          {
            imgPath: "symbol_42_relation_le.svg",
            latex: "\\le ",
          },
          {
            imgPath: "symbol_43_relation_ge.svg",
            latex: "\\ge ",
          },
          {
            imgPath: "symbol_44_relation_equiv.svg",
            latex: "\\equiv ",
          },
          {
            imgPath: "symbol_45_relation_ll.svg",
            latex: "\\ll ",
          },
          {
            imgPath: "symbol_46_relation_gg.svg",
            latex: "\\gg ",
          },
          {
            imgPath: "symbol_47_relation_doteq.svg",
            latex: "\\doteq ",
          },
          {
            imgPath: "symbol_48_relation_prec.svg",
            latex: "\\prec ",
          },
          {
            imgPath: "symbol_49_relation_succ.svg",
            latex: "\\succ ",
          },
          {
            imgPath: "symbol_50_relation_sim.svg",
            latex: "\\sim ",
          },
          {
            imgPath: "symbol_51_relation_preceq.svg",
            latex: "\\preceq ",
          },
          {
            imgPath: "symbol_52_relation_succeq.svg",
            latex: "\\succeq ",
          },
          {
            imgPath: "symbol_53_relation_simeq.svg",
            latex: "\\simeq ",
          },
          {
            imgPath: "symbol_54_relation_approx.svg",
            latex: "\\approx ",
          },
          {
            imgPath: "symbol_55_relation_subset.svg",
            latex: "\\subset ",
          },
          {
            imgPath: "symbol_56_relation_supset.svg",
            latex: "\\supset ",
          },
          {
            imgPath: "symbol_57_relation_subseteq.svg",
            latex: "\\subseteq ",
          },
          {
            imgPath: "symbol_58_relation_supseteq.svg",
            latex: "\\supseteq ",
          },
          {
            imgPath: "symbol_59_relation_sqsubset.svg",
            latex: "\\sqsubset ",
          },
          {
            imgPath: "symbol_60_relation_sqsupset.svg",
            latex: "\\sqsupset ",
          },
          {
            imgPath: "symbol_61_relation_sqsubseteq.svg",
            latex: "\\sqsubseteq ",
          },
          {
            imgPath: "symbol_62_relation_sqsupseteq.svg",
            latex: "\\sqsupseteq ",
          },
          {
            imgPath: "symbol_63_relation_cong.svg",
            latex: "\\cong ",
          },
          {
            imgPath: "symbol_64_relation_Join.svg",
            latex: "\\Join ",
          },
          {
            imgPath: "symbol_65_relation_bowtie.svg",
            latex: "\\bowtie ",
          },
          {
            imgPath: "symbol_66_relation_propto.svg",
            latex: "\\propto ",
          },
          {
            imgPath: "symbol_67_relation_in.svg",
            latex: "\\in ",
          },
          {
            imgPath: "symbol_68_relation_ni.svg",
            latex: "\\ni ",
          },
          {
            imgPath: "symbol_69_relation_vdash.svg",
            latex: "\\vdash ",
          },
          {
            imgPath: "symbol_70_relation_dashv.svg",
            latex: "\\dashv ",
          },
          {
            imgPath: "symbol_71_relation_models.svg",
            latex: "\\models ",
          },
          {
            imgPath: "symbol_72_relation_mid.svg",
            latex: "\\mid ",
          },
          {
            imgPath: "symbol_73_relation_parallel.svg",
            latex: "\\parallel ",
          },
          {
            imgPath: "symbol_74_relation_perp.svg",
            latex: "\\perp ",
          },
          {
            imgPath: "symbol_75_relation_smile.svg",
            latex: "\\smile ",
          },
          {
            imgPath: "symbol_76_relation_frown.svg",
            latex: "\\frown ",
          },
          {
            imgPath: "symbol_77_relation_asymp.svg",
            latex: "\\asymp ",
          },
          {
            imgPath: "symbol_78_relation_slash.svg",
            latex: ": ",
          },
          {
            imgPath: "symbol_79_relation_notin.svg",
            latex: "\\notin ",
          },
          {
            imgPath: "symbol_80_relation_ne.svg",
            latex: "\\ne ",
          },
        ],
      },
      {
        groupName: "箭头符号",
        width: "30px",
        children: [
          {
            imgPath: "symbol_81_arrow_gets.svg",
            latex: "\\gets ",
          },
          {
            imgPath: "symbol_82_arrow_to.svg",
            latex: "\\to ",
          },
          {
            imgPath: "symbol_83_arrow_longleftarrowa.svg",
            latex: "\\longleftarrow ",
          },
          {
            imgPath: "symbol_84_arrow_longrightarrowa.svg",
            latex: "\\longrightarrow ",
          },
          {
            imgPath: "symbol_85_arrow_uparrowa.svg",
            latex: "\\uparrow ",
          },
          {
            imgPath: "symbol_86_arrow_downarrowa.svg",
            latex: "\\downarrow ",
          },
          {
            imgPath: "symbol_87_arrow_updownarrowa.svg",
            latex: "\\updownarrow ",
          },
          {
            imgPath: "symbol_88_arrow_leftrightarrowa.svg",
            latex: "\\leftrightarrow ",
          },
          {
            imgPath: "symbol_89_arrow_Uparrowb.svg",
            latex: "\\Uparrow ",
          },
          {
            imgPath: "symbol_90_arrow_Downarrowb.svg",
            latex: "\\Downarrow ",
          },
          {
            imgPath: "symbol_91_arrow_Updownarrowb.svg",
            latex: "\\Updownarrow ",
          },
          {
            imgPath: "symbol_92_arrow_longleftrightarrowa.svg",
            latex: "\\longleftrightarrow ",
          },
          {
            imgPath: "symbol_93_arrow_Leftarrow.svg",
            latex: "\\Leftarrow ",
          },
          {
            imgPath: "symbol_94_arrow_Longleftarrowb.svg",
            latex: "\\Longleftarrow ",
          },
          {
            imgPath: "symbol_95_arrow_Rightarrow.svg",
            latex: "\\Rightarrow ",
          },
          {
            imgPath: "symbol_96_arrow_Longrightarrowb.svg",
            latex: "\\Longrightarrow ",
          },
          {
            imgPath: "symbol_97_arrow_Leftrightarrowb.svg",
            latex: "\\Leftrightarrow ",
          },
          {
            imgPath: "symbol_98_arrow_Longleftrightarrowb.svg",
            latex: "\\Longleftrightarrow ",
          },
          {
            imgPath: "symbol_99_arrow_mapsto.svg",
            latex: "\\mapsto ",
          },
          {
            imgPath: "symbol_100_arrow_longmapsto.svg",
            latex: "\\longmapsto ",
          },
          {
            imgPath: "symbol_101_arrow_nearrow.svg",
            latex: "\\nearrow ",
          },
          {
            imgPath: "symbol_102_arrow_searrow.svg",
            latex: "\\searrow ",
          },
          {
            imgPath: "symbol_103_arrow_swarrow.svg",
            latex: "\\swarrow ",
          },
          {
            imgPath: "symbol_104_arrow_nwarrow.svg",
            latex: "\\nwarrow ",
          },
          {
            imgPath: "symbol_105_arrow_hookleftarrow.svg",
            latex: "\\hookleftarrow ",
          },
          {
            imgPath: "symbol_106_arrow_hookrightarrow.svg",
            latex: "\\hookrightarrow ",
          },
          {
            imgPath: "symbol_107_arrow_rightleftharpoons.svg",
            latex: "\\rightleftharpoons ",
          },
          {
            imgPath: "symbol_108_arrow_iff.svg",
            latex: "\\iff ",
          },
          {
            imgPath: "symbol_109_arrow_leftharpoonup.svg",
            latex: "\\leftharpoonup ",
          },
          {
            imgPath: "symbol_110_arrow_rightharpoonup.svg",
            latex: "\\rightharpoonup ",
          },
          {
            imgPath: "symbol_111_arrow_leftharpoondown.svg",
            latex: "\\leftharpoondown ",
          },
          {
            imgPath: "symbol_112_arrow_rightharpoondown.svg",
            latex: "\\rightharpoondown ",
          },
        ],
      },
      {
        groupName: "其他符号",
        width: "30px",
        children: [
          {
            imgPath: "symbol_113_other_because.svg",
            latex: "\\because ",
          },
          {
            imgPath: "symbol_114_other_therefore.svg",
            latex: "\\therefore ",
          },
          {
            imgPath: "symbol_115_other_dots.svg",
            latex: "\\dots ",
          },
          {
            imgPath: "symbol_116_other_cdots.svg",
            latex: "\\cdots ",
          },
          {
            imgPath: "symbol_117_other_vdots.svg",
            latex: "\\vdots ",
          },
          {
            imgPath: "symbol_118_other_ddots.svg",
            latex: "\\ddots ",
          },
          {
            imgPath: "symbol_119_other_forall.svg",
            latex: "\\forall ",
          },
          {
            imgPath: "symbol_120_other_exists.svg",
            latex: "\\exists ",
          },
          {
            imgPath: "symbol_121_other_nexists.svg",
            latex: "\\nexists ",
          },
          {
            imgPath: "symbol_122_other_Finv.svg",
            latex: "\\Finv ",
          },
          {
            imgPath: "symbol_123_other_neg.svg",
            latex: "\\neg ",
          },
          {
            imgPath: "symbol_124_other_prime.svg",
            latex: "\\prime ",
          },
          {
            imgPath: "symbol_125_other_emptyset.svg",
            latex: "\\emptyset ",
          },
          {
            imgPath: "symbol_126_other_infty.svg",
            latex: "\\infty ",
          },
          {
            imgPath: "symbol_127_other_nabla.svg",
            latex: "\\nabla ",
          },
          {
            imgPath: "symbol_128_other_triangle.svg",
            latex: "\\triangle ",
          },
          {
            imgPath: "symbol_129_other_Box.svg",
            latex: "\\Box ",
          },
          {
            imgPath: "symbol_130_other_Diamondb.svg",
            latex: "\\Diamond ",
          },
          {
            imgPath: "symbol_131_other_bot.svg",
            latex: "\\bot ",
          },
          {
            imgPath: "symbol_132_other_top.svg",
            latex: "\\top ",
          },
          {
            imgPath: "symbol_133_other_angle.svg",
            latex: "\\angle ",
          },
          {
            imgPath: "symbol_134_other_measuredangle.svg",
            latex: "\\measuredangle ",
          },
          {
            imgPath: "symbol_135_other_sphericalangle.svg",
            latex: "\\sphericalangle ",
          },
          {
            imgPath: "symbol_136_other_surd.svg",
            latex: "\\surd ",
          },
          {
            imgPath: "symbol_137_other_diamondsuit.svg",
            latex: "\\diamondsuit ",
          },
          {
            imgPath: "symbol_138_other_heartsuit.svg",
            latex: "\\heartsuit ",
          },
          {
            imgPath: "symbol_139_other_clubsuit.svg",
            latex: "\\clubsuit ",
          },
          {
            imgPath: "symbol_140_other_spadesuit.svg",
            latex: "\\spadesuit ",
          },
          {
            imgPath: "symbol_141_other_flat.svg",
            latex: "\\flat ",
          },
          {
            imgPath: "symbol_142_other_natural.svg",
            latex: "\\natural ",
          },
          {
            imgPath: "symbol_143_other_sharp.svg",
            latex: "\\sharp ",
          },
        ],
      },
    ],
  },
  {
    imgPath: "greek.png",
    name: "希腊字母",
    width: "60px",
    children: [
      {
        groupName: "小写",
        width: "30px",
        children: [
          {
            imgPath: "greek_1_lower_alpha.svg",
            latex: "\\alpha ",
            name: "/ˈælfə/",
          },
          {
            imgPath: "greek_2_lower_beta.svg",
            latex: "\\beta ",
            name: "/ˈbiːtə/, US: /ˈbeɪtə/",
          },
          {
            imgPath: "greek_3_lower_gammaa.svg",
            latex: "\\gamma ",
            name: "/ˈɡæmə/",
          },
          {
            imgPath: "greek_4_lower_deltaa.svg",
            latex: "\\delta ",
            name: "/ˈdɛltə/",
          },
          {
            imgPath: "greek_5_lower_epsilon.svg",
            latex: "\\epsilon ",
            name: "/ˈɛpsɪlɒn/",
          },
          {
            imgPath: "greek_6_lower_varepsilon.svg",
            latex: "\\varepsilon ",
            name: "/ˈɛpsɪlɒn/",
          },
          {
            imgPath: "greek_7_lower_zeta.svg",
            latex: "\\zeta ",
            name: "/ˈzeɪtə/",
          },
          {
            imgPath: "greek_8_lower_eta.svg",
            latex: "\\eta ",
            name: "/ˈeɪtə/",
          },
          {
            imgPath: "greek_9_lower_thetaa.svg",
            latex: "\\theta ",
            name: " /ˈθiːtə/",
          },
          {
            imgPath: "greek_10_lower_vartheta.svg",
            latex: "\\vartheta ",
            name: " /ˈθiːtə/",
          },
          {
            imgPath: "greek_11_lower_iota.svg",
            latex: "\\iota ",
            name: " /aɪˈoʊtə/",
          },
          {
            imgPath: "greek_12_lower_kappa.svg",
            latex: "\\kappa ",
            name: "/ˈkæpə/",
          },
          {
            imgPath: "greek_13_lower_lambdaa.svg",
            latex: "\\lambda ",
            name: "/ˈlæmdə/",
          },
          {
            imgPath: "greek_14_lower_mu.svg",
            latex: "\\mu ",
            name: "/mjuː/",
          },
          {
            imgPath: "greek_15_lower_nu.svg",
            latex: "\\nu ",
            name: "/njuː/",
          },
          {
            imgPath: "greek_16_lower_xia.svg",
            latex: "\\xi ",
            name: "/zaɪ, ksaɪ/",
          },
          {
            imgPath: "greek_17_lower_o.svg",
            latex: " o ",
            name: "/ˈɒmɪkrɒn/",
          },
          {
            imgPath: "greek_18_lower_pia.svg",
            latex: "\\pi ",
            name: "/paɪ/",
          },
          {
            imgPath: "greek_19_lower_varpi.svg",
            latex: "\\varpi ",
            name: "/paɪ/",
          },
          {
            imgPath: "greek_20_lower_rho.svg",
            latex: "\\rho ",
            name: "/roʊ/",
          },
          {
            imgPath: "greek_21_lower_varrho.svg",
            latex: "\\varrho ",
            name: "/roʊ/",
          },
          {
            imgPath: "greek_22_lower_sigmaa.svg",
            latex: "\\sigma ",
            name: "/ˈsɪɡmə/",
          },
          {
            imgPath: "greek_23_lower_varsigma.svg",
            latex: "\\varsigma ",
            name: "/ˈsɪɡmə/",
          },
          {
            imgPath: "greek_24_lower_tau.svg",
            latex: "\\tau ",
            name: "/taʊ, tɔː/",
          },
          {
            imgPath: "greek_25_lower_upsilona.svg",
            latex: "\\upsilon ",
            name: "/ˈʌpsɪlɒn/",
          },
          {
            imgPath: "greek_26_lower_phia.svg",
            latex: "\\phi ",
            name: "/faɪ/",
          },
          {
            imgPath: "greek_27_lower_varphi.svg",
            latex: "\\varphi ",
            name: "/faɪ/",
          },
          {
            imgPath: "greek_28_lower_chi.svg",
            latex: "\\chi ",
            name: "/kaɪ/",
          },
          {
            imgPath: "greek_29_lower_psia.svg",
            latex: "\\psi ",
            name: "/psaɪ/",
          },
          {
            imgPath: "greek_30_lower_omegaa.svg",
            latex: "\\omega ",
            name: "/oʊˈmeɪɡə/",
          },
        ],
      },
      {
        groupName: "大写",
        width: "30px",
        children: [
          {
            imgPath: "greek_31_upper_Gammab.svg",
            latex: "\\Gamma ",
            name: "/ˈɡæmə/",
          },
          {
            imgPath: "greek_32_upper_Deltab.svg",
            latex: "\\Delta ",
            name: "/ˈdɛltə/",
          },
          {
            imgPath: "greek_33_upper_Thetab.svg",
            latex: "\\Theta ",
            name: "/ˈθiːtə/",
          },
          {
            imgPath: "greek_34_upper_Lambdab.svg",
            latex: "\\Lambda ",
            name: "/ˈlæmdə/",
          },
          {
            imgPath: "greek_35_upper_Xib.svg",
            latex: "\\Xi ",
            name: "/zaɪ, ksaɪ/",
          },
          {
            imgPath: "greek_36_upper_Pib.svg",
            latex: "\\Pi ",
            name: "/paɪ/",
          },
          {
            imgPath: "greek_37_upper_Sigmab.svg",
            latex: "\\Sigma ",
            name: "/ˈsɪɡmə/",
          },
          {
            imgPath: "greek_38_upper_Upsilonb.svg",
            latex: "\\Upsilon ",
            name: "/ˈʌpsɪlɒn/",
          },
          {
            imgPath: "greek_39_upper_Phib.svg",
            latex: "\\Phi ",
            name: "/faɪ/",
          },
          {
            imgPath: "greek_40_upper_Psib.svg",
            latex: "\\Psi ",
            name: "/psaɪ/",
          },
          {
            imgPath: "greek_41_upper_Omegab.svg",
            latex: "\\Omega ",
            name: "/oʊˈmeɪɡə/",
          },
        ],
      },
      {
        groupName: "其他",
        width: "30px",
        children: [
          {
            imgPath: "greek_42_other_hbar.svg",
            latex: "\\hbar ",
            name: "h bar",
          },
          {
            imgPath: "greek_43_other_imath.svg",
            latex: "\\imath ",
            name: "数学i",
          },
          {
            imgPath: "greek_44_other_jmath.svg",
            latex: "\\jmath ",
            name: "数学j",
          },
          {
            imgPath: "greek_45_other_ell.svg",
            latex: "\\ell ",
            name: "数学l",
          },
          {
            imgPath: "greek_46_other_Re.svg",
            latex: "\\Re ",
            name: "实数",
          },
          {
            imgPath: "greek_47_other_Im.svg",
            latex: "\\Im ",
            name: "虚数",
          },
          {
            imgPath: "greek_48_other_aleph.svg",
            latex: "\\aleph ",
            name: "阿列夫",
          },
          {
            imgPath: "greek_49_other_beth.svg",
            latex: "\\beth ",
            name: "希伯来符号",
          },
          {
            imgPath: "greek_50_other_gimel.svg",
            latex: "\\gimel ",
            name: "希伯来符号",
          },
          {
            imgPath: "greek_51_other_daleth.svg",
            latex: "\\daleth ",
            name: "希伯来符号",
          },
          {
            imgPath: "greek_52_other_wp.svg",
            latex: "\\wp ",
            name: "-",
          },
          {
            imgPath: "greek_53_other_mho.svg",
            latex: "\\mho ",
            name: "-",
          },
          {
            imgPath: "greek_54_other_backepsilon.svg",
            latex: "\\backepsilon   ",
            name: "-",
          },
          {
            imgPath: "greek_55_other_partial.svg",
            latex: "\\partial ",
            name: "偏导符号",
          },
          {
            imgPath: "greek_56_other_eth.svg",
            latex: "\\eth ",
            name: "-",
          },
          {
            imgPath: "greek_57_other_Bbbk.svg",
            latex: "\\Bbbk ",
            name: "-",
          },
          {
            imgPath: "greek_58_other_complement.svg",
            latex: "\\complement ",
            name: "补集",
          },
          {
            imgPath: "greek_59_other_circleds.svg",
            latex: "\\circledS ",
            name: "圈S",
          },
          {
            imgPath: "greek_60_other_S.svg",
            latex: "\\S ",
            name: "章节符号",
          },
          {
            imgPath: "greek_61_other_mathbbABC.svg",
            latex: "\\mathbb{} ",
            name: "黑板报粗体",
          },
          {
            imgPath: "greek_62_other_mathfrakABC.svg",
            latex: "\\mathfrak{} ",
            name: "Fraktur体",
          },
          {
            imgPath: "greek_63_other_mathcalABC.svg",
            latex: "\\mathcal{} ",
            name: "手写体",
          },
          {
            imgPath: "greek_64_other_mathrmABC.svg",
            latex: "\\mathrm {}   ",
            name: "罗马体",
          },
          {
            imgPath: "greek_65_other_mathrmdef.svg",
            latex: "\\mathrm{def} ",
            name: "罗马体def",
          },
        ],
      },
    ],
  },
  {
    imgPath: "frac.png",
    name: "分数微分",
    width: "60px",
    children: [
      {
        groupName: "分数",
        children: [
          {
            imgPath: "frac_2_frac_tfrac.svg",
            latex: "\\tfrac{}{} ",
            name: "小分数",
          },
          {
            imgPath: "frac_3_frac_dif.svg",
            latex: "\\mathrm{d}t ",
            name: "微分",
          },
          {
            imgPath: "frac_4_frac_difa.svg",
            latex: "\\frac{\\mathrm{d} y}{\\mathrm{d} x} ",
            name: "微分",
          },
          {
            imgPath: "frac_5_frac_partial.svg",
            latex: "\\partial t ",
            name: "偏微分",
          },
          {
            imgPath: "frac_6_frac_partiala.svg",
            latex: "\\frac{\\partial y}{\\partial x} ",
            name: "偏微分",
          },
          {
            imgPath: "frac_7_frac_nabla.svg",
            latex: "\\nabla\\psi ",
            name: "Nabla算子",
          },
          {
            imgPath: "frac_8_frac_partialb.svg",
            latex: " \\frac{\\partial^2}{\\partial x_1\\partial x_2}y ",
            name: "偏微分",
            width: "110px",
          },
          {
            imgPath: "frac_9_frac_cfrac.svg",
            latex: "\\cfrac{1}{a + \\cfrac{7}{b + \\cfrac{2}{9}}} =c ",
            name: "连分数",
            width: "150px",
          },
          {
            imgPath: "frac_10_frac_cfraca.svg",
            latex:
              "\\begin{equation}\r\n  x = a_0 + \\cfrac{1}{a_1 \r\n          + \\cfrac{1}{a_2 \r\n          + \\cfrac{1}{a_3 + \\cfrac{1}{a_4} } } }\r\n\\end{equation}",
            name: "连分数",
            width: "200px",
          },
        ],
      },
      {
        groupName: "导数",
        children: [
          {
            imgPath: "frac_11_der_dot.svg",
            latex: "\\dot{} ",
            name: "一阶导数",
          },
          {
            imgPath: "frac_12_der_ddot.svg",
            latex: "\\ddot{} ",
            name: "二阶导数",
          },
          {
            imgPath: "frac_13_der_prime.svg",
            latex: "{}' ",
            name: "一阶导数",
          },
          {
            imgPath: "frac_14_der_primea.svg",
            latex: "{}'' ",
            name: "二阶导数",
          },
          {
            imgPath: "frac_15_der_primen.svg",
            latex: "{}^{(n)} ",
            name: "n阶导数",
          },
        ],
      },
      {
        groupName: "模算术",
        children: [
          {
            imgPath: "frac_16_mod_bmod.svg",
            latex: "a \\bmod b ",
            name: "模除",
          },
          {
            imgPath: "frac_17_mod_pmod.svg",
            latex: "a \\equiv b \\pmod{m} ",
            name: "同余",
            width: "120px",
          },
          {
            imgPath: "frac_18_mod_gcd.svg",
            latex: "\\gcd(m, n) ",
            name: "最大公约数",
            width: "100px",
          },
          {
            imgPath: "frac_19_mod_lcm.svg",
            latex: "\\operatorname{lcm}(m, n) ",
            name: "最小公倍数",
            width: "100px",
          },
        ],
      },
    ],
  },
  {
    imgPath: "sqrt.png",
    name: "根式角标",
    width: "60px",
    children: [
      {
        groupName: "根式",
        children: [
          {
            imgPath: "sqrt_1_sqrt_sqrt.svg",
            latex: "\\sqrt{} ",
            name: "开平方",
          },
          {
            imgPath: "sqrt_2_sqrt_sqrtn.svg",
            latex: "\\sqrt[]{} ",
            name: "开方",
          },
        ],
      },
      {
        groupName: "上下标",
        children: [
          {
            imgPath: "sqrt_3_superscript_topright.svg",
            latex: "^{} ",
            name: "上标",
          },
          {
            imgPath: "sqrt_4_superscript_bottomright.svg",
            latex: "_{} ",
            name: "下标",
          },
          {
            imgPath: "sqrt_5_superscript_right.svg",
            latex: "_{}^{} ",
            name: "混合上下标",
          },
          {
            imgPath: "sqrt_6_superscript_left.svg",
            latex: "_{}^{} ",
            name: "左侧混合上下标",
          },
          {
            imgPath: "sqrt_7_superscript_sideset.svg",
            latex: "\\sideset{_1^2}{_3^4}X_a^b ",
            name: "混合",
          },
        ],
      },
      {
        groupName: "重音符及其他",
        children: [
          {
            imgPath: "sqrt_8_other_hat.svg",
            latex: "\\hat{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_9_other_check.svg",
            latex: "\\check{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_10_other_grave.svg",
            latex: "\\grave{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_11_other_acute.svg",
            latex: "\\acute{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_12_other_tilde.svg",
            latex: "\\tilde{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_13_other_breve.svg",
            latex: "\\breve{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_14_other_bar.svg",
            latex: "\\bar{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_15_other_vec.svg",
            latex: "\\vec{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_16_other_not.svg",
            latex: "\\not{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_17_other_degree.svg",
            latex: "^{\\circ} ",
            name: "-",
          },
          {
            imgPath: "sqrt_18_other_widetilde.svg",
            latex: "\\widetilde{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_19_other_widehat.svg",
            latex: "\\widehat{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_20_other_overleftarrow.svg",
            latex: "\\overleftarrow{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_21_other_overrightarrow.svg",
            latex: "\\overrightarrow{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_22_other_overline_a.svg",
            latex: "\\overline{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_23_other_underline.svg",
            latex: "\\underline{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_24_other_overbrace.svg",
            latex: "\\overbrace{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_25_other_underbrace.svg",
            latex: "\\underbrace{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_26_other_overset.svg",
            latex: "\\overset{}{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_27_other_underset.svg",
            latex: "\\underset{}{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_28_other_stackrelfrown.svg",
            latex: "\\stackrel\\frown{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_29_other_overline_b.svg",
            latex: "\\overline{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_30_other_overleftrightarrow.svg",
            latex: "\\overleftrightarrow{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_31_other_oversetleftarrow.svg",
            latex: "\\overset{}{\\leftarrow} ",
            name: "-",
          },
          {
            imgPath: "sqrt_32_other_oversetrightarrow.svg",
            latex: "\\overset{}{\\rightarrow} ",
            name: "-",
          },
          {
            imgPath: "sqrt_33_other_xleftarrow.svg",
            latex: "\\xleftarrow[]{} ",
            name: "-",
          },
          {
            imgPath: "sqrt_34_other_xrightarrow.svg",
            latex: "\\xrightarrow[]{} ",
            name: "-",
          },
        ],
      },
    ],
  },
  {
    imgPath: "limit.png",
    name: "极限对数",
    width: "60px",
    children: [
      {
        groupName: "极限",
        children: [
          {
            imgPath: "limit_1_lim_lim.svg",
            latex: "\\lim  ",
            name: "极限",
          },
          {
            imgPath: "limit_2_lim_limto0.svg",
            latex: "\\lim_{x \\to 0} ",
            name: "极限",
          },
          {
            imgPath: "limit_3_lim_limtoinfty.svg",
            latex: "\\lim_{x \\to \\infty} ",
            name: "极限",
          },
          {
            imgPath: "limit_4_lim_limtf.svg",
            latex: "\\textstyle \\lim_{x \\to 0} ",
            name: "极限",
          },
          {
            imgPath: "limit_5_lim_max.svg",
            latex: "\\max_{} ",
            name: "极大",
          },
          {
            imgPath: "limit_6_lim_min.svg",
            latex: "\\min_{} ",
            name: "极小",
          },
        ],
      },
      {
        groupName: "对数指数",
        children: [
          {
            imgPath: "limit_7_log_log.svg",
            latex: "\\log_{}{} ",
            name: "对数",
          },
          {
            imgPath: "limit_8_log_lg.svg",
            latex: "\\lg_{}{} ",
            name: "常用对数",
          },
          {
            imgPath: "limit_9_log_ln.svg",
            latex: "\\ln_{}{} ",
            name: "自然对数",
          },
          {
            imgPath: "limit_10_log_exp.svg",
            latex: "\\exp ",
            name: "指数",
          },
        ],
      },
      {
        groupName: "界限",
        children: [
          {
            imgPath: "limit_11_bound_min.svg",
            latex: "\\min x ",
            name: "最小",
          },
          {
            imgPath: "limit_12_bound_max.svg",
            latex: "\\max y ",
            name: "最大",
          },
          {
            imgPath: "limit_13_bound_sup.svg",
            latex: "\\sup t ",
            name: "最小上界（上确界）",
          },
          {
            imgPath: "limit_14_bound_inf.svg",
            latex: "\\inf s ",
            name: "最大下界（下确界）",
          },
          {
            imgPath: "limit_15_bound_lim.svg",
            latex: "\\lim u ",
            name: "极限",
          },
          {
            imgPath: "limit_16_bound_limsup.svg",
            latex: "\\limsup w ",
            name: "上极限",
          },
          {
            imgPath: "limit_17_bound_liminf.svg",
            latex: "\\liminf v ",
            name: "下极限",
          },
          {
            imgPath: "limit_18_bound_dim.svg",
            latex: "\\dim p ",
            name: "维数",
          },
          {
            imgPath: "limit_19_bound_ker.svg",
            latex: "\\ker\\phi ",
            name: "零空间（核）",
          },
        ],
      },
    ],
  },
  {
    imgPath: "trig.png",
    name: "三角函数",
    width: "60px",
    children: [
      {
        groupName: "三角函数",
        children: [
          {
            imgPath: "trig_1_sin.svg",
            latex: "\\sin ",
            name: "正弦",
          },
          {
            imgPath: "trig_2_cos.svg",
            latex: "\\cos ",
            name: "余弦",
          },
          {
            imgPath: "trig_3_tan.svg",
            latex: "\\tan ",
            name: "正切",
          },
          {
            imgPath: "trig_4_cot.svg",
            latex: "\\cot ",
            name: "余切",
          },
          {
            imgPath: "trig_5_sec.svg",
            latex: "\\sec ",
            name: "正割",
          },
          {
            imgPath: "trig_6_csc.svg",
            latex: "\\csc ",
            name: "余割",
          },
        ],
      },
      {
        groupName: "反三角函数",
        children: [
          {
            imgPath: "trig_7_insin.svg",
            latex: "\\sin^{-1} ",
            name: "反正弦",
          },
          {
            imgPath: "trig_8_incos.svg",
            latex: "\\cos^{-1} ",
            name: "反余弦",
          },
          {
            imgPath: "trig_9_intan.svg",
            latex: "\\tan^{-1} ",
            name: "反正切",
          },
          {
            imgPath: "trig_10_incot.svg",
            latex: "\\cot^{-1} ",
            name: "反余切",
          },
          {
            imgPath: "trig_11_insec.svg",
            latex: "\\sec^{-1} ",
            name: "反正割",
          },
          {
            imgPath: "trig_12_incsc.svg",
            latex: "\\csc^{-1} ",
            name: "反余割",
          },
          {
            imgPath: "trig_13_arcsin.svg",
            latex: "\\arcsin ",
            name: "反正弦",
          },
          {
            imgPath: "trig_14_arccos.svg",
            latex: "\\arccos ",
            name: "反余弦",
          },
          {
            imgPath: "trig_15_arctan.svg",
            latex: "\\arctan ",
            name: "反正切",
          },
          {
            imgPath: "trig_16_arccot.svg",
            latex: "\\operatorname{arccot} ",
            name: "反余切",
          },
          {
            imgPath: "trig_17_arcsec.svg",
            latex: "\\operatorname{arcsec} ",
            name: "反正割",
          },
          {
            imgPath: "trig_18_arccsc.svg",
            latex: "\\operatorname{arccos} ",
            name: "反余割",
          },
        ],
      },
      {
        groupName: "双曲函数",
        children: [
          {
            imgPath: "trig_19_sinh.svg",
            latex: "\\sinh ",
            name: "双曲正弦",
          },
          {
            imgPath: "trig_20_cosh.svg",
            latex: "\\cosh ",
            name: "双曲余弦",
          },
          {
            imgPath: "trig_21_tanh.svg",
            latex: "\\tanh ",
            name: "双曲正切",
          },
          {
            imgPath: "trig_22_coth.svg",
            latex: "\\coth ",
            name: "双曲余切",
          },
          {
            imgPath: "trig_23_sech.svg",
            latex: "\\operatorname{sech} ",
            name: "双曲正割",
          },
          {
            imgPath: "trig_24_csch.svg",
            latex: "\\operatorname{csch} ",
            name: "双曲余割",
          },
        ],
      },
      {
        groupName: "反双曲函数",
        children: [
          {
            imgPath: "trig_25_insinh.svg",
            latex: "\\sinh^{-1} ",
            name: "反双曲正弦",
          },
          {
            imgPath: "trig_26_incosh.svg",
            latex: "\\cosh^{-1} ",
            name: "反双曲余弦",
          },
          {
            imgPath: "trig_27_intanh.svg",
            latex: "\\tanh^{-1} ",
            name: "反双曲正切",
          },
          {
            imgPath: "trig_28_incoth.svg",
            latex: "\\coth^{-1} ",
            name: "反双曲余切",
          },
          {
            imgPath: "trig_29_insech.svg",
            latex: "\\operatorname{sech}^{-1} ",
            name: "反双曲正割",
          },
          {
            imgPath: "trig_30_incsch.svg",
            latex: "\\operatorname{csch}^{-1} ",
            name: "反双曲余割",
          },
        ],
      },
    ],
  },
  {
    imgPath: "integral.png",
    name: "积分运算",
    width: "60px",
    children: [
      {
        groupName: "积分",
        children: [
          {
            imgPath: "integral_1_int.svg",
            latex: "\\int ",
            name: "积分",
          },
          {
            imgPath: "integral_2_inta.svg",
            latex: "\\int_{}^{} ",
            name: "积分",
          },
          {
            imgPath: "integral_3_intb.svg",
            latex: "\\int\\limits_{}^{} ",
            name: "积分",
          },
        ],
      },
      {
        groupName: "双重积分",
        children: [
          {
            imgPath: "integral_4_iint.svg",
            latex: "\\iint ",
            name: "双重积分",
          },
          {
            imgPath: "integral_5_iinta.svg",
            latex: "\\iint_{}^{} ",
            name: "双重积分",
          },
          {
            imgPath: "integral_6_iintb.svg",
            latex: "\\iint\\limits_{}^{} ",
            name: "双重积分",
          },
        ],
      },
      {
        groupName: "三重积分",
        children: [
          {
            imgPath: "integral_7_iiint.svg",
            latex: "\\iiint ",
            name: "三重积分",
          },
          {
            imgPath: "integral_8_iiinta.svg",
            latex: "\\iiint_{}^{} ",
            name: "三重积分",
          },
          {
            imgPath: "integral_9_iiintb.svg",
            latex: "\\iiint\\limits_{}^{} ",
            name: "三重积分",
          },
        ],
      },
      {
        groupName: "曲线积分",
        children: [
          {
            imgPath: "integral_10_oint.svg",
            latex: "\\oint ",
            name: "曲线积分",
          },
          {
            imgPath: "integral_11_ointa.svg",
            latex: "\\oint_{}^{} ",
            name: "曲线积分",
          },
        ],
      },
    ],
  },
  {
    imgPath: "sum.png",
    name: "大型运算",
    width: "60px",
    children: [
      {
        groupName: "求和",
        children: [
          {
            imgPath: "sum_1_sum_sum.svg",
            latex: "\\sum ",
            name: "求和",
          },
          {
            imgPath: "sum_2_sum_suma.svg",
            latex: "\\sum_{}^{} ",
            name: "求和",
          },
          {
            imgPath: "sum_3_sum_sumb.svg",
            latex: " {\\textstyle \\sum_{}^{}} ",
            name: "求和",
          },
        ],
      },
      {
        groupName: "乘积余积",
        children: [
          {
            imgPath: "sum_4_prod_prod.svg",
            latex: "\\prod ",
            name: "连乘积",
          },
          {
            imgPath: "sum_5_prod_proda.svg",
            latex: "\\prod_{}^{} ",
            name: "连乘积",
          },
          {
            imgPath: "sum_6_prod_prodb.svg",
            latex: " {\\textstyle \\prod_{}^{}} ",
            name: "连乘积",
          },
          {
            imgPath: "sum_7_prod_coprod.svg",
            latex: "\\coprod ",
            name: "余积",
          },
          {
            imgPath: "sum_8_prod_coproda.svg",
            latex: "\\coprod_{}^{} ",
            name: "余积",
          },
          {
            imgPath: "sum_9_prod_coprodb.svg",
            latex: " {\\textstyle \\coprod_{}^{}} ",
            name: "余积",
          },
        ],
      },
      {
        groupName: "并集交集",
        children: [
          {
            imgPath: "sum_10_cup_cup.svg",
            latex: "\\bigcup ",
            name: "并集",
          },
          {
            imgPath: "sum_11_cup_cupa.svg",
            latex: "\\bigcup_{}^{} ",
            name: "并集",
          },
          {
            imgPath: "sum_12_cup_cupb.svg",
            latex: " {\\textstyle \\bigcup_{}^{}} ",
            name: "并集",
          },
          {
            imgPath: "sum_13_cup_cap.svg",
            latex: "\\bigcap ",
            name: "交集",
          },
          {
            imgPath: "sum_14_cup_capa.svg",
            latex: "\\bigcap_{}^{} ",
            name: "交集",
          },
          {
            imgPath: "sum_15_cup_capb.svg",
            latex: " {\\textstyle \\bigcap_{}^{}} ",
            name: "交集",
          },
        ],
      },
      {
        groupName: "析取合取",
        children: [
          {
            imgPath: "sum_16_vee_vee.svg",
            latex: "\\bigvee ",
            name: "析取",
          },
          {
            imgPath: "sum_17_vee_veea.svg",
            latex: "\\bigvee_{}^{} ",
            name: "析取",
          },
          {
            imgPath: "sum_18_vee_veeb.svg",
            latex: " {\\textstyle \\bigvee_{}^{}} ",
            name: "析取",
          },
          {
            imgPath: "sum_19_vee_wedage.svg",
            latex: "\\bigwedge ",
            name: "合取",
          },
          {
            imgPath: "sum_20_vee_wedagea.svg",
            latex: "\\bigwedge_{}^{} ",
            name: "合取",
          },
          {
            imgPath: "sum_21_vee_wedageb.svg",
            latex: " {\\textstyle \\bigwedge_{}^{}} ",
            name: "合取",
          },
        ],
      },
    ],
  },
  {
    imgPath: "bracket.png",
    width: "60px",
    name: "括号取整",
    children: [
      {
        groupName: "括号",
        children: [
          {
            imgPath: "bracket_1_bracket_1.svg",
            latex: "\\left (  \\right ) ",
            name: "圆括号",
          },
          {
            imgPath: "bracket_3_bracket_3.svg",
            latex: "\\left [  \\right ] ",
            name: "方括号",
          },
          {
            imgPath: "bracket_4_bracket_4.svg",
            latex: "\\left \\langle  \\right \\rangle ",
            name: "角括号",
          },
          {
            imgPath: "bracket_5_bracket_5.svg",
            latex: "\\left \\{  \\right \\} ",
            name: "花括号",
          },
          {
            imgPath: "bracket_7_bracket_7.svg",
            latex: "\\left |  \\right | ",
            name: "单竖线，绝对值",
          },
          {
            imgPath: "bracket_2_bracket_2.svg",
            latex: "\\left \\|  \\right \\| ",
            name: "双竖线，范",
          },
          {
            imgPath: "bracket_6_bracket_6.svg",
            latex: "\\left \\lfloor  \\right \\rfloor ",
            name: "取整函数",
          },
          {
            imgPath: "bracket_8_bracket_8.svg",
            latex: "\\left \\lceil  \\right \\rceil ",
            name: "取顶函数",
          },
        ],
      },
      {
        groupName: "常用",
        children: [
          {
            imgPath: "bracket_9_common_binom.svg",
            latex: "\\binom{}{} ",
            name: "二项式系数",
            width: "90px",
          },
          {
            imgPath: "bracket_10_common_interval.svg",
            latex: "\\left [ 0,1 \\right ) ",
            name: "开闭区间",
          },
          {
            imgPath: "bracket_11_common_bra.svg",
            latex: "\\left \\langle \\psi \\right | ",
            name: "左矢",
          },
          {
            imgPath: "bracket_12_common_ket.svg",
            latex: "\\left | \\psi  \\right \\rangle ",
            name: "右矢",
          },
          {
            imgPath: "bracket_13_common_product.svg",
            latex: "\\left \\langle \\psi  | \\psi  \\right \\rangle ",
            name: "态矢量内积",
          },
        ],
      },
    ],
  },
  {
    imgPath: "matrix.png",
    width: "60px",
    name: "数组矩阵",
    children: [
      {
        width: "23%",
        children: [
          {
            imgPath: "matrix_1_matrix.svg",
            latex: "\\begin{matrix}…&…\\end{matrix}",
            name: "矩阵",
          },
          {
            imgPath: "matrix_2_bmatrix.svg",
            latex: "\\begin{bmatrix}…&…\\end{bmatrix}",
            name: "方括号矩阵",
          },
          {
            imgPath: "matrix_3_pmatrix.svg",
            latex: "\\begin{pmatrix}…&…\\end{pmatrix}",
            name: "圆括号矩阵",
          },
          {
            imgPath: "matrix_4_vmatrix.svg",
            latex: "\\begin{vmatrix}…&…\\end{vmatrix}",
            name: "单竖线矩阵",
          },
          {
            imgPath: "matrix_5_bigVmatrix.svg",
            latex: "\\begin{Vmatrix}…&…\\end{Vmatrix}",
            name: "双竖线矩阵",
          },
          {
            imgPath: "matrix_6_bigBmatrix.svg",
            latex: "\\begin{Bmatrix}…&…\\end{Bmatrix}",
            name: "花括号矩阵",
          },
          {
            imgPath: "matrix_7_leftmatrix.svg",
            latex: "\\left\\{\\begin{matrix}…&…\\end{matrix}\\right.",
            name: "左单括号矩阵",
          },
          {
            imgPath: "matrix_8_rightmatrix.svg",
            latex: "\\left.\\begin{matrix}…&…\\end{matrix}\\right\\}",
            name: "右单括号矩阵",
          },
          {
            imgPath: "matrix_9_case.svg",
            latex: "\\begin{cases}…& \\text{ if } x=…\\end{cases}",
            name: "条件等式",
            width: "25%",
          },
          {
            imgPath: "matrix_10_align.svg",
            latex: "\\begin{align*}…&…\\end{align*}",
            name: "多行对齐等式",
            width: "25%",
          },
        ],
      },
    ],
  },
  {
    imgPath: "algebra.png",
    width: "60px",
    name: "代数",
    children: [
      {
        width: "48%",
        children: [
          {
            imgPath: "algebra_1.png",
            latex: "\\left(x-1\\right)\\left(x+3\\right) ",
            name: "",
          },
          {
            imgPath: "algebra_2.png",
            latex: "\\sqrt{a^2+b^2} ",
            name: "",
          },
          {
            imgPath: "algebra_3.png",
            latex: "\\left ( \\frac{a}{b}\\right )^{n}= \\frac{a^{n}}{b^{n}} ",
            name: "",
          },
          {
            imgPath: "algebra_4.png",
            latex: "\\frac{a}{b}\\pm \\frac{c}{d}= \\frac{ad \\pm bc}{bd} ",
            name: "",
          },
          {
            imgPath: "algebra_5.png",
            latex: "\\frac{x^{2}}{a^{2}}-\\frac{y^{2}}{b^{2}}=1 ",
            name: "",
          },
          {
            imgPath: "algebra_6.png",
            latex:
              "\\frac{1}{\\sqrt{a}}=\\frac{\\sqrt{a}}{a},a\\ge 0\\frac{1}{\\sqrt{a}}=\\frac{\\sqrt{a}}{a},a\\ge 0 ",
            name: "",
          },
          {
            imgPath: "algebra_7.png",
            latex: "\\sqrt[n]{a^{n}}=\\left ( \\sqrt[n]{a}\\right )^{n} ",
            name: "",
          },
          {
            imgPath: "algebra_8.png",
            latex: "x ={-b \\pm \\sqrt{b^2-4ac}\\over 2a} ",
            name: "",
          },
          {
            imgPath: "algebra_9.png",
            latex: "y-y_{1}=k \\left( x-x_{1}\\right) ",
            name: "",
          },
          {
            imgPath: "algebra_10.png",
            latex:
              "\\left\\{\\begin{matrix} \r\n  x=a + r\\text{cos}\\theta \\\\  \r\n  y=b + r\\text{sin}\\theta \r\n\\end{matrix}\\right. ",
            name: "",
          },
          {
            imgPath: "algebra_11.png",
            latex:
              "\\begin{array}{l} \r\n  \\text{对于方程形如：}x^{3}-1=0 \\\\ \r\n  \\text{设}\\text{:}\\omega =\\frac{-1+\\sqrt{3}i}{2} \\\\ \r\n  x_{1}=1,x_{2}= \\omega =\\frac{-1+\\sqrt{3}i}{2} \\\\ \r\n  x_{3}= \\omega ^{2}=\\frac{-1-\\sqrt{3}i}{2} \r\n\\end{array} ",
            name: "",
          },
          {
            imgPath: "algebra_12.png",
            latex:
              "\\begin{array}{l} \r\n  a\\mathop{{x}}\\nolimits^{{2}}+bx+c=0 \\\\ \r\n  \\Delta =\\mathop{{b}}\\nolimits^{{2}}-4ac \\\\ \r\n  \\left\\{\\begin{matrix} \r\n  \\Delta \\gt 0\\text{方程有两个不相等的实根} \\\\ \r\n  \\Delta = 0\\text{方程有两个不相等的实根} \\\\ \r\n  \\Delta \\lt 0\\text{方程有两个不相等的实根} \r\n\\end{matrix}\\right.    \r\n\\end{array} ",
            name: "",
          },
          {
            imgPath: "algebra_13.png",
            latex:
              "\\begin{array}{l} \r\n  a\\mathop{{x}}\\nolimits^{{2}}+bx+c=0 \\\\ \r\n  \\Delta =\\mathop{{b}}\\nolimits^{{2}}-4ac \\\\ \r\n  \\mathop{{x}}\\nolimits_{{1,2}}=\\frac{{-b \\pm  \r\n  \\sqrt{{\\mathop{{b}}\\nolimits^{{2}}-4ac}}}}{{2a}} \\\\ \r\n  \\mathop{{x}}\\nolimits_{{1}}+\\mathop{{x}}\\nolimits_{{2}}=-\\frac{{b}}{{a}} \\\\ \r\n  \\mathop{{x}}\\nolimits_{{1}}\\mathop{{x}}\\nolimits_{{2}}=\\frac{{c}}{{a}} \r\n\\end{array} ",
            name: "",
          },
        ],
      },
    ],
  },
  {
    imgPath: "geometry.png",
    width: "60px",
    name: "几何",
    children: [
      {
        width: "48%",
        children: [
          {
            imgPath: "geometry_1.png",
            latex: "\\Delta A B C",
            name: "",
          },
          {
            imgPath: "geometry_2.png",
            latex: "a \\parallel c,b \\parallel c \\Rightarrow a \\parallel b ",
            name: "",
          },
          {
            imgPath: "geometry_3.png",
            latex:
              "l \\perp \\beta ,l \\subset \\alpha \\Rightarrow \\alpha \\perp \\beta",
            name: "",
          },
          {
            imgPath: "geometry_4.png",
            latex:
              "\\left.\\begin{matrix} \r\n  a \\perp \\alpha \\\\ \r\n  b \\perp \\alpha \r\n\\end{matrix}\\right\\}\\Rightarrow a \\parallel b",
            name: "",
          },
          {
            imgPath: "geometry_5.png",
            latex:
              "P \\in \\alpha ,P \\in \\beta , \\alpha \\cap \\beta =l \\Rightarrow P \\in l ",
            name: "",
          },
          {
            imgPath: "geometry_6.png",
            latex:
              "\\alpha \\perp \\beta , \\alpha \\cap \\beta =l,a \\subset \\alpha ,a \\perp l  \r\n  \\Rightarrow a \\perp \\beta ",
            name: "",
          },
          {
            imgPath: "geometry_7.png",
            latex:
              "\\left.\\begin{matrix} \r\n  a \\subset \\beta ,b \\subset \\beta ,a \\cap b=P \\\\  \r\n  a \\parallel \\partial ,b \\parallel \\partial  \r\n\\end{matrix}\\right\\}\\Rightarrow \\beta \\parallel \\alpha ",
            name: "",
          },
          {
            imgPath: "geometry_8.png",
            latex:
              "\\alpha \\parallel \\beta , \\gamma \\cap \\alpha =a, \\gamma \\cap \\beta =b \\Rightarrow a \\parallel b ",
            name: "",
          },
          {
            imgPath: "geometry_9.png",
            latex:
              "A \\in l,B \\in l,A \\in \\alpha ,B \\in \\alpha \\Rightarrow l \\subset \\alpha ",
            name: "",
          },
          {
            imgPath: "geometry_10.png",
            latex:
              "\\left.\\begin{matrix} \r\n  m \\subset \\alpha ,n \\subset \\alpha ,m \\cap n=P \\\\  \r\n  a \\perp m,a \\perp n \r\n\\end{matrix}\\right\\}\\Rightarrow a \\perp \\alpha ",
            name: "",
          },
          {
            imgPath: "geometry_11.png",
            latex:
              "\\begin{array}{c} \r\n  \\text{直角三角形中,直角边长a,b,斜边边长c} \\\\ \r\n  a^{2}+b^{2}=c^{2} \r\n\\end{array}",
            name: "",
          },
        ],
      },
    ],
  },
  {
    imgPath: "inequality.png",
    width: "60px",
    name: "不等式",
    children: [
      {
        width: "48%",
        children: [
          {
            imgPath: "inequality_1.png",
            latex: "a > b,b > c \\Rightarrow a > c ",
            name: "",
          },
          {
            imgPath: "inequality_2.png",
            latex: "a > b,c > d \\Rightarrow a+c > b+d ",
            name: "",
          },
          {
            imgPath: "inequality_3.png",
            latex: "a > b > 0,c > d > 0 \\Rightarrow ac bd ",
            name: "",
          },
          {
            imgPath: "inequality_4.png",
            latex:
              "\\begin{array}{c} \r\n  a \\gt b,c \\gt 0 \\Rightarrow ac \\gt bc \\\\ \r\n  a \\gt b,c \\lt 0 \\Rightarrow ac \\lt bc \r\n\\end{array}",
            name: "",
          },
          {
            imgPath: "inequality_5.png",
            latex:
              "\\left | a-b \\right | \\geqslant \\left | a \\right | -\\left | b \\right | ",
            name: "",
          },
          {
            imgPath: "inequality_6.png",
            latex:
              "-\\left | a \\right |\\leq a\\leqslant \\left | a \\right |   ",
            name: "",
          },
          {
            imgPath: "inequality_7.png",
            latex:
              "\\left | a \\right |\\leqslant b \\Rightarrow -b \\leqslant a \\leqslant \\left | b \\right | ",
            name: "",
          },
          {
            imgPath: "inequality_8.png",
            latex:
              "\\left | a+b \\right | \\leqslant \\left | a \\right | + \\left | b \\right | ",
            name: "",
          },
          {
            imgPath: "inequality_9.png",
            latex:
              "\\begin{array}{c} \r\n  a \\gt b \\gt 0,n \\in N^{\\ast},n \\gt 1 \\\\ \r\n  \\Rightarrow a^{n}\\gt b^{n}, \\sqrt[n]{a}\\gt \\sqrt[n]{b} \r\n\\end{array}",
            name: "",
          },
          {
            imgPath: "inequality_10.png",
            latex:
              "\\left( \\sum_{k=1}^n a_k b_k \\right)^{\\!\\!2}\\leq   \r\n\\left( \\sum_{k=1}^n a_k^2 \\right) \\left( \\sum_{k=1}^n b_k^2 \\right) ",
            name: "",
          },
          {
            imgPath: "inequality_11.png",
            latex:
              "\\begin{array}{c} \r\n  a,b \\in R^{+} \\\\  \r\n  \\Rightarrow \\frac{a+b}{{2}}\\ge \\sqrt{ab} \\\\  \r\n  \\left( \\text{当且仅当}a=b\\text{时取“}=\\text{”号}\\right) \r\n\\end{array}",
            name: "",
          },
          {
            imgPath: "inequality_12.png",
            latex:
              "\\begin{array}{c} \r\n  a,b \\in R \\\\  \r\n  \\Rightarrow a^{2}+b^{2}\\gt 2ab \\\\  \r\n  \\left( \\text{当且仅当}a=b\\text{时取“}=\\text{”号}\\right) \r\n\\end{array}",
            name: "",
          },
          {
            width: "100%",
            imgPath: "inequality_13.png",
            latex:
              "\\begin{array}{c} \r\n  H_{n}=\\frac{n}{\\sum \\limits_{i=1}^{n}\\frac{1}{x_{i}}}= \\frac{n}{\\frac{1}{x_{1}}+ \\frac{1}{x_{2}}+ \\cdots + \\frac{1}{x_{n}}} \\\\ G_{n}=\\sqrt[n]{\\prod \\limits_{i=1}^{n}x_{i}}= \\sqrt[n]{x_{1}x_{2}\\cdots x_{n}} \\\\ A_{n}=\\frac{1}{n}\\sum \\limits_{i=1}^{n}x_{i}=\\frac{x_{1}+ x_{2}+ \\cdots + x_{n}}{n} \\\\ Q_{n}=\\sqrt{\\sum \\limits_{i=1}^{n}x_{i}^{2}}= \\sqrt{\\frac{x_{1}^{2}+ x_{2}^{2}+ \\cdots + x_{n}^{2}}{n}} \\\\ H_{n}\\leq G_{n}\\leq A_{n}\\leq Q_{n} \r\n\\end{array}",
            name: "",
          },
        ],
      },
    ],
  },
  {
    imgPath: "calculous.png",
    width: "60px",
    name: "积分",
    children: [
      {
        width: "48%",
        children: [
          {
            imgPath: "calculous_1.png",
            latex: "\\frac{\\mathrm{d}}{\\mathrm{d}x}x^n=nx^{n-1} ",
            name: "",
          },
          {
            imgPath: "calculous_2.png",
            latex: "\\frac{\\mathrm{d}}{\\mathrm{d}x}e^{ax}=a\\,e^{ax} ",
            name: "",
          },
          {
            imgPath: "calculous_3.png",
            latex: "\\frac{\\mathrm{d}}{\\mathrm{d}x}\\ln(x)=\\frac{1}{x} ",
            name: "",
          },
          {
            imgPath: "calculous_4.png",
            latex: "\\frac{\\mathrm{d}}{\\mathrm{d}x}\\sin x=\\cos x ",
            name: "",
          },
          {
            imgPath: "calculous_5.png",
            latex: "\\frac{\\mathrm{d}}{\\mathrm{d}x}\\cos x=-\\sin x ",
            name: "",
          },
          {
            imgPath: "calculous_6.png",
            latex: "\\int k\\mathrm{d}x = kx+C ",
            name: "",
          },
          {
            imgPath: "calculous_7.png",
            latex: "\\frac{\\mathrm{d}}{\\mathrm{d}x}\\tan x=\\sec^2 x ",
            name: "",
          },
          {
            imgPath: "calculous_8.png",
            latex: "\\frac{\\mathrm{d}}{\\mathrm{d}x}\\cot x=-\\csc^2 x ",
            name: "",
          },
          {
            imgPath: "calculous_9.png",
            latex:
              "\\int \\frac{1}{x}\\mathrm{d}x= \\ln \\left| x \\right| +C ",
            name: "",
          },
          {
            imgPath: "calculous_10.png",
            latex:
              "\\int \\frac{1}{\\sqrt{1-x^{2}}}\\mathrm{d}x= \\arcsin x +C ",
            name: "",
          },
          {
            imgPath: "calculous_11.png",
            latex: "\\int \\frac{1}{1+x^{2}}\\mathrm{d}x= \\arctan x +C ",
            name: "",
          },
          {
            imgPath: "calculous_12.png",
            latex:
              "\\int u \\frac{\\mathrm{d}v}{\\mathrm{d}x}\\,\\mathrm{d}x=uv-\\int \\frac{\\mathrm{d}u}{\\mathrm{d}x}v\\,\\mathrm{d}x ",
            name: "",
          },
          {
            imgPath: "calculous_13.png",
            latex:
              "f(x) = \\int_{-\\infty}^\\infty  \\hat f(x)\\xi\\,e^{2 \\pi i \\xi x}  \\,\\mathrm{d}\\xi ",
            name: "",
          },
          {
            imgPath: "calculous_14.png",
            latex:
              "\\int x^{\\mu}\\mathrm{d}x=\\frac{x^{\\mu +1}}{\\mu +1}+C, \\left({\\mu \\neq -1}\\right) ",
            name: "",
          },
        ],
      },
    ],
  },
  {
    imgPath: "array.png",
    width: "60px",
    name: "矩阵",
    children: [
      {
        width: "48%",
        children: [
          {
            imgPath: "array_1.png",
            latex:
              "\\begin{pmatrix}  \r\n  1 & 0 \\\\  \r\n  0 & 1  \r\n\\end{pmatrix} ",
            name: "",
          },
          {
            imgPath: "array_2.png",
            latex:
              "\\begin{pmatrix}  \r\n  a_{11} & a_{12} & a_{13} \\\\  \r\n  a_{21} & a_{22} & a_{23} \\\\  \r\n  a_{31} & a_{32} & a_{33}  \r\n\\end{pmatrix} ",
            name: "",
          },
          {
            imgPath: "array_3.png",
            latex:
              "\\begin{pmatrix}  \r\n  a_{11} & \\cdots & a_{1n} \\\\  \r\n  \\vdots & \\ddots & \\vdots \\\\  \r\n  a_{m1} & \\cdots & a_{mn}  \r\n\\end{pmatrix} ",
            name: "",
          },
          {
            imgPath: "array_4.png",
            latex:
              "\\begin{array}{c} \r\n  A=A^{T}  \\\\ \r\n  A=-A^{T} \r\n\\end{array}",
            name: "",
          },
          {
            imgPath: "array_5.png",
            latex:
              "O = \\begin{bmatrix}  \r\n  0 & 0 & \\cdots & 0 \\\\  \r\n  0 & 0 & \\cdots & 0 \\\\  \r\n  \\vdots & \\vdots & \\ddots & \\vdots \\\\  \r\n  0 & 0 & \\cdots & 0  \r\n\\end{bmatrix} ",
            name: "",
          },
          {
            imgPath: "array_6.png",
            latex:
              "A_{m\\times n}=  \r\n\\begin{bmatrix}  \r\n  a_{11}& a_{12}& \\cdots  & a_{1n} \\\\  \r\n  a_{21}& a_{22}& \\cdots  & a_{2n} \\\\  \r\n  \\vdots & \\vdots & \\ddots & \\vdots \\\\  \r\n  a_{m1}& a_{m2}& \\cdots  & a_{mn}  \r\n\\end{bmatrix}  \r\n=\\left [ a_{ij}\\right ] ",
            name: "",
          },
          {
            imgPath: "array_7.png",
            latex:
              "\\begin{array}{c} \r\n  A={\\left[ a_{ij}\\right]_{m \\times n}},B={\\left[ b_{ij}\\right]_{n \\times s}} \\\\  \r\n  c_{ij}= \\sum \\limits_{k=1}^{{n}}a_{ik}b_{kj} \\\\  \r\n  C=AB=\\left[ c_{ij}\\right]_{m \\times s}  \r\n  = \\left[ \\sum \\limits_{k=1}^{n}a_{ik}b_{kj}\\right]_{m \\times s} \r\n\\end{array}",
            name: "",
          },
          {
            imgPath: "array_8.png",
            latex:
              "\\mathbf{V}_1 \\times \\mathbf{V}_2 =  \r\n\\begin{vmatrix}  \r\n  \\mathbf{i}& \\mathbf{j}& \\mathbf{k} \\\\  \r\n  \\frac{\\partial X}{\\partial u}& \\frac{\\partial Y}{\\partial u}& 0 \\\\  \r\n  \\frac{\\partial X}{\\partial v}& \\frac{\\partial Y}{\\partial v}& 0 \\\\  \r\n\\end{vmatrix} ",
            name: "",
          },
        ],
      },
    ],
  },
  {
    imgPath: "trigonometry.png",
    width: "60px",
    name: "三角",
    children: [
      {
        width: "48%",
        children: [
          {
            imgPath: "trigonometry_1.png",
            latex: "e^{i \\theta} ",
            name: "",
          },
          {
            imgPath: "trigonometry_2.png",
            latex: "\\left(\\frac{\\pi}{2}-\\theta \\right ) ",
            name: "",
          },
          {
            imgPath: "trigonometry_3.png",
            latex:
              "\\text{sin}^{2}\\frac{\\alpha}{2}=\\frac{1- \\text{cos}\\alpha}{2} ",
            name: "",
          },
          {
            imgPath: "trigonometry_4.png",
            latex:
              "\\text{cos}^{2}\\frac{\\alpha}{2}=\\frac{1+ \\text{cos}\\alpha}{2} ",
            name: "",
          },
          {
            imgPath: "trigonometry_5.png",
            latex:
              "\\text{tan}\\frac{\\alpha}{2}=\\frac{\\text{sin}\\alpha}{1+ \\text{cos}\\alpha} ",
            name: "",
          },
          {
            imgPath: "trigonometry_6.png",
            latex:
              "\\sin \\alpha + \\sin \\beta =2 \\sin \\frac{\\alpha + \\beta}{2}\\cos \\frac{\\alpha - \\beta}{2} ",
            name: "",
          },
          {
            imgPath: "trigonometry_7.png",
            latex:
              "\\sin \\alpha - \\sin \\beta =2 \\cos \\frac{\\alpha + \\beta}{2}\\sin \\frac{\\alpha - \\beta}{2} ",
            name: "",
          },
          {
            imgPath: "trigonometry_8.png",
            latex:
              "\\cos \\alpha + \\cos \\beta =2 \\cos \\frac{\\alpha + \\beta}{2}\\cos \\frac{\\alpha - \\beta}{2} ",
            name: "",
          },
          {
            imgPath: "trigonometry_9.png",
            latex:
              "\\cos \\alpha - \\cos \\beta =-2\\sin \\frac{\\alpha + \\beta}{2}\\sin \\frac{\\alpha - \\beta}{2} ",
            name: "",
          },
          {
            imgPath: "trigonometry_10.png",
            latex: "a^{2}=b^{2}+c^{2}-2bc\\cos A ",
            name: "",
          },
          {
            imgPath: "trigonometry_11.png",
            latex:
              "\\frac{\\sin A}{a}=\\frac{\\sin B}{b}=\\frac{\\sin C}{c}=\\frac{1}{2R} ",
            name: "",
          },
          {
            imgPath: "trigonometry_12.png",
            latex:
              "\\sin \\left ( \\frac{\\pi}{2}-\\alpha \\right ) = \\cos \\alpha ",
            name: "",
          },
          {
            imgPath: "trigonometry_13.png",
            latex:
              "\\sin \\left ( \\frac{\\pi}{2}+\\alpha \\right ) = \\cos \\alpha ",
            name: "",
          },
        ],
      },
    ],
  },
  {
    imgPath: "statistics.png",
    width: "60px",
    name: "统计",
    children: [
      {
        width: "48%",
        children: [
          {
            imgPath: "statistics_1.png",
            latex: "C_{r}^{n} ",
            name: "",
          },
          {
            imgPath: "statistics_2.png",
            latex: "\\frac{n!}{r!(n-r)!} ",
            name: "",
          },
          {
            imgPath: "statistics_3.png",
            latex: "\\sum_{i=1}^{n}{X_i} ",
            name: "",
          },
          {
            imgPath: "statistics_4.png",
            latex: "\\sum_{i=1}^{n}{X_i^2} ",
            name: "",
          },
          {
            imgPath: "statistics_5.png",
            latex: "X_1, \\cdots,X_n ",
            name: "",
          },
          {
            imgPath: "statistics_6.png",
            latex: "\\frac{x-\\mu}{\\sigma} ",
            name: "",
          },
          {
            imgPath: "statistics_7.png",
            latex: "\\sum_{i=1}^{n}{(X_i - \\overline{X})^2} ",
            name: "",
          },
          {
            imgPath: "statistics_8.png",
            latex:
              "\\begin{array}{c} \r\n  \\text{若}P \\left( AB \\right) =P \\left( A \\right) P \\left( B \\right) \\\\  \r\n  \\text{则}P \\left( A \\left| B\\right. \\right) =P \\left({B}\\right) \r\n\\end{array}",
            name: "",
          },
          {
            imgPath: "statistics_9.png",
            latex: "P(E) ={n \\choose k}p^k (1-p)^{n-k} ",
            name: "",
          },
          {
            imgPath: "statistics_10.png",
            latex:
              "P \\left( A \\right) = \\lim \\limits_{n \\to \\infty}f_{n}\\left ( A \\right ) ",
            name: "",
          },
          {
            imgPath: "statistics_11.png",
            latex:
              "P \\left( \\bigcup \\limits_{i=1}^{+ \\infty}A_{i}\\right) = \\prod \\limits_{i=1}^{+ \\infty}P{\\left( A_{i}\\right)} ",
            name: "",
          },
          {
            imgPath: "statistics_12.png",
            latex:
              "\\begin{array}{c} \r\n  P \\left( \\emptyset \\right) =0 \\\\ \r\n  P \\left( S \\right) =1 \r\n\\end{array}",
            name: "",
          },
          {
            imgPath: "statistics_13.png",
            latex:
              "\\begin{array}{c} \r\n  \\forall A \\in S \\\\ \r\n  P \\left( A \\right) \\ge 0 \r\n\\end{array}",
            name: "",
          },
          {
            imgPath: "statistics_14.png",
            latex:
              "P \\left( \\bigcup \\limits_{i=1}^{n}A_{i}\\right) = \\prod \\limits_{i=1}^{n}P \\left( A_{i}\\right) ",
            name: "",
          },
          {
            imgPath: "statistics_15.png",
            latex:
              "\\begin{array}{c} \r\n  S= \\binom{N}{n},A_{k}=\\binom{M}{k}\\cdot \\binom{N-M}{n-k} \\\\ \r\n  P\\left ( A_{k}\\right ) = \\frac{\\binom{M}{k}\\cdot \\binom{N-M}{n-k}}{\\binom{N}{n}} \r\n\\end{array}",
            name: "",
          },
          {
            imgPath: "statistics_16.png",
            latex:
              "\\begin{array}{c} \r\n  P_{n}=n! \\\\ \r\n  A_{n}^{k}=\\frac{n!}{\\left( n-k \\left) !\\right. \\right.} \r\n\\end{array}",
            name: "",
          },
        ],
      },
    ],
  },
  {
    imgPath: "sequence.png",
    width: "60px",
    name: "数列",
    children: [
      {
        width: "48%",
        children: [
          {
            imgPath: "sequence_1.png",
            latex: "a_{n}=a_{1}q^{n-1} ",
            name: "",
          },
          {
            imgPath: "sequence_2.png",
            latex: "a_{n}=a_{1}+ \\left( n-1 \\left) d\\right. \\right. ",
            name: "",
          },
          {
            imgPath: "sequence_3.png",
            latex: "S_{n}=na_{1}+\\frac{n \\left( n-1 \\right)}{{2}}d ",
            name: "",
          },
          {
            imgPath: "sequence_4.png",
            latex: "S_{n}=\\frac{n \\left( a_{1}+a_{n}\\right)}{2} ",
            name: "",
          },
          {
            imgPath: "sequence_5.png",
            latex:
              "\\frac{1}{n \\left( n+k \\right)}= \\frac{1}{k}\\left( \\frac{1}{n}-\\frac{1}{n+k}\\right) ",
            name: "",
          },
          {
            imgPath: "sequence_6.png",
            latex:
              "\\frac{1}{n^{2}-1}= \\frac{1}{2}\\left( \\frac{1}{n-1}-\\frac{1}{n+1}\\right) ",
            name: "",
          },
          {
            imgPath: "sequence_7.png",
            latex:
              "\\frac{1}{4n^{2}-1}=\\frac{1}{2}\\left( \\frac{1}{2n-1}-\\frac{1}{2n+1}\\right) ",
            name: "",
          },
          {
            imgPath: "sequence_8.png",
            latex:
              "\\frac{n+1}{n \\left( n-1 \\left) \\cdot 2^{n}\\right. \\right.}= \\frac{1}{\\left( n-1 \\left) \\cdot 2^{n-1}\\right. \\right.}-\\frac{1}{n \\cdot 2^{n}} ",
            name: "",
          },
          {
            imgPath: "sequence_9.png",
            latex:
              "\\begin{array}{c} \r\n  \\text{若}\\left \\{a_{n}\\right \\}、\\left \\{b_{n}\\right \\}\\text{为等差数列}, \\\\ \r\n  \\text{则}\\left \\{a_{n}+ b_{n}\\right \\}\\text{为等差数列} \r\n\\end{array}",
            name: "",
          },
          {
            imgPath: "sequence_10.png",
            latex:
              "(1+x)^{n} =1 + \\frac{nx}{1!} + \\frac{n(n-1)x^{2}}{2!} + \\cdots ",
            name: "",
          },
        ],
      },
    ],
  },
  {
    imgPath: "physics.png",
    width: "60px",
    name: "物理",
    children: [
      {
        width: "48%",
        children: [
          {
            imgPath: "physics_1.png",
            latex:
              "\\sum {{{ \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over F} }_i}} = \\frac{{d \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over v} }}{{dt}} = 0 ",
            name: "",
          },
          {
            imgPath: "physics_2.png",
            latex:
              "\\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over F}  = m \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}}  \\over a}  = m \\frac{{{d^2} \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over r} }}{{d{t^2}}} ",
            name: "",
          },
          {
            imgPath: "physics_3.png",
            latex:
              "{{ \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over F} }_{12}} =  - {{ \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}}  \\over F} }_{21}} ",
            name: "",
          },
          {
            imgPath: "physics_4.png",
            latex: "{E_p} = -\\frac{{GMm}}{r} ",
            name: "",
          },
          {
            imgPath: "physics_5.png",
            latex:
              "\\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}}  \\over F}  = k \\frac{{Qq}}{{{r^2}}} \\hat{r} ",
            name: "",
          },
          {
            imgPath: "physics_6.png",
            latex:
              "\\oint_L { \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over E} } \\cdot { \\rm{d}} \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}}  \\over l}  = 0 ",
            name: "",
          },
          {
            imgPath: "physics_7.png",
            latex:
              "d \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over B} = \\frac{{{ \\mu _0}}}{{4 \\pi }} \\frac{{Idl \\times \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over r} }}{{{r^3}}} =  \\frac{{{ \\mu _0}}}{{4 \\pi }} \\frac{{Idl \\sin \\theta }}{{{r^2}}} ",
            name: "",
          },
          {
            imgPath: "physics_8.png",
            latex: "d \\vec{F}= Id \\vec{l} \\times \\vec{B} ",
            name: "",
          },
          {
            imgPath: "physics_9.png",
            latex: "E = n{{ \\Delta \\Phi } \\over {\\Delta {t} }} ",
            name: "",
          },
          {
            imgPath: "physics_10.png",
            latex:
              "\\mathop \\Phi \\nolimits_e = \\oint { \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over E} \\cdot {d \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over S}}  = {1 \\over {{\\varepsilon _0}}}\\sum {q} } ",
            name: "",
          },
          {
            imgPath: "physics_11.png",
            latex:
              "\\oint { \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over E} \\cdot {d\\mathord{\\buildrel{\\lower3pt\\hbox{$\\scriptscriptstyle\\rightharpoonup$}}\\over l}}  =  - {{d{\\varphi _B}} \\over {dt}}} ",
            name: "",
          },
          {
            imgPath: "physics_12.png",
            latex:
              "\\oint { \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over B} \\cdot {d \\mathord{ \\buildrel{ \\lower3pt \\hbox{$ \\scriptscriptstyle \\rightharpoonup$}} \\over l}}  = { \\mu _0}} I + { \\mu _0}{I_d} ",
            name: "",
          },
          {
            imgPath: "physics_13.png",
            latex: "Q = I ^ { 2 } R \\mathrm { t } ",
            name: "",
          },
          {
            imgPath: "physics_14.png",
            latex: "F = G{{Mm} \\over {{r^2}}} ",
            name: "",
          },
          {
            imgPath: "physics_15.png",
            latex: "{E_k} = hv - {W_0} ",
            name: "",
          },
          {
            imgPath: "physics_16.png",
            latex:
              "\\lambda = \\frac{{ \\frac{{{c^2}}}{v}}}{{ \\frac{{m{c^2}}}{h}}} = \\frac{h}{{mv}} = \\frac{h}{p} ",
            name: "",
          },
          {
            imgPath: "physics_17.png",
            latex: "\\Delta {x} \\Delta {p} \\ge \\frac{h}{{4 \\pi }} ",
            name: "",
          },
          {
            imgPath: "physics_18.png",
            latex: "l = {l_0} \\sqrt {1 - {{( \\frac{v}{c})}^2}} ",
            name: "",
          },
          {
            imgPath: "physics_19.png",
            latex: "{y_0} = A \\cos ( \\omega {t} + { \\varphi _0}) ",
            name: "",
          },
          {
            imgPath: "physics_20.png",
            latex:
              "y(t) = A \\cos ( \\frac{{2 \\pi {x}}}{ \\lambda } +  \\varphi ) ",
            name: "",
          },
          {
            imgPath: "physics_21.png",
            latex:
              "\\begin{array}{l}  \r\n  \\nabla \\cdot \\mathbf{E} =\\cfrac{\\rho}{\\varepsilon _0}  \\\\  \r\n  \\nabla \\cdot \\mathbf{B} = 0 \\\\  \r\n  \\nabla \\times  \\mathbf{E} = -\\cfrac{\\partial \\mathbf{B}}{\\partial t }  \\\\  \r\n  \\nabla \\times  \\mathbf{B} = \\mu _0\\mathbf{J} + \\mu _0\\varepsilon_0 \\cfrac{\\partial \\mathbf{E}}{\\partial t }   \r\n\\end{array} ",
            name: "",
          },
          {
            imgPath: "physics_22.png",
            latex:
              "\r\n\\begin{array}{l}  \r\n  {\\huge \\unicode{8751}}_\\mathbb{S}  \\mathbf{E} \\cdot\\mathrm{d}s= \\cfrac{Q}{\\varepsilon_0}  \\\\  \r\n  {\\huge \\unicode{8751}}_\\mathbb{S}  \\mathbf{B} \\cdot\\mathrm{d}s= 0 \\\\  \r\n  {\\huge \\oint}_{\\mathbb{L}}^{} \\mathbf{E} \\cdot \\mathrm{d}l=-\\cfrac{\\mathrm{d}\\Phi _{\\mathbf{B}}}{\\mathrm{d}t }  \\\\  \r\n  {\\huge \\oint}_{\\mathbb{L}}^{} \\mathbf{B} \\cdot \\mathrm{d}l=\\mu_0I+ \\mu_0 \\varepsilon_0\\cfrac{\\mathrm{d}\\Phi _{\\mathbf{E}}}{\\mathrm{d}t }   \r\n\\end{array} ",
            name: "",
          },
          {
            imgPath: "physics_23.png",
            latex:
              "\\begin{array}{l}  \r\n  \\nabla \\cdot \\mathbf{D} =\\rho _f \\\\  \r\n  \\nabla \\cdot \\mathbf{B} = 0 \\\\  \r\n  \\nabla \\times  \\mathbf{E} = -\\cfrac{\\partial \\mathbf{B}}{\\partial t }  \\\\  \r\n  \\nabla \\times  \\mathbf{H} = \\mathbf{J}_f +  \\cfrac{\\partial \\mathbf{D}}{\\partial t }   \r\n\\end{array} ",
            name: "",
          },
          {
            imgPath: "physics_24.png",
            latex:
              "\r\n\\begin{array}{l}  \r\n  {\\huge \\unicode{8751}}_\\mathbb{S}  \\mathbf{D} \\cdot\\mathrm{d}s= Q_f \\\\  \r\n  {\\huge \\unicode{8751}}_\\mathbb{S}  \\mathbf{B} \\cdot\\mathrm{d}s= 0 \\\\  \r\n  {\\huge \\oint}_{\\mathbb{L}}^{} \\mathbf{E} \\cdot \\mathrm{d}l=-\\cfrac{\\mathrm{d}\\Phi _{\\mathbf{B}}}{\\mathrm{d}t }  \\\\  \r\n  {\\huge \\oint}_{\\mathbb{L}}^{} \\mathbf{H} \\cdot \\mathrm{d}l=I_f+\\cfrac{\\mathrm{d}\\Phi _{\\mathbf{D}}}{\\mathrm{d}t }   \r\n\\end{array} ",
            name: "",
          },
        ],
      },
    ],
  },
  {
    imgPath: "chemistry.png",
    width: "60px",
    name: "化学",
    children: [
      {
        width: "100%",
        children: [
          {
            imgPath: "chemistry_1.png",
            latex: "\r\n\\ce{SO4^2- + Ba^2+ -> BaSO4 v} ",
            name: "",
          },
          {
            imgPath: "chemistry_2.png",
            latex: "\r\n\\ce{A v B (v) -> B ^ B (^)}",
            name: "",
          },
          {
            imgPath: "chemistry_3.png",
            latex:
              "\r\n\\ce{Hg^2+ ->[I-]  $\\underset{\\mathrm{red}}{\\ce{HgI2}}$  ->[I-]  $\\underset{\\mathrm{red}}{\\ce{[Hg^{II}I4]^2-}}$} ",
            name: "",
          },
          {
            imgPath: "chemistry_4.png",
            latex:
              "\r\n\\ce{Zn^2+  <=>[+ 2OH-][+ 2H+]  $\\underset{\\text{amphoteres Hydroxid}}{\\ce{Zn(OH)2 v}}$  <=>[+ 2OH-][+ 2H+]  $\\underset{\\text{Hydroxozikat}}{\\ce{[Zn(OH)4]^2-}}$} ",
            name: "",
          },
        ],
      },
    ],
  },
] as Option[]
