let
  nixpkgs = fetchTarball "https://github.com/NixOS/nixpkgs/tarball/nixos-23.11";
  pkgs = import nixpkgs { config = {}; overlays = []; };
in

pkgs.mkShellNoCC {
  packages = with pkgs; [
    cowsay
    lolcat
    nodejs_20
    corepack_20
  ];

  GREETING = "Hello, Nix!";

  shellHook = ''
    echo $GREETING | cowsay | lolcat
    '';
}