/**
 * Copyright (c) 2017-2018 mol* contributors, licensed under MIT, See LICENSE file for more info.
 *
 * Code-generated 'mmCIF' schema file. Dictionary versions: mmCIF 5.293, IHM 0.130.
 *
 * @author mol-star package (src/apps/schema-generator/generate)
 */

import { Database, Column } from 'mol-data/db'

import Schema = Column.Schema

const str = Schema.str;
const int = Schema.int;
const float = Schema.float;
const coord = Schema.coord;

const Aliased = Schema.Aliased;
const Matrix = Schema.Matrix;
const Vector = Schema.Vector;
const List = Schema.List;

export const mmCIF_Schema = {
    atom_site: {
        auth_asym_id: str,
        auth_atom_id: str,
        auth_comp_id: str,
        auth_seq_id: int,
        B_iso_or_equiv: float,
        Cartn_x: coord,
        Cartn_y: coord,
        Cartn_z: coord,
        group_PDB: Aliased<'ATOM' | 'HETATM'>(str),
        id: int,
        label_alt_id: str,
        label_asym_id: str,
        label_atom_id: str,
        label_comp_id: str,
        label_entity_id: str,
        label_seq_id: int,
        occupancy: float,
        type_symbol: str,
        pdbx_PDB_ins_code: str,
        pdbx_PDB_model_num: int,
        pdbx_formal_charge: int,
        ihm_model_id: int,
    },
    cell: {
        angle_alpha: float,
        angle_beta: float,
        angle_gamma: float,
        entry_id: str,
        length_a: float,
        length_b: float,
        length_c: float,
        Z_PDB: int,
        pdbx_unique_axis: str,
    },
    chem_comp: {
        formula: str,
        formula_weight: float,
        id: str,
        mon_nstd_flag: Aliased<'no' | 'n' | 'yes' | 'y'>(str),
        name: str,
        type: Aliased<'D-peptide linking' | 'L-peptide linking' | 'D-peptide NH3 amino terminus' | 'L-peptide NH3 amino terminus' | 'D-peptide COOH carboxy terminus' | 'L-peptide COOH carboxy terminus' | 'DNA linking' | 'RNA linking' | 'L-RNA linking' | 'L-DNA linking' | 'DNA OH 5 prime terminus' | 'RNA OH 5 prime terminus' | 'DNA OH 3 prime terminus' | 'RNA OH 3 prime terminus' | 'D-saccharide 1,4 and 1,4 linking' | 'L-saccharide 1,4 and 1,4 linking' | 'D-saccharide 1,4 and 1,6 linking' | 'L-saccharide 1,4 and 1,6 linking' | 'L-saccharide' | 'D-saccharide' | 'saccharide' | 'non-polymer' | 'peptide linking' | 'peptide-like' | 'L-gamma-peptide, C-delta linking' | 'D-gamma-peptide, C-delta linking' | 'L-beta-peptide, C-gamma linking' | 'D-beta-peptide, C-gamma linking' | 'other'>(str),
        pdbx_synonyms: str,
    },
    chem_comp_bond: {
        atom_id_1: str,
        atom_id_2: str,
        comp_id: str,
        value_order: Aliased<'sing' | 'doub' | 'trip' | 'quad' | 'arom' | 'poly' | 'delo' | 'pi'>(str),
        pdbx_ordinal: int,
        pdbx_stereo_config: Aliased<'E' | 'Z' | 'N'>(str),
        pdbx_aromatic_flag: Aliased<'Y' | 'N'>(str),
    },
    entity: {
        details: str,
        formula_weight: float,
        id: str,
        src_method: Aliased<'nat' | 'man' | 'syn'>(str),
        type: Aliased<'polymer' | 'non-polymer' | 'macrolide' | 'water'>(str),
        pdbx_description: str,
        pdbx_number_of_molecules: float,
        pdbx_mutation: str,
        pdbx_fragment: str,
        pdbx_ec: List(',', x => x),
    },
    entry: {
        id: str,
    },
    exptl: {
        entry_id: str,
        method: Aliased<'X-RAY DIFFRACTION' | 'NEUTRON DIFFRACTION' | 'FIBER DIFFRACTION' | 'ELECTRON CRYSTALLOGRAPHY' | 'ELECTRON MICROSCOPY' | 'SOLUTION NMR' | 'SOLID-STATE NMR' | 'SOLUTION SCATTERING' | 'POWDER DIFFRACTION' | 'INFRARED SPECTROSCOPY' | 'EPR' | 'FLUORESCENCE TRANSFER' | 'THEORETICAL MODEL'>(str),
    },
    struct: {
        entry_id: str,
        title: str,
    },
    struct_asym: {
        details: str,
        entity_id: str,
        id: str,
        pdbx_modified: str,
        pdbx_blank_PDB_chainid_flag: Aliased<'Y' | 'N'>(str),
    },
    struct_conf: {
        beg_label_asym_id: str,
        beg_label_comp_id: str,
        beg_label_seq_id: int,
        beg_auth_asym_id: str,
        beg_auth_comp_id: str,
        beg_auth_seq_id: int,
        conf_type_id: Aliased<'HELX_P' | 'HELX_OT_P' | 'HELX_RH_P' | 'HELX_RH_OT_P' | 'HELX_RH_AL_P' | 'HELX_RH_GA_P' | 'HELX_RH_OM_P' | 'HELX_RH_PI_P' | 'HELX_RH_27_P' | 'HELX_RH_3T_P' | 'HELX_RH_PP_P' | 'HELX_LH_P' | 'HELX_LH_OT_P' | 'HELX_LH_AL_P' | 'HELX_LH_GA_P' | 'HELX_LH_OM_P' | 'HELX_LH_PI_P' | 'HELX_LH_27_P' | 'HELX_LH_3T_P' | 'HELX_LH_PP_P' | 'HELX_N' | 'HELX_OT_N' | 'HELX_RH_N' | 'HELX_RH_OT_N' | 'HELX_RH_A_N' | 'HELX_RH_B_N' | 'HELX_RH_Z_N' | 'HELX_LH_N' | 'HELX_LH_OT_N' | 'HELX_LH_A_N' | 'HELX_LH_B_N' | 'HELX_LH_Z_N' | 'TURN_P' | 'TURN_OT_P' | 'TURN_TY1_P' | 'TURN_TY1P_P' | 'TURN_TY2_P' | 'TURN_TY2P_P' | 'TURN_TY3_P' | 'TURN_TY3P_P' | 'STRN'>(str),
        details: str,
        end_label_asym_id: str,
        end_label_comp_id: str,
        end_label_seq_id: int,
        end_auth_asym_id: str,
        end_auth_comp_id: str,
        end_auth_seq_id: int,
        id: str,
        pdbx_beg_PDB_ins_code: str,
        pdbx_end_PDB_ins_code: str,
        pdbx_PDB_helix_class: str,
        pdbx_PDB_helix_length: int,
        pdbx_PDB_helix_id: str,
    },
    struct_conn: {
        conn_type_id: Aliased<'covale' | 'disulf' | 'hydrog' | 'metalc' | 'mismat' | 'saltbr' | 'modres' | 'covale_base' | 'covale_sugar' | 'covale_phosphate'>(str),
        details: str,
        id: str,
        ptnr1_label_asym_id: str,
        ptnr1_label_atom_id: str,
        ptnr1_label_comp_id: str,
        ptnr1_label_seq_id: int,
        ptnr1_auth_asym_id: str,
        ptnr1_auth_comp_id: str,
        ptnr1_auth_seq_id: int,
        ptnr1_symmetry: str,
        ptnr2_label_asym_id: str,
        ptnr2_label_atom_id: str,
        ptnr2_label_comp_id: str,
        ptnr2_label_seq_id: int,
        ptnr2_auth_asym_id: str,
        ptnr2_auth_comp_id: str,
        ptnr2_auth_seq_id: int,
        ptnr2_symmetry: str,
        pdbx_ptnr1_PDB_ins_code: str,
        pdbx_ptnr1_label_alt_id: str,
        pdbx_ptnr1_standard_comp_id: str,
        pdbx_ptnr2_PDB_ins_code: str,
        pdbx_ptnr2_label_alt_id: str,
        pdbx_ptnr3_PDB_ins_code: str,
        pdbx_ptnr3_label_alt_id: str,
        pdbx_ptnr3_label_asym_id: str,
        pdbx_ptnr3_label_atom_id: str,
        pdbx_ptnr3_label_comp_id: str,
        pdbx_ptnr3_label_seq_id: int,
        pdbx_PDB_id: str,
        pdbx_dist_value: float,
        pdbx_value_order: Aliased<'sing' | 'doub' | 'trip' | 'quad'>(str),
    },
    struct_conn_type: {
        criteria: str,
        id: Aliased<'covale' | 'disulf' | 'hydrog' | 'metalc' | 'mismat' | 'saltbr' | 'modres' | 'covale_base' | 'covale_sugar' | 'covale_phosphate'>(str),
        reference: str,
    },
    struct_keywords: {
        entry_id: str,
        text: List(',', x => x),
        pdbx_keywords: str,
    },
    struct_sheet_range: {
        beg_label_asym_id: str,
        beg_label_comp_id: str,
        beg_label_seq_id: int,
        end_label_asym_id: str,
        end_label_comp_id: str,
        end_label_seq_id: int,
        beg_auth_asym_id: str,
        beg_auth_comp_id: str,
        beg_auth_seq_id: int,
        end_auth_asym_id: str,
        end_auth_comp_id: str,
        end_auth_seq_id: int,
        id: str,
        sheet_id: str,
        pdbx_beg_PDB_ins_code: str,
        pdbx_end_PDB_ins_code: str,
    },
    struct_site: {
        details: str,
        id: str,
        pdbx_num_residues: int,
        pdbx_evidence_code: str,
        pdbx_auth_asym_id: str,
        pdbx_auth_comp_id: str,
        pdbx_auth_seq_id: str,
        pdbx_auth_ins_code: str,
    },
    struct_site_gen: {
        details: str,
        id: str,
        label_alt_id: str,
        label_asym_id: str,
        label_atom_id: str,
        label_comp_id: str,
        label_seq_id: int,
        auth_asym_id: str,
        auth_comp_id: str,
        auth_seq_id: str,
        site_id: str,
        symmetry: str,
        pdbx_auth_ins_code: str,
        pdbx_num_res: int,
    },
    symmetry: {
        entry_id: str,
        cell_setting: Aliased<'triclinic' | 'monoclinic' | 'orthorhombic' | 'tetragonal' | 'rhombohedral' | 'trigonal' | 'hexagonal' | 'cubic'>(str),
        Int_Tables_number: int,
        space_group_name_Hall: str,
        'space_group_name_H-M': str,
    },
    pdbx_struct_assembly: {
        method_details: str,
        oligomeric_details: str,
        oligomeric_count: int,
        details: str,
        id: str,
    },
    pdbx_struct_mod_residue: {
        id: int,
        auth_asym_id: str,
        auth_comp_id: str,
        auth_seq_id: int,
        PDB_ins_code: str,
        label_asym_id: str,
        label_comp_id: str,
        label_seq_id: int,
        parent_comp_id: str,
        details: str,
    },
    pdbx_struct_oper_list: {
        id: str,
        type: Aliased<'identity operation' | 'point symmetry operation' | 'helical symmetry operation' | 'crystal symmetry operation' | '3D crystal symmetry operation' | '2D crystal symmetry operation' | 'transform to point frame' | 'transform to helical frame' | 'transform to crystal frame' | 'transform to 2D crystal frame' | 'transform to 3D crystal frame' | 'build point asymmetric unit' | 'build helical asymmetric unit' | 'build 2D crystal asymmetric unit' | 'build 3D crystal asymmetric unit'>(str),
        name: str,
        symmetry_operation: str,
        matrix: Matrix(3, 3),
        vector: Vector(3),
    },
    pdbx_struct_assembly_gen: {
        asym_id_list: List(',', x => x),
        assembly_id: str,
        oper_expression: str,
    },
    pdbx_reference_entity_list: {
        prd_id: str,
        ref_entity_id: str,
        type: str,
        details: str,
        component_id: int,
    },
    pdbx_reference_entity_link: {
        link_id: int,
        prd_id: str,
        details: str,
        ref_entity_id_1: str,
        ref_entity_id_2: str,
        entity_seq_num_1: int,
        entity_seq_num_2: int,
        comp_id_1: str,
        comp_id_2: str,
        atom_id_1: str,
        atom_id_2: str,
        value_order: Aliased<'sing' | 'doub' | 'trip' | 'quad' | 'arom' | 'poly' | 'delo' | 'pi'>(str),
        component_1: int,
        component_2: int,
        link_class: Aliased<'PP' | 'PN' | 'NP' | 'NN'>(str),
    },
    pdbx_reference_entity_poly_link: {
        link_id: int,
        prd_id: str,
        ref_entity_id: str,
        component_id: int,
        entity_seq_num_1: int,
        entity_seq_num_2: int,
        comp_id_1: str,
        comp_id_2: str,
        atom_id_1: str,
        atom_id_2: str,
        value_order: Aliased<'sing' | 'doub' | 'trip' | 'quad' | 'arom' | 'poly' | 'delo' | 'pi'>(str),
    },
    pdbx_molecule: {
        prd_id: str,
        instance_id: int,
        asym_id: str,
    },
    pdbx_molecule_features: {
        prd_id: str,
        class: Aliased<'Antagonist' | 'Antibiotic' | 'Anticancer' | 'Anticoagulant' | 'Antifungal' | 'Antiinflammatory' | 'Antimicrobial' | 'Antineoplastic' | 'Antiparasitic' | 'Antiretroviral' | 'Anthelmintic' | 'Antithrombotic' | 'Antitumor' | 'Antiviral' | 'CASPASE inhibitor' | 'Chaperone binding' | 'Enzyme inhibitor' | 'Growth factor' | 'Immunosuppressant' | 'Inhibitor' | 'Lantibiotic' | 'Metabolism' | 'Metal transport' | 'Oxidation-reduction' | 'Receptor' | 'Thrombin inhibitor' | 'Trypsin inhibitor' | 'Toxin' | 'Transport activator' | 'Unknown' | 'Anticoagulant, Antithrombotic' | 'Antibiotic, Antimicrobial' | 'Antibiotic, Anthelmintic' | 'Antibiotic, Antineoplastic' | 'Antimicrobial, Antiretroviral' | 'Antimicrobial, Antitumor' | 'Antimicrobial, Antiparasitic, Antibiotic' | 'Thrombin inhibitor, Trypsin inhibitor'>(str),
        type: Aliased<'Amino acid' | 'Aminoglycoside' | 'Anthracycline' | 'Anthraquinone' | 'Ansamycin' | 'Chalkophore' | 'Chromophore' | 'Glycopeptide' | 'Cyclic depsipeptide' | 'Cyclic lipopeptide' | 'Cyclic peptide' | 'Heterocyclic' | 'Imino sugar' | 'Keto acid' | 'Lipoglycopeptide' | 'Lipopeptide' | 'Macrolide' | 'Non-polymer' | 'Nucleoside' | 'Oligopeptide' | 'Oligosaccharide' | 'Peptaibol' | 'Peptide-like' | 'Polycyclic' | 'Polypeptide' | 'Polysaccharide' | 'Quinolone' | 'Thiolactone' | 'Thiopeptide' | 'Siderophore' | 'Unknown' | 'Chalkophore, Polypeptide'>(str),
        name: str,
        details: str,
    },
    ihm_starting_model_details: {
        starting_model_id: str,
        entity_id: str,
        entity_description: str,
        asym_id: str,
        seq_id_begin: int,
        seq_id_end: int,
        starting_model_source: Aliased<'comparative model' | 'experimental model' | 'integrative model' | 'other ab initio models'>(str),
        starting_model_auth_asym_id: str,
        starting_model_sequence_offset: int,
        dataset_list_id: int,
    },
    ihm_starting_comparative_models: {
        ordinal_id: int,
        starting_model_id: str,
        starting_model_auth_asym_id: str,
        starting_model_seq_id_begin: int,
        starting_model_seq_id_end: int,
        template_auth_asym_id: str,
        template_seq_id_begin: int,
        template_seq_id_end: int,
        template_sequence_identity: float,
        template_sequence_identity_denominator: Aliased<'1' | '2' | '3' | '4' | '5'>(int),
        template_dataset_list_id: int,
        alignment_file_id: int,
    },
    ihm_starting_model_seq_dif: {
        ordinal_id: int,
        entity_id: str,
        asym_id: str,
        seq_id: int,
        comp_id: str,
        starting_model_id: str,
        db_asym_id: str,
        db_seq_id: int,
        db_comp_id: str,
        details: str,
    },
    ihm_model_representation: {
        ordinal_id: int,
        representation_id: int,
        segment_id: int,
        entity_id: str,
        entity_description: str,
        entity_asym_id: str,
        seq_id_begin: int,
        seq_id_end: int,
        model_object_primitive: Aliased<'atomistic' | 'sphere' | 'gaussian' | 'other'>(str),
        starting_model_id: str,
        model_mode: Aliased<'rigid' | 'flexible'>(str),
        model_granularity: Aliased<'by-atom' | 'by-residue' | 'multi-residue' | 'by-feature'>(str),
        model_object_count: int,
    },
    ihm_struct_assembly: {
        ordinal_id: int,
        assembly_id: int,
        parent_assembly_id: int,
        entity_description: str,
        entity_id: str,
        asym_id: str,
        seq_id_begin: int,
        seq_id_end: int,
    },
    ihm_struct_assembly_details: {
        assembly_id: int,
        assembly_name: str,
        assembly_description: str,
    },
    ihm_modeling_protocol: {
        ordinal_id: int,
        protocol_id: int,
        step_id: int,
        struct_assembly_id: int,
        dataset_group_id: int,
        struct_assembly_description: str,
        protocol_name: str,
        step_name: str,
        step_method: str,
        num_models_begin: int,
        num_models_end: int,
        multi_scale_flag: Aliased<'YES' | 'NO'>(str),
        multi_state_flag: Aliased<'YES' | 'NO'>(str),
        ordered_flag: Aliased<'YES' | 'NO'>(str),
    },
    ihm_multi_state_modeling: {
        ordinal_id: int,
        state_id: int,
        state_group_id: int,
        population_fraction: float,
        state_type: str,
        state_name: str,
        model_group_id: int,
        experiment_type: Aliased<'Fraction of bulk' | 'Single molecule'>(str),
        details: str,
    },
    ihm_modeling_post_process: {
        id: int,
        protocol_id: int,
        analysis_id: int,
        step_id: int,
        type: Aliased<'filter' | 'cluster' | 'rescore' | 'validation' | 'other' | 'none'>(str),
        feature: Aliased<'energy/score' | 'RMSD' | 'dRMSD' | 'other' | 'none'>(str),
        num_models_begin: int,
        num_models_end: int,
    },
    ihm_ensemble_info: {
        ensemble_id: int,
        ensemble_name: str,
        post_process_id: int,
        model_group_id: int,
        ensemble_clustering_method: Aliased<'Hierarchical' | 'Partitioning (k-means)' | 'Other'>(str),
        ensemble_clustering_feature: Aliased<'RMSD' | 'dRMSD' | 'other'>(str),
        num_ensemble_models: int,
        num_ensemble_models_deposited: int,
        ensemble_precision_value: float,
        ensemble_file_id: int,
    },
    ihm_model_list: {
        ordinal_id: int,
        model_id: int,
        model_group_id: int,
        model_name: str,
        model_group_name: str,
        assembly_id: int,
        protocol_id: int,
        representation_id: int,
    },
    ihm_model_representative: {
        id: int,
        model_group_id: int,
        model_id: int,
        selection_criteria: Aliased<'medoid' | 'closest to the average' | 'lowest energy' | 'target function' | 'fewest violations' | 'minimized average structure' | 'best scoring model' | 'centroid' | 'other selction criteria'>(str),
    },
    ihm_dataset_list: {
        id: int,
        data_type: Aliased<'NMR data' | '3DEM volume' | '2DEM class average' | 'EM raw micrographs' | 'SAS data' | 'CX-MS data' | 'Mass Spectrometry data' | 'EPR data' | 'H/D exchange data' | 'Single molecule FRET data' | 'Experimental model' | 'Comparative model' | 'Integrative model' | 'De Novo model' | 'Predicted contacts' | 'Mutagenesis data' | 'DNA footprinting data' | 'Yeast two-hybrid screening data' | 'Other'>(str),
        database_hosted: Aliased<'YES' | 'NO'>(str),
    },
    ihm_dataset_group: {
        ordinal_id: int,
        group_id: int,
        dataset_list_id: int,
    },
    ihm_related_datasets: {
        ordinal_id: int,
        dataset_list_id_derived: int,
        dataset_list_id_primary: int,
    },
    ihm_dataset_related_db_reference: {
        id: int,
        dataset_list_id: int,
        db_name: Aliased<'PDB' | 'BMRB' | 'EMDB' | 'EMPIAR' | 'SASBDB' | 'PRIDE' | 'MODEL ARCHIVE' | 'MASSIVE' | 'BioGRID' | 'Other'>(str),
        accession_code: str,
        version: str,
        details: str,
    },
    ihm_external_reference_info: {
        reference_id: int,
        reference_provider: str,
        reference_type: Aliased<'DOI' | 'Supplementary Files'>(str),
        reference: str,
        refers_to: Aliased<'File' | 'Archive' | 'Publication' | 'Other'>(str),
        associated_url: str,
    },
    ihm_external_files: {
        id: int,
        reference_id: int,
        file_path: str,
        content_type: Aliased<'Input data or restraints' | 'Modeling or post-processing output' | 'Modeling workflow or script' | 'Visualization script' | 'Other'>(str),
        file_size_bytes: float,
        details: str,
    },
    ihm_dataset_external_reference: {
        id: int,
        dataset_list_id: int,
        file_id: int,
    },
    ihm_localization_density_files: {
        id: int,
        file_id: int,
        ensemble_id: int,
        entity_id: str,
        seq_id_begin: int,
        seq_id_end: int,
        asym_id: str,
    },
    ihm_predicted_contact_restraint: {
        id: int,
        entity_id_1: str,
        entity_id_2: str,
        asym_id_1: str,
        asym_id_2: str,
        comp_id_1: str,
        comp_id_2: str,
        seq_id_1: int,
        seq_id_2: int,
        atom_id_1: str,
        atom_id_2: str,
        distance_upper_limit: float,
        probability: float,
        restraint_type: Aliased<'lower bound' | 'upper bound' | 'lower and upper bound'>(str),
        model_granularity: Aliased<'by-residue' | 'by-feature' | 'by-atom'>(str),
        dataset_list_id: int,
        software_id: int,
    },
    ihm_cross_link_list: {
        id: int,
        group_id: int,
        entity_description_1: str,
        entity_description_2: str,
        entity_id_1: str,
        entity_id_2: str,
        comp_id_1: str,
        comp_id_2: str,
        seq_id_1: int,
        seq_id_2: int,
        linker_type: Aliased<'EDC' | 'DSS' | 'EGS' | 'BS3' | 'BS2G' | 'DST' | 'sulfo-SDA' | 'sulfo-SMCC' | 'Other'>(str),
        dataset_list_id: int,
    },
    ihm_cross_link_restraint: {
        id: int,
        group_id: int,
        entity_id_1: str,
        entity_id_2: str,
        asym_id_1: str,
        asym_id_2: str,
        comp_id_1: str,
        comp_id_2: str,
        seq_id_1: int,
        seq_id_2: int,
        restraint_type: Aliased<'harmonic' | 'upper bound' | 'lower bound'>(str),
        conditional_crosslink_flag: Aliased<'ALL' | 'ANY'>(str),
        model_granularity: Aliased<'by-residue' | 'by-feature' | 'by-atom'>(str),
        distance_threshold: float,
        psi: float,
        sigma_1: float,
        sigma_2: float,
    },
    ihm_cross_link_result_parameters: {
        ordinal_id: int,
        restraint_id: int,
        model_id: int,
        psi: float,
        sigma_1: float,
        sigma_2: float,
    },
    ihm_2dem_class_average_restraint: {
        id: int,
        dataset_list_id: int,
        number_raw_micrographs: int,
        pixel_size_width: float,
        pixel_size_height: float,
        image_resolution: float,
        image_segment_flag: Aliased<'YES' | 'NO'>(str),
        number_of_projections: int,
        struct_assembly_id: int,
        details: str,
    },
    ihm_2dem_class_average_fitting: {
        ordinal_id: int,
        restraint_id: int,
        model_id: int,
        cross_correlation_coefficient: float,
        rot_matrix: Matrix(3, 3),
        tr_vector: Vector(3),
    },
    ihm_3dem_restraint: {
        ordinal_id: int,
        dataset_list_id: int,
        model_id: int,
        struct_assembly_id: int,
        fitting_method: str,
        number_of_gaussians: int,
        cross_correlation_coefficient: float,
    },
    ihm_sas_restraint: {
        ordinal_id: int,
        dataset_list_id: int,
        model_id: int,
        struct_assembly_id: int,
        profile_segment_flag: Aliased<'YES' | 'NO'>(str),
        fitting_atom_type: str,
        fitting_method: str,
        fitting_state: Aliased<'Single' | 'Multiple'>(str),
        radius_of_gyration: float,
        chi_value: float,
        details: str,
    },
    ihm_starting_model_coord: {
        ordinal_id: int,
        starting_model_id: str,
        group_PDB: Aliased<'ATOM' | 'HETATM'>(str),
        id: int,
        type_symbol: str,
        entity_id: str,
        atom_id: str,
        comp_id: str,
        seq_id: int,
        asym_id: str,
        Cartn_x: float,
        Cartn_y: float,
        Cartn_z: float,
        B_iso_or_equiv: float,
    },
    ihm_sphere_obj_site: {
        ordinal_id: int,
        entity_id: str,
        seq_id_begin: int,
        seq_id_end: int,
        asym_id: str,
        Cartn_x: float,
        Cartn_y: float,
        Cartn_z: float,
        object_radius: float,
        rmsf: float,
        model_id: int,
    },
    ihm_gaussian_obj_site: {
        ordinal_id: int,
        entity_id: str,
        seq_id_begin: int,
        seq_id_end: int,
        asym_id: str,
        mean_Cartn_x: float,
        mean_Cartn_y: float,
        mean_Cartn_z: float,
        weight: float,
        covariance_matrix: Matrix(3, 3),
        model_id: int,
    },
    ihm_gaussian_obj_ensemble: {
        ordinal_id: int,
        entity_id: str,
        seq_id_begin: int,
        seq_id_end: int,
        asym_id: str,
        mean_Cartn_x: float,
        mean_Cartn_y: float,
        mean_Cartn_z: float,
        weight: float,
        covariance_matrix: Matrix(3, 3),
        ensemble_id: int,
    },
    ihm_feature_list: {
        feature_id: int,
        feature_type: Aliased<'atom' | 'residue' | 'residue range'>(str),
        entity_type: Aliased<'polymer' | 'non-polymer' | 'macrolide' | 'water'>(str),
    },
    ihm_poly_residue_feature: {
        ordinal_id: int,
        feature_id: int,
        entity_id: str,
        asym_id: str,
        comp_id_begin: str,
        comp_id_end: str,
        seq_id_begin: int,
        seq_id_end: int,
    },
    ihm_derived_distance_restraint: {
        id: int,
        group_id: int,
        feature_id_1: int,
        feature_id_2: int,
        group_conditionality: Aliased<'ALL' | 'ANY'>(str),
        random_exclusion_fraction: float,
        distance_upper_limit: float,
        restraint_type: Aliased<'lower bound' | 'upper bound' | 'lower and upper bound'>(str),
        dataset_list_id: int,
    },
}

export type mmCIF_Schema = typeof mmCIF_Schema;
export interface mmCIF_Database extends Database<mmCIF_Schema> {}