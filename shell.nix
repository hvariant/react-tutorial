let
  pkgs = import <nixpkgs> {};

in
  pkgs.stdenv.mkDerivation {
    name = "react";
    buildInputs = [
      pkgs.nodejs-12_x
    ];
  }
