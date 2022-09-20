export default LZString;
declare namespace LZString {
    function compress(uncompressed: string): string;
    function decompress(compressed: string): string;
}
