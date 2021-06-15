export class Templates {
  // base constructs
  static readonly ContentRoot: string       = "Content Root";
  static readonly Site: string              = "Site";
  static readonly Page: string              = "Page";
  static readonly Folder: string            = "Folder";
  static readonly Rendering: string         = "Rendering"
  static readonly Controller: string        = "Controller"
  
  // block components
  static readonly RichText: string  = "Rich Text"
  static readonly Banner: string    = "Banner"
  static readonly Cards: string     = "Cards"

  static get Components(): string[] {
    return [
      this.RichText,
      this.Banner,
      this.Cards
    ];
  }

}

// 8 4 4 4 12
export function GenerateReservedId(char: string){
  const c = char
  return `${c}${c}${c}${c}${c}${c}${c}${c}-${c}${c}${c}${c}-${c}${c}${c}${c}-${c}${c}${c}${c}-${c}${c}${c}${c}-${c}${c}${c}${c}${c}${c}${c}${c}${c}${c}${c}${c}`;
}
export class ReservedIds {
  static readonly Nill: string = GenerateReservedId("0");
  static readonly Root: string = GenerateReservedId("1");
}