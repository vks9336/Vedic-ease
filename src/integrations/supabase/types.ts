export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5";
  };
  public: {
    Tables: {
      user_profiles: {
        Row: {
          id: string;
          email: string;
          first_name: string;
          last_name: string;
          phone: string | null;
          role: "patient" | "doctor" | "admin";
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          first_name: string;
          last_name: string;
          phone?: string | null;
          role?: "patient" | "doctor" | "admin";
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          first_name?: string;
          last_name?: string;
          phone?: string | null;
          role?: "patient" | "doctor" | "admin";
          created_at?: string;
          updated_at?: string;
        };
      };
      doctor_profiles: {
        Row: {
          id: string;
          license_number: string | null;
          specialization: string | null;
          years_of_experience: number | null;
          education: string | null;
          certifications: string | null;
          languages: string[] | null;
          practice_name: string | null;
          practice_type: string | null;
          practice_address: string | null;
          practice_city: string | null;
          practice_state: string | null;
          practice_zip_code: string | null;
          website: string | null;
          consultation_fee: number | null;
          availability: string | null;
          bio: string | null;
          verified: boolean;
          ai_enhanced: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          license_number?: string | null;
          specialization?: string | null;
          years_of_experience?: number | null;
          education?: string | null;
          certifications?: string | null;
          languages?: string[] | null;
          practice_name?: string | null;
          practice_type?: string | null;
          practice_address?: string | null;
          practice_city?: string | null;
          practice_state?: string | null;
          practice_zip_code?: string | null;
          website?: string | null;
          consultation_fee?: number | null;
          availability?: string | null;
          bio?: string | null;
          verified?: boolean;
          ai_enhanced?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          license_number?: string | null;
          specialization?: string | null;
          years_of_experience?: number | null;
          education?: string | null;
          certifications?: string | null;
          languages?: string[] | null;
          practice_name?: string | null;
          practice_type?: string | null;
          practice_address?: string | null;
          practice_city?: string | null;
          practice_state?: string | null;
          practice_zip_code?: string | null;
          website?: string | null;
          consultation_fee?: number | null;
          availability?: string | null;
          bio?: string | null;
          verified?: boolean;
          ai_enhanced?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      patient_profiles: {
        Row: {
          id: string;
          date_of_birth: string | null;
          gender: string | null;
          emergency_contact_name: string | null;
          emergency_contact_phone: string | null;
          insurance_provider: string | null;
          medical_history: string | null;
          allergies: string | null;
          current_medications: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          date_of_birth?: string | null;
          gender?: string | null;
          emergency_contact_name?: string | null;
          emergency_contact_phone?: string | null;
          insurance_provider?: string | null;
          medical_history?: string | null;
          allergies?: string | null;
          current_medications?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          date_of_birth?: string | null;
          gender?: string | null;
          emergency_contact_name?: string | null;
          emergency_contact_phone?: string | null;
          insurance_provider?: string | null;
          medical_history?: string | null;
          allergies?: string | null;
          current_medications?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      admin_profiles: {
        Row: {
          id: string;
          department: string | null;
          permissions: string[] | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          department?: string | null;
          permissions?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          department?: string | null;
          permissions?: string[] | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      user_role: "patient" | "doctor" | "admin";
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
      DefaultSchema["Views"])
  ? (DefaultSchema["Tables"] &
      DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
      Row: infer R;
    }
    ? R
    : never
  : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Insert: infer I;
    }
    ? I
    : never
  : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
  ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
      Update: infer U;
    }
    ? U
    : never
  : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
  ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
  : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
  ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
  : never;

export const Constants = {
  public: {
    Enums: {},
  },
} as const;
